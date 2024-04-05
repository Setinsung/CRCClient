import axios, { AxiosError } from 'axios'
import { Message } from '@arco-design/web-vue'

const baseURL = 'http://192.168.1.103:8080'
const myaxios = axios.create({
  baseURL
  // timeout: 60000
})
myaxios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error: AxiosError) => {
    console.log('request-error  ', error)
    return Promise.reject(error)
  }
)

myaxios.interceptors.response.use(
  (response) => {
    // return response.data;
    return response
  },
  (error: AxiosError) => {
    if (error && error.response) {
      const message = getStateMessage(error.response.status)
      error.message = message
      if (error.response.status == 401) {
        // router.push('/login')
      }
    }
    console.log(`response-error，message: ${error.message}  `, error)
    console.log('Message', Message)
    Message.error('请求失败，Error: ' + error)
    return Promise.reject(error)
  }
)

const getStateMessage = (status: number | string) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求地址出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网关错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网关超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})`
  }
  return `${message}`
}

export default myaxios
