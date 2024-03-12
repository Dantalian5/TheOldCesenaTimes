/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      baskerville: ["Libre Baskerville", "serif"],
      aguafina: ["Aguafina Script", "cursive"],
      franklin: ["Libre Franklin", "sans-serif"],
      pt: ["PT Serif", "serif"],
    },
    colors: {
      white: "#ffffff",
      black: {
        100: "#121212",
        200: "#000000",
      },
      red: "#d0021b",
      gray: {
        100: "#f7f7f7",
        200: "#DFDFDF",
        300: "#727272",
        400: "#5a5a5a",
        500: "#666",
        600: "#333",
        700: "#363636",
      },
      blue: {
        100: "#A9B9C8",
        200: "#567B94",
        300: "#326890",
      },
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
        xxl: "1.75rem",
      },
      boxShadow: {
        btn: "-1px 1px 1px 0px rgba(172, 190, 202, 0.25);",
        menu: "rgba(0, 0, 0, 0.1) 0px 10px 10px",
        sidemenu: "rgba(0, 0, 0, 0.1) 4px 0px 6px 1px;",
      },
    },
  },
  plugins: [],
};
