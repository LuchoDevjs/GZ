import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "background-default": "#0a0908",
        primary: "#e5e5e5",
        secondary: "#006ff0",
        "blue-light-opacity": "#0070f068",
        "light-opacity": "#e5e5e560",
        "black-opacity": "#0000007d",
      },
      backgroundImage: {
        "gradient-blue-light":
          "linear-gradient(90deg, #006ff0 0%, rgba(255, 255, 255, 0.75) 95% )",
        "gradient-black-light":
          "linear-gradient(90deg, #636363 0%, rgba(255, 255, 255, 0.75) 96% )",
      },

      width: {
        "width-custom": "70%",
        "width-custom-sm": "90%",
      },
    },
    fontFamily: {
      geist: ['"Geist Sans"', "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
