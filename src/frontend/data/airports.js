// Comprehensive airport database with coordinates for realistic distance/duration calculation
export const AIRPORTS = [
  // US & Americas
  { code: 'JFK', city: 'New York', name: 'John F. Kennedy Intl', country: 'United States', lat: 40.6413, lon: -73.7781, aliases: ['nyc', 'new york', 'newyork', 'manhattan', 'queens'] },
  { code: 'EWR', city: 'New York', name: 'Newark Liberty Intl', country: 'United States', lat: 40.6895, lon: -74.1745, aliases: ['newark', 'new jersey', 'nj'] },
  { code: 'LGA', city: 'New York', name: 'LaGuardia', country: 'United States', lat: 40.7769, lon: -73.8740, aliases: ['laguardia'] },
  { code: 'SFO', city: 'San Francisco', name: 'San Francisco Intl', country: 'United States', lat: 37.6213, lon: -122.3790, aliases: ['sf', 'san francisco', 'bay area', 'silicon valley'] },
  { code: 'LAX', city: 'Los Angeles', name: 'Los Angeles Intl', country: 'United States', lat: 33.9416, lon: -118.4085, aliases: ['la', 'los angeles', 'hollywood', 'california'] },
  { code: 'ORD', city: 'Chicago', name: "O'Hare Intl", country: 'United States', lat: 41.9742, lon: -87.9073, aliases: ['chicago', 'ohare', 'illinois'] },
  { code: 'MIA', city: 'Miami', name: 'Miami Intl', country: 'United States', lat: 25.7959, lon: -80.2870, aliases: ['miami', 'florida', 'south beach'] },
  { code: 'SEA', city: 'Seattle', name: 'Seattle-Tacoma Intl', country: 'United States', lat: 47.4502, lon: -122.3088, aliases: ['seattle', 'tacoma', 'washington'] },
  { code: 'BOS', city: 'Boston', name: 'Logan Intl', country: 'United States', lat: 42.3656, lon: -71.0096, aliases: ['boston', 'logan', 'massachusetts'] },
  { code: 'LAS', city: 'Las Vegas', name: 'Harry Reid Intl', country: 'United States', lat: 36.0840, lon: -115.1537, aliases: ['las vegas', 'vegas', 'nevada'] },
  { code: 'YYZ', city: 'Toronto', name: 'Toronto Pearson Intl', country: 'Canada', lat: 43.6777, lon: -79.6248, aliases: ['toronto', 'pearson', 'ontario'] },
  { code: 'YVR', city: 'Vancouver', name: 'Vancouver Intl', country: 'Canada', lat: 49.1967, lon: -123.1815, aliases: ['vancouver', 'bc'] },

  // UK & Europe
  { code: 'LHR', city: 'London', name: 'Heathrow', country: 'United Kingdom', lat: 51.4700, lon: -0.4543, aliases: ['london', 'lon', 'heathrow', 'england', 'uk', 'britain'] },
  { code: 'LGW', city: 'London', name: 'Gatwick', country: 'United Kingdom', lat: 51.1537, lon: -0.1821, aliases: ['gatwick'] },
  { code: 'CDG', city: 'Paris', name: 'Charles de Gaulle', country: 'France', lat: 49.0097, lon: 2.5479, aliases: ['paris', 'cdg', 'france'] },
  { code: 'FRA', city: 'Frankfurt', name: 'Frankfurt Airport', country: 'Germany', lat: 50.0379, lon: 8.5622, aliases: ['frankfurt', 'germany'] },
  { code: 'BER', city: 'Berlin', name: 'Berlin Brandenburg', country: 'Germany', lat: 52.3667, lon: 13.5033, aliases: ['berlin'] },
  { code: 'AMS', city: 'Amsterdam', name: 'Schiphol', country: 'Netherlands', lat: 52.3105, lon: 4.7683, aliases: ['amsterdam', 'schiphol', 'holland'] },
  { code: 'FCO', city: 'Rome', name: 'Leonardo da Vinci-Fiumicino', country: 'Italy', lat: 41.8003, lon: 12.2389, aliases: ['rome', 'roma', 'fiumicino', 'italy'] },
  { code: 'BCN', city: 'Barcelona', name: 'Josep Tarradellas Barcelona-El Prat', country: 'Spain', lat: 41.2974, lon: 2.0833, aliases: ['barcelona', 'el prat', 'spain'] },
  { code: 'MAD', city: 'Madrid', name: 'Adolfo Suárez Madrid-Barajas', country: 'Spain', lat: 40.4839, lon: -3.5680, aliases: ['madrid', 'barajas'] },
  { code: 'ZRH', city: 'Zurich', name: 'Zurich Airport', country: 'Switzerland', lat: 47.4582, lon: 8.5555, aliases: ['zurich', 'switzerland', 'swiss'] },
  { code: 'IST', city: 'Istanbul', name: 'Istanbul Airport', country: 'Turkey', lat: 41.2753, lon: 28.7519, aliases: ['istanbul', 'turkey'] },

  // India & South Asia
  { code: 'DEL', city: 'New Delhi', name: 'Indira Gandhi Intl', country: 'India', lat: 28.5562, lon: 77.1000, aliases: ['delhi', 'new delhi', 'del', 'ncr', 'gurgaon', 'noida'] },
  { code: 'BOM', city: 'Mumbai', name: 'Chhatrapati Shivaji Maharaj Intl', country: 'India', lat: 19.0896, lon: 72.8656, aliases: ['mumbai', 'bombay', 'bom', 'maharashtra'] },
  { code: 'BLR', city: 'Bengaluru', name: 'Kempegowda Intl', country: 'India', lat: 13.1986, lon: 77.7066, aliases: ['bangalore', 'bengaluru', 'blr', 'karnataka'] },
  { code: 'MAA', city: 'Chennai', name: 'Chennai Intl', country: 'India', lat: 12.9941, lon: 80.1709, aliases: ['chennai', 'madras', 'maa', 'tamil nadu'] },
  { code: 'CCU', city: 'Kolkata', name: 'Netaji Subhash Chandra Bose Intl', country: 'India', lat: 22.6547, lon: 88.4467, aliases: ['kolkata', 'calcutta', 'ccu', 'west bengal'] },
  { code: 'HYD', city: 'Hyderabad', name: 'Rajiv Gandhi Intl', country: 'India', lat: 17.2403, lon: 78.4294, aliases: ['hyderabad', 'hyd', 'telangana'] },
  { code: 'GOI', city: 'Goa', name: 'Dabolim Airport', country: 'India', lat: 15.3808, lon: 73.8314, aliases: ['goa', 'dabolim', 'panaji'] },
  { code: 'GOX', city: 'Goa', name: 'Manohar Intl (Mopa)', country: 'India', lat: 15.7719, lon: 73.8683, aliases: ['mopa', 'north goa'] },
  { code: 'COK', city: 'Kochi', name: 'Cochin Intl', country: 'India', lat: 10.1518, lon: 76.4019, aliases: ['kochi', 'cochin', 'kerala'] },
  { code: 'AMD', city: 'Ahmedabad', name: 'Sardar Vallabhbhai Patel Intl', country: 'India', lat: 23.0772, lon: 72.6347, aliases: ['ahmedabad', 'gujarat'] },

  // Middle East
  { code: 'DXB', city: 'Dubai', name: 'Dubai Intl', country: 'United Arab Emirates', lat: 25.2532, lon: 55.3657, aliases: ['dubai', 'dxb', 'uae', 'emirates'] },
  { code: 'AUH', city: 'Abu Dhabi', name: 'Zayed Intl', country: 'United Arab Emirates', lat: 24.4330, lon: 54.6511, aliases: ['abu dhabi', 'auh'] },
  { code: 'DOH', city: 'Doha', name: 'Hamad Intl', country: 'Qatar', lat: 25.2731, lon: 51.6081, aliases: ['doha', 'qatar', 'doh'] },

  // Asia Pacific
  { code: 'SIN', city: 'Singapore', name: 'Singapore Changi', country: 'Singapore', lat: 1.3644, lon: 103.9915, aliases: ['singapore', 'changi', 'sin'] },
  { code: 'BKK', city: 'Bangkok', name: 'Suvarnabhumi', country: 'Thailand', lat: 13.6900, lon: 100.7501, aliases: ['bangkok', 'suvarnabhumi', 'thailand', 'bkk'] },
  { code: 'HND', city: 'Tokyo', name: 'Tokyo Haneda', country: 'Japan', lat: 35.5494, lon: 139.7798, aliases: ['tokyo', 'haneda', 'japan', 'tyo'] },
  { code: 'NRT', city: 'Tokyo', name: 'Narita Intl', country: 'Japan', lat: 35.7720, lon: 140.3929, aliases: ['narita'] },
  { code: 'HKG', city: 'Hong Kong', name: 'Hong Kong Intl', country: 'Hong Kong', lat: 22.3080, lon: 113.9185, aliases: ['hong kong', 'hkg', 'hongkong'] },
  { code: 'ICN', city: 'Seoul', name: 'Incheon Intl', country: 'South Korea', lat: 37.4602, lon: 126.4407, aliases: ['seoul', 'incheon', 'korea', 'icn'] },
  { code: 'SYD', city: 'Sydney', name: 'Sydney Kingsford Smith', country: 'Australia', lat: -33.9399, lon: 151.1753, aliases: ['sydney', 'australia', 'syd'] },
  { code: 'MEL', city: 'Melbourne', name: 'Melbourne Airport', country: 'Australia', lat: -37.6690, lon: 144.8410, aliases: ['melbourne', 'mel'] }
];

// Helper to find airport by code or city name or alias
export function findAirport(query) {
  if (!query || typeof query !== 'string') return null;
  const q = query.trim().toLowerCase();
  if (!q) return null;

  // Exact IATA match
  const byCode = AIRPORTS.find(a => a.code.toLowerCase() === q);
  if (byCode) return byCode;

  // Exact city match
  const byCity = AIRPORTS.find(a => a.city.toLowerCase() === q);
  if (byCity) return byCity;

  // Exact alias match
  const byAlias = AIRPORTS.find(a => a.aliases.some(alias => alias.toLowerCase() === q));
  if (byAlias) return byAlias;

  // Partial city or airport name match
  const byPartial = AIRPORTS.find(a => 
    a.city.toLowerCase().includes(q) || 
    a.name.toLowerCase().includes(q) ||
    a.aliases.some(alias => alias.toLowerCase().includes(q))
  );
  if (byPartial) return byPartial;

  // Fallback: create dynamic airport object with generated code
  const syntheticCode = q.replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase() || 'DST';
  const capitalized = q.charAt(0).toUpperCase() + q.slice(1);
  return {
    code: syntheticCode.padEnd(3, 'X'),
    city: capitalized,
    name: `${capitalized} Airport`,
    country: 'International',
    lat: 30.0 + (syntheticCode.charCodeAt(0) % 20),
    lon: 10.0 + (syntheticCode.charCodeAt(1) % 60),
    aliases: [q]
  };
}

// Great-circle distance in kilometers
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}
