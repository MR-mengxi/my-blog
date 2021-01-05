const path = require("path");

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:5008",
            }
        },
        "open": true
    },
}