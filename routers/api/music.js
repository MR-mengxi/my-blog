const express = require("express");
const router = express.Router();
const musicServ = require("../../services/musicServ");
const { asyncHandler } = require("../getSendResult");

// 获取所有歌曲的接口
router.get("/", asyncHandler(async (req, res) => {
    return await musicServ.getMusic();
})
);

// 添加歌曲的接口
router.post("/", asyncHandler(async (req, res, next) => {
    return await musicServ.addMusic(req.body);
})
);

// 根据id删除歌曲的接口
router.delete("/:id", asyncHandler(async (req, res, next) => {
    return await musicServ.deleteMusic(req.params.id);
}))

module.exports = router;