import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4ED",
        "cream-deep": "#EFE9DC",
        espresso: "#1E1A14",
        "espresso-soft": "#3A332A",
        forest: "#1F3D2B",
        "forest-deep": "#142A1D",
        terracotta: "#C97B5E",
        "terracotta-soft": "#D89579",
        sage: "#8FA68A",
        "sage-soft": "#B8C9B3",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.32, 0.72, 0, 1)",
        gentle: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
      },
      animation: {
        "reveal": "reveal 800ms cubic-bezier(0.32, 0.72, 0, 1) forwards",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(2rem)", filter: "blur(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
