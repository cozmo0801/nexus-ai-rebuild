import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('=== Contact API Called ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, company, phone, subject, message } = req.body;

    console.log('Form data received:', { firstName, lastName, email, company, phone, subject, message });

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Send email using direct fetch to Resend API
    console.log('Sending email via Resend API...');
    
    const emailPayload = {
      from: 'NexusCore AI Contact <onboarding@resend.dev>',
      to: ['cozmo0801@gmail.com'],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #1A1A2E; color: white; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00BCD4; margin-bottom: 10px;">💬 New Contact Form Submission</h1>
            <div style="width: 60px; height: 3px; background: linear-gradient(to right, #00BCD4, #8A2BE2); margin: 0 auto;"></div>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h2 style="color: #00BCD4; margin-top: 0;">👤 Contact Information</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #FFA500;">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #FFA500;">${phone}</a></p>` : ''}
          </div>

          <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #8A2BE2; margin-top: 0;">📝 Subject</h3>
            <p style="font-size: 18px; color: #00BCD4; font-weight: bold;">${subject}</p>
            
            <h3 style="color: #8A2BE2;">💬 Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; padding: 15px; background: rgba(0,188,212,0.1); border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #00BCD4;">
              📅 Submitted: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Subject: ${subject}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
      `
    };

    console.log('Email payload:', emailPayload);

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_DWv1JTQb_F6RZhMdjbdgMCKrMPddNK1Xn`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    console.log('Resend response status:', resendResponse.status);
    
    const resendData = await resendResponse.text();
    console.log('Resend response data:', resendData);

    if (!resendResponse.ok) {
      throw new Error(`Resend API error: ${resendResponse.status} - ${resendData}`);
    }

    const responseData = JSON.parse(resendData);
    console.log('Email sent successfully! ID:', responseData.id);

    return res.status(200).json({
      message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
      success: true,
      emailId: responseData.id
    });

  } catch (error) {
    console.error('=== ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');

    return res.status(500).json({
      message: 'Failed to send email. Please try again or contact us directly.',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      debug: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}