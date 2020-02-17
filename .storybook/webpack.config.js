const path = require('path')

module.exports = function(config, env) {
  config.resolve = {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  }

  config.module.rules = [
    {
      test: /\.(ts|tsx)$/,
      use: ['babel-loader', 'awesome-typescript-loader'],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: ['file-loader?name=public/images/[name].[ext]', 'image-webpack-loader'],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=public/fonts/[name].[ext]',
    },
  ]

  return config
}
