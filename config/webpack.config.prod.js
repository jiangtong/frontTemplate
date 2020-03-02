/*eslint-disable*/
const commonConfig = require('./webpack.config.common.js');
const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');
const seen = new Set();
const nameLength = 4;
const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const publicConfig = {
    entry: {
        app: config.appIndexJs
    },

    output: {
        path: config.appbuild,
        filename: 'app/js/[name].[chunkhash:8].js',
        chunkFilename: 'app/js/[name].[chunkhash:8].bundle.js'
        // library: 'result', // 函数或变量名字
        // libraryTarget: 'umd' //打包文件加载方式
    },

    devtool: 'none',
    mode: 'production',

    plugins: [
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

        new CleanWebpackPlugin({
            verbose: false,
            dry: false
        }),

        //  copy 在dev模式下不好使
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(config.appPublic, 'js'),
        //         to: path.resolve(config.appbuild, 'public/js')
        //     }]
        // ),

        new webpack.HashedModuleIdsPlugin(),

        // 预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度
        new webpack.optimize.ModuleConcatenationPlugin(),

        // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。
        // 这样可以确保输出资源不会包含错误
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.NamedChunksPlugin(chunk => {
            if (chunk.name) {
                return chunk.name;
            }
            const modules = Array.from(chunk.modulesIterable);
            if (modules.length > 1) {
                const hash = require('hash-sum');
                const joinedHash = hash(modules.map(m => m.id).join('_'));
                let len = nameLength;
                while (seen.has(joinedHash.substr(0, len))) {
                    len++;
                }
                seen.add(joinedHash.substr(0, len));
                return `chunk-${joinedHash.substr(0, len)}`;
            } else {
                return modules[0].id;
            }
        }),

        // 配和MiniCssExtractPlugin.loader, 提取css到特定的目录下
        new MiniCssExtractPlugin({
            filename: 'app/css/[name].[contenthash:8].css',
            chunkFilename: 'app/css/[name].[contenthash:8].css',
            ignoreOrder: true
        }),

        new TerserPlugin({
            cache: true,
            extractComments: false,
            parallel: true,
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
        // new UglifyJSPlugin({
        //     parallel: true,
        //     cache: true,
        //     include: /\/src/,
        //
        //     uglifyOptions: {
        //         compress: {
        //             drop_console: true,
        //             reduce_vars: true
        //         },
        //         output: {
        //             comments: false,
        //             beautify: false
        //         }
        //     }
        // }),

        // 压缩css
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            },
            canPrint: true //是否将插件信息打印到控制台
        }),

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
        })
    ]
};

module.exports = merge.smart(commonConfig, publicConfig);
