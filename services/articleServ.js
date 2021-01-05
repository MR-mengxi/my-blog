const Article = require("../models/Article");
// const { Op } = require("sequelize");

// 添加一个技术文章
exports.addArticle = async function (articleObj) {
    const ins = await Article.create(articleObj);
    return ins.toJSON();
}

// 查询所有的文章
exports.getArticle = async function (page = 1, limit = 5) {
    // 第一种查询方式
    // const result = await Article.findAll({
    //     offset: (page - 1) * limit,
    //     limit: +limit
    // });
    // const total = await Article.count();
    // const datas = JSON.parse(JSON.stringify(result));
    // return {
    //     total,
    //     datas
    // }

    // 第二种查询方式
    const result = await Article.findAndCountAll({
        attributes: ["id", "title", "content", "like", "read", "imgUrl"],
        offset: (page - 1) * limit,
        limit: +limit,
    });
    return {
        total: result.count,
        datas: JSON.parse(JSON.stringify(result.rows))
    }
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