import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          softBlue: "hsl(215, 51%, 70%)",
          cyan: "hsl(178, 100%, 50%)",
        },
        veryDarkBlue: {
          main: "hsl(217, 54%, 11%)",
          card: "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
