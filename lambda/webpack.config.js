
const path = require('path')

module.exports = {
  target: 'node',
  mode: 'production',
  context: path.resolve(__dirname, 'src/'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
}
