module.exports = {
  pages: {
    index: {
      // 入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false, // 关闭语法检查

  // 开启代理服务器(解决跨域问题)
  devServer: {
    proxy: {
      // 获取学生数据代理服务器
      '/stus': {
        target: 'http://localhost:5000',
        // 路径重写
        pathRewrite: {
          '^/stus': ''
        },
        ws: true, //用于支持websocket(客服端与服务器的一种通讯方式)
        changeOrigin: true //用于控制请求头中的host值
      },
      // 获取汽车数据代理服务器
      '/cars': {
        target: 'http://localhost:5001',
        // 路径重写
        pathRewrite: {
          '^/cars': ''
        },
        ws: true, //用于支持websocket(客服端与服务器的一种通讯方式)
        changeOrigin: true //用于控制请求头中的host值
      },
    }
  }
}