/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    hot: false
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "src/common/style/common.scss";
          @import "src/common/style/variables.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components')).set('_u', resolve('src/utils')).set('_a', resolve('src/api'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false
}
