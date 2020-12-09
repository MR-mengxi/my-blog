require("./Admin");
require("./Article");
require("./Comment");
require("./music");
const sequelize = require("./db");
sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型同步完成");
});