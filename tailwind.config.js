const defaultTheme = require('tailwindcss/defaultTheme')
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
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        yellow: colors.yellow,
        rose: colors.rose,
        cyan: colors.cyan,
        salmon: {
          100: '#f7e9e7',
          200: '#efd3ce',
          300: '#e8beb6',
          400: '#e0a89d',
          500: '#d89285',
          600: '#ad756a',
          700: '#825850',
          800: '#563a35',
          900: '#2b1d1b',
        },
        nature: {
          100: '#deebdb',
          200: '#bdd6b7',
          300: '#9bc293',
          400: '#7aad6f',
          500: '#59994b',
          600: '#477a3c',
          700: '#355c2d',
          800: '#243d1e',
          900: '#121f0f',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
