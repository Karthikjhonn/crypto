/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#392F5A',
        'secondary': '#4C8787',
        'third':'#ff5b2b',
        'upcolor':'#16c784',
        'downcolor':'#ea3943',
        'half-white': '#F8F8F8',

      }
    },
  },
  plugins: [],
}

