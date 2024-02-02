/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
