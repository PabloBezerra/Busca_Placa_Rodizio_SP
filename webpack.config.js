const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry : "./src/app.js",
    output :{ 
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude : /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env"]
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader","postcss-loader","sass-loader"]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template: 'dist/index.html'
        })
    ]

}