import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://127.0.0.1:8080', // url = base url + request url
  timeout: 5000 // request timeout
})

// // request interceptor
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['Authorization'] = 'Bearer ' + getToken()
//     }
//     return config
//   },
//   error => {
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 0) {
      Message({
        message: res.msg || '请求成功！',
        type: 'success',
        duration: 5 * 1000
      })
    }

    if (res.code !== 0) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
