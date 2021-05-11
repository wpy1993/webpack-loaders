const path = require('path')

const FileCheckPlugin = require('./lib/fileCheckPlugin.js')
// const FileCheckLoader = require('./lib/fileCheckLoader.js')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'},
      {test: /\.*/, use: [{
        loader: path.resolve('lib/fileCheckLoader.js')
      }] }
    ]
  },
  plugins: [
    new FileCheckPlugin()
  ]
}