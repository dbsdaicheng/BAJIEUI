const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require('./webpack.config.base');

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, '../dist'),
  },
  devtool: "source-map",
};

module.exports = merge(commonConfig, devConfig);
  