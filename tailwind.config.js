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
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        dark: '#10141a',
        card: '#181e26',
        accent: '#2563eb', // blue-600
        accent2: '#60a5fa', // blue-400
        border: '#232a36',
        brand: {
          DEFAULT: '#6AB4FE',
          light: '#EAF3FD',
          pale: '#A8CEF4',
          dark: '#003366',
          secondary: '#A8CEF4',
        },
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
