import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        gridtemplate: "repeat(24,1fr)",
      },
      boxShadow: {
        section: "1px 1px 20px 2px rgb(220 220 220)",
      },
    },
  },
  plugins: [],
};
export default config;
