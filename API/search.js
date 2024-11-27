export default async function handler(req, res) {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  const apiUrl = `https://api.github.com/search/code?q=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

