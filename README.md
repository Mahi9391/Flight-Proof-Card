# ✈️ Hyperdart Flight Search & Comparison Component

A standalone proofcode component for **Hyperdart** that extracts origin (*from*) and destination (*to*) from natural language search queries, displays real-time flight fares, durations, and airline options, and provides interactive sorting by price, flight duration, and value.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Search Bar Query Regex Patterns](#search-bar-query-regex-patterns)
  - [1. Platform Triggering Regex (`hyperdart.config.js`)](#1-platform-triggering-regex-hyperdartconfigjs)
  - [2. In-Depth Query Parsing Regex (`flightParser.js`)](#2-in-depth-query-parsing-regex-flightparserjs)
- [Supported Query Examples](#supported-query-examples)
- [Key Features](#key-features)
  - [Duration & Price Sorting](#duration--price-sorting)
  - [Real-Time Flight Engine & Pricing](#real-time-flight-engine--pricing)
  - [Responsive Layout (Mainline & Sidebar)](#responsive-layout-mainline--sidebar)
  - [Interactive Flight Itinerary & Booking Modal](#interactive-flight-itinerary--booking-modal)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Backend Express API](#backend-express-api)
- [Getting Started & Local Development](#getting-started--local-development)
- [Pre-Publish Validation](#pre-publish-validation)

---

## 🔍 Overview

When a user enters a search query in Hyperdart (or in the local sandbox search bar), this component:
1. Matches the flight search intent through predefined keywords and regex patterns.
2. Intelligently extracts the **From (Origin)** and **To (Destination)** cities or 3-letter IATA codes.
3. Calculates great-circle route distances and computes realistic flight durations and dynamic fares.
4. Renders interactive flight cards with airline branding, flight routes, schedules, stops, carbon savings, and baggage details.
5. Provides instant one-click sorting by **Price (Cheapest)**, **Flight Duration (Fastest)**, and **Best Value**.

---

## ⚙️ Search Bar Query Regex Patterns

### 1. Platform Triggering Regex (`hyperdart.config.js`)

These patterns are registered with the Hyperdart NLU engine in `hyperdart.config.js` to activate the component when matched:

| # | Regular Expression | Description | Example Matches |
|---|--------------------|-------------|-----------------|
| 1 | `flights?\s+(?:from\s+)?([a-zA-Z\s]+)\s+to\s+([a-zA-Z\s]+)` | Matches "flights from [origin] to [destination]" | `flights from NYC to London`, `flight Delhi to Mumbai` |
| 2 | `([a-zA-Z\s]+)\s+to\s+([a-zA-Z\s]+)\s+flights?` | Matches "[origin] to [destination] flights" | `delhi to mumbai flights`, `san francisco to tokyo flight` |
| 3 | `flights?\s+to\s+([a-zA-Z\s]+)` | Matches queries specifying only destination | `flights to Dubai`, `flight to Paris` |
| 4 | `([a-zA-Z]{3})\s+to\s+([a-zA-Z]{3})` | Matches 3-letter IATA airport codes | `DEL to BOM`, `JFK to LHR`, `SFO to CDG` |
| 5 | `flights?` | Catch-all keyword trigger for flight discovery | `flights`, `flight` |

---

### 2. In-Depth Query Parsing Regex (`src/frontend/utils/flightParser.js`)

Inside [`flightParser.js`](file:///c:/Users/Dell/Desktop/hyperdart/flight-proofcode/src/frontend/utils/flightParser.js), incoming raw queries from `props.searchData` and `props.searchQuery` are normalized and parsed using the following regex pipeline:

#### A. Prefix Cleaning Regex
Strips search action words, adjectives, and conversational fillers before extraction:
```javascript
query.replace(/^(?:show\s+me\s+|find\s+|search\s+|book\s+|cheap\s+|cheapest\s+|best\s+)+/i, '');
```

#### B. "To Destination from Origin" Regex
Handles inverted natural language expressions:
```javascript
/(?:flights?|tickets?)?\s*to\s+([a-zA-Z\s]+?)\s+from\s+([a-zA-Z\s]+)/i
```
- **Group 1**: Destination city / airport
- **Group 2**: Origin city / airport
- **Example**: `"flights to Paris from New York"` → *From: New York*, *To: Paris*

#### C. "From Origin to Destination" Regex
Handles standard directional queries with optional leading verbs or trailing modifiers:
```javascript
/(?:(?:flights?|fly|tickets?|search|find|book)\s+)?(?:from\s+)?([a-zA-Z\s]+?)\s+(?:to|-|->|–)\s+([a-zA-Z\s]+?)(?:\s+(?:flights?|flight|tickets?|travel|airfare|planes?))?$/i
```
- **Group 1**: Origin
- **Group 2**: Destination
- **Example**: `"cheap flights from San Francisco to Tokyo"` → *From: San Francisco*, *To: Tokyo*

#### D. 3-Letter IATA Airport Code Regex
Matches exact 3-letter IATA airport code pairs:
```javascript
/\b([a-zA-Z]{3})\s*(?:to|-|->|–|\s)\s*([a-zA-Z]{3})\b/i
```
- **Group 1**: Origin IATA code (`DEL`, `JFK`, `SFO`, etc.)
- **Group 2**: Destination IATA code (`BOM`, `LHR`, `HND`, etc.)
- **Example**: `"DEL to BOM"` → *From: New Delhi (DEL)*, *To: Mumbai (BOM)*

#### E. Single-Endpoint Regex
Handles partial searches where the user only specified destination or origin:
```javascript
// Destination only
/(?:flights?|fly|tickets?)\s+(?:to|for)\s+([a-zA-Z\s]+)/i

// Origin only
/(?:flights?|fly|tickets?)\s+from\s+([a-zA-Z\s]+)/i
```

#### F. Noise Cleaner Regex (`cleanTerm`)
Cleans matched tokens of extraneous flight keywords:
```javascript
term
  .replace(/\b(flights?|cheap|tickets?|air|airline|airfare|travel|roundtrip|oneway|nonstop|non-stop|direct|show|me|find|plane|planes)\b/gi, '')
  .replace(/^from\s+/i, '')
  .trim();
```

---

## 🎯 Supported Query Examples

| User Query | Parsed Origin | Parsed Destination |
|------------|---------------|-------------------|
| `flights from NYC to London` | New York (`JFK`) | London (`LHR`) |
| `flight from Delhi to Mumbai` | New Delhi (`DEL`) | Mumbai (`BOM`) |
| `delhi to mumbai flights` | New Delhi (`DEL`) | Mumbai (`BOM`) |
| `DEL to BOM` | New Delhi (`DEL`) | Mumbai (`BOM`) |
| `JFK to LHR` | New York (`JFK`) | London (`LHR`) |
| `flights to Paris from New York` | New York (`JFK`) | Paris (`CDG`) |
| `cheap flights from San Francisco to Tokyo` | San Francisco (`SFO`) | Tokyo (`HND`) |
| `flights to Dubai` | New York (`JFK` default) | Dubai (`DXB`) |
| `flights` | New York (`JFK` default) | London (`LHR` default) |

---

## 🚀 Key Features

### 🔀 Duration & Price Sorting
The user can sort flights seamlessly using either **Quick Sort Tabs** or the **Detailed Sort Dropdown**:

1. **Cheapest First (Price: Low to High)**:
   - Displays a dynamic badge showing the lowest fare (e.g. `from $180` or `from ₹3,725`).
   - Prioritizes budget-friendly routes and layovers.
2. **Fastest First (Duration: Shortest to Longest)**:
   - Displays a quick time badge showing the shortest flight duration (e.g. `1h 55m` or `7h 15m`).
   - Prioritizes direct, non-stop flights.
3. **Best Value (Balanced Score)**:
   - Normalized algorithmic score:  
     $$\text{Score} = 0.55 \times \text{Price Score} + 0.45 \times \text{Duration Score}$$
   - Identifies the sweet spot between low price and minimal travel time.
4. **Additional Sort Modes**:
   - Price: High to Low
   - Duration: Longest to Shortest
   - Departure: Earliest First
   - Departure: Latest First

### ✈️ Real-Time Flight Engine & Pricing
- Great-circle distance calculated via the Haversine formula based on coordinates in [`airports.js`](file:///c:/Users/Dell/Desktop/hyperdart/flight-proofcode/src/frontend/data/airports.js).
- Realistic airline fleet: Emirates (`EK`), Delta Air Lines (`DL`), British Airways (`BA`), Air India (`AI`), IndiGo (`6E`), United Airlines (`UA`), Singapore Airlines (`SQ`), Qatar Airways (`QR`), and Lufthansa (`LH`).
- Multiple cabin classes: **Economy**, **Business**, and **First Class**.
- Currency localization: Automatically renders `₹` for domestic India flights and `$` for international routes.

### 📱 Responsive Layout (Mainline & Sidebar)
- **Mainline View**: Full horizontal layout featuring departure/arrival times, visual route progress bar, airline tags, carbon savings, and total price.
- **Sidebar View**: Automatically adapts to compact ~350px DartFrame widths without horizontal scrolling or overflow.

### 🎫 Interactive Flight Itinerary & Booking Modal
- Clicking **"Select Flight"** opens a booking dialog with:
  - Flight leg breakdown (terminal, gate, baggage claim).
  - Layover city and duration details for 1-stop flights.
  - Price breakdown: Base airfare + taxes & airport surcharges.
  - Passenger information input.
  - One-click booking simulation with confirmed **PNR Reference**.

---

## 📂 Architecture & Folder Structure

```
flight-proofcode/
├── hyperdart.config.js               ← Triggers, regex patterns, server & client configs
├── searchData.json                   ← Sandbox mock data for local testing
├── resource.json                     ← Structured schema for platform AI query parsing
├── vite.config.js                    ← Vite build & DartFrame middleware plugin
├── package.json                      ← Dependencies & build scripts
├── scripts/
│   └── validate-publish.js           ← Pre-publish validation script
├── src/
│   ├── backend/                      ← Express backend on Cloudflare Workers
│   │   ├── index.js                  ← Express app entry point (GET /api/flights)
│   │   ├── package.json              ← Backend worker dependencies
│   │   ├── schema.jsonc              ← Optional D1 database schema
│   │   └── wrangler.jsonc            ← Cloudflare Workers configuration
│   ├── frontend/                     ← React application
│   │   ├── index.jsx                 ← Exports component wrapped in withHD HOC
│   │   ├── NewComponent.jsx          ← Main component orchestrating search, sorting & state
│   │   ├── components/
│   │   │   ├── FlightSearchBar.jsx   ← Origin/Destination autocompletes, date & swap
│   │   │   ├── FlightFilters.jsx     ← Sorting tabs, dropdown & filter chips
│   │   │   ├── FlightCard.jsx        ← Individual flight item with expandable itinerary
│   │   │   └── FlightDetailsModal.jsx← Booking flow modal and fare breakdown
│   │   ├── data/
│   │   │   └── airports.js           ← Airport directory, IATA codes, and coordinates
│   │   └── utils/
│   │       ├── flightParser.js       ← Natural language flight query parser
│   │       └── flightGenerator.js    ← Flight generator, pricing & sorting engine
│   └── sandbox/                      ← Hyperdart local sandbox shell
```

---

## 🌐 Backend Express API

The backend worker defines the `/api/flights` endpoint in [`src/backend/index.js`](file:///c:/Users/Dell/Desktop/hyperdart/flight-proofcode/src/backend/index.js):

```http
GET /api/flights?from=New%20York&to=London&sort=cheapest&cabinClass=Economy
```

**Response JSON**:
```json
{
  "success": true,
  "from": "New York",
  "to": "London",
  "sort": "cheapest",
  "count": 8,
  "flights": [
    {
      "id": "fl-BA-0",
      "flightNumber": "BA-200",
      "airline": "British Airways",
      "airlineCode": "BA",
      "departureTime": "6:15 AM",
      "arrivalTime": "1:25 PM",
      "durationMinutes": 430,
      "durationFormatted": "7h 10m",
      "stops": 0,
      "price": 385,
      "currency": "$",
      "cabinClass": "Economy"
    }
  ]
}
```

*Note: If the backend worker is not running locally, the frontend seamlessly falls back to the client-side generator engine, ensuring uninterrupted functionality.*

---

## 🛠️ Getting Started & Local Development

### 1. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd src/backend && npm install && cd ../..
```

### 2. Start Local Development Sandbox
```bash
npm start
```
Open [http://localhost:5174/](http://localhost:5174/) in your browser.

### 3. Build Production Artifacts
```bash
# Build backend Cloudflare Worker
cd src/backend && npm run build && cd ../..

# Build frontend modern bundle
npm run build
```

---

## ✅ Pre-Publish Validation

Before publishing to Hyperdart, run the validation check:
```bash
npm run prepublishOnly
```

Output:
```
✔ Pre-publish validation passed.
```
