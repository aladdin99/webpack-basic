const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [],
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
  ],
};
