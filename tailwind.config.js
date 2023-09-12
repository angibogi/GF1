/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {     
      colors: {
      'main': '#00904A',
      'second': '#E0DEDE',
      'third': '#004B27',
      'quote':'#808080',
    },


  },
    
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}