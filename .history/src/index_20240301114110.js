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

if (module.hot) {
  module.hot.accept("./js/modules", () => {
    console.log("触发热更新");
  });
}
