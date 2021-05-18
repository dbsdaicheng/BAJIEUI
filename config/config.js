import pageRouters from './router.config';
import webpackPlugin from './plugin.config';
const plugins =  [
  [
  'umi-plugin-react',
    {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'Fastest-H5',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }
  ]
]

export default {
    plugins,
    treeShaking: true,
    targets: {
        ie: 11,
    },
    hash: true,  //开启打包文件的hash值后缀
    // devtool: ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION ? 'source-map' : false,
    devtool: false,
    routes: pageRouters,
    ignoreMomentLocale: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    disableRedirectHoist: true,
    cssLoaderOptions: {
      modules: true,
      getLocalIdent: (context, localIdentName, localName) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
        return localName;
      },
    },
    publicPath: '/Fastest-H5/',
    base: '/Fastest-H5/',
    manifest: {
      basePath: '/',
    },
    outputPath: 'dist',
    chainWebpack: webpackPlugin,
}