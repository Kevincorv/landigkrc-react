import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#020244",
          deep: "#010135",
          light: "#0D1D70",
        },
        blue: {
          DEFAULT: "#01035F",
          light: "#0D1D70",
        },
        accent: {
          DEFAULT: "#B32B22",
          dark: "#8F2119",
          light: "#C44940",
        },
        white: "#FEFEFE",
        mist: "#F2F3FA",
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(2, 2, 68, 0.18)",
        "card-hover": "0 24px 60px -16px rgba(2, 2, 68, 0.28)",
      },
      maxWidth: {
        site: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
