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
        background: "#EBEEF2",  // Custom background color
      },
      backgroundColor: {
        DEFAULT: "#EBEEF2",  // Set default background color
      },
    },
  },
  plugins: [require('daisyui'),],
};
