/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // that is actual animation

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1B4E6B",
        secondary: "#FFDE59",
        button: "#5EACDD",
        border: "rgba(255, 255, 255, 0.16)",
        gray: "#90A3BF",
      },
      screens: {
        xsm: "375px", // Tablet Minimum Size
        xxsm: "200px", // Mobile Minimum Size
      },
    },
  },

  plugins: [],
};
