/*
 * @Author: chenhuang
 * @Date: 2024-02-29 10:46:55
 * @Description:
 */
module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
    }),
    ["postcss-preset-env"],
  ],
};
