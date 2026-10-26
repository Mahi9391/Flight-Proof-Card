import React from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  FormControl,
  Select,
  MenuItem,
  Chip
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function FlightFilters({
  sortMode,
  onSortChange,
  stopsFilter,
  onStopsFilterChange,
  selectedAirline,
  onAirlineChange,
  availableAirlines = [],
  cheapestPrice = null,
  fastestDuration = null,
  currency = '$',
  totalCount = 0
}) {
  return (
    <Box sx={{ mb: 2.5 }}>
      {/* Top Bar: Quick Sort Tabs & Dropdown */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'stretch', md: 'center' },
          gap: 1.5,
          mb: 2
        }}
      >
        {/* Quick Sort Tabs (Cheapest / Fastest / Best) */}
        <ToggleButtonGroup
          value={['cheapest', 'fastest', 'best'].includes(sortMode) ? sortMode : null}
          exclusive
          onChange={(_, newMode) => {
            if (newMode) onSortChange(newMode);
          }}
          aria-label="flight quick sort"
          sx={{
            display: 'flex',
            width: { xs: '100%', md: 'auto' },
            backgroundColor: '#ffffff',
            borderRadius: 2.5,
            border: '1px solid #E2E8F0',
            overflow: 'hidden',
            '& .MuiToggleButton-root': {
              flex: 1,
              py: 1,
              px: { xs: 1.5, sm: 2.5 },
              border: 'none',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.88rem',
              color: '#475569',
              transition: 'all 0.2s ease',
              '&.Mui-selected': {
                backgroundColor: '#EFF6FF',
                color: '#1D4ED8',
                fontWeight: 700,
                borderBottom: '3px solid #1D4ED8'
              },
              '&:hover': {
                backgroundColor: '#F8FAFC'
              }
            }
          }}
        >
          <ToggleButton value="cheapest" aria-label="cheapest flights">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AttachMoneyIcon fontSize="small" sx={{ color: '#10B981' }} />
                <span>Cheapest</span>
              </Box>
              {cheapestPrice !== null && (
                <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 700, fontSize: '0.75rem' }}>
                  from {currency}{cheapestPrice}
                </Typography>
              )}
            </Box>
          </ToggleButton>

          <ToggleButton value="fastest" aria-label="fastest flights">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <SpeedIcon fontSize="small" sx={{ color: '#F59E0B' }} />
                <span>Fastest</span>
              </Box>
              {fastestDuration && (
                <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.75rem' }}>
                  {fastestDuration}
                </Typography>
              )}
            </Box>
          </ToggleButton>

          <ToggleButton value="best" aria-label="best value flights">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <StarIcon fontSize="small" sx={{ color: '#8B5CF6' }} />
                <span>Best Value</span>
              </Box>
              <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.75rem' }}>
                Balanced
              </Typography>
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Detailed Sort Dropdown & Count */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1.5 }}>
          <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
            Showing <strong>{totalCount}</strong> flights
          </Typography>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <Select
              value={sortMode}
              onChange={(e) => onSortChange(e.target.value)}
              displayEmpty
              startAdornment={<SwapVertIcon fontSize="small" sx={{ color: '#64748B', mr: 1 }} />}
              sx={{
                borderRadius: 2,
                backgroundColor: '#ffffff',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              <MenuItem value="cheapest">Price: Low to High (Cheapest)</MenuItem>
              <MenuItem value="price_desc">Price: High to Low</MenuItem>
              <MenuItem value="fastest">Duration: Shortest to Longest</MenuItem>
              <MenuItem value="duration_desc">Duration: Longest to Shortest</MenuItem>
              <MenuItem value="best">Best Value (Score)</MenuItem>
              <MenuItem value="earliest">Departure: Earliest first</MenuItem>
              <MenuItem value="latest">Departure: Latest first</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Filter Row: Stops & Airlines */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 1.5,
          p: 1.5,
          backgroundColor: '#F8FAFC',
          borderRadius: 2,
          border: '1px solid #E2E8F0'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#475569' }}>
          <FilterAltIcon fontSize="small" sx={{ color: '#64748B' }} />
          <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Filters:
          </Typography>
        </Box>

        {/* Stops Filter Chips */}
        <Box sx={{ display: 'flex', gap: 0.75 }}>
          {[
            { label: 'All Stops', value: 'all' },
            { label: 'Non-stop Only', value: '0' },
            { label: '1 Stop Max', value: '1' }
          ].map((item) => (
            <Chip
              key={item.value}
              label={item.label}
              size="small"
              clickable
              color={stopsFilter === item.value ? 'primary' : 'default'}
              variant={stopsFilter === item.value ? 'filled' : 'outlined'}
              onClick={() => onStopsFilterChange(item.value)}
              sx={{
                fontWeight: 600,
                fontSize: '0.75rem',
                backgroundColor: stopsFilter === item.value ? '#1E40AF' : '#ffffff'
              }}
            />
          ))}
        </Box>

        {/* Airline Selector Filter */}
        {availableAirlines.length > 0 && (
          <FormControl size="small" sx={{ minWidth: 150, ml: { sm: 'auto' } }}>
            <Select
              value={selectedAirline}
              onChange={(e) => onAirlineChange(e.target.value)}
              displayEmpty
              sx={{ height: 32, fontSize: '0.78rem', backgroundColor: '#ffffff', borderRadius: 1.5 }}
            >
              <MenuItem value="all">All Airlines</MenuItem>
              {availableAirlines.map((name) => (
                <MenuItem key={name} value={name} sx={{ fontSize: '0.8rem' }}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Box>
    </Box>
  );
}
