const express = require("express");
const router = express.Router();
const commentServ = require("../../services/commentServ");
const { asyncHandler } = require("../getSendResult");



// 分页获取评论的接口
router.post("/", asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    // const ArticleId = req.params.ArticleId || 1
    const ArticleId = req.body.ArticleId || null;
    // console.log(req.body);
    return commentServ.getComment(page, limit, ArticleId);
})
);

// 添加一条评论的接口
router.post("/addComment", asyncHandler(async (req, res) => {
    return await commentServ.addComment(req.body);
})
);

// 获取一条评论的接口
// router.get("/:id", asyncHandler(async (req, res) => {
//     return await commentServ.getCommentById(req.params.id);
// })
// );

// 根据文章id获取评论的接口
// router.get("/:id", asyncHandler(async (req, res) => {
//     return await commentServ.getCommentById(req.params.ArticleId);
// }))



// 删除一条评论的接口
router.delete("/:id", asyncHandler(async (req, res) => {
    return await commentServ.deleteCommentById(req.params.id);
})
);

// 更新一条评论的接口，这个不一定会用到
// router.put("/comment:id", asyncHandler(async (req, res) => {

// })
// );

module.exports = router;