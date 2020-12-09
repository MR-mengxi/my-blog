const express = require("express");
const router = express.Router();
const commentServ = require("../../services/commentServ");
const { asyncHandler } = require("../getSendResult");

// 获取所有评论的接口
// router.get("/", asyncHandler(async (req, res) => {
//     return await commentServ.getComment(req.body);
// })
// );

// 获取一条评论的接口
router.get("/:id", asyncHandler(async (req, res) => {
    return await commentServ.getCommentById(req.params.id);
})
);

// 添加一条评论的接口
// router.post("/:id", asyncHandler(async (req, res) => {

// })
// );

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