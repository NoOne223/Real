/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sand:['"Quicksand"', 'sans-serif'],
        pata:['"Pattaya"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}