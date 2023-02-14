/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  mode: "jit",
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
        },
        acid: {
            ...require("daisyui/src/colors/themes")["[data-theme=acid]"],
          neutral: "rgb(250,250,250)",
          "base-300": "rgb(225,225,225)",
          secondary : "rgb(255,0,244)",
        }
      },
    ],

  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-font-inter"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
    // ...
  ],
};
