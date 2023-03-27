/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
