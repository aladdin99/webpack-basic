/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:54:59
 * @Description:
 */
import "./../css/index.css";
const dom = document.createElement("div");
dom.innerHTML = "hello world!";
dom.className = "hello_world";
document.body.appendChild(dom);

const path = require("path");
const url = path.resolve(__dirname, "./src/image/zy_logo.png");
const dom2 = document.createElement("img");
document.body.appendChild(url);
