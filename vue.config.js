const mockJson = require('./src/mock/list.json')

const API_PROXY_URL = 'https://rancher.inspur.com'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const DEFAULT_THEME_COLOR = require('./src/constants/theme-color').default

module.exports = {
  // 部署应用包时的基本 URL,
  // './' 会被链接为相对路径，这样打出来的包可以被部署在任意路径
  publicPath: './',
  // 生产环境构建文件的目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: '',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: true,
  devServer: {
    https: true,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      authority: 'https://rancher.inspur.com',
      referer: 'https://rancher.inspur.com',
      scheme: 'https'
    },
    proxy: {
      '/v3': {
        target: API_PROXY_URL,
        changeOrigin: true,
        ws: true
        // pathRewrite: {
        //   '/api': '/'
        // },
      }
    },
    // 在服务内部的所有其他中间件之前， 提供执行自定义中间件的功能。 这可以用来配置自定义处理程序
    before (app) {
      // 加载本地数据  https://localhost:8080/api/login

      // 本地登录数据
      app.get('/api/login', (req, res) => {
        res.json(mockJson.login)
      })
      // 修改密码数据
      app.get('/api/change', (req, res) => {
        res.json(mockJson.change)
      })
    }
  },
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // configureWebpack
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: config => {
    config.devtool = 'source-map'
    config.plugins.push(new LodashModuleReplacementPlugin())
    // config.entry = './src/index.js'
    // config.output.libraryTarget = 'var'
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_lifecycle_event === 'analyze') {
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    }
    // themeColor: '#f67a17'
    config.plugins.push(new ThemeColorReplacer({
      fileName: 'css/theme-colors.[contenthash:8].css',
      matchColors: [
        ...forElementUI.getElementUISeries(DEFAULT_THEME_COLOR), // element-ui主色系列
        '#0cdd3a', // 自定义颜色
        '#c655dd'
      ],
      changeSelector: forElementUI.changeSelector
      // injectCss: false,
      // resolveCss(resultCss) { // optional. Resolve result css code as you wish.
      //     return resultCss + youCssCode
      // }
    }))
  },
  // 修改或扩展配置
  chainWebpack (config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
