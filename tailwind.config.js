/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
      }
    },
    fontFamily:{
      nunito:['Nunito', "sans-serif"]
    }
  },
  plugins: [],
}

