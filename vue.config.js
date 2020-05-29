const VirtualModulesPlugin = require('webpack-virtual-modules');

module.exports = {
  lintOnSave: false,

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    }
  },

  chainWebpack: config => {
    config.plugin('virtual-routing').use(VirtualModulesPlugin,[
      {'node_modules/vue-auto-routing/index.js': 'export default []',}
    ])
  }
}
