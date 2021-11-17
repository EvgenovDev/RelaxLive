const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './bundle.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../layout'),
  },
  devServer: {
    hot: true,
    static: {
      directory: "../layout",
      watch: true
    }
  },
};
