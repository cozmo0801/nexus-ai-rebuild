module.exports = async (req, res) => {
  console.log('=== Contact API Called ===')
  console.log('Method:', req.method)

  // CORS and response headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  // Handle preflight
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
      console.log('No valid JSON body received')
      return res.status(400).json({ message: 'Invalid or missing JSON body' })
    }

    const { firstName, lastName, email, company, phone, subject, message } = parsedBody

    console.log('Form data received:', { firstName, lastName, email, company, phone, subject })

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    // Configuration via environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.EMAIL_TO || 'hello@nexuscore.ai'
    const EMAIL_FROM = process.env.EMAIL_FROM || 'NexusCore AI Contact <onboarding@resend.dev>'

    if (!RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable')
      return res.status(500).json({
        message: 'Email service not configured. Missing RESEND_API_KEY.',
        success: false,
      })
    }

    if (!CONTACT_EMAIL) {
      console.error('Missing CONTACT_EMAIL environment variable')
      return res.status(500).json({
        message: 'Email recipient not configured. Missing CONTACT_EMAIL.',
        success: false,
      })
    }

    // Prepare email payload
    const emailPayload = {
      from: EMAIL_FROM,
      to: [CONTACT_EMAIL],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00BCD4; border-bottom: 2px solid #00BCD4; padding-bottom: 10px;">
            New Contact Form Submission - NexusCore AI
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          </div>

          <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Subject</h3>
            <p style="font-weight: bold; color: #00BCD4;">${subject}</p>
            
            <h3 style="color: #333;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This email was sent from the NexusCore AI website contact form.
              <br>Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission - NexusCore AI

Name: ${firstName} ${lastName}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Subject: ${subject}

Message:
${message}

Submitted on: ${new Date().toLocaleString()}
      `,
    }

    console.log('Sending email via Resend API...')

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    console.log('Resend response status:', resendResponse.status)

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend error response:', errorText)
      throw new Error(`Resend API error: ${resendResponse.status} - ${errorText}`)
    }

    const responseData = await resendResponse.json()
    console.log('Email sent successfully! ID:', responseData.id)

    return res.status(200).json({
      message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      success: true,
      emailId: responseData.id,
    })
  } catch (error) {
    console.error('=== ERROR ===')
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error')

    return res.status(500).json({
      message: 'Failed to send email. Please try again or contact us directly.',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}

function safeParseJson(value) {
  try {
    return JSON.parse(value)
  } catch (_) {
    return null
  }
}

async function readBody(req) {
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