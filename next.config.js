const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css')

// module.exports = withLess(withFonts({
//   distDir: '.build',
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     });
//
//     return config
//   },
//   generateBuildId: async () => {
//     return 'my-build-id'
//   },
//   pageExtensions: ['jsx', 'js']
// }));

module.exports = withCSS(withLess({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    return config
  }
}))