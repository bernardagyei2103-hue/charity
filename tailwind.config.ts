import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        shell: "min(120rem, calc(100vw - clamp(0.875rem, 2.75vw, 1.75rem)))",
      },
      colors: {
        hope: {
          DEFAULT: "#0b3d5c",
          deep: "#061f33",
          light: "#124a73",
          muted: "#3d6f8f",
        },
        sunrise: {
          DEFAULT: "#e0702f",
          soft: "#f4a063",
          deep: "#b85724",
        },
        growth: {
          DEFAULT: "#1f7a55",
          light: "#2f9f72",
          dark: "#14563d",
        },
        ivory: {
          DEFAULT: "#faf7f2",
          deep: "#f0eae1",
          warm: "#f5efe6",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 28px 80px -24px rgb(15 23 42 / 14%)",
        card: "0 18px 50px -20px rgb(11 61 92 / 20%)",
        glow: "0 0 0 1px rgb(224 112 47 / 12%), 0 24px 60px -20px rgb(11 61 92 / 25%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        "accordion-down": "accordion-down 0.28s ease-out",
        "accordion-up": "accordion-up 0.24s ease-out",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(120%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgb(224 112 47 / 12%), transparent 40%), radial-gradient(circle at 80% 0%, rgb(31 122 85 / 10%), transparent 35%), linear-gradient(to bottom right, rgb(6 31 51 / 75%), rgb(11 61 92 / 45%), rgb(6 31 51 / 90%))",
        "ivory-noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
