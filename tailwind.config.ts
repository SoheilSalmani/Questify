import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        led: "The Led Display St",
        alegreya: "Alegreya",
      },
    },
  },
  plugins: [],
} satisfies Config;
