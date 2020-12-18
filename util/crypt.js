// 使用对称加密算法：aes 128
// 128位的密钥：一个16字节的字符串。
// 生成16字节字符串的方法：Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8)
const secret = Buffer.from("mukvoh9gvvohvslg");
const crypto = require("crypto"); // 这是node的内置库，不需要安装。
// const result = crypto.getCiphers(); // 支持的所有的加密算法
// console.log(result);

// 准备一个iv，随机向量
const iv = Buffer.from("er69pry2o4jegjx5");

// 加密一个字符串
exports.encrypt = function (str) {
    const cry = crypto.createCipheriv("aes-128-cbc", secret, iv);
    let result = cry.update(str, "utf-8", "hex");
    result += cry.final("hex");
    return result;
}

// 解密一个字符串
exports.decrypt = function (str) {
    const decry = crypto.createDecipheriv("aes-128-cbc", secret, iv);
    let result = decry.update(str, "hex", "utf-8");
    result += decry.final("utf-8");
    return result;
}


// 测试加密解密是否成功的，需要写在别的文件中。
// const crypto = require("./util/crypt")();

// const enc = crypto.encrypt("123");
// console.log("加密之后",enc);
// const origin = crypto.decrypt(enc);
// console.log("解密之后",origin);