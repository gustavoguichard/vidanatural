const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/produtos/:slug',
        destination: '/produto/:slug',
      },
    ]
  },
}

module.exports = withPlugins(
  [[optimizedImages, { optimizeImagesInDev: true }]],
  nextConfig,
)
