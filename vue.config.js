//引入path模块
const path = require('path');
const port = process.env.port || 9090;
function resolve(dir) {
  //设置绝对路径
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // lintOnSave: process.env.NODE_ENV === "development",    // 判断是否是开发环境，如果是开启eslint校验
  devServer: {
    // port,   // 设置端口
    open: true,
    // 使浏览器显示错误
    overlay: {
      warnings: false,
      errors: true
    },
    // 代理  跨域设置
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://localhost:8000/data",
        changeOrigin: true,
        pathRewrite: {
          [process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  // 路径别名
  configureWebpack: {
    name: 'name',
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'common': resolve('src/common'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
        'network': resolve('src/network')
      }
    }
  },
}