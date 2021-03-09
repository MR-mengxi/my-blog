const Admin = require("../models/Admin");

// 添加管理员
exports.addAdmin = async function (adminObj) {
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
