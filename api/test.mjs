export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  return res.status(200).json({
    message: 'API is working with ESM!',
    timestamp: new Date().toISOString(),
    method: req.method,
    nodeVersion: process.version,
  })
}