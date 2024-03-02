/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:50:33
 * @Description:
 */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[ext]",
    }),
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
