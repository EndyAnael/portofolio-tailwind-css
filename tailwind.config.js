/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '40px',
    },
    extend: {
      colors: {
        primary: '#64748b',
        dark: '#020617',
        secondary: '#64748b'
      },
      screens: {
        '2xl': '1320px',
        'tiny': { 'max': '399px' },
      }
    }
  },
  plugins: [],
}

