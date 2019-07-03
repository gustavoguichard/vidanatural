const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const purgeCss = require('next-purgecss')
const offline = require('next-offline')
const optimizedImages = require('next-optimized-images')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
const typescript = require('@zeit/next-typescript')
const sourceMaps = require('@zeit/next-source-maps')

dotenvLoad()

const nextConfig = {
  purgeCss: {
    whitelist: () => ['fc-widget-small', 'MuiPaper-root', 'MuiPaper-rounded'],
  },
}
module.exports = withPlugins(
  [
    nextEnv,
    [offline, { dontAutoRegisterSw: true }],
    [optimizedImages, { optimizeImagesInDev: true }],
    sass,
    purgeCss,
    sourceMaps,
    typescript,
  ],
  nextConfig,
)
