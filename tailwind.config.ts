import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f7f3ea",
        paper: "#080808",
        bone: "#d9d2c4",
        smoke: "#9b978e",
        line: "rgba(247, 243, 234, 0.14)",
        graphite: "#161616",
        clay: "#b79a7b"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Times New Roman", "serif"]
      },
      maxWidth: {
        site: "1440px"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
