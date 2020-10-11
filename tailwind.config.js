module.exports = {
  purge: false,
  theme: {
    extend: {
      transformOrigin: {
        '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'focus-within',
      'group-hover',
    ],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
