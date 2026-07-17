/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAFAF8',
          deep: '#F2F1EC',
        },
        navy: {
          DEFAULT: '#0B1220',
          light: '#141D2E',
          muted: '#1A2438',
          line: '#27324A',
        },
        gold: {
          DEFAULT: '#C8A24A',
          light: '#D4B366',
          dark: '#A8863A',
          muted: '#E8D5A3',
          soft: '#F3E9CF',
        },
        link: {
          DEFAULT: '#3D5A80',
          hover: '#2C4360',
        },
        ink: {
          DEFAULT: '#1C1917',
          muted: '#57534E',
          faint: '#78716C',
        },
        line: '#E7E3D9',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'Cambria', 'serif'],
      },
      letterSpacing: {
        brand: '0.18em',
      },
      borderRadius: {
        card: '1.25rem',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(11, 18, 32, 0.05), 0 8px 24px rgba(11, 18, 32, 0.05)',
        'card-hover': '0 8px 20px rgba(11, 18, 32, 0.08), 0 24px 48px rgba(11, 18, 32, 0.10)',
        gold: '0 1px 2px rgba(11, 18, 32, 0.16), 0 4px 12px -6px rgba(168, 134, 58, 0.28)',
        'gold-lg': '0 2px 4px rgba(11, 18, 32, 0.18), 0 8px 20px -8px rgba(168, 134, 58, 0.40)',
        'inner-line': 'inset 0 0 0 1px rgba(231, 227, 217, 0.9)',
      },
      maxWidth: {
        content: '80rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'ambient-shift': 'ambient-shift 14s ease-in-out infinite alternate',
        'fade-up': 'fade-up 0.5s var(--ease-premium, cubic-bezier(0.16,1,0.3,1)) forwards',
        shine: 'shine 3.5s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'marquee-right': 'marquee-right 38s linear infinite',
      },
      keyframes: {
        'ambient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
