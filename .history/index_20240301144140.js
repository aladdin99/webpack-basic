/*
 * @Author: chenhuang
 * @Date: 2024-03-01 14:39:07
 * @Description:
 */
const express = require("express");
const proxy = require("http-proxy-middleware");
const app = express();
app.use(
  "/api",
  proxy({
    target: "https://www.example.org/",
    changeOrigin: true,
  })
);
