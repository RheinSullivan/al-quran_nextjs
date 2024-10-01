import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#081a51",
        dark2: "#000822",
      },
      backgroundImage: {
        kabah: "url('/assets/img/kabah.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
