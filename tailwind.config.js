/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e6f6ff',
          100: '#bfeaff',
          200: '#80d4ff',
          300: '#33bbff',
          400: '#00a2ff',
          500: '#008be6',
          600: '#0070b3',
          700: '#005380',
          800: '#003a59',
          900: '#00263b',
        },
        sand: '#f6d365',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}


