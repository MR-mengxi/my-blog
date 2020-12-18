// 允许跨域的列表
const allowOrigins = [
    "http://localhost:8080",
    "null"
];

module.exports = (req, res, next) => {
    // 处理预检请求
    if (req.method === "OPTIONS") {
        console.log("这是预检请求");
        res.header("access-control-allow-methods", req.headers["access-control-allow-methods"]);
        res.header("access-control-allow-headers", req.headers["access-control-allow-headers"]);
    }

    // 附带身份凭证的，要加上这一条
    res.header("access-control-allow-credentials", true);

    // 处理简单请求
    if ("origin" in req.headers && allowOrigins.includes(req.headers.origin)) {
        res.header("allow-control-allow-origin", req.headers.origin);
    }
}