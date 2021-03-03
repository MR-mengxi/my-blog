const Mock = require('mockjs');
const result = Mock.mock({
    "datas|10": [
        {
            "id|+1": 1,
            title: "@ctitle",
            content: "@cparagraph",
            "like|1-200": 0,
            "read|1-200": 0,
            imgUrl: "https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=567278569,1904899661&fm=58"
        }
    ]
}).datas;

// console.log(result);

const Article = require("../models/Article");
Article.bulkCreate(result);