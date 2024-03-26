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
        "custom-bg": "#FFF4E4",
        primary: "#3D0E1E",
        secondary: "#D1274B",
        accent: "#F88020",
      },
    },
    fontFamily: {
      geist: ['"Geist Sans"', "sans-serif"],
    },
    container: {
      center: true,
      padding: "6rem",
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
