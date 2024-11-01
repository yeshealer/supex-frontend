/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-gray-1": "#151a1e",
        "blue-gray-2": "#282a32",
        "light-blue-gray": "#2d2f37",
        "dark-gray": "#8C8A94",
        "ocean-purple": "#4923B0",
        "light-ocean-purple": "#6255e5",
        "vibrant-blue": "#3B82F6",
        "blueish-purple": "#6255e4",
        "blue-gradient":
          "linear-gradient(180deg, #47B0FF 0%, #3E9ADF 49.46%, #3587CB 100%)",
        "light-green": "#e4f2e9",
        "light-rose": "#f0fff6",
      },
      borderColor: {
        "correct-green": "#66ac5c",
        "wrong-red": "#c43c35",
        "incomplete-yellow": "#fe9c28",
        "danger-rose": "#ff7373",
        "success-green": "#067144",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      color: {
        "dark-red": "#751d1d",
        "dark-green": "#134228",
      },
      boxShadow: {
        inner: "inset 0px 2px 6px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
