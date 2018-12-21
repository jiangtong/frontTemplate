# 前端标准化

鉴于目前前端项目在某些方面关于复制重用的问题，特写个demo。主要技术栈，webpack4，babel7，react-router4，axios，react16

## 一、项目启动
    1. cnpm i 或 npm i
    2. npm run start (或者可以使用npm run dll,npm run start方式进行启动，前提是去confg文件夹中的webpack.config.dev去打开部分注释代码)


## 二、项目结构
    1.router 为项目的路由文件夹，望每个模块新建一个路由文件，最后汇总到router.js中
    2.redux 为状态管理的组件，先保留
    3.assets 为项目中的最基本的css以及img，除非特别通用的放在里面，一般建议放在各个模块中
    4.utils 为项目中的一些工具类库，包括网络请求
    5.app 是项目的的各个功能模块，BaseLayout是项目的基本结构布局，Components是项目的一些通用组件
    6.建议各个模块可以像Teacher中的一样commen中是当前模块用的请求，以及assets是当前模块用到的css以及img


## 三、注意事项
    1.utils 中的工具库可以先留着，后期逐步向loadsh上迁移
    2.redux 先保留
    3.config 文件夹是打包的文件，config.js是一些基本打包或者运行的配置，包括打包路径以及处理请求转发等
    4.config/webpack.common.config内包含一些alias的别名
    5.eslintrc 是一些前端代码规范的格式，不需要的话可以关闭或者单个界面加上/*eslint-disable*/
    6.utils中的color文件是一些配色可选方案，可以和assets中的less/variable进行匹配对当前界面的样式进行更改


