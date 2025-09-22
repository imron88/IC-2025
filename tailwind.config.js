/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      textStroke: {
        sm: "1px",
        DEFAULT: "2px",
        lg: "3px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(68%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f8f2",
          100: "#dcf0e2",
          200: "#bce1c9",
          300: "#8ccda3",
          400: "#56b176",
          500: "#118B50",
          600: "#0e7844",
          700: "#0c6038",
          800: "#0a4f2e",
          900: "#083f25",
        },
        secondary: {
          50: "#f7fbf8",
          100: "#eef7f1",
          200: "#d5eedc",
          300: "#b8e3c3",
          400: "#9dc18b",
          500: "#8ab574",
          600: "#7aa664",
          700: "#689453",
          800: "#567844",
          900: "#456236",
        },
        accent: {
          50: "#f4f7f6",
          100: "#e8efed",
          200: "#d1dedb",
          300: "#b3cac5",
          400: "#8db3aa",
          500: "#659287",
          600: "#578074",
          700: "#496b61",
          800: "#3d574f",
          900: "#334741",
        },
        text: {
          primary: "#3a7e44",
          secondary: "#2d6336",
          light: "#527a58",
        },
        background: {
          primary: "#EFEFEF",
          secondary: "#f8f8f8",
        },
        success: {
          50: "#f2fff8",
          100: "#e6fff1",
          200: "#c8ffe1",
          300: "#a9ffd1",
          400: "#7dffbb",
          500: "#4fffa1",
          600: "#26fc80",
          700: "#16db66",
          800: "#11be4e",
          900: "#0b6b30",
        },
        gred: "#D92F35",
        gyellow: "#F9B816",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  darkMode: "class",
};
