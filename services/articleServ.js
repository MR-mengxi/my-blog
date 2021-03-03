const { timeEnd, timeStamp } = require("console");
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
        attributes: ["id", "title", "content", "like", "read", "imgUrl", "createdAt"],
        offset: (page - 1) * limit,
        limit: +limit,
    });
    let newResult = JSON.parse(JSON.stringify(result.rows));
    // console.log(newResult);
    newResult.forEach(item => {
        const time = item.createdAt;
        let timeResult = time.split("-");
        timeResult[0] = timeResult[0] + "年";
        timeResult[1] = timeResult[1] + "月";
        timeResult[2] = timeResult[2] + "日";
        timeResult = timeResult.join("");
        item.createdAt = timeResult;
    });
    return {
        total: result.count,
        datas: newResult
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


// 根据id设置文章的阅读
exports.setRead = async function (id, obj) {
    return result = await Article.update(obj, {
        where: {
            id
        }
    })
}

// 根据id设置文章的喜欢
exports.setLike = async function (id,obj){
    return result = await Article.update(obj,{
        where:{
            id
        }
    })
}