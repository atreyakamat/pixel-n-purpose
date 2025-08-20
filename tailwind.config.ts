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
        canvas: '#F6F5F2', // Pantone 11-0602 TCX "Snow White"
        panel: '#EDEBE7',   // Pantone 12-0605 TCX "Gardenia"
        ink: '#0B0B0B',     // Deep black typography
        line: 'rgba(26,26,26,0.16)', // Hairline/Lines
        champagne: '#C7A977', // Accent (sparingly)
        focus: 'rgba(11,11,11,0.3)', // Focus ring
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
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
