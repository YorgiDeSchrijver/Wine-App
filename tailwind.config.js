/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["app/**/*.{tsx,jsx,ts,js}", "components/**/*.{tsx,jsx,ts,js}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#D27842",
        secondary: "#474747",
        dark: "#0C0F14",
        "dark-light": "#2E333E",
        light: "#4D4F52",
        white: "#F5F5F5",
        "white-smoke": "#b5b5b5",
      },
      fontFamily: {
        varela: ["VarelaRound_400Regular"],
      },
    },
  },
};
