# 前端标准化

鉴于目前前端项目在某些方面关于复制重用的问题，特写个demo。主要技术栈，webpack4，babel7，react-router4，axios，react16

## 一、项目启动
    1. cnpm i 或 npm i
    2. npm run start (或者可以使用npm run dll,npm run start方式进行启动，前提是confg文件夹中的webpack.config.dev去打开部分注释代码)


## 二、项目结构
    1. src/router 为项目的路由文件夹，望每个模块新建一个路由文件，最后汇总到router.js中
    2. src/redux 为状态管理的组件，先保留
    3. src/components 是封装的一些通用组件 目前分成wuhan,xian,beijing,guangzhou四个文件夹
    4. src/layout 是项目的主要的界面布局
    5. src/pages 还是项目中的用到的模块 其中每个模块按照commen(assests:图片,样式,当前模块通用的组件),每个子界面创建
    6. src/public 整体项目中要到的css，img等
    7. src/utils 一些js方法， src/utils/request axios封装有form和json两种方式，可选择继承
    8. public 为项目中的可能用到的一些本地js文件，可以选择不使用，若不使用webpack中的commen.config的HtmlWebpackIncludeAssetsPlugin要注释其中部分引用的js。其中的html一定要保留
