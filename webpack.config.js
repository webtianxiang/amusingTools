const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    js: './src/main.js',
    jsBabel: './lib/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    libraryTarget: "umd",
    globalObject: "this",
    // library: "old.bundle"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}