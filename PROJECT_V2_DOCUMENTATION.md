# Pixel & Purpose - Project V2 Documentation (Archived)

This document outlines the content, features, and structure of the **v2** branch of the Pixel & Purpose website before it was cleared for v3.

## 🌟 Overview
Pixel & Purpose is a premium digital agency specializing in luxury brand narratives. The v2 site was a high-performance Next.js 15 application featuring smooth scroll animations, glassmorphism UI elements, and a sophisticated editorial aesthetic.

## 🛠 Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, Vanilla CSS (for custom animations like `GradientBlinds`)
- **Animations**: Framer Motion (Motion), custom Intersection Observer-based `ScrollReveal`
- **Integrations**: EmailJS (Contact Form)
- **Deployment**: Configured for static export (`next build` + `out/` directory)

## 📋 Core Services
The agency offered four primary disciplines, each with dedicated sections and documentation:

1. **Website Design**
   - **Tagline**: Digital presence that converts.
   - **Focus**: UX Strategy, UI Design, SEO, Performance.
   - **Asset**: `/images/website-design.png`

2. **Portfolio Design**
   - **Tagline**: Work that speaks before you do.
   - **Focus**: Content Curation, Typography, Case Studies.
   - **Asset**: `/images/portfolio-design.jpg`

3. **Packaging Design**
   - **Tagline**: Shelves won at first sight.
   - **Focus**: Structural Concept, Print-Ready Artwork, Materials.
   - **Asset**: `/images/package-design.png`

4. **Photography**
   - **Tagline**: Moments captured with intent.
   - **Focus**: Product, Lifestyle, Architectural, Styling.
   - **Asset**: `/images/photography-image.png`

## 🎨 Key UI Components
- **PortfolioGrid**: A refined 3-column grid showcasing "Selected Work":
  - **Website Projects**: Linked to `/pdf/website-design.pdf`
  - **Portfolio Projects**: Linked to `/pdf/portfolio-design.pdf`
  - **Packaging Projects**: Linked to `/pdf/package-design.pdf`
- **Hero**: A full-screen video background (`pnp-hero-video.webm`) with high-impact typography.
- **GlassPanel / ShineBorder**: Specialized containers utilizing glassmorphism and animated borders.
- **ScrollReveal**: A wrapper component ensuring elements animate into view with precision.

## 📂 Final File Structure (v2)
- `app/`:
  - `(pages)`: About, Contact, Services, Privacy, Terms.
  - `api/`: Backend logic for forms/data.
  - `marketing-agency-goa/` & `marketing-agency-jaipur/`: SEO-optimized landing pages.
- `components/`: Modular UI units (Header, Footer, Hero, ServicesSection, etc.).
- `hooks/`: Custom React hooks for performance and form handling.
- `lib/`: Utility functions and configuration (EmailJS, Structured Data).
- `public/`:
  - `/images/`: Core branding and service imagery.
  - `/pdf/`: Downloadable project case studies.
  - `/textures/`: Aesthetic overlays (grain).

## 🚀 Build & Deployment
The v2 branch was fully optimized for production:
- **Build Command**: `npm run build`
- **Export**: Static HTML/CSS/JS in the `out/` folder.
- **Integrity**: Verified via a complete build cycle before archival.

---
*Documented on: Friday, 3 April 2026*
