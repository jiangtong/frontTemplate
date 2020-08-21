/** @format */
const merge = require('webpack-merge');
const os = require('os');
const portfinder = require('portfinder');
const webpack = require('webpack');
const chalk = require('chalk');
const Mock = require('../src/mock/mockApi');
const config = require('./config');
const commonConfig = require('./webpack.config.common.js');

// 需要转发的接口拼接
const { proxyArr = [] } = config;

const newProxyObj = {};

proxyArr.forEach(item => {
    newProxyObj[item.name] = {
        target: item.url,
        changeOrigin: true,
        secure: false
    };
});

// 获取本机ip地址
const getLocalHostnameAndIp = () => {
    const networks = os.networkInterfaces().en0;
    const localNetwork = networks.find(item => item.family === 'IPv4');
    const localIpAddress = localNetwork.address;
    return localIpAddress;
};

const devConfig = merge.smart(commonConfig, {
    // devtool: 'eval-source-map',
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',

    output: {
        path: config.appbuild,
        filename: 'app/[name].bundle.js',
        chunkFilename: 'app/[name].chunk.js',
        publicPath: '/'
    },

    plugins: [new webpack.HotModuleReplacementPlugin({})],

    devServer: {
        host: config.host,
        port: config.port,
        historyApiFallback: true,
        compress: true,
        hot: true,
        inline: true,
        quiet: false, // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
        // 默认浏览器
        open: true,
        // contentBase: 'dist',
        disableHostCheck: true,
        proxy: newProxyObj,
        before(app) {
            if (process.env.IS_Mock) {
                Mock(app);
            }
        },
        stats: 'errors-only'
    }
});

// 自动寻找空余端口

// 自动寻找空余端口
module.exports = new Promise((resolve, reject) => {
    // 搜寻可用的端口号
    portfinder.basePort = config.port;
    portfinder.getPort((err, port) => {
        if (err) reject(err);
        else {
            devConfig.devServer.port = port;
            devConfig.plugins = [
                ...devConfig.plugins,
                // 显示那个小文字
                function a() {
                    this.hooks.done.tap('done', stats => {
                        if (
                            stats.compilation.errors &&
                            stats.compilation.errors.length &&
                            process.argv.indexOf('--watch') === -1
                        ) {
                            console.log(chalk.red.bold('build error'));
                            // process.exit(1);
                        } else {
                            console.log(chalk('   App running at:'));
                            console.log(
                                `   - Local:    ${chalk.cyan(
                                    `http://127.0.0.1:${chalk.cyan.bold(port)}`
                                )}`
                            );
                            console.log(
                                `   - Network:  ${chalk.cyan(
                                    `http://${getLocalHostnameAndIp()}:${chalk.cyan.bold(
                                        port
                                    )}`
                                )}`
                            );

                            console.log(chalk('\n'));

                            console.log(
                                chalk.red(
                                    '   如果需要提供一个与你处于同一局域网内的可访问地址，请使用Network'
                                )
                            );
                            console.log(chalk('\n\n'));
                            // process.exit(0);
                        }
                    });
                }
            ];
        }
        resolve(devConfig);
    });
});
