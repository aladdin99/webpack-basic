/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:54:59
 * @Description:
 */
import "./../css/index.css";
const dom = document.createElement("div");
dom.innerHTML = "hello world!";
dom.className = "hello_world";
const dom2 = document.createElement("img");
dom2.src = require("./image/zy_logo.png");
document.body.appendChild(dom);
document.body.appendChild(dom2);