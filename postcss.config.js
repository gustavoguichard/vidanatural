module.exports = {
  plugins: [
    'postcss-easy-import',
    'tailwindcss',
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./pages/**/*.js', './components/**/*.js'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    ],
    'autoprefixer',
    'cssnano',
  ],
}
