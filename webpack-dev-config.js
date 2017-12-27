var path = require('path')
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname)
var DEV_PATH = path.resolve(ROOT_PATH, 'src/index.js')
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist/index.js')

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
    rules:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        use:[{
          loader: "babel-loader"
        }]
      
      }
    ]
  }
}