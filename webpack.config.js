const path = require('path')
const webpack = require('webpack')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const WebappWebpackPlugin = require('webapp-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    chunksSortMode: 'dependency',
    hash: false,
    inject: 'body',
    minify: {
      collapseWhitespace: true,
    },
  }),
  new WebappWebpackPlugin(path.resolve('public/apple-icon.png')),
  new WebpackPwaManifest({
    background_color: '#df27b1',
    theme_color: '#df27b1',
    ios: true,
    icons: [
      {
        src: path.resolve('public/android-icon-36x36.png'),
        sizes: '36x36',
        type: 'image/png',
        density: '0.75',
      },
      {
        src: path.resolve('public/android-icon-48x48.png'),
        sizes: '48x48',
        type: 'image/png',
        density: '1.0',
      },
      {
        src: path.resolve('public/android-icon-72x72.png'),
        sizes: '72x72',
        type: 'image/png',
        density: '1.5',
      },
      {
        src: path.resolve('public/android-icon-96x96.png'),
        sizes: '96x96',
        type: 'image/png',
        density: '2.0',
      },
      {
        src: path.resolve('public/android-icon-144x144.png'),
        sizes: '144x144',
        type: 'image/png',
        density: '3.0',
      },
      {
        src: path.resolve('public/android-icon-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
      },
    ],
  }),
  new workboxPlugin.InjectManifest({
    swSrc: './src/sw.js',
    swDest: 'sw.js',
  }),
]

module.exports = {
  entry: {
    bundle: './src/App.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'assets/[name].[chunkhash].js',
    chunkFilename: 'assets/[name].[chunkhash].js',
  },
  plugins: plugins,
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'ef-common': path.resolve(__dirname, '../../common/src'),
      'ef-landing': path.resolve(__dirname, 'src'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  mode: env,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: ['file-loader?name=public/images/[name].[ext]', 'image-webpack-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]',
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    allowedHosts: ['*'],
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8080',
    historyApiFallback: {
      index: '/',
    },
  },
}
