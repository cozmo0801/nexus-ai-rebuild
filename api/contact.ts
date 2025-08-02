import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend('re_DWv1JTQb_F6RZhMdjbdgMCKrMPddNK1Xn');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('Contact API called with method:', req.method);
  console.log('Request body:', req.body);

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, company, phone, subject, message } = req.body;

  console.log('Extracted form data:', { firstName, lastName, email, company, phone, subject, message });

  // Basic validation
  if (!firstName || !lastName || !email || !subject || !message) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Invalid email:', email);
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    console.log('Attempting to send email...');
    // Send email using Resend SDK
    const data = await resend.emails.send({
      from: 'NexusCore AI Contact <onboarding@resend.dev>',
      to: ['cozmo0801@gmail.com'],
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
        `
      });

        console.log('Resend response:', data);

    if (data.error) {
      console.error('Resend error:', data.error);
      throw new Error(data.error.message || 'Failed to send email');
    }
    
    console.log('Email sent successfully!');
    return res.status(200).json({
      message: 'Email sent successfully! We\'ll get back to you within 24 hours.',
      id: data.data?.id
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Failed to send email. Please try again or contact us directly.',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}