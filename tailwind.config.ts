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
        "custom-bg": "#0a0908",
        primary: "#e5e5e5",
        secondary: "#006ff0",
        accent: "#F88020",
        "bg-card": "#343a40",
        "border-card": "#fffdfd",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/Hero/hero-bg.png')",
        "bento-gradient":
          "linear-gradient(160deg, rgba(23, 23, 23, 1) 0%, rgba(14, 14, 14, 1) 25%)",
        blueLight:
          "linear-gradient(90deg, #006ff0 0%, rgba(255, 255, 255, 0.75) 95% )",
        blackLight:
          "linear-gradient(90deg, #636363 0%, rgba(255, 255, 255, 0.75) 96% )",
      },

      width: {
        custom: "70%",
        "custom-sm": "90%",
      },
    },
    fontFamily: {
      geist: ['"Geist Sans"', "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

// "bg-card": "#F2E6D9",
