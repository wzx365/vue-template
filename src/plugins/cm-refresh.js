import CmRefresh from '@/components/common/CmRefresh'
import Vue from 'vue'

CmRefresh.install = function (Vue) {
  Vue.component(CmRefresh.name, CmRefresh)
}

Vue.use(CmRefresh)
