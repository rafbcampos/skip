const path = require('path')
const webpack = require('webpack')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

const getStorybookWebpackPlugins = require(path.resolve(
  __dirname,
  '../../../build/getStorybookWebpackPlugins.js',
))
const getWebpackBaseConfig = require(path.resolve(
  __dirname,
  '../../../build/getWebpackBaseConfig.js',
))

module.exports = function(config, env) {
  const storybookWebpackConfig = genDefaultConfig(config, env)
  const paths = {
    'ef-common/*': ['../../../common/src/*'],
    'ef-landing/*': ['../src/*'],
  }

  const plugins = Object.assign(
    getStorybookWebpackPlugins(__dirname, paths),
    storybookWebpackConfig.plugins,
  )

  const alias = {
    'ef-common': path.resolve(__dirname, '../../../common/src'),
    'ef-landing': path.resolve(__dirname, '../src'),
  }

  const baseConfig = getWebpackBaseConfig()

  const customWebpackConfig = {
    entry: storybookWebpackConfig.entry,
    output: storybookWebpackConfig.output,
    plugins: plugins,
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      alias: Object.assign(alias, storybookWebpackConfig.alias),
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
  }

  const webpackConfig = Object.assign(customWebpackConfig, baseConfig)

  return webpackConfig
}
