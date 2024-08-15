/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mons:['"Montserrat"', 'sans-serif'],
        gupter:['"Gupter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
