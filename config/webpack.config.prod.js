/*eslint-disable*/
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const config = require('./config');
const seen = new Set();
const nameLength = 4;
const path = require('path');


const publicConfig = {
    entry: {
        app: [
            '@babel/polyfill',
            config.appIndexJs
        ],
        vendor: config.reactzoology,
        views: config.viewers,
        utiles: config.utiles
    },

    output: {
        path: config.appbuild,
        filename: 'app/js/[name].[chunkhash:8].js',
        chunkFilename: 'app/js/[name].[chunkhash:8].bundle.js'
    },

    // devtool: 'cheap-module-source-map',
    mode: 'production',

    plugins: [
        new webpack.optimize.RuntimeChunkPlugin({
            name: 'runtime'
        }),

        new webpack.optimize.SplitChunksPlugin({
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 5,
            name: true,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                vendors: {
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    test: /node_modules\/(.*)\.js/,
                    minSize: 30000,
                    name: 'vendors'
                },
                views: {
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    test: /node_modules\/(.*)\.js/,
                    minSize: 30000,
                    name: 'views'
                },
                utiles: {
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    test: /node_modules\/(.*)\.js/,
                    minSize: 30000,
                    name: 'utiles'
                }
            }
        }),

        // root是必须要写的
        new CleanWebpackPlugin({
            verbose: true,
            dry: false
        }),

        new webpack.HashedModuleIdsPlugin(),

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
            chunkFilename: 'app/css/[name].[contenthash:8].css'
        }),

        // 使用 ParallelUglifyPlugin 并行压缩输出JS代码
        new ParallelUglifyPlugin({
            cacheDir: '.cache/',
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
        new OptimizeCssAssetsPlugin()
    ],

    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../../'
                    }
                },
                {
                    loader: 'css-loader?importLoaders=2',
                    options: {}
                },
                {
                    loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [
                            postcssPresetEnv({})
                        ]
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /\.less$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../../'
                    }
                }, {
                    loader: 'css-loader?importLoaders=2',
                    options: {}
                }, {
                    loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [
                            postcssPresetEnv({})
                        ]
                    }
                }, {
                    loader: 'less-loader',
                    options: {
                        // 使用less默认运行时替换配置的@color样式
                        modifyVars: config.color,
                        javascriptEnabled: true
                    }
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../../'
                    }
                },
                {
                    loader: 'css-loader?importLoaders=2',
                    options: {}
                },
                {
                    loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [
                            postcssPresetEnv({})
                        ]
                    }
                }
            ]
        }]
    }
};

module.exports = merge.smart(commonConfig, publicConfig);
