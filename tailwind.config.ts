import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f5fa",
          100: "#dce7f3",
          200: "#c0d3e8",
          300: "#94b6d8",
          400: "#6195c6",
          500: "#3d77b4",
          600: "#2d5d97",
          700: "#264b7a",
          800: "#1d3a60",
          900: "#0b2545",
          950: "#071729",
        },
        sky: {
          brand: "#1d7fd6",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
