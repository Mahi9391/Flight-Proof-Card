import { calculateDistanceKm } from '../data/airports.js';

const AIRLINE_CATALOG = [
  { name: 'Emirates', code: 'EK', prefix: 'EK', color: '#D71921', bg: '#FEE2E2', rating: 4.8 },
  { name: 'Delta Air Lines', code: 'DL', prefix: 'DL', color: '#002244', bg: '#E0E7FF', rating: 4.6 },
  { name: 'British Airways', code: 'BA', prefix: 'BA', color: '#075AAA', bg: '#DBEAFE', rating: 4.5 },
  { name: 'Air India', code: 'AI', prefix: 'AI', color: '#ED1C24', bg: '#FFE4E6', rating: 4.4 },
  { name: 'IndiGo', code: '6E', prefix: '6E', color: '#001E6C', bg: '#E0F2FE', rating: 4.3 },
  { name: 'United Airlines', code: 'UA', prefix: 'UA', color: '#005DAA', bg: '#EDE9FE', rating: 4.4 },
  { name: 'Singapore Airlines', code: 'SQ', prefix: 'SQ', color: '#C59A52', bg: '#FEF3C7', rating: 4.9 },
  { name: 'Qatar Airways', code: 'QR', prefix: 'QR', color: '#5C0632', bg: '#FCE7F3', rating: 4.8 },
  { name: 'Lufthansa', code: 'LH', prefix: 'LH', color: '#05164D', bg: '#FEF9C3', rating: 4.5 },
  { name: 'Air France', code: 'AF', prefix: 'AF', color: '#002157', bg: '#E0E7FF', rating: 4.6 },
  { name: 'Virgin Atlantic', code: 'VS', prefix: 'VS', color: '#D60000', bg: '#FFE4E6', rating: 4.7 },
  { name: 'American Airlines', code: 'AA', prefix: 'AA', color: '#0078D2', bg: '#E0F2FE', rating: 4.3 }
];

const AIRCRAFTS = [
  'Boeing 787-9 Dreamliner',
  'Airbus A350-900',
  'Boeing 777-300ER',
  'Airbus A321neo',
  'Airbus A320neo',
  'Boeing 737 MAX 9'
];

/**
 * Generates realistic flights between two airports with prices, durations,
 * airlines, schedules, and stops.
 */
export function generateFlights(origin, destination, dateStr = null, cabinClass = 'Economy') {
  if (!origin || !destination) return [];

  const distanceKm = Math.max(300, calculateDistanceKm(origin.lat, origin.lon, destination.lat, destination.lon));
  
  // Base flight duration in minutes based on distance (approx 800 km/h + 35 min airport/approach time)
  const baseFlightMinutes = Math.round((distanceKm / 800) * 60) + 35;

  // Determine currency based on country
  const isIndiaRoute = origin.country === 'India' && destination.country === 'India';
  const currencySymbol = isIndiaRoute ? '₹' : '$';
  const baseRatePerKm = isIndiaRoute ? 4.2 : 0.085;
  const basePrice = Math.max(isIndiaRoute ? 3200 : 85, Math.round(distanceKm * baseRatePerKm));

  // Select suitable airlines based on route
  let availableAirlines = [...AIRLINE_CATALOG];
  if (isIndiaRoute) {
    availableAirlines = AIRLINE_CATALOG.filter(a => ['6E', 'AI', 'BA', 'EK'].includes(a.code));
  }

  // Flight schedule seeds for realistic departures
  const departureSlots = [
    { depH: 6, depM: 15, stops: 0, priceMult: 0.92, durationMult: 1.0 },
    { depH: 8, depM: 45, stops: 0, priceMult: 1.15, durationMult: 0.98 },
    { depH: 10, depM: 30, stops: 1, priceMult: 0.82, durationMult: 1.45, layoverCity: getLayoverCity(origin, destination) },
    { depH: 13, depM: 20, stops: 0, priceMult: 1.05, durationMult: 1.02 },
    { depH: 16, depM: 50, stops: 0, priceMult: 1.12, durationMult: 1.0 },
    { depH: 18, depM: 15, stops: 1, priceMult: 0.78, durationMult: 1.55, layoverCity: getLayoverCity(origin, destination) },
    { depH: 21, depM: 0,  stops: 0, priceMult: 0.95, durationMult: 0.97 },
    { depH: 23, depM: 40, stops: 0, priceMult: 0.88, durationMult: 0.96 }
  ];

  const classMultiplier = cabinClass === 'Business' ? 2.8 : cabinClass === 'First' ? 4.5 : 1.0;

  return departureSlots.map((slot, index) => {
    const airline = availableAirlines[index % availableAirlines.length];
    const flightNum = `${airline.prefix}-${100 + (index * 37 + 14) % 899}`;
    
    // Duration
    const totalMinutes = Math.round(baseFlightMinutes * slot.durationMult);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const durationFormatted = `${hours}h ${mins < 10 ? '0' : ''}${mins}m`;

    // Departure time formatting
    const depHour24 = slot.depH;
    const depMin = slot.depM;
    const depPeriod = depHour24 >= 12 ? 'PM' : 'AM';
    const depHour12 = depHour24 % 12 === 0 ? 12 : depHour24 % 12;
    const depTimeFormatted = `${depHour12}:${depMin < 10 ? '0' : ''}${depMin} ${depPeriod}`;

    // Arrival time formatting
    const arrTotalMinutes = depHour24 * 60 + depMin + totalMinutes;
    const arrHour24 = Math.floor(arrTotalMinutes / 60) % 24;
    const arrMin = arrTotalMinutes % 60;
    const dayOffset = Math.floor(arrTotalMinutes / (24 * 60));
    const arrPeriod = arrHour24 >= 12 ? 'PM' : 'AM';
    const arrHour12 = arrHour24 % 12 === 0 ? 12 : arrHour24 % 12;
    const arrTimeFormatted = `${arrHour12}:${arrMin < 10 ? '0' : ''}${arrMin} ${arrPeriod}${dayOffset > 0 ? ` (+${dayOffset})` : ''}`;

    // Price calculation
    const rawPrice = Math.round(basePrice * slot.priceMult * classMultiplier);
    const price = Math.round(rawPrice / 5) * 5; // rounded to nearest 5

    // Aircraft model
    const aircraft = AIRCRAFTS[index % AIRCRAFTS.length];

    // Layover details
    const layoverDurationMinutes = slot.stops > 0 ? Math.round(totalMinutes - baseFlightMinutes) : 0;
    const layoverFormatted = slot.stops > 0 ? `${Math.floor(layoverDurationMinutes / 60)}h ${layoverDurationMinutes % 60}m layover` : null;

    return {
      id: `fl-${airline.code}-${origin.code}-${destination.code}-${index}`,
      flightNumber: flightNum,
      airline: airline.name,
      airlineCode: airline.code,
      airlineColor: airline.color,
      airlineBg: airline.bg,
      rating: airline.rating,
      aircraft,
      origin: {
        code: origin.code,
        city: origin.city,
        name: origin.name,
        country: origin.country
      },
      destination: {
        code: destination.code,
        city: destination.city,
        name: destination.name,
        country: destination.country
      },
      departureTime: depTimeFormatted,
      arrivalTime: arrTimeFormatted,
      departureHour24: depHour24,
      departureMin: depMin,
      durationMinutes: totalMinutes,
      durationFormatted,
      stops: slot.stops,
      layoverCity: slot.layoverCity || null,
      layoverFormatted,
      price,
      currency: currencySymbol,
      cabinClass,
      seatsLeft: (index % 5) + 2,
      baggage: '1 carry-on (7kg) + 1 checked bag (23kg)',
      emissions: slot.stops === 0 ? '-14% emissions' : '+8% emissions',
      onTimeRate: `${88 + (index * 3) % 10}% on-time`,
      amenities: ['Wi-Fi available', 'USB in-seat power', 'Complimentary meal', 'Free movies & TV']
    };
  });
}

function getLayoverCity(origin, destination) {
  if (origin.country === 'India' || destination.country === 'India') {
    return 'Dubai (DXB)';
  }
  if (origin.country === 'United States' && destination.country === 'Japan') {
    return 'Honolulu (HNL)';
  }
  return 'Frankfurt (FRA)';
}

/**
 * Sorts flights based on specified criteria.
 * Supported modes:
 * - 'cheapest': Price ASC
 * - 'fastest': Duration ASC
 * - 'best': Intelligent combined score
 * - 'price_desc': Price DESC
 * - 'duration_desc': Duration DESC
 * - 'earliest': Departure time ASC
 * - 'latest': Departure time DESC
 */
export function sortFlights(flights, sortMode = 'cheapest') {
  if (!flights || !Array.isArray(flights)) return [];
  const list = [...flights];

  switch (sortMode) {
    case 'cheapest':
      return list.sort((a, b) => a.price - b.price);

    case 'price_desc':
      return list.sort((a, b) => b.price - a.price);

    case 'fastest':
      return list.sort((a, b) => a.durationMinutes - b.durationMinutes);

    case 'duration_desc':
      return list.sort((a, b) => b.durationMinutes - a.durationMinutes);

    case 'earliest':
      return list.sort((a, b) => {
        const timeA = a.departureHour24 * 60 + a.departureMin;
        const timeB = b.departureHour24 * 60 + b.departureMin;
        return timeA - timeB;
      });

    case 'latest':
      return list.sort((a, b) => {
        const timeA = a.departureHour24 * 60 + a.departureMin;
        const timeB = b.departureHour24 * 60 + b.departureMin;
        return timeB - timeA;
      });

    case 'best':
    default: {
      // Best balances price (55%) and duration (45%)
      if (list.length === 0) return list;
      const minPrice = Math.min(...list.map(f => f.price));
      const maxPrice = Math.max(...list.map(f => f.price));
      const minDur = Math.min(...list.map(f => f.durationMinutes));
      const maxDur = Math.max(...list.map(f => f.durationMinutes));

      const priceRange = maxPrice - minPrice || 1;
      const durRange = maxDur - minDur || 1;

      return list.sort((a, b) => {
        const scoreA = 0.55 * ((a.price - minPrice) / priceRange) + 0.45 * ((a.durationMinutes - minDur) / durRange);
        const scoreB = 0.55 * ((b.price - minPrice) / priceRange) + 0.45 * ((b.durationMinutes - minDur) / durRange);
        return scoreA - scoreB;
      });
    }
  }
}
