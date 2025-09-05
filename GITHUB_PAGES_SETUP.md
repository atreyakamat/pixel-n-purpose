# GitHub Pages + GoDaddy Domain Setup 🚀

## Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/atreyakamat/pixel-n-purpose`
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

## Step 2: Create GitHub Actions Workflow
Create this file: `.github/workflows/pages.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-github-pages@v2
```

## Step 3: Configure Custom Domain
1. In your repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain: `pixelnpurpose.com`
3. Click **Save**

## Step 4: GoDaddy DNS Setup
1. Login to your GoDaddy account
2. Go to **Domain Settings** for `pixelnpurpose.com`
3. Click **DNS** or **Manage DNS**
4. Add these records:

### A Records (Point to GitHub Pages)
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### CNAME Record (for www subdomain)
```
Type: CNAME
Name: www
Value: atreyakamat.github.io
```

## Step 5: Enable HTTPS
1. In GitHub Pages settings, check **Enforce HTTPS**
2. GitHub will automatically provide SSL certificate

## Step 6: Deploy
1. Push the workflow file to your repository
2. GitHub Actions will automatically build and deploy
3. Your site will be live at `https://pixelnpurpose.com`

## ✅ That's it!
Your site will be live on your custom domain in ~10-15 minutes!

## Troubleshooting:
- **DNS changes take 24-48 hours to propagate**
- **Check GitHub Actions tab for build status**
- **Verify domain ownership in GitHub Pages settings**
