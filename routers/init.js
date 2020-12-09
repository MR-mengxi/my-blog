const express = require("express");
const app = express(); // 创建一个express应用

// 使用history模式，切换路由的时候才可以匹配到路由
const history = require("connect-history-api-fallback");
app.use(history());

// 映射静态资源文件
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));


// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());


// 处理api的请求
app.use("/api/article", require("./api/article"));
app.use("/api/comment", require("./api/comment"));
app.use("/api/music", require("./api/music"));



// 处理错误的中间件
app.use(require("./errorMiddleware"));


// 监听5008端口
const port = 5009;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})