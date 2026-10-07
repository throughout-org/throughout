module.exports = {
  safelist: [
    'bg-gradient-to-r',
    'from-sky-400',
    'via-blue-500',
    'to-indigo-500',
    'from-sky-100',
    'to-blue-200/80',
    'text-white',
    'text-blue-700',
    'hover:bg-gradient-to-r',
    'hover:from-sky-100',
    'hover:to-blue-200/80',
    'hover:text-blue-900',
    'border-white/30',
    'border-white/20',
    'border',
    'scale-105',
    'shadow-xl',
    'shadow-lg',
    'backdrop-blur-md',
    'rounded-full',
    'rounded-4xl',
    // Add any other classes you use dynamically
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        dark: '#10141a',
        card: '#181e26',
        accent: '#0084d1',
        accent2: '#60a5fa', // blue-400
        border: '#232a36',
        brand: {
          DEFAULT: '#6AB4FE',
          light: '#EAF3FD',
          pale: '#A8CEF4',
          dark: '#003366',
          secondary: '#A8CEF4',
        },
        // Design system — 60% Vercel / 25% Linear / 15% Stripe
        canvas: { DEFAULT: '#fafafa', elevated: '#ffffff', soft: '#f4f4f7' },
        ink: { DEFAULT: '#171717', 2: '#48484f', 3: '#85858c', 4: '#a3a3aa' },
        hairline: { DEFAULT: '#e6e6ea', strong: '#d6d6dc' },
        primary: {
          DEFAULT: '#0084d1',
          hover: '#3399ff',
          press: '#0069a8',
          soft: '#eaf3fd',
          bright: '#3399ff',
        },
        'dark-canvas': '#0a0a0d',
        'dark-surface-1': '#15151a',
        'dark-surface-2': '#1d1d22',
        'dark-navy': '#003366',
        'dark-hairline': '#2a2a30',
        'dark-ink': { DEFAULT: '#f5f5f7', muted: '#a6a6ae' },
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 32px 0 rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
