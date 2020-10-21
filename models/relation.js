// 设置模型关系
const Comment = require("./Comment");
const Article = require("./Article");

Article.hasMany(Comment);
Comment.belongsTo(Article);