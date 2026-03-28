export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const response = await fetch('https://gamma-api.polymarket.com/markets?limit=50&active=true&closed=false');
  const data = await response.json();
  res.json(data);
}
