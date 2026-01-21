/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0d14',
        cardBg: '#11151c',
        primary: '#ff8a00', // The orange/amber accent
      },
    },
  },
  plugins: [],
}