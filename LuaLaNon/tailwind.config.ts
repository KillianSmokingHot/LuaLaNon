import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#FFFFFF",
          dark: "#BE181A",
          bright: "#CF2F18",
          gold: "#F6D882",
          cream: "#F9EBAA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-red":
          "linear-gradient(135deg, #BE181A 0%, #CF2F18 50%, #F6D882 100%)",
        "gradient-red-soft":
          "linear-gradient(135deg, #BE181A 0%, #CF2F18 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #F6D882 0%, #F9EBAA 100%)",
        "polka-dots":
          "radial-gradient(circle, #BE181A 1.5px, transparent 1.5px)",
        "polka-dots-gold":
          "radial-gradient(circle, #CF2F18 1.2px, transparent 1.2px)",
        "pattern-silk":
          "url('/images/cover.png')",
      },
      backgroundSize: {
        "polka-sm": "20px 20px",
        "polka-md": "32px 32px",
        "polka-lg": "48px 48px",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
