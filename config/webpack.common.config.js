/*eslint-disable*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config');
// 终端输出进度条
const WebpackBar = require('webpackbar');
// 显示编译时间
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
            '@reducers': `${config.appSrc}/redux/reducers`,
            '@actions': `${config.appSrc}/redux/actions`,
            '@useRedux': `${config.appSrc}/redux`,
            '@layout': `${config.appSrc}/layout`,
            '@router': `${config.appSrc}/router`,
            '@pages': `${config.appSrc}/pages`,
            '@public': `${config.appSrc}/public`,
            '@components': `${config.appSrc}/components`,
            '@utils': `${config.appSrc}/utils`,
            $utils: `${config.appSrc}/utils/utils`,
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
                    name: 'app/images/[name].[ext]'
                }
            }]
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        limit: 6000,
                        name: 'app/media/[name].[ext]'
                    }
                }
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    limit: 6000,
                    name: 'app/font/[name].[hash:7].[ext]'
                }
            }
        }]
    }
};

module.exports = commonConfig;
