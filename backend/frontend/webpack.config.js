const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('../src/main/webapp/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: path.resolve('../src/main/webapp/assets/js'),
    host: '0.0.0.0',
    port: 8000,
    inline: true,
    liveReload: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8082'
    }
  }    
}