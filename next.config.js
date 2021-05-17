const times = require('lodash/times')

module.exports = {
  async rewrites() {
    return [
      {
        source: '/produtos/:slug',
        destination: '/produto/:slug',
      },
    ]
  },
  images: {
    domains: [
      'images.prismic.io',
      ...['a', 'b', 'c'].flatMap((l) =>
        times(9, (i) => `${l}${i}.vnda.com.br`),
      ),
    ],
  },
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
}
