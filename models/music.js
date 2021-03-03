const sequelize = require("./db");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define("Music", {
    song: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // image: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // audio: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    singer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    album: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isLike: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    lyric: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    paranoid: true
});