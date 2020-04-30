const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    old: './src/main.js',
    new: './lib/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

// package.json
// "babel-core": "^6.26.3",
// "babel-loader": "^8.1.0",
// "babel-preset-env": "^1.7.0",
// "@babel/polyfill": "^7.8.7",
// "core-js": "^3.6.5"