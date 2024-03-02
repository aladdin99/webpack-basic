/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:50:33
 * @Description:
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|gfif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash:8].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "htmlWebpackPlugin",
      filename: "index.html",
      template: "./public/index.html",
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CopyWebpackPlugin([{ patterns: { from: "./public", to: "./" }] ),
  ],
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "./dist/index.html"),
    },
    compress: true,
    port: 9000,
    proxy: [
      {
        "/kamiro-service": {
          target: "https://www.example.org/",
          pathRewrite: { "^/kamiro-service": "kamiro-service" },
          changeOrigin: true,
        },
      },
    ],
  },
  mode: "production",
};
