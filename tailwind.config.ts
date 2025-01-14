import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: "var(--font-righteous)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#E65937",
        "dark-blue": "#263253",
      },
      letterSpacing: {
        widest: "0.3em",
      },
    },
  },
  plugins: [],
} satisfies Config;
