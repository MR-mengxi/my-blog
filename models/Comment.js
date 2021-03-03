const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const moment = require("moment");

module.exports = sequelize.define("Comment", {
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue("createdAt")).format("YYYY-MM-DD HH:mm:ss")
        }
    }
},
    {
        paranoid: true
    }
)