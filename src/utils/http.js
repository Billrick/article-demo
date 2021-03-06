// 封装axios
import { message } from 'antd'
import axios from 'axios'
import { getToken, removeToken } from './token'
import { history } from './history'

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})
// 添加请求拦截器
http.interceptors.request.use((config) => {
  //携带token
  const token = getToken()
  if (token) {
    config.headers.Authorization = `bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  //token异常时  退出登录
  if (error.response.status === 401) {
    message.error(`验证权限失败: ${error.response.data.message}`)
    history.push('/login')
    removeToken()
  }
  return Promise.reject(error)
})

export default http