/*eslint-disable*/

const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const config = require('./config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const portfinder = require('portfinder');

// 需要转发的接口拼接
const { proxyArr = [] } = config;
let newProxyObj = {};
proxyArr.forEach(item => {
    newProxyObj[item.name] = {
        target: item.url,
        changeOrigin: true,
        secure: false
    };
});

const devConfig = merge.smart(commonConfig, {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: ['@babel/polyfill', 'react-hot-loader/patch', config.appIndexJs]
    },

    plugins: [
        new HardSourceWebpackPlugin({
            // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配置构建不同的缓存
            configHash: function(webpackConfig) {
                return require('node-object-hash')({ sort: false }).hash(
                    webpackConfig
                );
            },

            info: {
                // 'none' or 'test'.
                mode: 'none',
                // 'debug', 'log', 'info', 'warn', or 'error'.
                level: 'debug'
            },
            cachePrune: {
                // Caches younger than `maxAge` are not considered for deletion. They must
                // be at least this (default: 2 days) old in milliseconds.
                maxAge: 2 * 24 * 60 * 60 * 1000,
                // All caches together must be larger than `sizeThreshold` before any
                // caches will be deleted. Together they must be at least this
                // (default: 50 MB) big in bytes.
                sizeThreshold: 50 * 1024 * 1024
            },

            // cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',

            // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
            environmentHash: {
                root: process.cwd(),
                directories: [],
                files: ['package-lock.json', 'yarn.lock']
            }
        }),

        new HardSourceWebpackPlugin.ExcludeModulePlugin([
            {
                test: /.*\.DS_Store/
            }
        ])
    ],

    output: {
        path: config.appbuild,
        filename: 'app/[name].[hash].bundle.js',
        chunkFilename: 'app/[name].[hash].bundle.js',
        publicPath: '/'
    },

    devServer: {
        host: config.host || config.baseHost,
        port: config.port,
        historyApiFallback: true,
        compress: true,
        contentBase: '/',
        hot: true,
        inline: true,
        // 默认浏览器
        open: true,
        disableHostCheck: true,
        proxy: newProxyObj,
        stats: {
            // 添加缓存（但未构建）模块的信息
            cached: true,
            // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
            cachedAssets: true,
            // 添加 children 信息
            children: true,
            // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
            chunks: true,
            // 将构建模块信息添加到 chunk 信息
            chunkModules: true,
            // `webpack --colors` 等同于
            colors: true,
            // 添加 --env information
            env: false,
            // 添加错误信息
            errors: true,
            // 添加错误的详细信息（就像解析日志一样）
            errorDetails: true,
            // 添加 compilation 的哈希值
            hash: false,
            // 添加构建模块信息
            modules: true,
            // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
            performance: true,
            // 添加时间信息
            timings: true,
            // 添加警告
            warnings: true
        }
    }
});

// 自动寻找空余端口
module.exports = new Promise((resolve, reject) => {
    // 搜寻可用的端口号
    portfinder.basePort = config.port;
    portfinder.getPort((err, port) => {
        if (err) reject(err);
        else {
            devConfig.devServer.port = port;
        }
        resolve(devConfig);
    });
});
