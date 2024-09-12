import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'navColor': '#172554',
      'white': '#f8fafc',
      'navyBlue': '#0f172a',
      'matte-black':'#28282B'
    },
    extend: {},
  },
  plugins: [nextui()],
} satisfies Config;
