module.exports = {
  async rewrites() {
    return [
      {
        source: '/produtos/:slug',
        destination: '/produto/:slug',
      },
    ]
  },
  future: {
    webpack5: true,
  },
}
