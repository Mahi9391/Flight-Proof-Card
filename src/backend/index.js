import express from 'express'
import cors from 'cors'
import { httpServerHandler } from 'cloudflare:node';
import { env } from 'cloudflare:workers';

// Create Express app
const app = express();

// Middleware: JSON body parsing
app.use(express.json())


const devDomain = env.DEV_DOMAIN
const stagingDomain = env.STAGING_DOMAIN
const prodDomain = env.PROD_DOMAIN



// Middleware: CORS
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  // If your frontend runs on a different local port (e.g. 5174),
  // add it here like: 'http://localhost:5174'

  // ⚠️ DEV_DOMAIN and PROD_DOMAIN are injected via Cloudflare env vars.
  // These values are available at runtime once your component is
  // published and approved. Do NOT remove them — they are required
  // for deployed environments to work correctly.
  devDomain,
  stagingDomain,
  prodDomain
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))


// Placeholder for DB access
const getDB = () => env.DB

// In order to use table, it shoule be created using
// wrangler d1 execute my-db --local --command "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE);"
// Here my-db refers to the database name defined in wrangler.jsonc
// The create table command should also be part of schema.jsonc in order to create tables remotely


// Route: Basic Test
app.get('/api/message', (req, res) => {
  const db = getDB();
  console.log('db', db)
  res.json({ message: 'Hello from Express on Workers!' })
})

// Route: Dynamic Hello
app.get('/api/hello/:name', (req, res) => {
  const environment = global.ENVIRONMENT || 'unknown'
  res.json({ message: `Hello, ${req.params.name} ${environment}` })
})

// Route: Flight Search & Sorting
app.get('/api/flights', (req, res) => {
  const fromCity = (req.query.from || 'New York').trim();
  const toCity = (req.query.to || 'London').trim();
  const sortMode = req.query.sort || 'cheapest';
  const cabinClass = req.query.cabinClass || 'Economy';

  const airlines = [
    { name: 'Emirates', code: 'EK', prefix: 'EK', color: '#D71921', bg: '#FEE2E2', rating: 4.8 },
    { name: 'Delta Air Lines', code: 'DL', prefix: 'DL', color: '#002244', bg: '#E0E7FF', rating: 4.6 },
    { name: 'British Airways', code: 'BA', prefix: 'BA', color: '#075AAA', bg: '#DBEAFE', rating: 4.5 },
    { name: 'Air India', code: 'AI', prefix: 'AI', color: '#ED1C24', bg: '#FFE4E6', rating: 4.4 },
    { name: 'IndiGo', code: '6E', prefix: '6E', color: '#001E6C', bg: '#E0F2FE', rating: 4.3 },
    { name: 'United Airlines', code: 'UA', prefix: 'UA', color: '#005DAA', bg: '#EDE9FE', rating: 4.4 },
    { name: 'Singapore Airlines', code: 'SQ', prefix: 'SQ', color: '#C59A52', bg: '#FEF3C7', rating: 4.9 },
    { name: 'Qatar Airways', code: 'QR', prefix: 'QR', color: '#5C0632', bg: '#FCE7F3', rating: 4.8 }
  ];

  const slots = [
    { depH: 6, depM: 15, stops: 0, priceMult: 0.92, durationMult: 1.0 },
    { depH: 8, depM: 45, stops: 0, priceMult: 1.15, durationMult: 0.98 },
    { depH: 10, depM: 30, stops: 1, priceMult: 0.82, durationMult: 1.45, layoverCity: 'Frankfurt (FRA)' },
    { depH: 13, depM: 20, stops: 0, priceMult: 1.05, durationMult: 1.02 },
    { depH: 16, depM: 50, stops: 0, priceMult: 1.12, durationMult: 1.0 },
    { depH: 18, depM: 15, stops: 1, priceMult: 0.78, durationMult: 1.55, layoverCity: 'Dubai (DXB)' },
    { depH: 21, depM: 0,  stops: 0, priceMult: 0.95, durationMult: 0.97 },
    { depH: 23, depM: 40, stops: 0, priceMult: 0.88, durationMult: 0.96 }
  ];

  const baseMinutes = 430;
  const basePrice = 420;
  const classMultiplier = cabinClass === 'Business' ? 2.8 : cabinClass === 'First' ? 4.5 : 1.0;

  let flights = slots.map((slot, index) => {
    const airline = airlines[index % airlines.length];
    const totalMinutes = Math.round(baseMinutes * slot.durationMult);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const durationFormatted = `${hours}h ${mins < 10 ? '0' : ''}${mins}m`;

    const depHour24 = slot.depH;
    const depPeriod = depHour24 >= 12 ? 'PM' : 'AM';
    const depHour12 = depHour24 % 12 === 0 ? 12 : depHour24 % 12;
    const depTimeFormatted = `${depHour12}:${slot.depM < 10 ? '0' : ''}${slot.depM} ${depPeriod}`;

    const arrTotalMinutes = depHour24 * 60 + slot.depM + totalMinutes;
    const arrHour24 = Math.floor(arrTotalMinutes / 60) % 24;
    const arrPeriod = arrHour24 >= 12 ? 'PM' : 'AM';
    const arrHour12 = arrHour24 % 12 === 0 ? 12 : arrHour24 % 12;
    const dayOffset = Math.floor(arrTotalMinutes / (24 * 60));
    const arrTimeFormatted = `${arrHour12}:${arrTotalMinutes % 60 < 10 ? '0' : ''}${arrTotalMinutes % 60} ${arrPeriod}${dayOffset > 0 ? ` (+${dayOffset})` : ''}`;

    const rawPrice = Math.round(basePrice * slot.priceMult * classMultiplier);
    const price = Math.round(rawPrice / 5) * 5;

    return {
      id: `fl-${airline.code}-${index}`,
      flightNumber: `${airline.prefix}-${200 + index * 17}`,
      airline: airline.name,
      airlineCode: airline.code,
      airlineColor: airline.color,
      airlineBg: airline.bg,
      rating: airline.rating,
      aircraft: 'Boeing 787-9 Dreamliner',
      origin: { city: fromCity, code: fromCity.slice(0, 3).toUpperCase() },
      destination: { city: toCity, code: toCity.slice(0, 3).toUpperCase() },
      departureTime: depTimeFormatted,
      arrivalTime: arrTimeFormatted,
      departureHour24: depHour24,
      departureMin: slot.depM,
      durationMinutes: totalMinutes,
      durationFormatted,
      stops: slot.stops,
      layoverCity: slot.layoverCity || null,
      price,
      currency: '$',
      cabinClass,
      seatsLeft: (index % 4) + 2,
      baggage: '1 carry-on (7kg) + 1 checked bag (23kg)',
      emissions: slot.stops === 0 ? '-14% CO₂' : '+6% CO₂',
      onTimeRate: '92% on-time'
    };
  });

  if (sortMode === 'cheapest') {
    flights.sort((a, b) => a.price - b.price);
  } else if (sortMode === 'price_desc') {
    flights.sort((a, b) => b.price - a.price);
  } else if (sortMode === 'fastest') {
    flights.sort((a, b) => a.durationMinutes - b.durationMinutes);
  } else if (sortMode === 'duration_desc') {
    flights.sort((a, b) => b.durationMinutes - a.durationMinutes);
  }

  res.json({ success: true, from: fromCity, to: toCity, sort: sortMode, count: flights.length, flights });
})



// Route: Insert Data into D1
// app.post('/api/users', async (req, res) => {
//   console.log('reqq', req.body)
//   const { name, email } = req.body

//   if (!name || !email) {
//     return res.status(400).json({ error: 'Name and email are required' })
//   }

//   try {
//     const db = getDB();
//     console.log('db', db)
//     await db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
//       .bind(name, email)
//       .run()

//     res.status(201).json({ success: true, message: 'User added successfully' })
//   } catch (err) {
//     res.status(500).json({ error: 'Database error', details: err.message })
//   }
// })

// Route: Fetch All Users
// app.get('/api/users', async (req, res) => {
//   try {
//     const db = getDB()
//     const { results } = await db.prepare('SELECT * FROM users').all()
//     res.json(results)
//   } catch (err) {
//     res.status(500).json({ error: 'Database error', details: err.message })
//   }
// })

app.listen(3000)
export default httpServerHandler({ port: 3000 })
