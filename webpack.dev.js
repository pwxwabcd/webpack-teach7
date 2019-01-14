const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development', //开发模式，输出文件是否压缩混淆
    devtool: 'inline-source-map', //显示代码行
    devServer: { //web server模式，端口8080
        contentBase: './dist' //访问路径
    }
});