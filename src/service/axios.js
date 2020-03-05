import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import { SUCCESS_CODE, UN_LOGIN_CODE, API_BASE_URI } from '@/constants'
import { clearLocalStorage } from '@/utils'
console.log(123, axios)
const service = axios.create({
  baseURL: API_BASE_URI // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 6000 // request timeout
})

const headers = service.defaults.headers

// 设置一般post和put提交的数量类型是application/json; charset=UTF-8
headers.post['Content-Type'] = 'application/json; charset=UTF-8'
headers.put['Content-Type'] = 'application/json; charset=UTF-8'

// 通过header设置接收的数据类型 Accept: application/json
headers.get['Accept'] = 'application/json'
headers.post['Accept'] = 'application/json'
headers.put['Accept'] = 'application/json'
headers.delete['Accept'] = 'application/json'

// 请求拦截器
service.interceptors.request.use(
  config => {
    // before request
    return config
  },
  error => {
    // request error
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // const url = response.config.url
    // ignoreError 是否在axios拦截中不弹错误信息
    // const ignoreError = /ignoreError=1/.test(url)
    return res

    // 如果等于SUCCESS_CODE，则直接返回res数据
    // if (res.code === SUCCESS_CODE) {
    //   return res
    // }
    // // 如果是未登录，则转至登录页
    // if (res.code === UN_LOGIN_CODE) {
    //   if (!ignoreError) {
    //     Message({
    //       message: res.msg,
    //       type: 'error',
    //       duration: 3000
    //     })
    //   }
    //   clearLocalStorage()
    //   // 如果不是登录页，则跳到登录页
    //   if (!/^#\/login/i.test(window.location.hash)) {
    //     router.push('/login')
    //     return false
    //   }
    // }
    // else {
    //   // 其他是接口服务提示的错误
    //   if (!ignoreError) {
    //     Message({
    //       message: res.msg || '接口发生错误',
    //       type: 'error',
    //       duration: 3000
    //     })
    //   }
    // }
    // 不是SUCCESS_CODE的，都走catch
    // return Promise.reject(res || 'Error')
  },
  error => {
    console.log('err', error)
    Message({
      message: error.message || '请求取消或接口发生错误...',
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  }
)

// 查
const get = (uri, params, config = {}) => service.get(uri, { params, ...config })

// 增
const post = (uri, data, config) => service.post(uri, data, config)

// 改
const put = (uri, data, config) => service.put(uri, data, config)

// 删
const deletes = (uri, params, config = {}) => service.delete(uri, { params, ...config })

// 导出方法
export {
  get,
  post,
  put,
  deletes
}
// 导出服务实例
export default service
