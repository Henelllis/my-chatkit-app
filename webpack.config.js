'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "output": {
    "filename": "[name].pack.js"
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
  }
  ,
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname +'/src/index.html',
      filename:'index.html',
      inject: 'body',
    })
  ]
};