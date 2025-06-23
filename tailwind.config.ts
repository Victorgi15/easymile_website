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
        background: "#0D2A2B",
        text: "#FFFFFF",
        primary: "#2A4A4B",
        accent: "#14b8a6",
      },
    },
  },
  plugins: [],
};
export default config; 