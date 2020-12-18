const express = require("express");
const router = express.Router();
const adminServ = require("../../services/adminServ");
// const crypto = require("../../util/crypt");
const { asyncHandler } = require("../getSendResult");
const jwt = require("../jwt");

router.post("/login", asyncHandler(async (req, res) => {
    const result = await adminServ.login(req.body.name, req.body.loginPwd);
    if (result) {
        let value = result.id;
        // value = crypto.encrypt(value.toString());
        // 登录成功
        // res.cookie("token", value, {
        //     path: "/",
        //     domain: "localhost",
        //     maxAge: 7 * 24 * 3600 * 1000 // 毫秒数
        // });
        // res.session.loginUser = result;
        jwt.publish(res, undefined, { id: value });

        // 其它终端设备
        // res.header("authorization", value);
    }
    return result;
})
);

// 这个接口有问题
router.get("/whoami", asyncHandler(async (req, res) => {
    return await adminServ.getAdminById(req.userId)
}))

module.exports = router;