import type { Config } from "tailwindcss";

// Tailwind v4 uses CSS variables in globals.css for configuration.
// This file exists to satisfy Next.js tool configurations.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
