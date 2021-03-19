const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
    },
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
  plugins: [require('tailwindcss-filters')],
}
