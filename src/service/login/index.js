import { get } from '../axios'
import uri from './uri'

export default {
  getUiPl (params, config) {
    return get(uri.uiPl, params, config)
  },
  firstLogin (params, config) {
    return get(uri.firstLogin, params, config)
  }
}
