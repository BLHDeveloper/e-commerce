/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colortext: "var(--colortext)",
        colorsearch: "var(--colorsearch)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      fontWeight: {
        black: 900,
        bold: 700,
        medium: 500,
        regular: 400,
        light: 300,
      },
    },
  },
  plugins: [],
};
