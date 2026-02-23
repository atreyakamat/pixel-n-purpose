import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Static export (for Netlify / any CDN) ─────────────────
  // Generates plain HTML/CSS/JS in /out — no Node server needed.
  output: 'export',
  trailingSlash: true,

  // ── Images ────────────────────────────────────────────────
  // next/image optimisation requires a Node server, so it must
  // be disabled in static-export mode.
  images: {
    unoptimized: true,
  },

  // ── Security / hygiene ────────────────────────────────────
  poweredByHeader: false,
  compress: true,

  // ── Compiler optimisations ────────────────────────────────
  compiler: {
    // Strip console.* calls from production bundles
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ── Package import optimisation ───────────────────────────
  // Tree-shakes large packages so only used icons/functions ship
  experimental: {
    optimizePackageImports: ['lucide-react', '@emailjs/browser'],
  },
};

export default nextConfig;
