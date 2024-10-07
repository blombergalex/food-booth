import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)"
      },
      fontFamily: {
        RubikMono: ['"Rubik Mono One", monospace'],
      }
    },
  },
  plugins: [],
};
export default config;
