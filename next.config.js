const times = require('lodash/times')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  experimental: {
    // concurrentFeatures: true,
    esmExternals: true,
    // serverComponents: true,
  },
  swcMinify: true,
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    // formats: ['image/avif', 'image/webp'],
    domains: [
      'images.prismic.io',
      ...['a', 'b', 'c'].flatMap((l) =>
        times(9, (i) => `${l}${i}.vnda.com.br`),
      ),
    ],
  },
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
})

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.facebook.net *.googletagmanager.com *.clarity.ms *.google-analytics.com *.googleadservices.com *.doubleclick.net *.google.com *.gstatic.com;
  child-src *.youtube.com www.youtube-nocookie.com *.google.com *.doubleclick.net *.facebook.com;
  style-src 'self' 'unsafe-inline' rsms.me;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' rsms.me;
`

// Copied from https://github.com/leerob/leerob.io/blob/main/next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=()',
  },
]
