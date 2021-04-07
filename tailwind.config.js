const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
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
    },
  },
  plugins: [],
}
