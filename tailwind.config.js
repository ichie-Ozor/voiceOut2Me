/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lato:['Lato', 'sans-serif'],
        OpenSand:['Open Sans', 'sans-serif'],
      },

      screens: {
        'xs': '475px',
        'sm': '576px',
        // 'xxs':{'max':'320px',}
    },

  },
  plugins: [],
}
}
