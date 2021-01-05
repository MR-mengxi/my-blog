const getMsg = require("./getSendResult");
const multer = require('multer');

// 处理错误的中间件
module.exports = (err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(200).send(getMsg.getErr(err.message));
            return;
        }
        const errObj = err instanceof Error ? err.message : err;
        // 发生了错误
        res.status(500).send(getMsg.getErr(errObj));
    } else {
        next();
    }
}