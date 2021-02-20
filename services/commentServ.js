const Comment = require("../models/Comment");

// 分页查询评论
exports.getComment = async function (page = 1, limit = 10, ArticleId) {
    const result = await Comment.findAndCountAll({
        attributes: ["id", "comment", "ArticleId"],
        offset: (page - 1) * limit,
        limit: +limit,
        order: [
            ["createdAt","DESC"]
        ],
        where: {
            ArticleId
        }
    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}

// 添加一条评论
exports.addComment = async function (comment) {
    const ins = await Comment.create(comment);
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