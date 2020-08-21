/** @format */

module.exports = {
    // 第三方插件
    plugins: ['react', 'react-hooks', 'baili'],

    // 解析器用于解析代码
    parser: 'babel-eslint',
    parserOptions: {
        //对于新的ES6全局变量，请使用{ "env": { "es6": true } }（此设置会自动启用ES6语法）。解析器选项.eslintrc.*通过使用parserOptions属性在您的文件中设置。可用的选项是：
        sourceType: 'module', //设置为"script"（默认）或者"module"您的代码位于ECMAScript模块中。
        allowImportExportEverywhere: true,
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true, //启用JSX
            experimentalObjectRestSpread: true //启用对实验性支持对象静止/扩展性（重要提示：这是一个实验性功能，可能会在未来显著改变它的建议，你怎么做。不写规则依靠这个功能，除非你愿意承担维修费用，当它改变。）
        }
    },

    // 可以全局使用变量
    globals: {
        React: true
    },

    // 环境，这里可以设置环来做区别判断
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true
    },

    settings: {
        react: {
            version: 'detect'
        },
        'import/ignore': ['node_modules']
    },

    // 使用的扩展库
    //   extends: [ 'plugin:korolint/koroRule' ] // 继承插件导出的配置
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier'],

    // 规则配置
    rules: {
        'baili/max-length': 2,
        'react/display-name': 0, //防止在React组件定义中丢失displayName
        'react/forbid-prop-types': [2, { forbid: ['any'] }], //禁止某些propTypes
        'react/jsx-boolean-value': 2, //在JSX中强制布尔属性符号
        'react/jsx-closing-tag-location': 0, //闭合括号
        // "react/jsx-closing-bracket-location": 1, //在JSX中验证右括号位置
        'react/jsx-fragments': 0,
        'react/jsx-curly-spacing': [2, { when: 'never', children: true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
        'react/jsx-indent-props': [2, 4], //验证JSX中的props缩进
        'react/jsx-curly-newline': 0,
        'react/destructuring-assignment': 0, // 需要使用结构变量
        'react/jsx-indent': 0,
        'react/no-unused-state': 0,
        'react/jsx-key': 2, //在数组或迭代器中验证JSX具有key属性
        // "react/jsx-max-props-per-line": [1, {"maximum": 1}], // 限制JSX中单行上的props的最大数量
        'react/jsx-no-bind': 0, //JSX中不允许使用箭头函数和bind
        'react/jsx-no-duplicate-props': 2, //防止在JSX中重复的props
        'react/jsx-no-literals': 0, //防止使用未包装的JSX字符串
        'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
        'react/jsx-pascal-case': 0, //为用户定义的JSX组件强制使用PascalCase
        'react/jsx-sort-props': 0, //强化props按字母排序
        'react/jsx-uses-react': 2, //防止反应被错误地标记为未使用
        'react/jsx-uses-vars': 2, //防止在JSX中使用的变量被错误地标记为未使用
        'react/no-danger': 0, //防止使用危险的JSX属性
        'react/no-did-mount-set-state': 0, //防止在componentDidMount中使用setState
        'react/no-did-update-set-state': 1, //防止在componentDidUpdate中使用setState
        'react/no-direct-mutation-state': 2, //防止this.state的直接变异
        'react/no-multi-comp': 2, //防止每个文件有多个组件定义
        'react/no-set-state': 0, //防止使用setState
        'react/no-unknown-property': 2, //防止使用未知的DOM属性
        'react/prefer-es6-class': 2, //为React组件强制执行ES5或ES6类
        'react/prop-types': 0, //防止在React组件定义中丢失props验证
        'react/react-in-jsx-scope': 2, //使用JSX时防止丢失React
        'react/self-closing-comp': 0, //防止没有children的组件的额外结束标签
        'react/sort-comp': 0, //强制组件方法顺序
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn', // <--- THIS IS THE NEW RULE
        'react/no-array-index-key': 0, //防止在数组中遍历中使用数组key做索引
        'react/no-deprecated': 1, //不使用弃用的方法
        'react/prefer-stateless-function': 1, //没有state的用处的地方写成fun组件,
        'react/jsx-one-expression-per-line': 0, //必须分开
        'react/state-in-constructor': 0, //state是否必须在constructor里
        'react/button-has-type': 0, // button必须要类型
        'import/no-unresolved': 0,
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }], // 允许一元运算符++和循环--的后缀（最终表达式）for
        'prefer-destructuring': 0, //必须使用结构赋值
        'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
        quotes: [2, 'single'], //单引号
        'no-console': 0, //不禁用console
        'no-debugger': 2, //禁用debugger
        'no-irregular-whitespace': 0, //不规则的空白不允许
        'no-trailing-spaces': 1, //一行结束后面有空格就发出警告
        'eol-last': 0, //文件以单一的换行符结束
        camelcase: 0, //强制驼峰法命名
        'jsx-quotes': [2, 'prefer-double'], //强制在JSX属性（jsx-quotes）中一致使用双引号
        // "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
        'no-unreachable': 1, //不能有无法执行的代码
        'comma-dangle': 2, //对象字面量项尾不能有逗号
        'no-mixed-spaces-and-tabs': 0, //禁止混用tab和空格
        'prefer-arrow-callback': 0, //比较喜欢箭头回调
        'comma-dangle': ['error', 'never'], //是否允许尾逗号
        'react/jsx-props-no-spreading': 0, //是否允许{...props}
        'class-methods-use-this': 0, //class的方法中没有this 转成static
        'consistent-return': 0, // 箭头函数必须有返回值
        'no-underscore-dangle': 0, // 就标识符的命名约定而言，悬挂下划线可能是 JavaScript 中最具偏见的。悬挂下划线在标识符的开头或末尾是下划线，例如：
        'no-unused-expressions': [
            0,
            { allowShortCircuit: true, allowTernary: true }
        ]
    }
};
