const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { //原文件
        index: './src/index.js',
        another: './src/another-module.js'
    },
    output: {
        filename: '[name].bundle.js', //输出文件
        path: path.resolve(__dirname, 'dist') //输出路径
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //自动删除dist文件夹
        new HtmlWebpackPlugin({ //自动生成html文件
            title: '输出管理' //html title
        })
    ],
    module: {
        rules: [{ //css加载,打包进入main.js文件
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, { //image加载
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    optimization: {
        splitChunks: { //打多个包时，防止依赖包重复
            chunks: 'all'
        }
    }
};