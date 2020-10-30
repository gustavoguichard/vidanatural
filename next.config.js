const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const sourceMaps = require('@zeit/next-source-maps')

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/produtos/:slug',
        destination: '/produto/:slug',
      },
      {
        source: '/black-friday',
        destination: '/black-friday-vn',
      },
    ]
  },
}

module.exports = withPlugins(
  [[optimizedImages, { optimizeImagesInDev: true }], sourceMaps],
  nextConfig,
)
