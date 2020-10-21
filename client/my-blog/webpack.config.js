const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         "vue-style-loader",
            //         {
            //             loader: "css-loader",
            //             options: { modules: true }
            //         },
            //         "sass-loader"
            //     ]
            // },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}