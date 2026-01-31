import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Brand Palette
        charcoal: '#1a1a1a',
        'soft-black': '#0d0d0d',
        ivory: '#faf9f7',
        'warm-ivory': '#f5f4f0',
        stone: '#e8e6e1',
        taupe: '#d4cfc5',
        sand: '#c9c2b5',
        brass: '#b8985a',
        'muted-brass': '#a68b4d',
        clay: '#9a7b4f',
        // Legacy colors
        primary: '#b8985a',
        'background-light': '#faf9f7',
        'background-dark': '#1a1a1a',
        canvas: '#faf9f7',
        panel: '#f5f4f0',
        ink: '#1a1a1a',
        line: 'rgba(26,26,26,0.12)',
        champagne: '#b8985a',
        focus: 'rgba(26,26,26,0.3)',
        accent: '#b8985a',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-minipax)', 'serif'],
      },
      spacing: {
        24: '6rem',   // 96px
        32: '8rem',   // 128px
        48: '12rem',  // 192px
        64: '16rem',  // 256px
        96: '24rem',  // 384px
        128: '32rem', // 512px
      },
      fontSize: {
        'display-1': ['64px', '72px'],
        'display-2': ['40px', '48px'],
        'h3': ['24px', '32px'],
        'body': ['16px', '24px'],
        'caption': ['12px', '16px'],
      },
      letterSpacing: {
        caps: '0.08em',
        tight: '-0.02em',
        wide: '0.2em',
      },
      backgroundImage: {
        grain: "url('/textures/grain.png')",
      },
      transitionDuration: {
        200: '200ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
};
export default config;
