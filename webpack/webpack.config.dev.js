const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");

const config = merge(baseConfig, {
  mode: "development",
  watch: true,
  devServer: {
    contentBase: "dist",
    open: true,
    historyApiFallback: true
  }
});

module.exports = config;
