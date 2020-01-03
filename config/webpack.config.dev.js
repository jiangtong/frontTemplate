/*eslint-disable*/

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const config = require('./config');
const path = require('path');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 需要转发的接口拼接
const {proxyArr = []} = config;
let newProxyObj = {};
proxyArr.forEach(item => {
    newProxyObj[item.name] = {
        target: item.url,
        changeOrigin: true,
        secure: false
    };
});

const devConfig = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: [
            '@babel/polyfill',
            'react-hot-loader/patch',
            config.appIndexJs
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin({
            //  可以是`server`，`static`或`disabled`。
            //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
            //  在“静态”模式下，会生成带有报告的单个HTML文件。
            //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
            analyzerMode: 'server',
            //  将在“服务器”模式下使用的主机启动HTTP服务器。
            // analyzerHost: '127.0.0.1',
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            // analyzerPort: 8888,
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
            logLevel: 'info' //日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
        }),

        new HardSourceWebpackPlugin({
            // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配置构建不同的缓存
            configHash: function (webpackConfig) {
                return require('node-object-hash')({sort: false}).hash(webpackConfig);
            },
            // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
            environmentHash: {
                root: `${config.appPublic}/node_modules`,
                directories: [],
                files: ['package-lock.json', 'yarn.lock']
            }
        }),
        new HardSourceWebpackPlugin.ExcludeModulePlugin([
            {
                test: /.*\.DS_Store/
            }
        ]),

        new openBrowserWebpackPlugin({
            url: `http://${config.host || config.baseHost}:${config.port}/`,
            browser: config.brower
        })
    ],

    output: {
        path: config.appbuild,
        filename: 'app/[name].[hash].bundle.js',
        chunkFilename: 'app/[name].[hash].bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js?$/,
            use: [{
                loader: 'eslint-loader',
                options: {
                    failOnError: false,
                    failOnWarning: true, //警告不显示
                    quiet: true,
                    cache: true
                }
            }],
            exclude: /node_modules/,
            include: config.appSrc
        }, {
            test: /\.(scss|sass)$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader'
                    // options: {
                    //     modules: true, // 指定启用css modules
                    //     importLoaders: 1,
                    //     localIdentName: '[name]__[local]--[hash:base64:5]'
                    // }
                }, {
                    loader: 'postcss-loader',
                    options: {
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
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
                // options: {
                //     modules: true, // 指定启用css modules
                //     importLoaders: 1,
                //     localIdentName: '[name]__[local]--[hash:base64:5]'
                // }
            }, {
                loader: 'postcss-loader',
                options: {
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
                'style-loader',
                {
                    loader: 'css-loader'
                    // options: {
                    //     modules: true, // 指定启用css modules
                    //     importLoaders: 1,
                    //     localIdentName: '[name]__[local]--[hash:base64:5]'
                    // }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            postcssPresetEnv({})
                        ]
                    }
                }
            ]
        }]
    },

    devServer: {
        host: config.host || config.baseHost,
        port: config.port,
        historyApiFallback: true,
        compress: true,
        contentBase: '/',
        hot: true,
        inline: true,
        // 默认浏览器
        open: false,
        disableHostCheck: true,
        proxy: newProxyObj,
        stats: {
            // 添加缓存（但未构建）模块的信息
            cached: true,
            // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
            cachedAssets: true,
            // 添加 children 信息
            children: true,
            // 添加 chunk 信息（设置为 `false` 能允许较少的冗长输出）
            chunks: true,
            // 将构建模块信息添加到 chunk 信息
            chunkModules: true,
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
            modules: true,
            // 当文件大小超过 `performance.maxAssetSize` 时显示性能提示
            performance: true,
            // 添加时间信息
            timings: true,
            // 添加警告
            warnings: true
        }
    }
};

module.exports = merge.smart(commonConfig, devConfig);
