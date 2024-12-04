/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'serif',],
      'Poppins': ['Poppins', 'serif',],
      'Inter': ['Inter', 'serif',],
    },
    extend: {
      colors: {
        'primary-color' : '#555252',
        'second-color' : '#a749ff'
      }
    },
  },
  plugins: [],
}