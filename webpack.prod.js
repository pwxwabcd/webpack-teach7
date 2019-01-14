 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
     mode: 'production', //生产模式，压缩混淆，删除掉无效的输出
 });