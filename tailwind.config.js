/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "active": "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
      "error": "hsl(0, 100%, 66%)",
      "white": "hsl(0, 0%, 100%)",
      "light-gray-violet": "hsl(270, 3%, 87%)",
      "dark-gray-violet": "hsl(279, 6%, 55%)",
      "dark-violet": "hsl(278, 68%, 11%)"
    },
  },
  plugins: [],
}
