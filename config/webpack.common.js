const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanCSSLessPlugin = require("less-plugin-clean-css");

module.exports = {
  entry: {
    app: "./src/main.ts",
    polyfills: "./src/polyfills.ts",
    vendor: "./src/vendor.ts"
  },

  resolve: {
    extensions: [".js", ".ts"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        options: {
          plugins: ["lodash"]
        }
      },
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: "./tsconfig.json"
            }
          },
          {
            loader: "angular2-template-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              caseSensitive: true,
              removeAttributeQuotes: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              plugins: [new CleanCSSLessPlugin({ advanced: true })]
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?name=fonts/[name].[ext]&limit=10000"
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        use: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          "file-loader?name=images/[name].[ext]",
          "image-webpack-loader?bypassOnDebug"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      _: "lodash"
    }),
    new LodashModuleReplacementPlugin({
      collections: true
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css"
    })
  ],

  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimize: true
  }
};
