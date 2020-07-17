const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const purgeCss = require('next-purgecss')
const sourceMaps = require('@zeit/next-source-maps')

const nextConfig = {}
module.exports = withPlugins(
  [[optimizedImages, { optimizeImagesInDev: true }], sourceMaps],
  nextConfig,
)
