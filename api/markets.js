export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const response = await fetch('https://gamma-api.polymarket.com/events?limit=100&active=true&closed=false&slug_search=elon-musk-of-tweets');
  const data = await response.json();
  const markets = Array.isArray(data) ? data.flatMap(e => e.markets || []) : [];
  res.json(markets);
}
