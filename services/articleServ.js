const Article = require("../models/Article");

// 添加一个技术文章
exports.addArticle = async function (articleObj) {
    const ins = await Article.create(articleObj);
    return ins.toJSON();
}

// 查询所有的文章
exports.getArticle = async function () {
    const result = await Article.findAll();
    return JSON.parse(JSON.stringify(result));
}

// 根据id查询文章
exports.getArticleById = async function (id) {
    const result = await Article.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

// 根据id删除文章
exports.deleteArticleById = async function (id) {
    return await Article.destroy({
        where: {
            id
        }
    })
}

// 根据id更新文章
exports.updateActicle = async function (id, obj) {
    return result = await Article.update(obj, {
        where: {
            id
        }
    });
}