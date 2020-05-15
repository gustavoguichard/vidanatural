const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel', '@emotion/babel-preset-css-prop'],
  plugins: [['dynamic-import-node'], ['transform-define', env]],
}
