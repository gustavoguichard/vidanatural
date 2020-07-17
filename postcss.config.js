const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./pages/**/*.js', './components/**/*.js'],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
]

module.exports = {
  plugins: [
    'postcss-easy-import',
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    'autoprefixer',
    'cssnano',
  ],
}
