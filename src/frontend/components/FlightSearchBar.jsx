import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Button,
  Chip,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Autocomplete
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AIRPORTS } from '../data/airports';

const POPULAR_ROUTES = [
  { label: 'NYC ⇄ London', from: 'JFK', to: 'LHR' },
  { label: 'Delhi ⇄ Mumbai', from: 'DEL', to: 'BOM' },
  { label: 'SFO ⇄ Tokyo', from: 'SFO', to: 'HND' },
  { label: 'Dubai ⇄ Singapore', from: 'DXB', to: 'SIN' },
  { label: 'Paris ⇄ Rome', from: 'CDG', to: 'FCO' }
];

export default function FlightSearchBar({
  origin,
  destination,
  onSearch,
  cabinClass,
  onCabinClassChange,
  isSidebar = false
}) {
  const [fromAirport, setFromAirport] = useState(origin);
  const [toAirport, setToAirport] = useState(destination);
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });

  const handleSwap = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
    if (toAirport && temp) {
      onSearch(toAirport, temp, selectedDate, cabinClass);
    }
  };

  const handleApply = () => {
    if (fromAirport && toAirport) {
      onSearch(fromAirport, toAirport, selectedDate, cabinClass);
    }
  };

  const handlePopularClick = (route) => {
    const fromA = AIRPORTS.find(a => a.code === route.from) || fromAirport;
    const toA = AIRPORTS.find(a => a.code === route.to) || toAirport;
    setFromAirport(fromA);
    setToAirport(toA);
    onSearch(fromA, toA, selectedDate, cabinClass);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: 3,
        p: { xs: 2, sm: 2.5 },
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        mb: 2.5
      }}
    >
      {/* Header Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              backgroundColor: '#1E40AF',
              color: '#fff',
              borderRadius: 2,
              p: 0.75,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FlightTakeoffIcon fontSize="small" />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
            Find & Compare Flights
          </Typography>
        </Box>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="cabin-class-label">Class</InputLabel>
          <Select
            labelId="cabin-class-label"
            value={cabinClass}
            label="Class"
            onChange={(e) => {
              onCabinClassChange(e.target.value);
              if (fromAirport && toAirport) {
                onSearch(fromAirport, toAirport, selectedDate, e.target.value);
              }
            }}
            sx={{ borderRadius: 2 }}
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="First">First Class</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Main Search Inputs Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isSidebar ? '1fr' : { xs: '1fr', md: '1.8fr auto 1.8fr 1.2fr auto' },
          gap: 1.5,
          alignItems: 'center'
        }}
      >
        {/* Origin */}
        <Autocomplete
          value={fromAirport}
          onChange={(_, val) => setFromAirport(val)}
          options={AIRPORTS}
          getOptionLabel={(option) => `${option.city} (${option.code}) - ${option.name}`}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From (Origin)"
              placeholder="City or Airport"
              size="small"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <FlightTakeoffIcon sx={{ color: '#64748B', mr: 1, fontSize: 20 }} />
                    {params.InputProps.startAdornment}
                  </>
                )
              }}
            />
          )}
          sx={{ minWidth: 180 }}
        />

        {/* Swap Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            onClick={handleSwap}
            sx={{
              backgroundColor: '#F1F5F9',
              '&:hover': { backgroundColor: '#E2E8F0' },
              border: '1px solid #CBD5E1',
              width: 38,
              height: 38
            }}
            title="Swap Origin and Destination"
          >
            <SwapHorizIcon sx={{ color: '#1E40AF', fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Destination */}
        <Autocomplete
          value={toAirport}
          onChange={(_, val) => setToAirport(val)}
          options={AIRPORTS}
          getOptionLabel={(option) => `${option.city} (${option.code}) - ${option.name}`}
          renderInput={(params) => (
            <TextField
              {...params}
              label="To (Destination)"
              placeholder="City or Airport"
              size="small"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <FlightLandIcon sx={{ color: '#64748B', mr: 1, fontSize: 20 }} />
                    {params.InputProps.startAdornment}
                  </>
                )
              }}
            />
          )}
          sx={{ minWidth: 180 }}
        />

        {/* Departure Date */}
        <TextField
          type="date"
          size="small"
          label="Departure Date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: <CalendarMonthIcon sx={{ color: '#64748B', mr: 1, fontSize: 18 }} />
          }}
        />

        {/* Search Action Button */}
        <Button
          variant="contained"
          onClick={handleApply}
          startIcon={<SearchIcon />}
          sx={{
            backgroundColor: '#1E40AF',
            color: '#fff',
            fontWeight: 600,
            py: 1,
            px: 3,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '0.95rem',
            '&:hover': { backgroundColor: '#1D4ED8' }
          }}
        >
          Search
        </Button>
      </Box>

      {/* Popular Routes Quick Picks */}
      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
        <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, mr: 0.5 }}>
          Popular Routes:
        </Typography>
        {POPULAR_ROUTES.map((route) => (
          <Chip
            key={route.label}
            label={route.label}
            size="small"
            clickable
            onClick={() => handlePopularClick(route)}
            sx={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              fontWeight: 500,
              fontSize: '0.78rem',
              '&:hover': {
                backgroundColor: '#EFF6FF',
                borderColor: '#93C5FD',
                color: '#1D4ED8'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
