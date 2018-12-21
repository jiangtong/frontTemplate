/*eslint-disable*/
const webpack = require('webpack');
const config = require('./config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        reactLib: config.reactzoology,
        viewLib: config.viewers,
        utiliesLib: config.utiles
    },

    mode: 'production',

    performance: {
        hints: false
    },

    output: {
        filename: '[name].dll.js',
        path: `${config.appbuild}/dll`,
        library: '[name]_[hash]'
    },

    plugins: [
        //  copy 在dev模式下不好使
        new CopyWebpackPlugin([
            {
                from: `${config.appPublic}/js`,
                to: `${config.appbuild}/public/js`
            }]
        ),

        new CleanWebpackPlugin([`${config.appbuild}/dll/*`], {
            root: config.appPulicPath,
            verbose: true,
            dry: false
        }),

        new webpack.DllPlugin({
            path: `${config.appbuild}/dll/[name]-manifest.json`,
            name: '[name]_[hash]',
            //manifest 文件中请求的上下文(context)(默认值为 webpack 的上下文(context))
            context: config.appbuild
        }),

        new UglifyJSPlugin({
            parallel: true,
            cache: true,
            include: /node_modules/,

            uglifyOptions: {
                compress: {
                    drop_console: true,
                    reduce_vars: true
                },
                output: {
                    comments: false,
                    beautify: false
                }
            }
        })
    ]
};
