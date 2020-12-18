const { getErr } = require("./getSendResult");
const { pathToRegexp } = require("path-to-regexp");
// const crypto = require("../util/crypt");
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
    // console.log(apis);
    // // 如果没有，则不需要token验证，直接返回。如果有值，则需要验证token。
    if (apis.length === 0) {
        next();
        return;
    }

    // cookie中验证token
    // let token = req.cookies.token;
    // if (!token) {
    //     // 从header的authorization中获取
    //     token = req.header.authorization;
    // }
    // if (!token) {
    //     // 没有认证
    //     handleNonToken(req, res, next);
    //     return;
    // }

    // // 验证token
    // const userId = crypto.decrypt(token);
    // // console.log(userId);
    // req.userId = userId;
    // next();

    // session的验证
    // if (req.session.loginUser) {
    //     // 已经登录过了
    //     next();
    // } else {
    //     handleNonToken(req, res, next);
    // }

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