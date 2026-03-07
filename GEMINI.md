# GEMINI.md - Pixel N Purpose Project Context

## Project Overview
**Pixel N Purpose** is a luxury boutique social media and branding agency website. It is built as a high-performance, SEO-optimized, single-page (with several landing pages) application with a minimal, editorial aesthetic.

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (PostCSS integration)
- **Animations**: Motion (formerly Framer Motion) for scroll reveals and micro-interactions
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Inter (Sans), Playfair Display (Serif), JetBrains Mono (Mono), Minipax (Local Serif)
- **Deployment**: Configured for static export (`output: 'export'`) to the `out/` directory, optimized for Netlify/Cloudflare Pages/Vercel.

### Key Features
- **Luxury Aesthetic**: Minimal design (#F6F5F2 canvas, #0B0B0B type) with grain texture overlays.
- **Advanced SEO**: Comprehensive JSON-LD structured data (`lib/structured-data.ts`), location-specific landing pages (Goa, Jaipur), and optimized metadata.
- **Performance**: Static site generation (SSG), image optimization (unoptimized for export compatibility but with WebP/AVIF support), and asset preloading.
- **Interactions**: Smooth scroll navigation, bento-grid gallery, and responsive mobile-first layouts.

---

## Cinematic Scroll-Driven Architecture

The core of the Pixel N Purpose experience is a **frame-based cinematic scroll system**. This architecture replaces standard scrolling with a "film-controlled" experience where user interaction advances image sequences on a canvas, interspersed with informational content sections.

### Animation Engine
- **Canvas-Based Rendering**: Uses a high-performance HTML5 Canvas to render preloaded image sequences (25-30 frames per scene).
- **Scroll-to-Frame Mapping**: Uses `framer-motion`'s `useScroll` and `useTransform` to map vertical scroll progress (px) to specific frame indices (0-29).
- **Sticky Pinning**: Animation containers are pinned (`sticky`) for a specific scroll duration (e.g., `200vh`) to allow the animation to play fully before revealing content.

### The 12-Section Sequence
1.  **Hero Portal**: Portal window collapses into a vortex.
2.  **Websites Animation**: Blue fluid sequence + "Websites" title fade.
3.  **Websites Content**: Glassmorphism cards revealing capabilities/projects.
4.  **Portfolio Animation**: Purple ink bloom + "Portfolios" title.
5.  **Portfolio Content**: Floating glass panels with case studies.
6.  **Packaging Animation**: Amber liquid sequence + "Packaging" title.
7.  **Packaging Content**: Product mockups in glass panels.
8.  **Photography Animation**: Silver burst + "Photography" title.
9.  **Photography Content**: Gallery previews in glass containers.
10. **Glass Showcase**: Transition scene with panels rising from water.
11. **Contact Animation**: Glowing lightsaber "?" beam sequence.
12. **Contact CTA**: Minimalist contact section and collaboration prompt.

### UI & Aesthetic
- **Glassmorphism**: High `backdrop-blur`, low-opacity backgrounds (`bg-white/5`), and subtle borders.
- **Cinematic Depth**: Radial gradients and noise overlays to create an atmospheric, premium studio feel.
- **Typography**: High-contrast pairing of **Minipax** (Serif) for narrative elements and **Inter** (Sans) for technical details.

---

## Project Structure

```text
C:\Projects\pixel-n-purpose\
├── app/                    # Next.js App Router (Routes, Layouts, API)
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── marketing-agency-*/ # Location-specific landing pages (Goa, Jaipur)
│   ├── services/           # Services page
│   └── api/contact/        # Contact form API endpoint
├── components/             # Reusable UI components
│   ├── magicui/            # Specialized UI components (e.g., shine-border)
│   └── StructuredData.tsx  # JSON-LD schema injection
├── hooks/                  # Custom React hooks (e.g., usePerformanceMonitoring)
├── lib/                    # Utilities, constants, and animation logic
├── public/                 # Static assets (images, fonts, videos, textures)
├── scripts/                # Maintenance and cleanup scripts
└── pixel-'n'-purpose/      # Sub-project (Vite/React with @google/genai) - Possibly legacy or experimental
```

---

## Building and Running

### Development
```powershell
npm run dev
```
Starts the Next.js development server.

### Production Build
```powershell
npm run build
```
Generates a static export in the `out/` directory.

### Preview Production
```powershell
npm run start
# OR
npm run preview
```
Serves the static files from the `out/` directory using `serve`.

### Maintenance
```powershell
npm run cleanup
```
Runs `scripts/cleanup.js`.

---

## Development Conventions

- **Surgical Metadata**: Pages use local `metadata.ts` or `metadata` export in `page.tsx` for granular SEO control.
- **Component Patterns**: 
  - Prefer Functional Components with TypeScript.
  - Use `cn` utility from `lib/utils.ts` for Tailwind class merging.
  - Client components must have the `'use client';` directive.
- **Styling**: Tailwind CSS v4 is used. Global styles and theme variables are in `app/globals.css`.
- **Animations**: Use `motion` for declarative animations. Check `lib/reveal.ts` for reusable reveal logic.
- **Images**: Use `OptimizedImage.tsx` or Next.js `<Image />` component. Since `output: 'export'` is active, images are unoptimized at runtime but configured for multiple formats.
- **SEO**: Always update `lib/structured-data.ts` and `SEO_IMPLEMENTATION.md` when adding new services or locations.

---

## Sub-Project Context
The `pixel-'n'-purpose/` directory contains a Vite-based React project. It appears to be an experimental playground or a legacy version featuring:
- **Google GenAI**: Integration with `@google/genai`.
- **Database**: `better-sqlite3`.
- **Server**: Express.js integration.
Unless explicitly requested, focus on the root Next.js project for website updates.
