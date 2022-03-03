// webpack项目配置需要配置哪些内容
// entry: 入口配置
//      类型： string | [string] | object（如果是数组，将会有多个加载的入口，如果为字符串将只会有一个加载的入口， 如果是对象，
//             就可能会出现多个chunk，这是chunk的名称是object键值对里键的名称。
//          string: 入口模块的文件路径，可以是相对路径
//          [string]: 入口模块的文件路径，可以是相对路径
//          object： 配置多个入口，每个入口生成一个chunk
// output: 出口配置
//      如果入口配置是string | [string]，那么出口配置为
//      output: {filename: "bundle.js"}
//      如果入口配置是对象，多个入口起点，出现多个chunk，则应该使用占位符来确保每个文件具有唯一的名称
// mode: 配置项，告知webpack使用相应模式的内置优化
//      development: 会将DefinePlugin中process.env.NODE_ENV的值设置为development.为模块和chunk启用有效的名
//      production: 会将DefinePlugin中process.env.NODE_ENV的值设置为production 为模块和chunk启用确定性的混淆名称，
//                  FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin 和 TerserPlugin 。
//      none: 不使用任何默认优化选项
// resolve: 配置模块如何解析
//      resolve.alias: 创建import或require的别名，来确保模块引入变得更简单。如@api、@components
//      resolve.extensions: 尝试按顺序解析这些后缀名，如果有多个文件有相同的名字，但后缀不同，webpack会解析列在数组首位的后缀的文件，并跳过
//                          其他的后缀
// plugins: 一组webpack插件,如
//          plugins: [
//            new HtmlWebpackPlugin({
//                template: path.resolve(__dirname, '../public/index.html')
//            }),
//            new MiniCssExtractPlugin({
//              filename: '[name].css',
//            }), 
//          ]
// module: 配置所有生成器的选项。
//       module.rules: 创建模块时，匹配请求的规则数组，这些规则能够修改模块的创建方式。这些规则能够对模块应用loader，或者修改解析器
//           Rule(Object): 每个规则可以分为三个部分：条件，结果和嵌套规则
//              Rule.resource: 资源文件的绝对路径
//              Rule.exclude: 排除所有符合条件的模块
//              Rule.include: 引入符合一下任何条件的模块
//              Rule.test: 设置类型用于匹配模块。
//              Rule.use: 应用于模块的数组，每个入口指定使用一个loader，Loaders 可以通过传入多个 loaders 以达到链式调用的效果，它们会从右到左被应用
// devServer: webpack-dev-server 可用于快速开发应用程序。