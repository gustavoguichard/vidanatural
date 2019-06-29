const env = require('./env-config.js')

module.exports = {
  presets: [
    'next/babel',
    '@emotion/babel-preset-css-prop',
    '@zeit/next-typescript/babel',
  ],
  plugins: [
    ['dynamic-import-node'],
    ['transform-define', env],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          data: './data',
          components: './components',
          pages: './pages',
          static: './static',
          utils: './utils',
          src: './src',
        },
      },
    ],
  ],
}
