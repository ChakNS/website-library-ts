import { AxiosInstance, AxiosPromise } from 'axios'

export interface PageInfoMap {
  pageSize: number,
  pageNo: number
}

export interface OptionsMap {
  pagingInfo?: PageInfoMap
}

export interface AxiosOptionMap {
  url: string,
  data: unknown,
  method: string,
  headers: CommonHeader,
  responseType: string
}

export interface CommonHeader {
  accessToken: string,
  pagingInfo: PageInfoMap
}

// 接口只约束了类实例的类型
export interface HttpInterface {
  baseUrl: string
  header: CommonHeader,
  request(http: HttpInterface, options: unknown): AxiosPromise
  interceptors(http: HttpInterface, instance: AxiosInstance, headers: unknown): void
  handleError(): void
  $post(path: string, params: unknown, options: unknown): AxiosPromise
}

// 补充对类构造函数的接口
export interface HttpConstructor {
  new (baseUrl: string, header: CommonHeader): HttpInterface
}
