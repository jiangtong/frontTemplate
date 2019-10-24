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
    appHtml: resolveApp('public/index.html'),
    //打包文件夹
    appbuild: resolveApp('dist'),
    //项目主目录
    appSrc: resolveApp('src'),
    //静态文件比如百度地图js，d3等
    appPublic: resolveApp('public'),
    appPulicPath: resolveApp('/'),
    // favicon 路径
    favicon: resolveApp('public/ico.ico'),
       // 默认开启的本地项目端口号
    port: '3321',
    // 默认开启本地项目的浏览器
    brower: os.platform() === 'darwin' ? 'google chrome' : 'chrome',
    // 需要代理的 name是接口的前缀，url是需要转发的接口的地址 有几个需要转发的可以写几个
    proxyArr: [{name: '/portrait', url: 'http://172.16.97.14:8388/'}],
    //配色方案，可以根据assets找那个的variable进行配色的替换
    color: colors.color,

    //分模块打包
    viewers: ['antd', 'echarts', 'echarts-for-react'],
    utiles: ['axios', 'lodash'],
    reactzoology: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux', 'redux-thunk', 'history', 'classnames', 'prop-types']
};