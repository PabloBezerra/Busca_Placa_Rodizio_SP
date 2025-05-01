const { type } = require("os")
const path = require("path")

module.exports = {
    mode: "development",
    type : "module",
    entry : "./src/app.js",
    output :{ 
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module:{
        rule:[
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}