/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: '#1e1b4b',
          hover: '#2d2a6e',
          active: '#4338ca',
        }
      }
    },
  },
  plugins: [],
}
