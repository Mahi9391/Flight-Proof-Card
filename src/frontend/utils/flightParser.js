import { findAirport } from '../data/airports.js';

/**
 * Extracts origin ("from") and destination ("to") from any flight search query string.
 * Supports natural queries like:
 * - "flights from NYC to London"
 * - "flight from Delhi to Mumbai"
 * - "Delhi to Mumbai flights"
 * - "DEL to BOM"
 * - "flights to Paris from New York"
 * - "cheap flights from San Francisco to Tokyo"
 * - "flights to Goa"
 * - "flights"
 */
export function parseFlightQuery(rawQuery) {
  if (!rawQuery || typeof rawQuery !== 'string') {
    return {
      from: findAirport('NYC'),
      to: findAirport('LON'),
      isDefault: true,
      rawQuery: ''
    };
  }

  let query = rawQuery.trim();

  // Strip leading/trailing punctuation and common search clutter
  query = query.replace(/^["']|["']$/g, '');
  // Strip leading action/adjective words (cheap, best, find, search, show me, etc.)
  query = query.replace(/^(?:show\s+me\s+|find\s+|search\s+|book\s+|cheap\s+|cheapest\s+|best\s+)+/i, '');

  // 1. Check "to <destination> from <origin>"
  const toFromMatch = query.match(/(?:flights?|tickets?)?\s*to\s+([a-zA-Z\s]+?)\s+from\s+([a-zA-Z\s]+)/i);
  if (toFromMatch) {
    const toStr = cleanTerm(toFromMatch[1]);
    const fromStr = cleanTerm(toFromMatch[2]);
    const toAirport = findAirport(toStr);
    const fromAirport = findAirport(fromStr);
    if (toAirport && fromAirport) {
      return { from: fromAirport, to: toAirport, isDefault: false, rawQuery };
    }
  }

  // 2. Check "from <origin> to <destination>" or "<origin> to <destination>"
  const fromToMatch = query.match(/(?:(?:flights?|fly|tickets?|search|find|book)\s+)?(?:from\s+)?([a-zA-Z\s]+?)\s+(?:to|-|->|–)\s+([a-zA-Z\s]+?)(?:\s+(?:flights?|flight|tickets?|travel|airfare|planes?))?$/i);
  if (fromToMatch) {
    const fromStr = cleanTerm(fromToMatch[1]);
    const toStr = cleanTerm(fromToMatch[2]);
    if (fromStr && toStr && fromStr.toLowerCase() !== toStr.toLowerCase()) {
      const fromAirport = findAirport(fromStr);
      const toAirport = findAirport(toStr);
      if (fromAirport && toAirport) {
        return { from: fromAirport, to: toAirport, isDefault: false, rawQuery };
      }
    }
  }

  // 3. Check simple 3-letter IATA code pattern: "DEL BOM" or "JFK LHR" or "SFO to CDG"
  const iataMatch = query.match(/\b([a-zA-Z]{3})\s*(?:to|-|->|–|\s)\s*([a-zA-Z]{3})\b/i);
  if (iataMatch) {
    const fromAirport = findAirport(iataMatch[1]);
    const toAirport = findAirport(iataMatch[2]);
    if (fromAirport && toAirport) {
      return { from: fromAirport, to: toAirport, isDefault: false, rawQuery };
    }
  }

  // 4. Check "flights to <destination>"
  const onlyToMatch = query.match(/(?:flights?|fly|tickets?)\s+(?:to|for)\s+([a-zA-Z\s]+)/i);
  if (onlyToMatch) {
    const toStr = cleanTerm(onlyToMatch[1]);
    const toAirport = findAirport(toStr);
    if (toAirport) {
      // Pick sensible origin distinct from destination
      const defaultOriginCode = toAirport.code === 'JFK' || toAirport.city === 'New York' ? 'LHR' : 'JFK';
      return {
        from: findAirport(defaultOriginCode),
        to: toAirport,
        isDefault: false,
        rawQuery
      };
    }
  }

  // 5. Check "flights from <origin>"
  const onlyFromMatch = query.match(/(?:flights?|fly|tickets?)\s+from\s+([a-zA-Z\s]+)/i);
  if (onlyFromMatch) {
    const fromStr = cleanTerm(onlyFromMatch[1]);
    const fromAirport = findAirport(fromStr);
    if (fromAirport) {
      const defaultDestCode = fromAirport.code === 'LHR' ? 'JFK' : 'LHR';
      return {
        from: fromAirport,
        to: findAirport(defaultDestCode),
        isDefault: false,
        rawQuery
      };
    }
  }

  // Fallback default
  return {
    from: findAirport('NYC'),
    to: findAirport('LON'),
    isDefault: true,
    rawQuery
  };
}

function cleanTerm(str) {
  if (!str) return '';
  return str
    .replace(/\b(flights?|cheap|tickets?|air|airline|airfare|travel|roundtrip|oneway|nonstop|non-stop|direct|show|me|find|plane|planes)\b/gi, '')
    .replace(/^from\s+/i, '')
    .trim();
}
