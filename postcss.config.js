module.exports = {
    plugins: {
        'postcss-preset-env': {},
        // px转vw
        // 'postcss-px-to-viewport': {
        //     viewportWidth: 750,    // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 （如果我们设置的宽度是300px，那么编译之后的宽度为(300/750*100)=40vw,如果频宽实际为375px，那么该元素的宽度为（375*0.4）= 150px）
        //     viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        //     unitPrecision: 3,     // 指定`px`转换为视窗单位值的小数位数
        //     viewportUnit: 'vw',   //指定需要转换成的视窗单位，建议使用vw
        //     selectorBlackList: ['.ignore'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        //     minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        //     mediaQuery: false     // 允许在媒体查询中转换`px`
        // },

        autoprefixer: {
            overrideBrowserslist: [
                '> 1%',
                'last 3 versions',
                'iOS >= 8',
                'Android >= 4',
                'Chrome >= 40'
            ]
        }
    }
};