import { safeParseJson, readBody, isValidEmail, getClientIp, checkRateLimit, postAnalyticsEvent } from './_utils.mjs'

export default async function handler(req, res) {
  console.log('=== Contact API Called ===')
  console.log('Method:', req.method)

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
      console.log('No valid JSON body')
      return res.status(400).json({ message: 'Invalid or missing JSON body' })
    }

    const { firstName, lastName, email, company, phone, subject, message } = parsedBody
    console.log('Form parsed:', { firstName, lastName, email, subject })

    if (!firstName || !lastName || !email || !subject || !message) {
      console.log('Missing required fields')
      return res.status(400).json({ message: 'Missing required fields' })
    }
    if (!isValidEmail(email)) {
      console.log('Invalid email format:', email)
      return res.status(400).json({ message: 'Invalid email address' })
    }

    const ip = getClientIp(req)
    const rlKey = `contact:${ip}`
    const rl = checkRateLimit(rlKey, 5, 60 * 1000)
    if (!rl.allowed) {
      console.log('Rate limited:', ip)
      return res.status(429).json({ message: 'Too many requests. Please try again later.' })
    }

    const RESEND_API_KEY = (process.env.RESEND_API_KEY || '').trim()
    const CONTACT_EMAIL = (process.env.CONTACT_EMAIL || process.env.EMAIL_TO || 'hello@nexuscore.ai').trim()
    const EMAIL_FROM = (process.env.EMAIL_FROM || 'NexusCore AI Contact <onboarding@resend.dev>').trim()
    console.log('Env presence:', {
      RESEND_API_KEY: !!RESEND_API_KEY,
      CONTACT_EMAIL: !!CONTACT_EMAIL,
      EMAIL_FROM: !!EMAIL_FROM,
    })

    if (!RESEND_API_KEY) {
      return res.status(500).json({ message: 'Email service not configured. Missing RESEND_API_KEY.', success: false })
    }
    if (!CONTACT_EMAIL) {
      return res.status(500).json({ message: 'Email recipient not configured. Missing CONTACT_EMAIL.', success: false })
    }

    const adminEmailPayload = {
      from: EMAIL_FROM,
      to: [CONTACT_EMAIL],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00BCD4; border-bottom: 2px solid #00BCD4; padding-bottom: 10px;">New Contact Form Submission - NexusCore AI</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href=\"mailto:${email}\">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> <a href=\"tel:${phone}\">${phone}</a></p>` : ''}
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Subject</h3>
            <p style="font-weight: bold; color: #00BCD4;">${subject}</p>
            <h3 style="color: #333;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `New Contact Form Submission - NexusCore AI\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n${company ? `Company: ${company}` : ''}\n${phone ? `Phone: ${phone}` : ''}\n\nSubject: ${subject}\n\nMessage:\n${message}\n\nSubmitted on: ${new Date().toLocaleString()}`,
      reply_to: email,
    }

    console.log('Sending admin email...')
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(adminEmailPayload),
    })
    console.log('Admin email status:', resendResponse.status)
    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Admin email failed:', errorText)
      throw new Error(`Resend API error: ${resendResponse.status} - ${errorText}`)
    }

    const autoReplyPayload = {
      from: EMAIL_FROM,
      to: [email],
      subject: 'We received your message — NexusCore AI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00BCD4;">Thanks for reaching out, ${firstName}!</h2>
          <p>We received your message and our team will get back to you within 24 hours.</p>
          <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <p style="margin: 0; color: #555;">For your reference, here’s a copy of your message:</p>
            <p style="white-space: pre-wrap; color: #333;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #777;">If this wasn’t you, please ignore this email.</p>
        </div>
      `,
      text: `Thanks for reaching out, ${firstName}! We received your message and will get back to you within 24 hours.\n\nYour message:\n${message}`,
      reply_to: CONTACT_EMAIL,
    }

    console.log('Sending auto-reply...')
    try {
      const autoRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(autoReplyPayload),
      })
      console.log('Auto-reply status:', autoRes.status)
      if (!autoRes.ok) {
        const errText = await autoRes.text()
        console.error('Auto-reply failed:', errText)
      }
    } catch (e) {
      console.error('Auto-reply error:', e)
    }

    await postAnalyticsEvent({ type: 'contact_submitted', payload: { firstName, lastName, email, company, phone, subject }, req })

    return res.status(200).json({
      message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      success: true,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to send email. Please try again or contact us directly.',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}