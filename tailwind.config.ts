import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "Arial", "sans-serif"],
      },
      colors: {
        gred: "#ea4335",
        gblue: "#1a73e8",
        gsidebar: "#f6f8fc",
        ghover: "#f1f3f4",
        gborder: "#e6e8eb",
        gtext: "#202124",
        gdim: "#5f6368",
      },
      borderRadius: {
        gmail: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
