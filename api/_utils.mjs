// Shared utilities for API routes

export function safeParseJson(value) {
  try {
    return JSON.parse(value)
  } catch (_) {
    return null
  }
}

export async function readBody(req) {
  return new Promise((resolve, reject) => {
    try {
      let data = ''
      req.on('data', (chunk) => {
        data += chunk
      })
      req.on('end', () => resolve(data))
      req.on('error', (err) => reject(err))
    } catch (err) {
      reject(err)
    }
  })
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function getClientIp(req) {
  const xff = req.headers['x-forwarded-for']
  if (typeof xff === 'string' && xff.length > 0) {
    return xff.split(',')[0].trim()
  }
  const xri = req.headers['x-real-ip']
  if (typeof xri === 'string' && xri.length > 0) {
    return xri.trim()
  }
  return req.socket?.remoteAddress || 'unknown'
}

// Very basic in-memory rate limiter for warm instances
const globalStore = globalThis.__RATE_LIMIT_STORE__ || new Map()
if (!globalThis.__RATE_LIMIT_STORE__) {
  globalThis.__RATE_LIMIT_STORE__ = globalStore
}

export function checkRateLimit(key, limit, windowMs) {
  const now = Date.now()
  const windowStart = now - windowMs
  const entries = globalStore.get(key) || []
  const recent = entries.filter((ts) => ts > windowStart)
  if (recent.length >= limit) {
    return { allowed: false, remaining: 0, resetMs: recent[0] + windowMs - now }
  }
  recent.push(now)
  globalStore.set(key, recent)
  return { allowed: true, remaining: limit - recent.length, resetMs: windowMs }
}

export async function postAnalyticsEvent({ type, payload, req }) {
  try {
    const url = (process.env.ANALYTICS_WEBHOOK_URL || '').trim()
    if (!url) return

    const event = {
      type,
      timestamp: new Date().toISOString(),
      ip: getClientIp(req),
      userAgent: req.headers['user-agent'] || '',
      payload,
    }

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    })
  } catch (_) {
    // best-effort only
  }
}