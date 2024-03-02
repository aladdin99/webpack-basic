/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:50:33
 * @Description:
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gfif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "name_hash.[ext]",
              outputPath: "/images",
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new htmlWebpackPlugin()],
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "./dist/index.html"),
    },
    compress: true,
    port: 9000,
    proxy: {
      "/kamiro-service": {
        target: "https://www.example.org/",
        pathRewrite: { "^/kamiro-service": "kamiro-service" },
        changeOrigin: true,
      },
    },
  },
  mode: "production",
};
