/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightBlue: "#0DBBFC",
        green: "#65E4A3",
        lightGrey: "#F1F1F1",
        darkBlue: "#0A2640",
        greyBlue: "#8FB6D5",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#777777",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

