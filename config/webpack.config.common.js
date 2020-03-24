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
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const os = require('os');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// SpeedMeasurePlugin有冲突目前不能一起用
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const threadLoader = require('thread-loader');
// 判断环境
const isDev = process.env.NODE_ENV === 'development';

const cssWorkerPool = {
    // 一个 worker 进程中并行执行工作的数量
    // 默认为 20
    workerParallelJobs: 20,
    poolTimeout: 2000
};

const jsWorkerPool = {
    // options
    // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)
    // 当 require('os').cpus() 是 undefined 时，则为 1
    workers: 2,
    // 闲置时定时删除 worker 进程
    // 默认为 500ms
    // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
    poolTimeout: 2000
};

threadLoader.warmup(cssWorkerPool, [
    'css-loader',
    'postcss-loader',
    'sass-loader',
    'less-loader',
    'sass-resources-loader'
]);
threadLoader.warmup(jsWorkerPool, ['babel-loader', 'eslint-loader']);

const cssReg = /\.css$/;
const cssModuleReg = /\.module\.css$/;
const sassModuleReg = /\.module\.(scss|sass)$/;
const sassReg = /\.scss|.sass$/;
const lessModuleReg = /\.module\.less/;
const lessReg = /\.less$/;

const styleLoader = (options = {}) => {
    const styleInner = isDev
        ? {
              loader: 'style-loader',
              options: {
                  insert: 'head'
              }
          }
        : {
              loader: MiniCssExtractPlugin.loader,
              //如果提取到单独文件夹下，记得配置一下publicPath，为了正确的照片css中使用的图片资源
              //个人习惯将css文件放在单独目录下
              options: {
                  publicPath: '../../'
              }
          };

    const threeLoaderStatus = isDev && {
        loader: 'thread-loader',
        options: cssWorkerPool
    };
    return [
        styleInner,
        threeLoaderStatus,
        {
            loader: 'css-loader',
            options
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: () => [postcssPresetEnv({})]
            }
        }
    ].filter(Boolean);
};

const sassLoader = () => {
    return [
        'sass-loader',
        {
            loader: 'sass-resources-loader',
            options: {
                resources: `${config.appSrc}/commen/styles/variable.scss`
            }
        }
    ].filter(Boolean);
};

const lessLoader = (options = {}) => {
    return [
        {
            loader: 'less-loader',
            options
        },
        {
            loader: 'sass-resources-loader',
            options: {
                resources: `${config.appSrc}/commen/styles/variable.less`
            }
        }
    ].filter(Boolean);
};

const commonConfig = {
    performance: {
        hints: false
    },

    // externals: [
    // lodash : {
    //     commonjs: 'lodash',
    //     amd: 'lodash',
    //     root: '_' // 指向全局变量
    //   },
    //     function(context, request, callback) {
    //         if (/^js$/.test(request)) {
    //             return callback(null, 'commonjs ' + request);
    //         }
    //         callback();
    //     }
    // ],

    optimization: {
        minimize: !isDev,

        // 修改文件的ids的形成方式，避免单文件修改，会导致其他文件的hash值变化，影响缓存
        moduleIds: 'hashed',
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxAsyncRequests: 5,
            maxInitialRequests: 10,
            name: true,
            automaticNameDelimiter: '~',
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
                        /axios/.test(module.context) ||
                        /classnames/.test(module.context) ||
                        /prop-types/.test(module.context),
                    reuseExistingChunk: true
                },

                vendor: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                },

                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        }
    },

    plugins: [
        // 用Day.js替换moment
        new AntdDayjsWebpackPlugin(),
        // 只加载 `moment/locale/ja.js` 和 `moment/locale/it.js` 优化moment体积
        // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),

        //  new BundleAnalyzerPlugin({
        //     // concatenateModules: false,
        //     //  可以是`server`，`static`或`disabled`。
        //     //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
        //     //  在“静态”模式下，会生成带有报告的单个HTML文件。
        //     //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
        //     analyzerMode: 'server',
        //     //  将在“服务器”模式下使用的主机启动HTTP服务器。
        //     analyzerHost: '127.0.0.1',
        //     //  将在“服务器”模式下使用的端口启动HTTP服务器。
        //     analyzerPort: 9119,
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
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true, //折叠空行
                removeAttributeQuotes: true //删除双引号
            },
            chunksSortMode: 'dependency'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // 进度条
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
        //         isDev ? './public/js/baiduMap.js' : 'public/js/baiduMap.js',
        //         isDev ? './public/js/LuShu.js' : 'public/js/LuShu.js',
        //         isDev ? './public/js/Heatmap.js' : 'public/js/Heatmap.js',

        //         {
        //             path:
        //                 'http://api.map.baidu.com/api?v=3.0&ak=moMIflSL2yGiq3VwQ3bynEKE7gl2cjQw',
        //             type: 'js'
        //         },
        //         {
        //             path:
        //                 'http://api.map.baidu.com/library/LuShu/1.2/src/LuShu_min.js',
        //             type: 'js'
        //         },
        //         {
        //             path:
        //                 'http://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js',
        //             type: 'js'
        //         }
        //     ],
        //     append: false
        // })

        // new HardSourceWebpackPlugin({
        //     // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配置构建不同的缓存
        //     configHash: function(webpackConfig) {
        //         return require('node-object-hash')({ sort: false }).hash(
        //             webpackConfig
        //         );
        //     },

        //     info: {
        //         // 'none' or 'test'.
        //         mode: 'none',
        //         // 'debug', 'log', 'info', 'warn', or 'error'.
        //         level: 'debug'
        //     },
        //     cachePrune: {
        //         // Caches younger than `maxAge` are not considered for deletion. They must
        //         // be at least this (default: 2 days) old in milliseconds.
        //         maxAge: 2 * 24 * 60 * 60 * 1000,
        //         // All caches together must be larger than `sizeThreshold` before any
        //         // caches will be deleted. Together they must be at least this
        //         // (default: 50 MB) big in bytes.
        //         sizeThreshold: 50 * 1024 * 1024
        //     },

        //     cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',

        //     // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
        //     environmentHash: {
        //         root: process.cwd(),
        //         directories: [],
        //         files: ['package-lock.json', 'yarn.lock']
        //     }
        // })
    ],

    resolve: {
        // 目录开头为 @ 符号，文件开头为 $ 符号
        alias: {
            '@commenApi': path.resolve(config.appSrc, 'commen/data-commen/api'),
            '@commenModel': path.resolve(
                config.appSrc,
                'commen/data-commen/model'
            ),
            '@useHooks': path.resolve(config.appSrc, 'useHooks'),
            '@reducers': path.resolve(config.appSrc, 'redux/reducers'),
            '@actions': path.resolve(config.appSrc, 'redux/actions'),
            '@useRedux': path.resolve(config.appSrc, 'redux'),
            '@layout': path.resolve(config.appSrc, 'layout'),
            '@router': path.resolve(config.appSrc, 'router'),
            '@pages': path.resolve(config.appSrc, 'pages'),
            '@commen': path.resolve(config.appSrc, 'commen'),
            '@src': path.resolve(config.appSrc),
            '@components': path.resolve(config.appSrc, 'components'),
            '@utils': path.resolve(config.appSrc, 'utils'),
            $utils: path.resolve(config.appSrc, 'utils/utils'),
            'react-dom': '@hot-loader/react-dom'
        }
    },

    module: {
        rules: [
            {
                enforce: 'pre', //强制去前面执行 因为loader是从下向上 从右向左执行的
                test: /\.js?$/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: jsWorkerPool
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnError: false,
                            failOnWarning: true, //警告不显示
                            quiet: true,
                            cache: true,
                            fix: false // 是否自动修复
                        }
                    }
                ],
                exclude: /node_modules/,
                include: config.appSrc
            },
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: jsWorkerPool
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
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
                            esModule: false,
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
                            esModule: false,
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
                        esModule: false,
                        name: 'app/fonts/[name]_[hash:7].[ext]'
                    }
                }
            },
            // 找到第一个匹配的进行解析  设置module与非module形式都支持，根据文件名称区分，文件写了[name].module.scss或者[name].module.less即支持module
            {
                oneOf: [
                    {
                        test: sassModuleReg,
                        use: [
                            ...styleLoader({
                                modules: {
                                    localIdentName: 'local]--[hash:base64:5]'
                                }
                            }),
                            ...sassLoader()
                        ],
                        include: config.appSrc
                    },
                    {
                        test: lessModuleReg,
                        use: [
                            ...styleLoader({
                                modules: {
                                    localIdentName: '[local]--[hash:base64:5]'
                                }
                            }),
                            ...lessLoader({
                                javascriptEnabled: true
                            })
                        ],
                        include: config.appSrc
                    },
                    {
                        test: sassReg,
                        use: [...styleLoader(), ...sassLoader()],
                        include: config.appSrc
                    },
                    {
                        test: lessReg,
                        use: [
                            ...styleLoader(),
                            ...lessLoader({
                                javascriptEnabled: true
                            })
                        ],
                        include: config.appSrc
                    },
                    {
                        test: cssModuleReg,
                        use: [
                            ...styleLoader({
                                modules: {
                                    localIdentName: '[local]--[hash:base64:5]'
                                }
                            })
                        ],
                        include: config.appSrc
                    },
                    {
                        test: cssReg,
                        use: [...styleLoader()],
                        include: config.appSrc
                    },
                    {
                        test: lessReg,
                        use: [
                            ...styleLoader(),
                            ...lessLoader({
                                // 使用less默认运行时替换配置的@color样式
                                modifyVars: config.color,
                                javascriptEnabled: true
                            })
                        ],
                        include: /node_modules/
                    }
                ]
            }
        ]
    }
};

module.exports = smp.wrap(commonConfig);
// module.exports = commonConfig;
