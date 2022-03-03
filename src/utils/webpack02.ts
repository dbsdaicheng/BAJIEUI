//如何利用webpack来优化前端性能
// 区分环境进行不同配置
    // webpack.dev.js：开发环境的配置文件
    // webpack.prod.js：生产环境的配置文件
    // webpack.common.js：公共配置文件
    // 在开发阶段：使用webpack-dev-server来帮我们进行快速的开发，同事需要热更新进行页面的无刷新改动，而这些再生产环境都是不需要的
    // 在生产阶段：进行代码压缩，目录清理，计算hash，提取css等
    // 通过webpack-merge来整合两个配置文件共同的配置webpack.common.js
// css压缩
    // optimize-css-assets-webpack-plugin  用于优化或者压缩CSS资源
    // 这个插件接受以下参数：
        // assetNameRegExp：正则表达式，用于匹配需要优化或者压缩的资源名。默认值是 /.css$/g
        // cssProcessor：用于压缩和优化CSS 的处理器，默认是 cssnano.这是一个函数，
        //               应该按照 cssnano.process 接口(接受一个CSS和options参数，返回一个Promise)
        // canPrint：表示插件能够在console中打印信息
// js压缩
    // terser-webpack-plugin: 压缩你的JavaScript
        // test：测试匹配的文件
        // parallel：是否启用多线程并行运行提高编译速度
        // exclude：不被处理的文件
        // include：要被处理的文件
        // terserOptions：其他配置项
        // extractComments：启用/禁用剥离注释功能
// 图片压缩
    //  image-minimizer-webpack-plugin：图片压缩
        // test：测试匹配文件
        // exclude：不被处理的文件 
        // include：要被处理的文件
        // minimizerOptions：imagemin 的选项
        // concurrency：一次最大并发优化进程数
        // filename：允许设置生成资产的文件名。对于转换为 webp 很有用
        // deleteOriginalAssets：允许删除原始资产。对于转换为 webp 和删除原始资产很有用
// 拆分代码
    // tree shaking：移除javaScript上下文中的未引用代码
        // 在项目的 package.json 文件中，添加 "sideEffects" 属性
        // "side effect(副作用)" 的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export
// 减少查找过程
    // 对resolve参数进行合理的配置，使用resolve字段高速webpack怎么去搜索文件
    // 合理使用resolve.extensions: 在导入语句没带文件后缀时，webpack会自动带上后缀去尝试询问文件是否存在，查询的顺序是从前往后查找
    // 优化resolve.modules: 这个属性高速webpack解析模块时应该搜索的目录，绝对路径和相对路径都能使用
    // 使用resolve.alias: 吧原导入路径映射成一个新的导入路径，减少查找过程
// 缩小构建目标
    // 排除webpack不需要解析的模块，即使用loader的时候，在精良少的模块中去使用
    // 使用include和exclude这两个参数，规定loader只在哪些模块应用和在哪些模块不应用
// 利用多线程提升构建速度
    // thread-loader：webpack 每次解析一个模块，thread-loader 会将它及它的依赖分配给 worker 线程中，从而达到多进程打包的目的
// 预先编译资源模块
    // 在打包的时候，一般来说第三方模块是不会变化的，所以将第三方模块打包到一个特定的文件中，当第二次webpack进行打包的时候，就不
    // 需要去node_modules中去引入第三方模块，而是直接使用我们第一次打包的第三方模块的文件就行
// 缓存cache相关
// 合理使用sourceMap
// 体积优化
// 合理配置 chunk 的哈希值
// 合理使用 Ployfill
// 使用 ES6 Modules 语法，以保证 Tree-Shaking 起作用