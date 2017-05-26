const path = require('path');
const pkg = require('./package.json');
const camelcase = require('camelcase');
const process = require('process');
const env = process.env;
const NODE_ENV = env.NODE_ENV;

let config = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.join( __dirname ),
    filename: pkg.name + '.js',
    library: camelcase( pkg.name ),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
  externals: NODE_ENV === 'production' ? Object.keys( pkg.dependencies || {} ) : []
};

module.exports = config;
