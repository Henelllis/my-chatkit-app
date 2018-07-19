'use strict';
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "output": {
     path: path.resolve(__dirname, 'dist'),
    "filename": "[name].pack.js",
    publicPath: '/'
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react",
              'react',
              'stage-2'
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  },
  "entry": {
    "index": "./src/index"
  },
  devServer:{
    historyApiFallback: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname +'/src/index.html',
      filename:'index.html',
      inject: 'body',
    })
  ]
};