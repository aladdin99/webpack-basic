/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:54:59
 * @Description:
 */
import "./../css/index.css";
const dom = document.createElement("div");
dom.innerHTML = "hello world!";
dom.className = "hello_world";
const dom = document.createElement("img");
dom.src = require("./image/zy_logo.png");
document.body.appendChild(dom);
