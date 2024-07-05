/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light-vr": "#00f5fa",
        "blue-darker-vr": "#06b7ce",
      },
    },
    fontFamily: {
      noto: ["Noto Sans Mono", "monospace"],
    },
  },
  plugins: [],
};
