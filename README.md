<!-- @format -->

[![Build Status](https://www.travis-ci.org/jiangtong/frontTemplate.svg?branch=master)](https://www.travis-ci.org/jiangtong/frontTemplate)

# 前端标准化

husky 必须用 npm 进行更新 提交前代码格式化
npm run fix 代码格式化工具
npm run test 测试库

鉴于目前前端项目在某些方面关于复制重用的问题，特写个 demo。主要技术栈，webpack4，babel7，react-router4，axios，react16

## 一、项目启动

    1. cnpm i 或 npm i
    2. npm run start (或者可以使用npm run dll,npm run start方式进行启动，前提是confg文件夹中的webpack.config.dev去打开部分注释代码)
    3. 在mockUtils中配置好数据，执行npm run mock可以进行mock数据的开发

## 二、项目结构

    1. src/router 为项目的路由文件夹，望每个模块新建一个路由文件，最后汇总到router.js中
    2. src/redux 为状态管理的组件，先保留
    3. src/components 是封装的一些通用组件 目前分成wuhan,xian,beijing,guangzhou四个文件夹
    4. src/layout 是项目的主要的界面布局
    5. src/pages 还是项目中的用到的模块 其中每个模块按照commen(assests:图片,样式,当前模块通用的组件),每个子界面创建
    6. src/public 整体项目中要到的css，img等
    7. src/utils 一些js方法， src/utils/request axios封装有form和json两种方式，可选择继承
    8. public 为项目中的可能用到的一些本地js文件，可以选择不使用，若不使用webpack中的commen.config的HtmlWebpackIncludeAssetsPlugin要注释其中部分引用的js。其中的html一定要保留

## 四、集成工具

    git add.  -> git cz -> git commit -m '文字' -> git push
    1. commitizen/cz-cli 是一个可以实现规范的提交说明的工具： npm install -g commitizen
    2. commitizen init cz-conventional-changelog --save --save-exact
    3. npm install --save-dev @commitlint/cli 校验工具
    4. npm install --save-dev @commitlint/config-conventional 安装符合Angular风格的校验规则
    5. npm install husky --save-dev 安装commit钩子
    6.package.jso中加入"husky": {
        "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }

        - feat ：新功能
        - fix ：修复 bug
        - chore ：对构建或者辅助工具的更改
        - refactor ：既不是修复 bug 也不是添加新功能的代码更改
        - style ：不影响代码含义的更改 (例如空格、格式化、少了分号)
        - docs ：只是文档的更改
        - perf ：提高性能的代码更改
        - revert ：撤回提交
        - test ：添加或修正测试
