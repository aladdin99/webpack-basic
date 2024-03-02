/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:21:33
 * @Description:
 */
import "./js/element";

import { getPrice } from "./js/export";
const { add } = require("./js/modules");
console.log(getPrice());
console.log(add(1, 2));
// console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
// console.log(BASE_URL);
if (module.hot) {
  module.hot.accept("./js/modules", (res) => {
    console.log("触发热更新");
    console.log(res);
  });
}
