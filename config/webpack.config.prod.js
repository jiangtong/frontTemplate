/**
 *
 * @format
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const path = require('path');
const SentryPlugin = require('@sentry/webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('./config');
const commonConfig = require('./webpack.config.common.js');

const publicConfig = {
    output: {
        path: config.appbuild,
        filename: 'app/js/[name].[chunkhash:8].js',
        chunkFilename: 'app/js/[name].[chunkhash:8].bundle.js'
        // library: 'result', // 函数或变量名字
        // libraryTarget: 'umd' //打包文件加载方式
    },

    devtool: 'source-map',
    mode: 'production',

    plugins: [
        new SentryPlugin({
            release: 'baili_001',
            include: './dist',
            urlPrefix: '~/',
            ignore: ['node_modules']
        }),

        new TerserPlugin({
            cache: true,
            extractComments: false,
            parallel: true, // 并行压缩
            terserOptions: {
                ecma: undefined,
                warnings: false,
                parse: {},
                compress: {},
                mangle: false, // Note `mangle.properties` is `false` by default.
                module: false,
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false
            }
        }),

        // brotli-webpack-plugin br压缩方式 待实践
        // new BrotliPlugin({
        // 	asset: '[path].br[query]',
        // 	test: /\.(js|css|html|svg)$/,
        // 	threshold: 10240,
        // 	minRatio: 0.8
        // })

        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            // 压缩后缀
            algorithm: 'gzip',
            cache: true,
            test: new RegExp('\\.(js|css)$'),
            // 只处理比这个值大的资源。按字节计算
            threshold: 10240,
            // 只有压缩率比这个值小的资源才会被处理 （minRatio = 压缩大小 / 原始大小）
            minRatio: 0.8,
            // 是否删除原资源
            deleteOriginalAssets: false
        }),

        new CleanWebpackPlugin(),

        //  copy 在dev模式下不好使
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(config.appPublic, 'js'),
        //         to: path.resolve(config.appbuild, 'public/js')
        //     }]
        // ),

        // 预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度
        new webpack.optimize.ModuleConcatenationPlugin(),

        // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。
        // 这样可以确保输出资源不会包含错误
        new webpack.NoEmitOnErrorsPlugin(),

        // 配和MiniCssExtractPlugin.loader, 提取css到特定的目录下
        new MiniCssExtractPlugin({
            filename: 'app/css/[name].[contenthash:8].css',
            chunkFilename: 'app/css/[name].[contenthash:8].css',
            ignoreOrder: true
        }),

        // 压缩css
        new OptimizeCssAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }]
            },
            canPrint: true // 是否将插件信息打印到控制台
        })
    ]
};

module.exports = merge.smart(commonConfig, publicConfig);
