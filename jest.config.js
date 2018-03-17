module.exports = {
  globals: {
    NODE_ENV: 'test',
    'ts-jest': {
      useBabelrc: true,
    },
  },
  setupFiles: ['./enzyme.config.js'],
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleDirectives: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  resolver: 'jest-webpack-resolver',
  jestWebpackResolver: {
    webpackConfig: './webpack.config.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
}
