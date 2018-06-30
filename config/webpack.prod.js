var webpackMerge = require("webpack-merge");
var commonConfig = require("./webpack.common.js");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require("path");
const rootDir = path.resolve(__dirname, "..");

module.exports = webpackMerge(commonConfig, {
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "./",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js"
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
