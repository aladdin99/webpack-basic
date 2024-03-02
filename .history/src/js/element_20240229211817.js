/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:54:59
 * @Description:
 */
import "./../css/index.css";
import images from "./../image/people.png";

// 1.增加 div 标签；
const dom = document.createElement("div");
dom.innerHTML = "hello world!";
dom.className = "hello_world";
document.body.appendChild(dom);

// 2.增加 img 标签；
const dom2 = document.createElement("img");
dom2.src = images;
document.body.appendChild(dom2);

document.body.style = {
  backgroud: "gray",
};
