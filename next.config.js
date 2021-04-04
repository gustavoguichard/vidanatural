const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const CompressionPlugin = require('compression-webpack-plugin')

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new CompressionPlugin({
        exclude: /\/webpack/,
      }),
    )
    return config
  },
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
