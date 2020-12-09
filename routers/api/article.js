const express = require("express");
const router = express.Router();
const articleServ = require("../../services/articleServ");
const { asyncHandler } = require("../getSendResult");

// 获取所有文章的接口
router.get("/", asyncHandler(async (req, res) => {

})
);

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