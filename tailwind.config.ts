import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F5DBF',
        bgHeader: '#FFFFFF',
        accent: "#E5E7EB",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
