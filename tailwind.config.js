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
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        scan:    { from: { top: "-1px" }, to: { top: "100%" } },
      },
      animation: {
        "marquee": "marquee 22s linear infinite",
        "scan":    "scan 12s linear infinite",
      },
    },
  },
}