/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        wcs: {
          primary: "#2B529B",
          secondary: "#E5B01E",
          accent: "#A9ACBE",
          neutral: "#555555",
          "base-100": "#EAE4D5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
