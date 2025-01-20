import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "soft-red": "#c24a3b",
        "light-cream": "#faf3e0",
        "dark-blue": "#045897"
      },
    },
  },
  plugins: [],
} satisfies Config;
