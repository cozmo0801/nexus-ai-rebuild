export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  return res.status(200).json({
    ok: true,
    route: '/api/health',
    method: req.method,
    time: new Date().toISOString(),
    node: process.version,
  })
}