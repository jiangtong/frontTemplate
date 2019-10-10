/*eslint-disable*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
// 终端输出进度条
const WebpackBar = require('webpackbar');
// 显示编译时间
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const commonConfig = {
    performance: {
        hints: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template: config.appHtml,
            favicon: config.favicon,
            // chunksSortMode: 'none',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
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
        })

        // new HtmlWebpackTagsPlugin({
        //     tags: [
        //         process.env.NODE_ENV === 'development' ? './public/js/baiduMap.js' : 'public/js/baiduMap.js',
        //         process.env.NODE_ENV === 'development' ? './public/js/LuShu.js' : 'public/js/LuShu.js',
        //         process.env.NODE_ENV === 'development' ? './public/js/Heatmap.js' : 'public/js/Heatmap.js'
        //         //
        //         // {
        //         //     path: 'http://api.map.baidu.com/api?v=3.0&ak=moMIflSL2yGiq3VwQ3bynEKE7gl2cjQw',
        //         //     type: 'js'
        //         // },
        //         // {
        //         //     path: 'http://api.map.baidu.com/library/LuShu/1.2/src/LuShu_min.js',
        //         //     type: 'js'
        //         // }, {
        //         //     path: 'http://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js',
        //         //     type: 'js'
        //         // }
        //     ],
        //     append: false
        // })
    ],

    resolve: {
        // 目录开头为 @ 符号，文件开头为 $ 符号
        alias: {
            '@commenApi': path.resolve(config.appSrc, 'public/data-commen/api'),
            '@commenModel': path.resolve(config.appSrc, 'public/data-commen/model'),
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
                    limit: 15000,
                    name: 'app/images/[name]_[hash:7].[ext]'
                }
            }]
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        limit: 15000,
                        name: 'app/files/[name]_[hash:7].[ext]'
                    }
                }
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    limit: 15000,
                    name: 'app/fonts/[name]_[hash:7].[ext]'
                }
            }
        }]
    }
};

module.exports = commonConfig;
