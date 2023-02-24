const path = require('path')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  filenameHashing: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Hello 插件'
    },
  },
  configureWebpack: {
    plugins: [
      new copyWebpackPlugin(
        [
          {
            from: path.resolve(__dirname, './manifest.json')
          }
        ]
      )
    ]
  }
}
