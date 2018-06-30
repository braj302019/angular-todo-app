var HtmlWebpackPlugin = require("html-webpack-plugin");

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
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              module: true
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "file-loader?name=public/fonts/[name].[ext]"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
