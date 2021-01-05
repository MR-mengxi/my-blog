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
    },
    like: {
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    read: {
        type: DataTypes.INTEGER,
       defaultValue:0
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
})