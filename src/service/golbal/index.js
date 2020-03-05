import { post } from '../axios'
import uri from './uri'
export default {
  login (data) {
    return post(uri.login, data)
  }
}
