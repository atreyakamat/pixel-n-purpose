# Email Setup Guide for Contact Form

## 🚀 Setting Up Email Functionality

Your contact form is now ready to send emails! Follow these steps to configure EmailJS:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and give it a name (e.g., "pixelnpurpose-gmail")

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Brand:</strong> {{brand}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
    <hr>
    <p><em>This message was sent from your website contact form.</em></p>
</body>
</html>
```

**Plain Text Body:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Brand: {{brand}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

### Step 4: Get Your Credentials
1. **Service ID**: From your email service (looks like: `service_xxxxxx`)
2. **Template ID**: From your email template (looks like: `template_xxxxxx`)
3. **Public Key**: From your account settings (looks like: `xxxxxxxxxxxxxx`)

### Step 5: Update Environment Variables
Update your `.env.local` file with the actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Test Your Contact Form
1. Restart your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check your email for the test message

## 📧 Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email
- `{{brand}}` - Brand/company name
- `{{message}}` - Contact's message
- `{{to_email}}` - Your email address (automatically set)

## 🔧 Troubleshooting

### Common Issues:

1. **"EmailJS configuration is missing"**
   - Check that all environment variables are set in `.env.local`
   - Make sure the file is in your project root

2. **Emails not sending**
   - Verify your EmailJS account is active
   - Check that your email service is properly connected
   - Ensure your email template is published

3. **Template variables not working**
   - Make sure variable names match exactly (case-sensitive)
   - Check that all required variables are included

### Testing Tips:
- Use your own email for testing first
- Check EmailJS dashboard for delivery status
- Look at browser console for error messages

## 💡 Pro Tips

1. **Email Templates**: Customize the HTML template to match your brand
2. **Spam Protection**: Consider adding reCAPTCHA for production
3. **Analytics**: EmailJS provides delivery analytics
4. **Backup**: Keep a copy of your credentials in a secure place

## 🎯 Next Steps

Once everything is working:
1. Update the email template design to match your brand
2. Add any additional fields you need (phone, company size, etc.)
3. Consider adding file upload for attachments
4. Set up auto-responses for form submissions

Your contact form is now fully functional! 🎉
