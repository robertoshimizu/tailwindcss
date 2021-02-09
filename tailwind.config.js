// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        'cyan' : colors.cyan,
        'brand-blue': '#1992d4',
      },
      spacing:{
        '72': '18rem',
      },
    },
  },
  variants: {
    backgroundColor:['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
