export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const response = await fetch('https://gamma-api.polymarket.com/events?limit=100&active=true&closed=false&search=elon+musk+tweets');
  const data = await response.json();
  res.json(data);
}
