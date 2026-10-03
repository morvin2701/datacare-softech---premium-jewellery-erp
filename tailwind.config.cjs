/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#FBFAF6', deep: '#F3F0E7' },
        navy: { DEFAULT: '#0A1120', light: '#111B2E', muted: '#18243A', line: '#243149' },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#E3C47A',
          dark: '#7D6020',
          soft: '#F4EBD3',
        },
        ink: { DEFAULT: '#17140F', muted: '#4F4A42', faint: '#7A746A' },
        line: '#E6E0D2',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '84rem', wide: '96rem' },
      borderRadius: { card: '1.25rem' },
      boxShadow: {
        card: '0 1px 2px rgba(10,17,32,.04), 0 8px 24px -8px rgba(10,17,32,.08)',
        lift: '0 2px 6px rgba(10,17,32,.06), 0 24px 48px -16px rgba(10,17,32,.18)',
        gold: '0 10px 30px -10px rgba(201,162,75,.55)',
      },
      transitionTimingFunction: { premium: 'cubic-bezier(.16,1,.3,1)' },
    },
  },
  plugins: [],
};
