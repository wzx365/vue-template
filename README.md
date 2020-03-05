# rancher-ui-standard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## vs code 编辑器插件 eslint + standardjs

## 保存时自动校验

## webpack-bundle-analyzer

## lodash element-ui 按需加载

- babel-plugin-lodash lodash-webpack-plugin

- babel-plugin-component

## 全屏 收缩sidemenu

## 图表库

# 项目目录结构
```
.
├── dist            项目打包出口文件
├── node_modules    项目所依赖的npm包
├── public          静态文件
├── tests           单元测试
├── .browserslistrc 目标浏览器(js转译及css添加私有前缀)
├── .editorconfig   编辑器的配置
├── .eslintignore   eslint检查时忽略的文件
├── .eslintrc       eslint的配置
├── .gitignore      git忽略的文件
├── babel.config.js babel转译器的配置文件
├── jest.config.js  jest单元测试框架的配置文件
├── vue.config.js   编译/打包配置文件
├── package-lock.json package.json文件中的npm包版本锁定文件
├── yarn.lock       package.json文件中的yarn包版本锁定文件
├── package.json    项目描述文件
├── README.md       项目简介
├── src             项目源码
|    ├── main.js    入口文件
|    ├── registerServiceWorkder.js  启用PWA
|    └── App.vue    根组件
|    ├── assets     静态资源 如字体，图片等
|    └── constants  常量
|    └── eventBus   事件总线
|    └── languages  国际化语言包
|    └── theme      主体色
|    └── layout     项目骨架
|    └── components 子组件
|    └── directives 全局指令
|    └── filters    全局过滤器
|    └── mixins     混入
|    └── mock       mock数据 有多种方式
|    └── plugins    全局插件
|    └── utils      全局工具
|    └── styles     定义的样式
|    |      └── index.scss      全局的一些样式
│    |      └── mixin.scss      样式混入
│    |      └── transition.scss 定义全局动画
│    |      └── variables.scss  颜色常量
|    └── service    服务层 网络请求函数及api
|    |      └── global          全局相关的uri及api
|    |      └── login           登录相关的uri及api
|    |      └── axios           网络请求axio对象及函数
|    |      └── index.js        api导出
|    ├── router
|    │      ├── index.js        路由
|    │      └── permission.js   路由导航守卫
|    ├── store
│    |      ├── modules         store子模块
│    |      ├── action-types.js 事件类型
│    |      └── actions.js      actions
│    |      └── getters.js      getters
│    |      └── state.js        state
│    |      └── mutations.js    mutations
│    |      └── index.js        store出口
|    |
|    └── views
|           ├── login           登录相关页面
|           |      └── index.vue         登录页
|           |      └── do-login.vue      登录组件
|           ├── change-pwd      修改登录密码
|           |      └── index.vue         修改密码主页
|           |      └── do-change-pwd.vue 修改密码组件
|           ├── system          系统管理
|           |       ├── cluster           集群管理
|           |       |     └── outline.vue 概要
|           |       |     └── monitor.vue 监控
|           |       |     └── hosts.vue   主机
|           |       ├── account           账号管理
|           |       |     └── index.vue   账号
|           |       ├── storage           存储
|           |       |     └── index.vue   存储管理
|           ├── project          项目管理
|           |      └── outline.vue        概要
|           |      └── monitor.vue        监控
|           |      └── config.vue         配置
|           ├── software         软件栈

```
