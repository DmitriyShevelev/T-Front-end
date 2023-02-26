 const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  watch: true,
  output: {
     path: path.join(__dirname, 'dist'),

    filename: "bundle.js",

  },
  module: {
    rules: [{
      test: /\.js$/,

      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],


    },
    {
      test: /\.ts.?$/,
      use: [
        'ts-loader'
      ]
    },
     {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  devtool: 'source-map'

};