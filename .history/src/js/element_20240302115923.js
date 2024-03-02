/*
 * @Author: chenhuang
 * @Date: 2024-02-28 22:54:59
 * @Description:
 */
import "./../css/index.css";
import "./../css/style.scss";
import "./../font/iconfont.css";
import images from "./../image/people.png";

// 1.增加 div 标签；
const dom = document.createElement("div");
dom.innerHTML = "hello world!";
dom.className = "dom1";
document.body.appendChild(dom);

// 2.增加 img 标签；
const dom2 = document.createElement("img");
dom2.src = images;
document.body.appendChild(dom2);
document.body.style = {
  backgroud: "gray",
};

// 3.增加 span 标签；
const dom3 = document.createElement("div");
dom3.className = "dom3";
dom3.innerHTML = "我是span";
const xm = document.getElementsByClassName("dom1");
xm[0].appendChild(dom3);

// 4.增加字体图标；
const demo4 = document.createElement("i");
demo4.className = "iconfont icon-liaotian";
xm[0].appendChild(demo4);
