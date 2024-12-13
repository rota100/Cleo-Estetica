/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6AADA7',
          DEFAULT: '#3E6769',
          dark: '#2D4B4D',
        }
      },
    },
  },
  plugins: [],
};