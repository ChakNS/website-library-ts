import request from './instanceMethods/request'
import interceptors from './instanceMethods/interceptors'
import handleError from './instanceMethods/handleError'
import post from './instanceMethods/post'
import { HttpConstructor, HttpInterface, CommonHeader } from '@/model/api'

const HttpRequest: HttpConstructor = class HttpClass implements HttpInterface {
  constructor(baseUrl: string, header: CommonHeader) {
    this.baseUrl = baseUrl
    this.header = header
  }
  baseUrl: string
  header: CommonHeader
  // 创建axios实例
  request = request
  // 封装请求拦截
  interceptors = interceptors
  // 封装错误提示
  handleError = handleError
  // post方法
  $post = post(this)
}

export default HttpRequest
