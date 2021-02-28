const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        yellow: colors.yellow,
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      minWidth: {
        'screen-3/4': '75vw',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'odd', 'hover', 'focus', 'active'],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'focus-within',
      'group-hover',
    ],
    borderWidth: ['responsive', 'first', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'hover', 'focus', 'group-hover'],
    padding: ['responsive', 'first', 'hover', 'focus'],
  },
  plugins: [],
}
