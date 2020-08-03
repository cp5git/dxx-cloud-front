const path = require('path')
const resolve = dir => path.join(__dirname, dir)
//const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {

    devServer: {
        open: true, // 自动启动浏览器
        host: '0.0.0.0', //本地打开的lost
        port: 8000,
        https: false,
        hotOnly: false,
        proxy: {
            //配置跨域
            '/api': {
                target: "http://127.0.0.1:8888/api", //修改代理地址后，记得重新run serve
                baseUrl:"/",// 基础路径,
                ws: true,
                changOrigin: true, // target是域名的话，需要这个参数
                secure: false, //可以接受运行在 HTTPS 上
                pathRewrite: {
                    //相当于是替代'/api'，如果接口中是没有api的，那就直接置空，写成    '^/api':''
                    //如果接口中有api，那就得写成    '^/api':'/api'
                    '^/api': ''
                }
            }
        },
        
        before: app => {}
    },

    // npm run serve时会把process.env.NODE_ENV设置为development；
    // npm run build 时会把process.env.NODE_ENV设置为production；

    /* 部署应用包的基本URL */
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',

    /* 生产环境构建文件的目录 defalut: dist */
    outputDir: 'dist',

    /* 放置生成的静态文件目录（js css img） */
    assetsDir: 'static',

    /* 指定生成的index.html 输出路径 相对 default: index.html */
    indexPath: "index.html",

    /* 指定生成文件名中包含hash default: true */
    filenameHashing: true,

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,

    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],

    // 生产环境 sourceMap
    productionSourceMap: false,

    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: () => {
        /*if (process.env.NODE_ENV === 'production') {
          return {
            plugins: [new CompressionPlugin({
              test: /\.js$|\.html$|\.css/, // 指定压缩文件
              threshold: 10240, // 超过10kb的文件进行压缩
              deleteOriginalAssets: false // 是否删除原文件
            })]
          }
        }*/
      },

    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: (config) => {
        // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
        config.optimization
            .splitChunks({
                chunks: 'all',
                cacheGroups: {}
            });

        // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
        config.module
            .rule('eslint')
            .exclude
            .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
            .end()

        config.resolve.alias
            .set('@', resolve('src'))
    },

    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,

    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},

    // 第三方插件配置
    pluginOptions: {}
};