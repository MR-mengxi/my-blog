const Mock = require("mockjs");
const result = Mock.mock({
    "datas|15-20": [
        {
            comment: "@csentence",
            "ArticleId|1-10": 0
        }
    ]
}).datas;
// 这里面有个坑，ArticleId这个东西需要和定义模型关系一起用

// console.log(result);

const Comment = require("../models/Comment");
Comment.bulkCreate(result);