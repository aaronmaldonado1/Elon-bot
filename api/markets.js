export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const response = await fetch('https://gamma-api.polymarket.com/markets?search=elon+musk+tweets&active=true&closed=false&limit=30');
  const data = await response.json();
  res.json(data);
}
