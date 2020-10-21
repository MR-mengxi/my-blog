const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Article", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
})