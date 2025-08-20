# Pixel N Purpose - Luxury Social Media Agency Website

A minimal, editorial single-page website built with Next.js for a boutique social media agency targeting luxury brands.

## 🎨 Design Features

- **Luxury Aesthetic**: Clean, minimal design with off-white (#F6F5F2) canvas and deep black (#0B0B0B) typography
- **Editorial Typography**: Libre Bodoni display serif for headlines, Inter sans-serif for body text
- **Micro-interactions**: Subtle hover animations, scroll-reveal effects, smooth transitions
- **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes
- **Accessibility**: AA contrast compliance, keyboard navigation, focus indicators

## 🏗 Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Fonts**: Next.js font optimization with Google Fonts
- **Build**: Static Site Generation (SSG) ready
- **Language**: TypeScript

## 📱 Sections

1. **Fixed Header**: Translucent header with smooth scroll navigation and mobile menu
2. **Hero Section**: Full-viewport video background with overlay content and CTA
3. **Gallery**: Bento/masonry grid showcasing work samples with hover effects  
4. **Services**: Three service cards with descriptions and images
5. **Contact Footer**: Contact form with social links and footer navigation

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles and Tailwind config
│   └── api/contact/        # Contact form API endpoint
├── components/
│   ├── Header.tsx          # Fixed navigation header
│   ├── Hero.tsx            # Video hero section
│   ├── Gallery.tsx         # Bento grid gallery
│   ├── Services.tsx        # Services section
│   └── Footer.tsx          # Contact form and footer
├── lib/
│   └── reveal.ts           # Scroll reveal animation utility
└── public/
    ├── textures/           # Grain texture assets
    ├── work/               # Gallery images
    └── fonts/              # Custom font files
```

## 🎬 Media Assets Needed

- **Videos**: Hero background videos (MP4/WebM, desktop/mobile variants)
- **Images**: Gallery portfolio images, service illustrations
- **Textures**: Grain overlay texture (200x200px, 4% opacity)
- **Fonts**: Canela font files (optional upgrade from Libre Bodoni)

## 🔧 Customization

- **Colors**: Modify theme colors in `app/globals.css`
- **Content**: Update copy in component files
- **Images**: Replace placeholder URLs with actual assets
- **Fonts**: Add custom font files in `/public/fonts/`

## 📊 Performance

- Static site generation for optimal loading
- Image optimization with Next.js
- Font optimization and preloading
- Minimal JavaScript bundle
- Responsive image delivery

## 🌟 Features

- Smooth scroll navigation
- Mobile-responsive design  
- Contact form with API integration
- Scroll-reveal animations
- Video controls for accessibility
- SEO-optimized metadata

## 🚀 Deployment

The project is configured for static export and can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
```

The built files will be in the `out/` directory, ready for deployment.
