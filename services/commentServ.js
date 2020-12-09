const Comment = require("../models/Comment");

// 分页查询所有的评论
exports.getComment = async function () {
    const result = await Comment.findAll();
    return JSON.parse(JSON.stringify(result));
}

// 添加一条评论
exports.addComment = async function (comment) {
    const ins = Comment.create(comment);
    return ins.toJSON();
}


// 根据id查找评论
exports.getCommentById = async function (id) {
    const result = await Comment.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

// 根据id删除评论
exports.deleteCommentById = async function (id) {
    const result = await Comment.destroy({
        where: {
            id
        }
    });

}