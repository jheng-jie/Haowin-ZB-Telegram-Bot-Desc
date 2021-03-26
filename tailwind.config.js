const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: colors.amber
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
