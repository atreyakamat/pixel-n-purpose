# Environment Variables Setup for Production

Since you removed Cloudflare, here are the steps to set up your EmailJS environment variables in your new deployment platform.

## Required Environment Variables
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_hqpejaj
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_n32edle
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=5oUjsaZQ0kDhDVrm3
```

## Option 1: Netlify Deployment

1. Go to your [Netlify dashboard](https://app.netlify.com/)
2. Select your Pixel & Purpose site
3. Go to **Site settings** > **Environment variables**
4. Click **Add variable** for each of these:
   - **Key:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID` **Value:** `service_hqpejaj`
   - **Key:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` **Value:** `template_n32edle`
   - **Key:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` **Value:** `5oUjsaZQ0kDhDVrm3`
5. Click **Save** and redeploy your site

## Option 2: GitHub Pages Deployment

1. Go to your GitHub repository: `https://github.com/atreyakamat/pixel-n-purpose`
2. Click **Settings** tab
3. Scroll down to **Secrets and variables** > **Actions**
4. Click **New repository secret** for each variable:
   - **Name:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID` **Value:** `service_hqpejaj`
   - **Name:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` **Value:** `template_n32edle`
   - **Name:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` **Value:** `5oUjsaZQ0kDhDVrm3`

5. Update your GitHub Actions workflow (`.github/workflows/pages.yml`) to use these secrets:

```yaml
- name: Build
  run: npm run build
  env:
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_SERVICE_ID }}
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID }}
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }}
```

## Which deployment method are you using?

Let me know if you're using Netlify or GitHub Pages, and I can help you set it up specifically!
