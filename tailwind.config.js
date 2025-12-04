module.exports = {
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
