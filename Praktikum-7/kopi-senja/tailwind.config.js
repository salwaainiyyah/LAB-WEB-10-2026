/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        krim: "#FFF5E9",
        karamel: "#95500F",
        kopi: "#60351F",
        mentega: "#F3D99B",
        biru: "#A9C5CC",
        beige: "#D8C6A8",
        espresso: "#35241D",
      },
      fontFamily: {
        judul: ["Fredoka", "system-ui", "sans-serif"],
        teks: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
