export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')

  const hasKey = !!(process.env.RESEND_API_KEY || '').trim()
  const hasTo = !!(process.env.CONTACT_EMAIL || process.env.EMAIL_TO || '').trim()
  const hasFrom = !!(process.env.EMAIL_FROM || '').trim()

  return res.status(200).json({
    ok: true,
    route: '/api/health',
    method: req.method,
    time: new Date().toISOString(),
    node: process.version,
    env: {
      RESEND_API_KEY: hasKey ? 'present' : 'missing',
      CONTACT_EMAIL: hasTo ? 'present' : 'missing',
      EMAIL_FROM: hasFrom ? 'present' : 'missing',
    }
  })
}