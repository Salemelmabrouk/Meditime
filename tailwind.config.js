// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      boxShadow: {
        custom: "0px 20px 50px 0px rgba(95, 111, 255, 0.1)", // rgba equivalent for #5F6FFF1A
      },
      borderColor: {
        customGray: "#D4D4D4",
      },

      width: {
        '1528': '1528px',
      },
      height: {
        '698': '698px',
      },
  
    },
  },
  plugins: [],
};