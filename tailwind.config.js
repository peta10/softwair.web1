/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: [
        'bg-gradient-to-r',
        'from-[#00FC61]',
        'to-[#248AFF]',
        'bg-clip-text',
        'text-transparent'
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        primary: {
          // Improved green with better contrast
          DEFAULT: '#00D861',
          hover: '#00C058',
          light: '#E6FFF2'
        },
        secondary: {
          // Improved blue with better contrast
          DEFAULT: '#1A7FFF',
          hover: '#0066E6',
          light: '#E6F0FF'
        },
        gray: {
          // Improved gray scale for better readability
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529'
        },
        dark: {
          // Improved dark theme colors
          DEFAULT: '#121316',
          surface: '#1A1B1F',
          accent: '#2A2B2F'
        }
      }
    },
  },
  plugins: [],
};
