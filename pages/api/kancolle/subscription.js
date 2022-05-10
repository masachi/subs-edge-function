export default function handler(req, res) {
  console.error(req.route);

  res.status(200).json({ name: 'John Doe' })
}
