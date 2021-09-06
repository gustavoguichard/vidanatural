const colors = require('tailwindcss/colors')

module.exports = {
  dark: 'media',
  mode: 'jit',
  purge: [
    './components/**/*.js',
    './components/**/*.tsx',
    './pages/**/*.js',
    './pages/**/*.tsx',
  ],
  theme: {
    extend: {
      colors,
    },
  },
}
