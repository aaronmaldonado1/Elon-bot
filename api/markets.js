export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const [r1, r2] = await Promise.all([
    fetch('https://gamma-api.polymarket.com/events?limit=100&active=true&closed=false&search=elon+tweets'),
    fetch('https://gamma-api.polymarket.com/markets?limit=100&active=true&closed=false&tag_slug=elon-musk')
  ]);
  const [d1, d2] = await Promise.all([r1.json(), r2.json()]);
  const markets = [...(Array.isArray(d1) ? d1.flatMap(e => e.markets || []) : []), ...(Array.isArray(d2) ? d2 : [])];
  res.json(markets);
}
