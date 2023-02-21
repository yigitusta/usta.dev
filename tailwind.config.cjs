/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./renderer/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "cursive"],
        bungeeShade: ["Bungee Shade", "cursive"],
      },
      colors: {
        bgLayer: "rgba(0, 20, 30, 0.5)",
      },
    },
  },
  plugins: [require("daisyui")],
};
