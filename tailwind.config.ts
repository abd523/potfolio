import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        cardBg: "#18181B",
        primary: "#6366F1",   // Indigo
        secondary: "#8B5CF6", // Purple
        accent: "#06B6D4",    // Cyan
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(to right, #6366F1, #8B5CF6, #06B6D4)',
      },
    },
  },
  plugins: [],
};

export default config;