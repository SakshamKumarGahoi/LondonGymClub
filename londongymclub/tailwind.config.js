/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0D0D0D',
        'primary-text': '#FFFFFF',
        'secondary-text': '#B0B0B0',
        'cta-red': '#E50914',
        'card-bg': '#2E2E2E',
        'card-border': '#4B4B4B',
      }
    },
  },
  plugins: [],
}
