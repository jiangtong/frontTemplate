// 一个 JavaScript class
// class MyExampleWebpackPlugin {
//     // 将 `apply` 定义为其原型方法，此方法以 compiler 作为参数
//     apply(compiler) {
//         // tap(触及) 到 compilation hook，而在 callback 回调时，会将 compilation 对象作为参数，
//         compiler.hooks.compilation.tap('MyExampleWebpackPlugin', compilation => {
//             // 现在，通过 compilation 对象，我们可以 tap(触及) 到各种可用的 hooks 了
//             compilation.hooks.optimize.tap('MyExampleWebpackPlugin', () => {
//                 console.log('正在优化资源。');
//             });
//         });
//     }
// }


class MyPlugin {
    constructor() {
        this.chunkVersions = {};
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
            // 检索每个（构建输出的）chunk：
            // compilation.chunks.forEach(chunk => {
            //
            //     // 检索 chunk 中（内置输入的）的每个模块：
            //     // chunk.modules.forEach(module => {
            //         // 检索模块中包含的每个源文件路径：
            //         // console.log(module.fileDependencies)
            //         // module.fileDependencies.forEach(filepath => {
            //         //     // 我们现在已经对源结构有不少了解……
            //         //     console.log(filepath);
            //         // });
            //     // });
            //
            //     // 检索由 chunk 生成的每个资源(asset)文件名：
            //     chunk.files.forEach(filename => {
            //         console.log(filename)
            //         // Get the asset source for each file generated by the chunk:
            //         var source = compilation.assets[filename].source();
            //     });
            // });

            // var changedChunks = compilation.chunks.filter(chunk => {
            //     var oldVersion = this.chunkVersions[chunk.name];
            //     this.chunkVersions[chunk.name] = chunk.hash;
            //     console.log(chunk.hash !== oldVersion);
            //     return chunk.hash !== oldVersion;
            // });

            compilation.hooks.afterOptimizeChunkAssets.tap('MyPlugin', chunks => {
                chunks.forEach(chunk => {
                    console.log({
                        id: chunk.id,
                        name: chunk.name,
                        includes: chunk.modules.map(module => module.request)
                    });
                });
            });

            callback();
        });
    }
}

module.exports = MyPlugin;