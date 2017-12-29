const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname)
const DEV_PATH = path.resolve(ROOT_PATH, 'src/index.js')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist/index.js')

const config = {
  entry:['./src/index.js'],
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

module.exports = config;