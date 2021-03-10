const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: colors.amber
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
