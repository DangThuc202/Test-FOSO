import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        racing: ["Racing Sans One", "sans-serif"], // Định nghĩa font-racing
      },
    },
  },
  plugins: [],
};

export default config;
