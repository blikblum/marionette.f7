var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      include: [/node_modules\/framework7/],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]]
        }
      }]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.png$/,
      use: 'file-loader'
    }, {
      test: /template\.html$/,
      use: ['html-loader']
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  resolve: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  devtool: 'source-map'
}
