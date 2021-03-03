const express = require("express");
const app = express(); // 创建一个express应用
const cors = require("cors");
// const session = require("express-session");

// 使用history模式，切换路由的时候才可以匹配到路由
// const history = require("connect-history-api-fallback");
// app.use(history());


// app.use(session({
//     secret: "yezi",
//     name: "sessionid"
// }));

// 映射静态资源文件
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));

// 加入跨域中间件
// cors中间件
// const whiteList = ["null", "http://localhost:5008","http://localhost:8080"];
app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                callback(null, "*");
                return;
            }
            // if (whiteList.includes(origin)) {
            //     callback(null, origin);
            // } else {
            //     callback(new Error("not allowed"));
            // }
            callback(null, origin);
        },
        credentials: true,
    })
);
// 手写的cors中间件
// app.use(require("./corsMiddleware"));

// 加入cookie-parser中间件
// 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
// 加入之后，会在res对象中注入cookie方法，用于设置cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());


// 应用token中间件，解析token
app.use(require("./tokenMiddleware"));

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());


// 处理api的请求
app.use("/api/admin", require("./api/admin"));
app.use("/api/article", require("./api/article"));
app.use("/api/comment", require("./api/comment"));
app.use("/api/music", require("./api/music"));
app.use("/api/upload", require("./api/upload"));


// 处理错误的中间件
app.use(require("./errorMiddleware"));


// 监听5008端口
const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})