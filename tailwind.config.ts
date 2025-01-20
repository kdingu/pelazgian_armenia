import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        pastel: {
          red: "#f25564",
          blue: "#2c497f",
          orange: "#e4b363",
        },
        flag: {
          red: "#D90012",
          blue: "#0033A0",
          orange: "#F2A800",
        },
        "soft-red": "#c24a3b",
        "light-cream": "#fdf6e3",
        "dark-blue": "#045897",
        "paper-white": "#fefefe",
      },
      fontFamily: {}
    },
  },
  plugins: [],
} satisfies Config;
