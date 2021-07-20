import request from './instanceMethods/request'
import interceptors from './instanceMethods/interceptors'
import handleError from './instanceMethods/handleError'
import $post from './instanceMethods/$post'
// 类对接口对实现只检查实例部分
interface HttpInterface {
  baseUrl: string
  header: Record<string, unknown>
  request(http: any, options: any): any
  interceptors(http: any, instance: any, headers: any): void
  handleError(): void
  $post(): any
}
// 补充对类构造函数的接口
interface HttpConstructor {
  new (baseUrl: string, header: Record<string, unknown>): HttpInterface
}
const HttpRequest: HttpConstructor = class HttpClass implements HttpInterface {
  constructor(baseUrl: string, header: Record<string, unknown>) {
    this.baseUrl = baseUrl
    this.header = header
  }
  baseUrl: string
  header: Record<string, unknown>
  // 创建axios实例
  request = request
  // 封装请求拦截
  interceptors = interceptors
  // 封装错误提示
  handleError = handleError
  // post方法
  $post = $post(this)
}

export default HttpRequest
