const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function getWebpackConfig () {
  const { NODE_ENV } = process.env

  return {
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: [ './index' ],
      vendor: [ 'react', 'react-dom' ]
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      pathinfo: true
    },
    devtool: 'inline-source-map',
    cache: true,
    devServer: {
      compress: true,
      host: '0.0.0.0',
      inline: true,
      noInfo: true,
      port: 1337
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: (file) => file.includes('node_modules'),
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        {
          test: /\.mp3$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      }),
      new HtmlWebpackPlugin({
        chunksSortMode: 'dependency',
        filename: 'index.html',
        inject: true,
        template: 'index.html',
        minify: {
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeScriptTypeAttributes: true,
          removeOptionalTags: true
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '[name].[hash].js'
      }),
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
  }
}
