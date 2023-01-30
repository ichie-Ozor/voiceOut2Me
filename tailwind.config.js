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
    },
colors:{
},
boxShadow: {
  'primary': '2px 4px 4px rgba(129, 85, 186, 0.25)',
}
  },
  plugins: [],
}
}
