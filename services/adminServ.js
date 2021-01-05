// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const Admin = require("../models/Admin");

// 添加管理员
exports.addAdmin = async function (adminObj) {
    // 判断adminObj的各种属性是否合理，如果为空则添加一个超级管理员，如果不为空，则什么都不做。
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}



// 登录
exports.login = async function (loginId, loginPwd) {
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    });
    if (result && result.loginId === loginId) {
        return result.toJSON();
    }
    return null;
}


// 查找管理员
exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 测试是否添加成功
// const admin = require("./services/adminServ");
// const adminObj = admin.addAdmin().then((res) => {
//     console.log(res);
// });
