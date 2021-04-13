const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.js',
    './components/**/*.tsx',
    './pages/**/*.js',
    './pages/**/*.tsx',
  ],
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
