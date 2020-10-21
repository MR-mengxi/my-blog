const Mock = require('mockjs');
const result = Mock.mock({
    "datas|10": [
        {
            "id|+1": 1,
            title: "@ctitle",
            content: "@cparagraph",
        }
    ]
}).datas;

// console.log(result);

const Article = require("../models/Article");
Article.bulkCreate(result);