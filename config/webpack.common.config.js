/*eslint-disable*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
// 终端输出进度条
const WebpackBar = require('webpackbar');
// 显示编译时间
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require('path');
const webpack = require('webpack');

const commonConfig = {
    performance: {
        hints: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template: config.appHtml,
            chunksSortMode: 'none'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

        new WebpackBar(),

        // 显示打包时间
        new ProgressBarPlugin({
            format:
            '  build [:bar] ' +
            chalk.green.bold(':percent') +
            ' (:elapsed seconds)'
        }),

        // 要动态引入到html上面的js
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                './public/js/d3.v5.min.js'
            ],
            append: false
        })
    ],

    resolve: {
        // 目录开头为 @ 符号，文件开头为 $ 符号
        alias: {
            '@reducers': path.resolve(config.appSrc, 'redux/reducers'),
            '@actions': path.resolve(config.appSrc, 'redux/actions'),
            '@useRedux': path.resolve(config.appSrc, 'redux'),
            '@layout': path.resolve(config.appSrc, 'layout'),
            '@router': path.resolve(config.appSrc, 'router'),
            '@pages': path.resolve(config.appSrc, 'pages'),
            '@public': path.resolve(config.appSrc, 'public'),
            '@components': path.resolve(config.appSrc, 'components'),
            '@utils': path.resolve(config.appSrc, 'utils'),
            '$utils': path.resolve(config.appSrc, 'utils/utils')
        }
    },

    module: {
        rules: [{
            test: /\.js?$/,
            use: [{
                loader: 'babel-loader'
            }],
            // options: {
            //     configFile: false,
            //     babelrc: false,
            //     cacheDirectory: true
            // },
            exclude: '/node_modules/',
            include: config.appSrc
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '/app/images/[name]_[hash:7].[ext]'
                }
            }]
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        limit: 6000,
                        name: '/app/media/[name]_[hash:7].[ext]'
                    }
                }
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    limit: 6000,
                    name: '/app/font/[name]_[hash:7].[ext]'
                }
            }
        }]
    }
};

module.exports = commonConfig;
