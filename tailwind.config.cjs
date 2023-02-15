/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./renderer/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "cursive"],
        bungeeShade: ["Bungee Shade", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
