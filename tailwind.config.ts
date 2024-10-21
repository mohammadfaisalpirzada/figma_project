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
        background: "var(--background)",  // Custom background color (using CSS variables)
        foreground: "var(--foreground)",  // Custom foreground color (using CSS variables)
      },
      fontSize: {
        '64px': '64px',  // Custom font size (64px)
      },
      width: {
        '400px': '400px',  // Custom width for left div
        '770px': '770px',  // Custom width for right div
      },
      height: {
        '829px': '829px',  // Custom height for divs
      },
    },
  },
  plugins: [],
};

export default config;
