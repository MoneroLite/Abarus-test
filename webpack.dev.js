const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  docs: path.join(__dirname, './dist')
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  
  devServer: {
    static: {
      directory: PATHS.docs
    },    
    watchFiles: ['src/**/*.tsx', 'src/**/*.scss', 'src/**/*.jsx'],
    open: false,
    port: 3001,
    historyApiFallback: true
  },
});
