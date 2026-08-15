/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#213555",
          light: "#3E5879",
        },
        secondary: {
          dark: "#A88854",
          light: "#F5EFE7",
        },
        profile: {
          dark: "#170E17",
          light: "#1E151E",
        },
        home: {
          white: "#FEFAF6",
          extra_light: "#EADBC8",
          maroon: "#5F374B",
          blue: "#430A5D",
        },
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0rem",
            visibility: "hidden",
          },
          "100%": {
            width: "110%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 5s steps(20) infinite alternate, blink .9s infinite",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};


