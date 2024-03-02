/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:50:33
 * @Description:
 */
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
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
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: ["**/*.html"],
          },
        },
      ],
    }),
  ],
};
