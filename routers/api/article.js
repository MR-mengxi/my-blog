const express = require("express");
const router = express.Router();
const articleServ = require("../../services/articleServ");
const { asyncHandler } = require("../getSendResult");

// 获取所有文章的接口
router.get("/", asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    return articleServ.getArticle(page, limit);
})
);

// 获取一个文章的接口
router.get("/:id", asyncHandler(async (req, res) => {
    return await articleServ.getArticleById(req.params.id);
}))

// jsonp获取所有文章的接口
// router.get("/", async (req, res) => {
//     // 代码
//     // jsonp这种解决跨域的形式，会使服务器的响应格式不统一，而且只能发送get请求。不建议使用这种方式。
//     const json = JSON.stringify(result);
//     const script = `callback${json}`;
//     res.header("content-type", "application/javascript").send(script);
// });

// 添加一个文章的接口
router.post("/", asyncHandler(async (req, res, next) => {
    return await articleServ.addArticle(req.body);
})
);

// 删除一个文章的接口
router.delete("/:id", asyncHandler(async (req, res, next) => {
    return await articleServ.deleteArticleById(req.params.id);
})
);

// 更新一个文章的接口
router.put("/:id", asyncHandler(async (req, res) => {
    return await articleServ.updateActicle(req.params.id, req.body);
})
);

module.exports = router;