const { getErr } = require("./getSendResult");
const { pathToRegexp } = require("path-to-regexp");
const jwt = require("./jwt");

// 需要token验证的api接口
const needToTokenApi = [
    { method: "POST", path: "/api/article" },
    { method: "PUT", path: "/api/article/:id" },
    { method: "DELETE", path: "/api/article/:id" },
    { method: "GET", path: "/api/admin/whoami" },
];


// 用于解析token
module.exports = (req, res, next) => {

    // 筛选出需要token验证的api。
    const apis = needToTokenApi.filter(api => {
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    });
    // // 如果没有，则不需要token验证，直接返回。如果有值，则需要验证token。
    if (apis.length === 0) {
        next();
        return;
    }

    // jwt的验证
    const result = jwt.verify(req);
    if (result) {
        req.userId = result.id;
        next();
    } else {
        handleNonToken(req, res, next);
    }
}

// 处理没有认证的情况
function handleNonToken(req, res, next) {
    res.status(403).send(getErr("you dont have any token to access the api", 403));
}