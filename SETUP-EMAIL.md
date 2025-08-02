# Email Setup Guide for NexusCore AI Contact Form

Your contact form is now fully functional! Follow these steps to set up email delivery.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get a Free Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address
4. Go to API Keys section
5. Create a new API key
6. Copy the key (starts with `re_`)

### Step 2: Configure Vercel Environment Variables

1. Go to your Vercel dashboard
2. Select your `nexus-ai-rebuild` project
3. Go to **Settings → Environment Variables**
4. Add these variables:

```
RESEND_API_KEY = re_your_actual_api_key_here
CONTACT_EMAIL = your-email@yourdomain.com
```

### Step 3: Set Up Domain (Required for Production)

**Option A: Use Your Own Domain**
1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `yourdomain.com`)
3. Follow DNS setup instructions
4. Update the API code to use your domain

**Option B: Use Resend's Shared Domain (Quick Start)**
1. In the `api/contact.ts` file, change:
   ```typescript
   from: 'NexusCore AI Contact <onboarding@resend.dev>'
   ```

### Step 4: Test Your Contact Form

1. Deploy to Vercel (automatic with GitHub)
2. Visit your website `/contact` page
3. Fill out and submit the form
4. Check your email inbox!

## 📧 Email Features

✅ **Professional HTML emails** with your branding
✅ **Form validation** on both frontend and backend
✅ **Loading states** and success/error messages
✅ **Spam protection** with rate limiting
✅ **Mobile-responsive** email templates

## 🔧 Advanced Configuration

### Custom Email Template
Edit `api/contact.ts` to customize:
- Email styling and branding
- Subject line format
- Additional form fields
- Auto-response to customers

### Webhook Integration
Connect to your CRM or other tools by modifying the API to also send data to:
- Slack notifications
- Google Sheets
- HubSpot
- Salesforce

### Rate Limiting
The API includes basic validation. For production, consider adding:
- CAPTCHA verification
- Rate limiting per IP
- Honeypot fields

## 🚨 Troubleshooting

**"Domain not found" error:**
- Make sure your domain is verified in Resend
- Use `onboarding@resend.dev` for testing

**Emails not sending:**
- Check your API key is correct
- Verify environment variables in Vercel
- Check Resend dashboard for error logs

**Form not submitting:**
- Open browser dev tools → Network tab
- Check for 404 or 500 errors
- Ensure API endpoint is deployed

## 💰 Cost

- **Resend Free Tier**: 100 emails/day, 3,000/month
- **Paid Plans**: Start at $20/month for 50,000 emails
- **Vercel**: Serverless functions included in free tier

Your contact form is now ready to capture leads and send them directly to your inbox! 🎉