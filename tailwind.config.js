/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  mode: "jit",
  daisyui: {
    themes: ["forest", "acid"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-font-inter"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
    // ...
  ],
};
