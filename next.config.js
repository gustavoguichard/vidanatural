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
  publicRuntimeConfig: {},
  serverRuntimeConfig: {
    api: {
      host: process.env.API_HOST,
      token: process.env.VNDA_API_TOKEN,
    },
  },
}

module.exports = withPlugins(
  [[optimizedImages, { optimizeImagesInDev: true }], sourceMaps],
  nextConfig,
)
