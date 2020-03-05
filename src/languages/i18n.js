import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementLocale from 'element-ui/lib/locale'
import ElementUIEnLocale from 'element-ui/lib/locale/lang/en.js'
import ElementUIZhLocale from 'element-ui/lib/locale/lang/zh-CN'

import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: window.localStorage.getItem('language') || 'zh',
  messages: {
    en: {
      ...enLocale,
      ...ElementUIEnLocale
    },
    zh: {
      ...zhLocale,
      ...ElementUIZhLocale
    }
  }
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
