// 使用了 Babel 7 中的新配置格式 babel.config.js
// @vue/cli-plugin-babel/preset用的还是@vue/babel-preset-app,
// 它包含了 babel-preset-env、JSX 支持以及为最小化包体积优化过的配置
// polyfills Default: ['es6.array.iterator', 'es6.promise', 'es6.object.assign', 'es7.promise.finally']
module.exports = {
  env: {
    development: {
      sourceMaps: true,
      retainLines: true
    }
  },
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'lodash',
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
