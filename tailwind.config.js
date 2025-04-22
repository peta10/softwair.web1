/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        vault: {
          background: '#0d0d0d',
          accent: '#00e070',
          text: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
};