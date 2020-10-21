const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const sourceMaps = require('@zeit/next-source-maps')

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/black-friday',
        destination: '/produtos?ccc=BLACKFRIDAY',
        permanent: true,
      },
    ]
  },
}

module.exports = withPlugins(
  [[optimizedImages, { optimizeImagesInDev: true }], sourceMaps],
  nextConfig,
)
