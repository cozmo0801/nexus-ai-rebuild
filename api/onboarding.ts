import type { VercelRequest, VercelResponse } from '@vercel/node';

const handler = async (req: VercelRequest, res: VercelResponse) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
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
    completedAt
  } = req.body;

  // Basic validation
  if (!name || !email || !businessName || !industry || !selectedChallenge) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Map challenge IDs to readable names
  const challengeMap: { [key: string]: string } = {
    'inquiries': 'Too Many Customer Inquiries',
    'leads': 'Struggling with Lead Generation',
    'costs': 'High Operational Costs',
    'insights': 'Lack of Customer Insights'
  };

  const challengeTitle = challengeMap[selectedChallenge] || selectedChallenge;

  try {
    // Send email using direct Resend API
    const emailPayload = {
      from: 'NexusCore AI Onboarding <onboarding@resend.dev>',
      to: ['cozmo0801@gmail.com'],
      subject: `🚀 New Onboarding Complete: ${businessName} - ${challengeTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F0F23 100%); color: white; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #00BCD4; font-size: 28px; margin-bottom: 10px;">🚀 New NexusCore AI Onboarding Complete!</h1>
            <div style="width: 60px; height: 3px; background: linear-gradient(to right, #00BCD4, #8A2BE2); margin: 0 auto;"></div>
          </div>
          
          <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            <h2 style="color: #00BCD4; margin-top: 0; font-size: 20px; margin-bottom: 16px;">👤 Contact Information</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div>
                <p style="margin: 4px 0;"><strong style="color: #00BCD4;">Name:</strong> ${name}</p>
                <p style="margin: 4px 0;"><strong style="color: #00BCD4;">Email:</strong> <a href="mailto:${email}" style="color: #FFA500; text-decoration: none;">${email}</a></p>
              </div>
              <div>
                ${phone ? `<p style="margin: 4px 0;"><strong style="color: #00BCD4;">Phone:</strong> <a href="tel:${phone}" style="color: #FFA500; text-decoration: none;">${phone}</a></p>` : ''}
                ${website ? `<p style="margin: 4px 0;"><strong style="color: #00BCD4;">Website:</strong> <a href="${website}" style="color: #FFA500; text-decoration: none;">${website}</a></p>` : ''}
              </div>
            </div>
          </div>

          <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            <h2 style="color: #8A2BE2; margin-top: 0; font-size: 20px; margin-bottom: 16px;">🏢 Business Information</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <p style="margin: 4px 0;"><strong style="color: #8A2BE2;">Business:</strong> ${businessName}</p>
                <p style="margin: 4px 0;"><strong style="color: #8A2BE2;">Industry:</strong> ${industry}</p>
              </div>
              <div>
                <p style="margin: 4px 0;"><strong style="color: #8A2BE2;">Primary Challenge:</strong> ${challengeTitle}</p>
              </div>
            </div>
          </div>

          <div style="background: rgba(50, 205, 50, 0.15); border: 1px solid rgba(50, 205, 50, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; text-align: center;">
            <h2 style="color: #32CD32; margin-top: 0; font-size: 24px; margin-bottom: 16px;">💰 Estimated Annual Savings</h2>
            <div style="font-size: 48px; font-weight: bold; color: #32CD32; margin-bottom: 8px;">
              $${estimatedSavings.toLocaleString()}
            </div>
            <p style="color: rgba(255,255,255,0.8); margin: 0;">per year with NexusCore AI automation</p>
          </div>

          ${specificNeeds ? `
          <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
            <h2 style="color: #FF69B4; margin-top: 0; font-size: 20px; margin-bottom: 16px;">💭 Specific Requirements</h2>
            <p style="color: rgba(255,255,255,0.9); line-height: 1.6; white-space: pre-wrap; margin: 0;">${specificNeeds}</p>
          </div>
          ` : ''}

          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; text-align: center;">
            <h3 style="color: #FFA500; margin-top: 0; margin-bottom: 12px;">🎯 Next Steps</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px;">
              <div>
                <div style="background: #00BCD4; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 8px;">1</div>
                <p style="font-size: 12px; margin: 0; color: rgba(255,255,255,0.8);">Send confirmation email</p>
              </div>
              <div>
                <div style="background: #8A2BE2; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 8px;">2</div>
                <p style="font-size: 12px; margin: 0; color: rgba(255,255,255,0.8);">Contact within 24 hours</p>
              </div>
              <div>
                <div style="background: #32CD32; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-bottom: 8px;">3</div>
                <p style="font-size: 12px; margin: 0; color: rgba(255,255,255,0.8);">Create custom demo</p>
              </div>
            </div>
            <p style="font-size: 14px; color: rgba(255,255,255,0.7); margin: 0;">
              Completed onboarding on: ${new Date(completedAt).toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
🚀 New NexusCore AI Onboarding Complete!

👤 CONTACT INFORMATION
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

🏢 BUSINESS INFORMATION  
Business: ${businessName}
Industry: ${industry}
${website ? `Website: ${website}` : ''}

🎯 PRIMARY CHALLENGE
${challengeTitle}

💰 ESTIMATED ANNUAL SAVINGS
$${estimatedSavings.toLocaleString()} per year

${specificNeeds ? `
💭 SPECIFIC REQUIREMENTS
${specificNeeds}
` : ''}

🎯 NEXT STEPS:
1. Send confirmation email to customer
2. Contact within 24 hours for consultation  
3. Create personalized demo for their business

 Completed: ${new Date(completedAt).toLocaleString()}
      `
    };

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_DWv1JTQb_F6RZhMdjbdgMCKrMPddNK1Xn`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      throw new Error(`Resend API error: ${resendResponse.status} - ${errorData}`);
    }

    const responseData = await resendResponse.json();
    
    return res.status(200).json({ 
      message: 'Onboarding completed successfully! Our team will contact you within 24 hours.',
      id: responseData.id 
    });

  } catch (error) {
    console.error('Error sending onboarding email:', error);
    return res.status(500).json({ 
      message: 'Failed to complete onboarding. Please try again or contact us directly.' 
    });
  }
};

export default handler;