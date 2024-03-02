/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:50:33
 * @Description:
 */
const path = require("path");
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
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
};
