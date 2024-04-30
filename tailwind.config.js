/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/src/assets/images/main-bg.jpg')",
        "second-bg": "url('/src/assets/images/second-bg.jpg')",
      },
      fontFamily: {
        "madimi-one": ["Madimi One", "sans-serif"],
        truculenta: ["Truculenta", "sans-serif"],
      },
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": {
            borderColor: "#f9a8d4",
          },
          "50%": {
            borderColor: "#fdf2f8",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
