/*eslint-disable*/
const commonConfig = require('./webpack.config.common.js');
const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const config = require('./config');
const seen = new Set();
const nameLength = 4;
const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const publicConfig = {
    entry: {
        app: config.appIndexJs
    },

    output: {
        path: config.appbuild,
        filename: 'app/js/[name].[chunkhash:8].js',
        chunkFilename: 'app/js/[name].[chunkhash:8].bundle.js'
    },

    devtool: 'none',
    mode: 'production',

    plugins: [
        // new CompressionWebpackPlugin({
        //     filename: '[path].gz[query]',
        //     // 压缩后缀
        //     algorithm: 'gzip',
        //     cache: true,
        //     test: new RegExp('\\.(js|css)$'),
        //     // 只处理比这个值大的资源。按字节计算
        //     threshold: 10240,
        //     // 只有压缩率比这个值小的资源才会被处理 （minRatio = 压缩大小 / 原始大小）
        //     minRatio: 0.8,
        //     // 是否删除原资源
        //     deleteOriginalAssets: false
        // }),

        new CleanWebpackPlugin({
            verbose: true,
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

        // 使用 ParallelUglifyPlugin 并行压缩输出JS代码
        new ParallelUglifyPlugin({
            cacheDir: 'node_modules/.cache/',
            output: {
                output: {
                    /*是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false  */
                    beautify: false,
                    /* 是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false */
                    comments: false
                }
            },
            /*是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用 不大的警告*/
            warnings: false,
            compress: {
                /*是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句*/
                drop_console: true,
                /*是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不
                 转换，为了达到更好的压缩效果，可以设置为false*/
                collapse_vars: true,
                /*是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成
                 var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false*/
                reduce_vars: true
            },
            test: /.js$/g,
            include: [],
            exclude: [],
            workerCount: '',
            sourceMap: false
        }),
        // new TerserPlugin({
        //     terserOptions: {
        //         ecma: undefined,
        //         warnings: false,
        //         parse: {},
        //         compress: {},
        //         mangle: true, // Note `mangle.properties` is `false` by default.
        //         module: false,
        //         output: null,
        //         toplevel: false,
        //         nameCache: null,
        //         ie8: false,
        //         keep_classnames: undefined,
        //         keep_fnames: false,
        //         safari10: false
        //     }
        // }),
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
        })
    ],

    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    {
                        loader: 'css-loader'
                        // options: {
                        //     modules: true, // 指定启用css modules
                        //     importLoaders: 1,
                        //     localIdentName: '[name]__[local]--[hash:base64:5]'
                        // }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [postcssPresetEnv({})]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    {
                        loader: 'css-loader'
                        // options: {
                        //     modules: true, // 指定启用css modules
                        //     importLoaders: 1,
                        //     localIdentName: '[name]__[local]--[hash:base64:5]'
                        // }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [postcssPresetEnv({})]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // 使用less默认运行时替换配置的@color样式
                            modifyVars: config.color,
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    {
                        loader: 'css-loader'
                        // options: {
                        //     modules: true, // 指定启用css modules
                        //     importLoaders: 1,
                        //     localIdentName: '[name]__[local]--[hash:base64:5]'
                        // }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [postcssPresetEnv({})]
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = merge.smart(commonConfig, publicConfig);
