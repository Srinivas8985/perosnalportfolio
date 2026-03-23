/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#6366f1",
        secondary: "#22d3ee",
        accent:    "#ec4899",
        highlight: "#a78bfa",
        bg:        "#050816",
        surface:   "#0f172a",
      },
      fontFamily: {
        sans: ["Inter", "Outfit", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" }
        },
        scan: {
          from: { top: "-1px" },
          to:   { top: "100%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" }
        },
        auroraShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        "marquee":      "marquee 22s linear infinite",
        "scan":         "scan 12s linear infinite",
        "float":        "float 6s ease-in-out infinite",
        "aurora-shift": "auroraShift 6s ease infinite",
      },
      backgroundSize: {
        "300%": "300% 300%",
      }
    },
  },
  plugins: [],
}