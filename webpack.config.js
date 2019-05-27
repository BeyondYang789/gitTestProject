const path= require("path");
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
module.exports= {
    entry:"./js/main.js",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,"./dist"),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                loader:ExtractTextPlugin.extract({
                    fallback:'style-loader',//如果不使用css提取，使用什么loader来处理css内容
                    use:'css-loader',
                    publicPath:"./dist"
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            //打包后的文件路径以及文件名,8位hash值
            filename:'css/[name][hash:8].css',            
        }),
        new HtmlWebpackPlugin ({
            template: path.resolve (__dirname, './index.html')
         }),
    ]   
}