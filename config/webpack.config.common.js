/**
 *
 * @format
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 显示编译时间
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
// SpeedMeasurePlugin有冲突目前不能一起用
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();
// 判断环境
const isDev = process.env.NODE_ENV === 'development';
const config = require('./config');

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
              // 如果提取到单独文件夹下，记得配置一下publicPath，为了正确的照片css中使用的图片资源
              // 个人习惯将css文件放在单独目录下
              options: {
                  publicPath: '../../'
              }
          };

    return [
        styleInner,
        // antd的less主题更改用cache-loader总有问题
        // 'cache-loader',
        {
            loader: 'css-loader',
            options
        },
        {
            loader: 'postcss-loader'
        }
    ].filter(Boolean);
};

const sassLoader = () => {
    return [
        'sass-loader',
        {
            loader: 'sass-resources-loader',
            options: {
                resources: `${config.appSrc}/common/styles/variable.scss`
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
                resources: `${config.appSrc}/common/styles/variable.less`
            }
        }
    ].filter(Boolean);
};

const commonConfig = {
    entry: {
        app: config.appIndexJs
    },

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

    plugins: [
        new webpack.optimize.RuntimeChunkPlugin({
            name: entrypoint => `runtime-${entrypoint.name}`
        }),

        new webpack.optimize.SplitChunksPlugin({
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 3,
            maxInitialRequests: 3,
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        }),

        // 用Day.js替换moment
        new AntdDayjsWebpackPlugin(),
        // 只加载 `moment/locale/ja.js` 和 `moment/locale/it.js` 优化moment体积
        // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),

        new HtmlWebpackPlugin({
            title: '',
            filename: 'index.html',
            template: config.appHtml,
            favicon: config.favicon,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true, // 折叠空行
                removeAttributeQuotes: true // 删除双引号
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // 显示打包时间
        new ProgressBarPlugin({
            format: `${chalk.green('Progressing')} [:bar] ${chalk.green.bold(
                ':percent'
            )} (:elapsed seconds)`
        }),

        process.env.Analyzer && // 分析包的大小的
            new BundleAnalyzerPlugin({
                // concatenateModules: false,
                //  可以是`server`，`static`或`disabled`。
                //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
                //  在“静态”模式下，会生成带有报告的单个HTML文件。
                //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
                analyzerMode: 'server',
                //  将在“服务器”模式下使用的主机启动HTTP服务器。
                analyzerHost: '127.0.0.1',
                //  将在“服务器”模式下使用的端口启动HTTP服务器。
                analyzerPort: 1331,
                //  路径捆绑，将在`static`模式下生成的报告文件。
                //  相对于捆绑输出目录。
                // reportFilename: 'report.html',
                //  模块大小默认显示在报告中。
                //  应该是`stat`，`parsed`或者`gzip`中的一个。
                //  有关更多信息，请参见“定义”一节。
                defaultSizes: 'parsed',
                //  在默认浏览器中自动打开报告
                openAnalyzer: true,
                //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
                generateStatsFile: false,
                //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
                //  相对于捆绑输出目录。
                statsFilename: 'stats.json',
                //  stats.toJson（）方法的选项。
                //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
                //  在这里查看更多选项：https：//github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
                statsOptions: null,
                logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
            })
        // new HtmlWebpackTagsPlugin({
        //     tags: [
        //         isDev ? './public/js/baiduMap.js' : 'public/js/baiduMap.js',
        //         {
        //             path:
        //                 'http://api.map.baidu.com/api?v=3.0&ak=moMIflSL2yGiq3VwQ3bynEKE7gl2cjQw',
        //             type: 'js'
        //         },
        //     ],
        //     append: false
        // })
    ].filter(Boolean),

    resolve: {
        // 目录开头为 @ 符号，文件开头为 $ 符号
        alias: {
            '@useHooks': path.resolve(config.appSrc, 'useHooks'),
            '@redux': path.resolve(config.appSrc, 'redux'),
            '@layout': path.resolve(config.appSrc, 'layout'),
            '@router': path.resolve(config.appSrc, 'router'),
            '@pages': path.resolve(config.appSrc, 'pages'),
            '@common': path.resolve(config.appSrc, 'common'),
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
                enforce: 'pre', // 强制去前面执行 因为loader是从下向上 从右向左执行的
                test: /\.js?$/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: isDev, // 是否所有的error都当做warning。如果需要可以打开，在测试环境把所有 Error 都当做 Warn，这样避免了修改 ESLint 规则
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
                    'cache-loader',
                    {
                        loader: 'thread-loader'
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
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: true
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 0,
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
                        // sassmodule
                        test: sassModuleReg,
                        use: [
                            ...styleLoader({
                                modules: {
                                    localIdentName: '[local]--[hash:base64:5]'
                                }
                            }),
                            ...sassLoader()
                        ],
                        include: config.appSrc
                    },
                    {
                        // lessmodule
                        test: lessModuleReg,
                        use: [
                            ...styleLoader({
                                modules: {
                                    localIdentName: '[local]--[hash:base64:5]'
                                }
                            }),
                            ...lessLoader({
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            })
                        ],
                        include: config.appSrc
                    },
                    {
                        // sass
                        test: sassReg,
                        use: [...styleLoader(), ...sassLoader()],
                        include: config.appSrc
                    },
                    {
                        // less
                        test: lessReg,
                        use: [
                            ...styleLoader(),
                            ...lessLoader({
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            })
                        ],
                        include: config.appSrc
                    },
                    {
                        // cssmodule
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
                        // css
                        test: cssReg,
                        use: [...styleLoader()],
                        include: config.appSrc
                    },
                    {
                        // antd等第三方less
                        test: lessReg,
                        use: [
                            ...styleLoader(),
                            ...lessLoader({
                                lessOptions: {
                                    // 使用less默认运行时替换配置的@color样式
                                    modifyVars: config.styles,
                                    javascriptEnabled: true
                                }
                            })
                        ],
                        include: /node_modules/
                    }
                ]
            }
        ]
    },

    stats: {
        // 添加缓存（但未构建）模块的信息
        cached: false,
        // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
        cachedAssets: false,
        // 添加 children 信息
        children: false,
        // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
        chunks: false,
        // 将构建模块信息添加到 chunk 信息
        chunkModules: false,
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
        modules: false,
        // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
        performance: false,
        // 添加时间信息
        timings: true,
        // 添加警告
        warnings: true
    }
};

module.exports = smp.wrap(commonConfig);
// module.exports = commonConfig;
