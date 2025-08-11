import { safeParseJson, readBody, isValidEmail, getClientIp, checkRateLimit, postAnalyticsEvent } from './_utils.mjs'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    let parsedBody
    if (req.body && Object.keys(req.body).length > 0) {
      parsedBody = typeof req.body === 'string' ? safeParseJson(req.body) : req.body
    } else {
      const raw = await readBody(req)
      parsedBody = safeParseJson(raw)
    }

    if (!parsedBody) {
      return res.status(400).json({ message: 'Invalid or missing JSON body' })
    }

    const {
      name,
      email,
      phone,
      businessName,
      industry,
      website,
      specificNeeds,
      selectedChallenge,
      estimatedSavings,
      completedAt,
    } = parsedBody

    if (!name || !email) {
      return res.status(400).json({ message: 'Missing required fields: name, email' })
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    const ip = getClientIp(req)
    const rlKey = `onboarding:${ip}`
    const rl = checkRateLimit(rlKey, 5, 60 * 1000)
    if (!rl.allowed) {
      return res.status(429).json({ message: 'Too many requests. Please try again later.' })
    }

    const RESEND_API_KEY = (process.env.RESEND_API_KEY || '').trim()
    const CONTACT_EMAIL = (process.env.CONTACT_EMAIL || process.env.EMAIL_TO || 'hello@nexuscore.ai').trim()
    const EMAIL_FROM = (process.env.EMAIL_FROM || 'NexusCore AI <onboarding@resend.dev>').trim()

    if (!RESEND_API_KEY) {
      return res.status(500).json({ message: 'Email service not configured. Missing RESEND_API_KEY.', success: false })
    }
    if (!CONTACT_EMAIL) {
      return res.status(500).json({ message: 'Email recipient not configured. Missing CONTACT_EMAIL.', success: false })
    }

    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #00BCD4; border-bottom: 2px solid #00BCD4; padding-bottom: 10px;">New Onboarding Submission</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: #f8f9fa; padding: 16px; border-radius: 8px;">
          <div><strong>Name:</strong> ${name}</div>
          <div><strong>Email:</strong> ${email}</div>
          ${phone ? `<div><strong>Phone:</strong> ${phone}</div>` : ''}
          ${businessName ? `<div><strong>Business:</strong> ${businessName}</div>` : ''}
          ${industry ? `<div><strong>Industry:</strong> ${industry}</div>` : ''}
          ${website ? `<div><strong>Website:</strong> ${website}</div>` : ''}
          ${selectedChallenge ? `<div><strong>Challenge:</strong> ${selectedChallenge}</div>` : ''}
          ${typeof estimatedSavings === 'number' ? `<div><strong>Est. Savings/yr:</strong> $${estimatedSavings.toLocaleString()}</div>` : ''}
        </div>
        ${specificNeeds ? `<div style="margin-top: 16px;"><strong>Specific Needs:</strong><br/><div style="white-space: pre-wrap;">${specificNeeds}</div></div>` : ''}
        <div style="margin-top: 16px; color: #777; font-size: 12px;">Completed at: ${completedAt || new Date().toISOString()}</div>
      </div>
    `

    const adminPayload = {
      from: EMAIL_FROM,
      to: [CONTACT_EMAIL],
      subject: `New Onboarding: ${name}`,
      html: adminHtml,
      text: `New Onboarding Submission\n\nName: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}${businessName ? `Business: ${businessName}\n` : ''}${industry ? `Industry: ${industry}\n` : ''}${website ? `Website: ${website}\n` : ''}${selectedChallenge ? `Challenge: ${selectedChallenge}\n` : ''}${typeof estimatedSavings === 'number' ? `Est. Savings/yr: $${estimatedSavings}\n` : ''}\nSpecific Needs:\n${specificNeeds || ''}\n\nCompleted at: ${completedAt || new Date().toISOString()}`,
    }

    const sendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(adminPayload),
    })
    if (!sendRes.ok) {
      const err = await sendRes.text()
      throw new Error(`Resend API error: ${sendRes.status} - ${err}`)
    }

    // Optional auto-reply to onboarding submitter
    const autoReply = {
      from: EMAIL_FROM,
      to: [email],
      subject: 'Thanks for starting onboarding — NexusCore AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00BCD4;">Great to meet you, ${name}!</h2>
          <p>We’ve received your onboarding details. A specialist will contact you shortly to tailor the best AI solution for your business.</p>
          <p style="color: #666;">If you have more information to share, just reply to this email.</p>
        </div>
      `,
      text: `Great to meet you, ${name}! We’ve received your onboarding details and will contact you shortly.`,
    }
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(autoReply),
    }).catch(() => {})

    await postAnalyticsEvent({ type: 'onboarding_submitted', payload: { name, email, selectedChallenge, estimatedSavings }, req })

    return res.status(200).json({ success: true, message: 'Onboarding submitted successfully' })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to submit onboarding', error: error instanceof Error ? error.message : 'Unknown error' })
  }
}