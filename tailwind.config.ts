import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
        red: "#ff0000",
        sevenTogkID: "#DE9A07",
      },
      backgroundImage: {
        kabah: "url('/assets/img/kabah.png')",
        kabah2: "url('/assets/img/kabah2.png')",
      },
      textShadow: {
        outline: "2px 2px 2px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-outline": {
          "text-shadow": "2px 2px 2px rgba(0, 0, 0, 0.9)",
        },
        ".text-outline-white": {
          "text-shadow": "2px 2px 0px rgba(255, 255, 255, 1)",
        },
      };

      addUtilities(newUtilities, {
        respectPrefix: false,
        respectImportant: false,
      });
    }),
  ],
};

export default config;
