/*
 * @Author: chenhuang
 * @Date: 2024-03-01 14:39:07
 * @Description:
 */
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.example.org/",
    changeOrigin: true,
  })
);
app.listen();
