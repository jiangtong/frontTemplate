/*eslint-disable*/
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')
// 终端输出进度条
const WebpackBar = require('webpackbar')
// 显示编译时间
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const os = require('os')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

const smp = new SpeedMeasurePlugin()

const commonConfig = {
    performance: {
        hints: false
    },

    // externals: [
    //     function(context, request, callback) {
    //         if (/^js$/.test(request)) {
    //             return callback(null, 'commonjs ' + request);
    //         }
    //         callback();
    //     }
    // ],

    plugins: [
        new webpack.optimize.RuntimeChunkPlugin({
            name: 'runtime'
        }),

        new webpack.optimize.SplitChunksPlugin({
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxSize: 0,
            maxAsyncRequests: 5,
            maxInitialRequests: 6,
            name: true,
            cacheGroups: {
                views: {
                    test: module =>
                        /ant/.test(module.context) ||
                        /rc-/.test(module.context) ||
                        /react-router-breadcrumbs-hoc/.test(module.context) ||
                        /echarts/.test(module.context),
                    name: 'views',
                    priority: 10,
                    reuseExistingChunk: true
                },

                reactVendor: {
                    name: 'reactVendor',
                    priority: 10,
                    test: module =>
                        /react/.test(module.context) ||
                        /redux/.test(module.context) ||
                        /react-dom/.test(module.context) ||
                        /react-redux/.test(module.context) ||
                        /react-thunk/.test(module.context),
                    reuseExistingChunk: true
                },

                utils: {
                    name: 'utils',
                    priority: 10,
                    test: module =>
                        /moment/.test(module.context) ||
                        /axios/.test(module.context) ||
                        /classnames/.test(module.context) ||
                        /prop-types/.test(module.context),
                    reuseExistingChunk: true
                },

                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },

                vendor: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                }
            }
        }),

        // new BundleAnalyzerPlugin({
        //     // concatenateModules: false,
        //     //  可以是`server`，`static`或`disabled`。
        //     //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
        //     //  在“静态”模式下，会生成带有报告的单个HTML文件。
        //     //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
        //     analyzerMode: 'server',
        //     //  将在“服务器”模式下使用的主机启动HTTP服务器。
        //     analyzerHost: '127.0.0.1',
        //     //  将在“服务器”模式下使用的端口启动HTTP服务器。
        //     analyzerPort: 8888,
        //     //  路径捆绑，将在`static`模式下生成的报告文件。
        //     //  相对于捆绑输出目录。
        //     // reportFilename: 'report.html',
        //     //  模块大小默认显示在报告中。
        //     //  应该是`stat`，`parsed`或者`gzip`中的一个。
        //     //  有关更多信息，请参见“定义”一节。
        //     defaultSizes: 'parsed',
        //     //  在默认浏览器中自动打开报告
        //     openAnalyzer: true,
        //     //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
        //     generateStatsFile: false,
        //     //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
        //     //  相对于捆绑输出目录。
        //     statsFilename: 'stats.json',
        //     //  stats.toJson（）方法的选项。
        //     //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
        //     //  在这里查看更多选项：https：//github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
        //     statsOptions: null,
        //     logLevel: 'info' //日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
        // }),

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

        // new HappyPack({
        //     id: 'happy-babel-js',
        //     loaders: ['babel-loader?cacheDirectory=true'],
        //     threadPool: happyThreadPool
        // })

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
            '@commenModel': path.resolve(
                config.appSrc,
                'public/data-commen/model'
            ),
            '@reducers': path.resolve(config.appSrc, 'redux/reducers'),
            '@actions': path.resolve(config.appSrc, 'redux/actions'),
            '@useRedux': path.resolve(config.appSrc, 'redux'),
            '@layout': path.resolve(config.appSrc, 'layout'),
            '@router': path.resolve(config.appSrc, 'router'),
            '@pages': path.resolve(config.appSrc, 'pages'),
            '@public': path.resolve(config.appSrc, 'public'),
            '@components': path.resolve(config.appSrc, 'components'),
            '@utils': path.resolve(config.appSrc, 'utils'),
            $utils: path.resolve(config.appSrc, 'utils/utils'),
            'react-dom': '@hot-loader/react-dom'
        }
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                        // loader: 'happypack/loader?id=happy-babel-js'
                    }
                ],
                exclude: /node_modules/,
                include: config.appSrc
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 15000,
                            name: 'app/images/[name]_[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
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
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 15000,
                        name: 'app/fonts/[name]_[hash:7].[ext]'
                    }
                }
            }
        ]
    }
}

module.exports = smp.wrap(commonConfig)
