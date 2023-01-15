/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#BEA000",
        neutral: "#373737",
        dust: "#F0F0F0",
        tertiary: "#E0E7EB"
      }
    },
  },
  plugins: [],
}