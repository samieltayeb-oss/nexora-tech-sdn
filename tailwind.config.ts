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
        nexora: {
          turquoise: "#00D1B4",
          teal: "#00796B",
          dark: "#0D1111",
          darkElevated: "#141C1B",
          white: "#FFFFFF",
          surface: "#F5F8F7",
          forest: "#091713",
          evergreen: "#12382B",
          emerald: "#5EA885",
          botanical: "#9BC9A9",
          ivory: "#F6F6F0",
          ink: "#0D1111",
          muted: "#4A5A58",
          mist: "#D6E2DF",
          emeraldInk: "#00796B",
        },
      },
      fontFamily: {
        sans: ["var(--font-lexend)", "LexendLocal", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "CairoArabicLocal", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      maxWidth: {
        container: "1280px",
        editorial: "800px",
      },
      boxShadow: {
        architectural: "0 16px 40px -12px rgba(13, 17, 17, 0.07)",
        "architectural-dark": "0 24px 60px -15px rgba(0, 0, 0, 0.5)",
        glow: "0 0 28px rgba(0, 209, 180, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
