/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      colors: {
        thick: "#31473a",
        primary: "#7c8363",
        secondary: "#edf4f2",
      },
      fontFamily: {
        headings: ['"Pacifico", cursive'],
        subheadings: ['"Cookie", cursive'],
        text: ['"Delius", cursive'],
      },
    },
  },
  plugins: [],
};
