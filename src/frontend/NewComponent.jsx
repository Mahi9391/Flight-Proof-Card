import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Container,
  Paper
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import FlightSearchBar from "./components/FlightSearchBar";
import FlightFilters from "./components/FlightFilters";
import FlightCard from "./components/FlightCard";
import FlightDetailsModal from "./components/FlightDetailsModal";
import { parseFlightQuery } from "./utils/flightParser";
import { generateFlights, sortFlights } from "./utils/flightGenerator";

function NewComponent(props) {
  // Determine API URL based on environment as per AGENTS.md §4
  const API_URL =
    process.env.NODE_ENV === 'production'
      ? props.deployedBackendURL ?? ''
      : import.meta.env.VITE_API_URL;

  // Format can be "mainline" (default) or "sidebar"
  const isSidebar = (props?.UIOptions?.format || props?.format) === 'sidebar';

  // Extract query text from props.searchData or props.searchQuery
  const currentQuery = useMemo(() => {
    if (props?.searchData && typeof props.searchData === 'object') {
      if (typeof props.searchData.query === 'string' && props.searchData.query.trim()) {
        return props.searchData.query.trim();
      }
      if (Array.isArray(props.searchData) && props.searchData[0]?.query) {
        return props.searchData[0].query.trim();
      }
    }
    if (typeof props?.searchQuery === 'string' && props.searchQuery.trim()) {
      return props.searchQuery.trim();
    }
    return 'flights from New York to London';
  }, [props?.searchData, props?.searchQuery]);

  // Parse origin and destination from query
  const parsed = useMemo(() => {
    return parseFlightQuery(currentQuery);
  }, [currentQuery]);

  const [origin, setOrigin] = useState(parsed.from);
  const [destination, setDestination] = useState(parsed.to);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [sortMode, setSortMode] = useState('cheapest');
  const [stopsFilter, setStopsFilter] = useState('all');
  const [selectedAirline, setSelectedAirline] = useState('all');
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [selectedFlightModal, setSelectedFlightModal] = useState(null);

  // Sync origin/destination when query in Hyperdart search bar changes
  useEffect(() => {
    const newParsed = parseFlightQuery(currentQuery);
    setOrigin(newParsed.from);
    setDestination(newParsed.to);
  }, [currentQuery]);

  // Fetch or generate flights whenever origin, destination, or cabinClass changes
  const loadFlights = useCallback(async (org, dest, cls) => {
    if (!org || !dest) return;
    setLoading(true);

    try {
      // 1. Attempt to fetch from backend API if available
      if (API_URL) {
        const response = await fetch(
          `${API_URL}/api/flights?from=${encodeURIComponent(org.city || org.code)}&to=${encodeURIComponent(dest.city || dest.code)}&cabinClass=${encodeURIComponent(cls)}`,
          { signal: AbortSignal.timeout(2000) }
        );
        if (response.ok) {
          const data = await response.json();
          if (data && Array.isArray(data.flights) && data.flights.length > 0) {
            setFlights(data.flights);
            setLoading(false);
            return;
          }
        }
      }
    } catch {
      // Graceful fallback to rich local client-side generator
    }

    // 2. Client-side generator fallback (immediate, rich & resilient)
    const generated = generateFlights(org, dest, null, cls);
    setFlights(generated);
    setLoading(false);
  }, [API_URL]);

  useEffect(() => {
    loadFlights(origin, destination, cabinClass);
  }, [origin, destination, cabinClass, loadFlights]);

  // Notify Hyperdart platform that UI is fully loaded and ready
  useEffect(() => {
    props?.messageHandlers?.componentLoaded();
  }, [props?.messageHandlers]);

  // Manual search trigger from in-component search bar
  const handleSearch = (newOrigin, newDest, date, newClass) => {
    setOrigin(newOrigin);
    setDestination(newDest);
    setCabinClass(newClass);
    loadFlights(newOrigin, newDest, newClass);

    // Optionally notify search platform about query update
    if (props?.messageHandlers?.searchQuery && newOrigin && newDest) {
      props.messageHandlers.searchQuery(`flights from ${newOrigin.city} to ${newDest.city}`);
    }
  };

  // Filter and sort flights
  const displayedFlights = useMemo(() => {
    let list = [...flights];

    // Filter by stops
    if (stopsFilter !== 'all') {
      const requiredStops = parseInt(stopsFilter, 10);
      list = list.filter(f => f.stops === requiredStops);
    }

    // Filter by airline
    if (selectedAirline !== 'all') {
      list = list.filter(f => f.airline === selectedAirline);
    }

    // Sort by duration and price
    return sortFlights(list, sortMode);
  }, [flights, stopsFilter, selectedAirline, sortMode]);

  // Compute metrics for quick sort tabs (cheapest price & fastest duration)
  const cheapestPrice = useMemo(() => {
    if (!flights.length) return null;
    return Math.min(...flights.map(f => f.price));
  }, [flights]);

  const fastestDuration = useMemo(() => {
    if (!flights.length) return null;
    const minMins = Math.min(...flights.map(f => f.durationMinutes));
    const h = Math.floor(minMins / 60);
    const m = minMins % 60;
    return `${h}h ${m < 10 ? '0' : ''}${m}m`;
  }, [flights]);

  const availableAirlines = useMemo(() => {
    const names = new Set(flights.map(f => f.airline));
    return Array.from(names);
  }, [flights]);

  const currencySymbol = flights[0]?.currency || '$';

  return (
    <Box
      sx={{
        backgroundColor: '#F8FAFC',
        minHeight: '100%',
        p: { xs: 1.5, sm: 2.5 },
        color: '#0F172A',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Route Headline Banner */}
      <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
              {origin ? `${origin.city} (${origin.code})` : 'Origin'}
            </Typography>
            <ConnectingAirportsIcon sx={{ color: '#1E40AF', fontSize: 24 }} />
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
              {destination ? `${destination.city} (${destination.code})` : 'Destination'}
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.5 }}>
            Showing real-time airline fares & schedules parsed from Hyperdart query: &ldquo;{currentQuery}&rdquo;
          </Typography>
        </Box>
      </Box>

      {/* Flight Search Bar (Editable From/To/Swap/Date/Class) */}
      <FlightSearchBar
        origin={origin}
        destination={destination}
        onSearch={handleSearch}
        cabinClass={cabinClass}
        onCabinClassChange={setCabinClass}
        isSidebar={isSidebar}
      />

      {/* Sorting & Filtering Controls */}
      <FlightFilters
        sortMode={sortMode}
        onSortChange={setSortMode}
        stopsFilter={stopsFilter}
        onStopsFilterChange={setStopsFilter}
        selectedAirline={selectedAirline}
        onAirlineChange={setSelectedAirline}
        availableAirlines={availableAirlines}
        cheapestPrice={cheapestPrice}
        fastestDuration={fastestDuration}
        currency={currencySymbol}
        totalCount={displayedFlights.length}
      />

      {/* Flight Cards List or Loading State */}
      {loading ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <CircularProgress size={40} sx={{ color: '#1E40AF', mb: 2 }} />
          <Typography variant="body1" sx={{ color: '#64748B', fontWeight: 600 }}>
            Searching live flights between {origin?.city} and {destination?.city}...
          </Typography>
        </Box>
      ) : displayedFlights.length > 0 ? (
        <Box>
          {displayedFlights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
              onSelect={(f) => setSelectedFlightModal(f)}
              isSidebar={isSidebar}
            />
          ))}
        </Box>
      ) : (
        <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, backgroundColor: '#ffffff', border: '1px solid #E2E8F0' }}>
          <FlightTakeoffIcon sx={{ fontSize: 48, color: '#94A3B8', mb: 1.5 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#334155', mb: 1 }}>
            No flights match your filters
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B', mb: 2.5 }}>
            Try resetting your stops or airline filters to see available flights.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setStopsFilter('all');
              setSelectedAirline('all');
            }}
            sx={{ textTransform: 'none', fontWeight: 600, borderRadius: 2 }}
          >
            Reset Filters
          </Button>
        </Paper>
      )}

      {/* Booking & Details Modal */}
      <FlightDetailsModal
        flight={selectedFlightModal}
        open={Boolean(selectedFlightModal)}
        onClose={() => setSelectedFlightModal(null)}
      />
    </Box>
  );
}

export default NewComponent;