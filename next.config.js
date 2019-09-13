const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const purgeCss = require('next-purgecss')
const offline = require('next-offline')
const optimizedImages = require('next-optimized-images')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
const sourceMaps = require('@zeit/next-source-maps')

dotenvLoad()

const nextConfig = {
  purgeCss: {
    whitelist: () => ['MuiPaper-root', 'MuiPaper-rounded', 'MuiFormLabel-root'],
  },
}
module.exports = withPlugins(
  [
    nextEnv,
    offline,
    [optimizedImages, { optimizeImagesInDev: true }],
    sass,
    purgeCss,
    sourceMaps,
  ],
  nextConfig,
)
