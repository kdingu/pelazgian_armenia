import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "soft-red": "#c24a3b",
      },
    },
  },
  plugins: [],
} satisfies Config;
