const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ROOT_PATH = path.resolve(__dirname)
const DEV_PATH = path.resolve(ROOT_PATH, 'src/index.js')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist/index.js')

module.exports = {
  devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map 打包后输出的JS文件的执行具有性能和安全的隐患,生产使用source-map
  entry: {
    index: DEV_PATH
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]

      },
      {
        test: /\.(sass|scss|css)/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          "sass-loader?sourceMap"
        ]
      },
      {
        test: /\.(js|jsx)/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  //webpack-dev-server配置
  devServer: {
    contentBase: './dist', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    // colors: true, //在cmd终端中输出彩色日志
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    host: '10.194.11.67',
    port: 8080, //设置默认监听端口，如果省略，默认为"8080"
    hot: true, //是否启动热更新
    open: true, //是否支持自动打开浏览器
    // inline: true, //设置为true，当源文件改变时会自动刷新页面
    // process: true, //显示合并代码进度
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin() //热模块替换插件
  ]
}