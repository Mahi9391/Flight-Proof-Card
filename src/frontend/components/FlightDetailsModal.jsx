import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Divider,
  Chip,
  TextField,
  Alert,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LuggageIcon from '@mui/icons-material/Luggage';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

export default function FlightDetailsModal({ flight, open, onClose }) {
  const [booked, setBooked] = useState(false);
  const [passengerName, setPassengerName] = useState('Alex Morgan');
  const [passengerEmail, setPassengerEmail] = useState('alex.morgan@example.com');

  if (!flight) return null;

  const baseFare = Math.round(flight.price * 0.82);
  const taxesAndFees = flight.price - baseFare;

  const handleBooking = () => {
    setBooked(true);
  };

  const handleClose = () => {
    setBooked(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 3, p: 1 } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AirplaneTicketIcon sx={{ color: '#1E40AF' }} />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {booked ? 'Booking Confirmed!' : 'Flight Itinerary & Booking'}
          </Typography>
        </Box>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ borderTop: '1px solid #F1F5F9' }}>
        {booked ? (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <CheckCircleIcon sx={{ fontSize: 64, color: '#10B981', mb: 1.5 }} />
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
              You're all set to fly!
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748B', mb: 3 }}>
              Your booking confirmation has been issued. E-ticket sent to <strong>{passengerEmail}</strong>.
            </Typography>

            <Box sx={{ backgroundColor: '#F8FAFC', borderRadius: 2, p: 2, border: '1px solid #E2E8F0', textAlign: 'left', mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#64748B', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>
                Booking Reference (PNR)
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E40AF', letterSpacing: 1.5 }}>
                HD-{flight.airlineCode}{Math.floor(1000 + Math.random() * 9000)}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Passenger: {passengerName}
              </Typography>
              <Typography variant="body2" sx={{ color: '#475569' }}>
                Flight: {flight.airline} ({flight.flightNumber}) • {flight.origin.city} ({flight.origin.code}) → {flight.destination.city} ({flight.destination.code})
              </Typography>
              <Typography variant="body2" sx={{ color: '#475569' }}>
                Departure: {flight.departureTime} • Duration: {flight.durationFormatted}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            {/* Airline Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: 2,
                    backgroundColor: flight.airlineBg,
                    color: flight.airlineColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800
                  }}
                >
                  {flight.airlineCode}
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {flight.airline} — {flight.flightNumber}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>
                    {flight.aircraft} • {flight.cabinClass}
                  </Typography>
                </Box>
              </Box>

              <Chip
                label={flight.stops === 0 ? 'Non-stop' : '1 Stop'}
                color={flight.stops === 0 ? 'success' : 'warning'}
                size="small"
                sx={{ fontWeight: 700 }}
              />
            </Box>

            {/* Route Summary */}
            <Box sx={{ backgroundColor: '#F8FAFC', borderRadius: 2, p: 2, mb: 2.5, border: '1px solid #E2E8F0' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    {flight.departureTime}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E40AF' }}>
                    {flight.origin.city} ({flight.origin.code})
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>
                    {flight.origin.name}
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748B' }}>
                    {flight.durationFormatted}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#1E40AF' }}>
                    <Box sx={{ width: 30, height: 2, backgroundColor: '#CBD5E1' }} />
                    <FlightTakeoffIcon sx={{ fontSize: 16 }} />
                    <Box sx={{ width: 30, height: 2, backgroundColor: '#CBD5E1' }} />
                  </Box>
                </Box>

                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    {flight.arrivalTime}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E40AF' }}>
                    {flight.destination.city} ({flight.destination.code})
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>
                    {flight.destination.name}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Passenger Form */}
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Traveler Information
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5, mb: 2 }}>
              <TextField
                size="small"
                label="Full Name"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
              />
              <TextField
                size="small"
                label="Email Address"
                value={passengerEmail}
                onChange={(e) => setPassengerEmail(e.target.value)}
              />
            </Box>

            {/* Price Details */}
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Price Breakdown
            </Typography>
            <Box sx={{ backgroundColor: '#F1F5F9', borderRadius: 2, p: 1.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption" sx={{ color: '#475569' }}>
                  Base Airfare (1 Adult)
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  {flight.currency}{baseFare}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption" sx={{ color: '#475569' }}>
                  Taxes, Airport Fees & Surcharges
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  {flight.currency}{taxesAndFees}
                </Typography>
              </Box>
              <Divider sx={{ my: 0.75 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  Total (incl. all taxes)
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E40AF' }}>
                  {flight.currency}{flight.price}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        {booked ? (
          <Button variant="contained" onClick={handleClose} fullWidth sx={{ backgroundColor: '#1E40AF', py: 1, borderRadius: 2 }}>
            Done
          </Button>
        ) : (
          <>
            <Button onClick={handleClose} sx={{ color: '#64748B' }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleBooking}
              sx={{ backgroundColor: '#1E40AF', fontWeight: 700, px: 3, borderRadius: 2 }}
            >
              Confirm & Book Flight
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
