var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/dom7'),
        path.resolve(__dirname, 'node_modules/template7'),
        path.resolve(__dirname, 'node_modules/framework7')
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]]
        }
      }]
    }, { 
      test: /\.css$/,
      use: [
        MiniCSSExtractPlugin.loader,
        'css-loader'
      ]
    }, 
    { 
      test: /\.(sass|scss)$/,
      use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
    }, {
      test: /template\.html$/,
      use: ['html-loader']
    }, {
      test: /\.png$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  devtool: 'source-map'
}
