import request from './instanceMethods/request'
import interceptors from './instanceMethods/interceptors'
import handleError from './instanceMethods/handleError'
import $post from './instanceMethods/post'
import { AxiosInstance, AxiosPromise } from 'axios'
// 类对接口对实现只检查实例部分

interface PageInfoMap {
  pageSize: number,
  pageNo: number
}
interface CommonHeader {
  accessToken: string,
  pagingInfo: PageInfoMap
}
interface HttpInterface {
  baseUrl: string
  header: CommonHeader,
  request(http: HttpInterface, options: any): AxiosInstance
  interceptors(http: HttpInterface, instance: AxiosInstance, headers: any): void
  handleError(): void
  $post(path: string, params: any, options: any): Promise<AxiosPromise>
}
// 补充对类构造函数的接口
interface HttpConstructor {
  new (baseUrl: string, header: CommonHeader): HttpInterface
}
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
  $post = $post(this)
}

export default HttpRequest
