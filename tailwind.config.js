module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F5F2',
        panel: '#EDEBE7',
        ink: '#0B0B0B',
        line: 'rgba(26,26,26,0.16)',
        champagne: '#C7A977',
        focus: 'rgba(11,11,11,0.3)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      spacing: {
        24: '6rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',
        96: '24rem',
        128: '32rem',
      },
      borderColor: {
        hairline: 'rgba(26,26,26,0.16)',
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
    },
  },
  plugins: [],
};
