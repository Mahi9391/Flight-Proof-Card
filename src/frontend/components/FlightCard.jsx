import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Collapse,
  Divider,
  Rating
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LuggageIcon from '@mui/icons-material/Luggage';
import WifiIcon from '@mui/icons-material/Wifi';
import PowerIcon from '@mui/icons-material/Power';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function FlightCard({ flight, onSelect, isSidebar = false }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: 3,
        border: '1px solid #E2E8F0',
        p: { xs: 2, sm: 2.5 },
        mb: 2,
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(30, 64, 175, 0.12)',
          borderColor: '#93C5FD'
        }
      }}
    >
      {/* Top Banner: Airline & Flight Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              backgroundColor: flight.airlineBg || '#EFF6FF',
              color: flight.airlineColor || '#1E40AF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.05rem',
              border: `1.5px solid ${flight.airlineColor}30`
            }}
          >
            {flight.airlineCode}
          </Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>
                {flight.airline}
              </Typography>
              <Chip
                label={flight.flightNumber}
                size="small"
                sx={{
                  height: 20,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  backgroundColor: '#F1F5F9',
                  color: '#475569'
                }}
              />
            </Box>
            <Typography variant="caption" sx={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.25 }}>
              <span>{flight.aircraft}</span>
              <span>•</span>
              <span style={{ color: '#10B981', fontWeight: 600 }}>{flight.onTimeRate}</span>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {flight.seatsLeft <= 3 && (
            <Chip
              label={`Only ${flight.seatsLeft} seats left`}
              size="small"
              sx={{
                backgroundColor: '#FEF2F2',
                color: '#DC2626',
                fontWeight: 600,
                fontSize: '0.72rem',
                border: '1px solid #FECACA'
              }}
            />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Rating value={flight.rating} precision={0.1} size="small" readOnly sx={{ fontSize: '0.85rem' }} />
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155' }}>
              {flight.rating}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Schedule & Price Container */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isSidebar ? '1fr' : { xs: '1fr', md: '1fr auto 1fr auto' },
          alignItems: 'center',
          gap: { xs: 2, md: 3 },
          py: 1
        }}
      >
        {/* Origin */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px' }}>
            {flight.departureTime}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E40AF' }}>
            {flight.origin.code}
          </Typography>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
            {flight.origin.city}
          </Typography>
        </Box>

        {/* Timeline & Flight Duration */}
        <Box sx={{ textAlign: 'center', minWidth: { xs: '100%', md: 170 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 15, color: '#64748B' }} />
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155', fontSize: '0.82rem' }}>
              {flight.durationFormatted}
            </Typography>
          </Box>

          {/* Visual Flight Path Bar */}
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', my: 0.75 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#1E40AF',
                zIndex: 1
              }}
            />
            <Box
              sx={{
                flex: 1,
                height: 2,
                backgroundColor: flight.stops === 0 ? '#3B82F6' : '#F59E0B',
                mx: 0.5,
                position: 'relative'
              }}
            >
              {flight.stops > 0 && (
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: '#F59E0B',
                    position: 'absolute',
                    top: -2.5,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    border: '1px solid #ffffff'
                  }}
                  title={flight.layoverCity || 'Layover'}
                />
              )}
            </Box>
            <FlightTakeoffIcon sx={{ fontSize: 16, color: '#1E40AF', transform: 'rotate(45deg)', zIndex: 1 }} />
          </Box>

          {/* Direct or Stops badge */}
          {flight.stops === 0 ? (
            <Typography variant="caption" sx={{ color: '#059669', fontWeight: 700, fontSize: '0.75rem' }}>
              Non-stop
            </Typography>
          ) : (
            <Typography variant="caption" sx={{ color: '#D97706', fontWeight: 600, fontSize: '0.75rem' }}>
              1 stop {flight.layoverCity ? `(${flight.layoverCity.split(' ')[0]})` : ''}
            </Typography>
          )}
        </Box>

        {/* Destination */}
        <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px' }}>
            {flight.arrivalTime}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E40AF' }}>
            {flight.destination.code}
          </Typography>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
            {flight.destination.city}
          </Typography>
        </Box>

        {/* Price & Book Action */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            justifyContent: { xs: 'space-between', md: 'center' },
            alignItems: { xs: 'center', md: 'flex-end' },
            borderLeft: { md: '1px solid #F1F5F9' },
            pl: { md: 3 },
            pt: { xs: 1.5, md: 0 },
            borderTop: { xs: '1px solid #F1F5F9', md: 'none' }
          }}
        >
          <Box sx={{ textAlign: { xs: 'left', md: 'right' }, mb: { md: 1 } }}>
            <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.75rem' }}>
              Total price
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E40AF', letterSpacing: '-0.5px', lineHeight: 1.1 }}>
              {flight.currency}{flight.price}
            </Typography>
            <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.7rem' }}>
              {flight.cabinClass} • per person
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={() => onSelect(flight)}
            sx={{
              backgroundColor: '#1E40AF',
              color: '#ffffff',
              fontWeight: 700,
              borderRadius: 2,
              px: 2.5,
              py: 0.85,
              textTransform: 'none',
              fontSize: '0.88rem',
              '&:hover': {
                backgroundColor: '#1D4ED8'
              }
            }}
          >
            Select Flight
          </Button>
        </Box>
      </Box>

      {/* Expand Details Trigger */}
      <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F8FAFC', pt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#64748B', fontSize: '0.75rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LuggageIcon sx={{ fontSize: 15 }} />
            <span>Included baggage</span>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EnergySavingsLeafIcon sx={{ fontSize: 15, color: '#10B981' }} />
            <span style={{ color: '#047857', fontWeight: 600 }}>{flight.emissions}</span>
          </Box>
        </Box>

        <Button
          size="small"
          onClick={() => setExpanded(!expanded)}
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{
            textTransform: 'none',
            fontSize: '0.75rem',
            color: '#1E40AF',
            fontWeight: 600,
            p: 0
          }}
        >
          {expanded ? 'Hide details' : 'Flight details'}
        </Button>
      </Box>

      {/* Collapsible Flight Details */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ mt: 2, pt: 2, borderTop: '1px dashed #E2E8F0', backgroundColor: '#F8FAFC', p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>
            Itinerary Breakdown
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <FlightTakeoffIcon sx={{ color: '#1E40AF', fontSize: 20, mt: 0.25 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                  {flight.departureTime} — {flight.origin.name} ({flight.origin.code})
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B' }}>
                  Terminal 2, Gate B12 • Check-in starts 3h before departure
                </Typography>
              </Box>
            </Box>

            <Box sx={{ pl: 4, py: 0.5, borderLeft: '2px solid #CBD5E1', ml: 1.25 }}>
              <Typography variant="caption" sx={{ color: '#475569', display: 'block', fontWeight: 600 }}>
                Flight duration: {flight.durationFormatted} • {flight.aircraft}
              </Typography>
              {flight.stops > 0 && flight.layoverCity && (
                <Typography variant="caption" sx={{ color: '#D97706', display: 'block', fontWeight: 700, mt: 0.5 }}>
                  ⚠️ Layover at {flight.layoverCity} ({flight.layoverFormatted || '1h 30m'})
                </Typography>
              )}
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <FlightLandIcon sx={{ color: '#1E40AF', fontSize: 20, mt: 0.25 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                  {flight.arrivalTime} — {flight.destination.name} ({flight.destination.code})
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B' }}>
                  Terminal 3, Baggage Claim Carousels 4-6
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 1.5 }} />

          {/* Amenities & Baggage */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#334155' }}>
              <LuggageIcon sx={{ fontSize: 17, color: '#64748B' }} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {flight.baggage}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#334155' }}>
              <WifiIcon sx={{ fontSize: 17, color: '#64748B' }} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                High-speed Wi-Fi
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#334155' }}>
              <PowerIcon sx={{ fontSize: 17, color: '#64748B' }} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                USB & AC in-seat power
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#334155' }}>
              <RestaurantIcon sx={{ fontSize: 17, color: '#64748B' }} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                Complimentary meal & beverages
              </Typography>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
