import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    screens: {
      xxs: "340px",
      sm: "400px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      keyframes: {
        scrollFade: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        "scroll-fade": "scrollFade 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
