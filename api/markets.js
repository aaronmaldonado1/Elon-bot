export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const response = await fetch('https://gamma-api.polymarket.com/events?slug=elon-musk-of-tweets-march-28-march-30');
  const data = await response.json();
  res.json(data);
}
