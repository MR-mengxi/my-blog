const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Comment", {
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        updatedAt:false,
        paranoid:true
    }
)