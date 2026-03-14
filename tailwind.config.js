/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        secondary: "#0ea5e9",
        accent: "#0284c7"
      }
    }
  },
  plugins: [],
}