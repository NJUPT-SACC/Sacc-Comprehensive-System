const withLess = require('@zeit/next-less')
module.exports = withLess({
  webpack(config, options) {
    return config
  },
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]--[hash:base64:5]'
  },
  lessLoaderOptions : {
    javascriptEnabled : true
  },
  distDir: 'build',
  generateBuildId: async () => {
    return 'my-build-id'
  },
  pageExtensions: ['jsx', 'js']
})
