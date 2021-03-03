const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const moment = require("moment");

module.exports = sequelize.define("Article", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    like: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    read: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue("createdAt")).format("YYYY-MM-DD")
        }
    },
    updatedAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD')
        }
    }
})