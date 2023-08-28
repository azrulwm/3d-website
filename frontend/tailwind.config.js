/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        250: "250ms",
        500: "500ms",
      },
    },
  },
  plugins: [],
};
