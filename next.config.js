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
    [
      offline,
      {
        target: 'serverless',
        workboxOpts: {
          swDest: 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /[.](png|jpg|ico|css)/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'assets-cache',
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/code\.getmdl\.io.*/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'lib-cache',
              },
            },
            {
              urlPattern: /^http.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'http-cache',
              },
            },
          ],
        },
      },
    ],
    [optimizedImages, { optimizeImagesInDev: true }],
    sass,
    purgeCss,
    sourceMaps,
  ],
  nextConfig,
)
