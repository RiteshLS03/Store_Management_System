/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        hello: "#7A999C",
        guys: "#567281",
        login: "#5F7C8D",
      },
      fontFamily: {
        istok: "Istok Web",
      },
    },
  },
  plugins: [],
};
