import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './languages/i18n'
import { initThemeColor } from './utils/theme-color'

import './plugins/index.js'
import './styles/index.scss'
import './styles/element-variables.scss'
import './assets/iconfont/iconfont.js'

import './register-service-worker'

initThemeColor()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
