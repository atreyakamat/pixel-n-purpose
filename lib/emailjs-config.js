// EmailJS template configuration guide

/* 
Your EmailJS template matches this format:

Subject: New Contact Form Submission

Email Template Body:
---
New Contact Form Submission

Name: {{from_name}}

Email: {{from_email}}

Brand: {{brand}}

Message:

{{message}}

Send to: {{to_email}}
---

Template Variables being sent:
- from_name (sender's name)
- from_email (sender's email)  
- brand (brand/company)
- message (main message)
- to_email (hello@pixelnpurpose.com)

✅ These field names now match your EmailJS template exactly!
✅ Emails will be sent to: hello@pixelnpurpose.com
*/

export const EmailJSConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};