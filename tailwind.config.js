module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        79: "78.5%",
        70: "70%",
        30: "30%",
      },
      backgroundImage: {
        bgMobileLight: "url('./assets/bg-mobile-light.jpg')",
        bgMobileDark: "url('./assets/bg-mobile-dark.jpg')",
        bgDesktopLight: "url('./assets/bg-desktop-light.jpg')",
        bgDesktopDark: "url('./assets/bg-desktop-dark.jpg')",
      },
      lineHeight: {
        14: "56px",
      },
      colors: {
        veryLightGray: "hsl(0, 0%, 98%)",
        skyBlue: "rgb(20,41,89)",
        veryDarkBlue: "hsl(235, 21%, 11%)",
        lightGreyishBlue: "hsl(234, 39%, 85%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
