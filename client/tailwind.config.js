/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#e2c765",
      },
      screens: {
        xmd: "860px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
