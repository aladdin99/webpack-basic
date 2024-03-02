/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:54:59
 * @Description:
 */
import "./../css/index.css";
import images from "./../image/zy_logo.png";
const dom = document.createElement("div");
dom.innerHTML = "hello world!";
dom.className = "hello_world";
document.body.appendChild(dom);

// const path = require("path");
const dom2 = document.createElement("img");
dom2.src = images;
document.body.appendChild(dom2);

document.body.style = {
  backgroud: "gray",
};
