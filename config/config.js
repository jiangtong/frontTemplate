'use strict';
const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
let os = require('os');
// 配色方案
const colors = require('../src/utils/colors');

module.exports = {
    //根的js
    appIndexJs: resolveApp('src/index.js'),
    //根html
    appHtml: resolveApp('src/index.html'),
    //打包文件夹
    appbuild: resolveApp('dist'),
    //项目主目录
    appSrc: resolveApp('src'),
    //静态文件比如百度地图js，d3等
    appStatic: resolveApp('static'),
    appPulicPath: resolveApp('/'),
    // 后台接口地址
    requestUrl: 'http://119.3.74.110:9099',
    // 默认开启的本地项目端口号
    port: '1111',
    // 默认开启本地项目的浏览器
    brower: os.platform() === 'darwin' ? 'google chrome' : 'chrome',
    //配色方案，可以根据assets找那个的variable进行配色的替换
    color: colors.color,

    //分模块打包
    viewers: ['antd', 'echarts', 'bizcharts'],
    utiles: ['axios', 'lodash'],
    reactzoology: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux', 'redux-thunk']
};