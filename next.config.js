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
  async redirects() {
    return [{ source: '/link-da-caixa', destination: '/', permanent: false }]
  },
  images: {
    domains: [
      'images.prismic.io',
      ...['a', 'b', 'c'].flatMap((l) =>
        times(9, (i) => `${l}${i}.vnda.com.br`),
      ),
    ],
  },
  experimental: { esmExternals: true },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
}
