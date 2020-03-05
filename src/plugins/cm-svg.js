import CmSvg from '@/components/common/CmSvg'
import Vue from 'vue'

CmSvg.install = function (Vue) {
  Vue.component(CmSvg.name, CmSvg)
}

Vue.use(CmSvg)
