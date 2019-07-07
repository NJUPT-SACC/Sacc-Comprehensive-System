const withLess = require('@zeit/next-less')
module.exports = withLess({
  webpack(config, options) {
    return config
  },
  distDir: 'build',
  generateBuildId: async () => {
    return 'my-build-id'
  },
  pageExtensions: ['jsx', 'js']
})