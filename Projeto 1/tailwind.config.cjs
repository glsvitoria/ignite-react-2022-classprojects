/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts, tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00875F",
        "green-light": "#00B37E",
        gray: {
          900: "#121214",
          800: "#202024",
          700: "#323238",
          600: "#7C7C8A",
          500: "#8D8D99",
          400: "#C4C4CC",
          300: "#E1E1E6",
        },
        danger: "#F75A68",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
