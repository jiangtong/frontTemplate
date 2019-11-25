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

        new openBrowserWebpackPlugin({
            url: `http://127.0.0.1:${config.port}/`,
            browser: config.brower
        })

        // 选用dll模式可以打开如下代码
        // new webpack.DllReferencePlugin({
        //     context: config.appbuild,
        //     manifest: require(path.resolve(config.appbuild, 'dll/reactLib-manifest.json'))
        // }),
        //
        // new webpack.DllReferencePlugin({
        //     context: config.appbuild,
        //     manifest: require(path.resolve(config.appbuild, 'dll/viewLib-manifest.json'))
        // }),
        //
        // new webpack.DllReferencePlugin({
        //     context: config.appbuild,
        //     manifest: require(path.resolve(config.appbuild, 'dll/utiliesLib-manifest.json'))
        // }),
        //
        // new HtmlWebpackTagsPlugin({
        //     tags: [
        //         'dist/dll/reactLib.dll.js',
        //         'dist/dll/viewLib.dll.js',
        //         'dist/dll/utiliesLib.dll.js'
        //     ],
        //     append: false
        // })
        // 到这里
    ],

    output: {
        path: config.appbuild,
        filename: 'app/[name].[hash].bundle.js',
        chunkFilename: 'app/[name].[hash].bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader', {
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
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
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
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader', options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv({})
                            ]
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
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
