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