import { HttpInterface } from '@/model/api'
import { AxiosInstance } from 'axios'

export default function (http: HttpInterface, instance: AxiosInstance, headers: unknown): void {
  // 请求拦截
  instance.interceptors.request.use(
    (request: any) => {
      if (headers) {
        Object.assign(request.headers, headers)
      }
      return request
    },
    (error: any) => Promise.reject(error)
  )
  // 响应拦截
  instance.interceptors.response.use(
    (response: any) => {
      return response
    },
    async (error: any) => {
      // Error: Network Error
      // let response = ''
      if (error && error.response) {
        http.handleError()
      }
      //   await this.exceptionHandler(error.response)
      //   const { data, status, headers } = error.response
      //   response = {
      //     headers,
      //     data,
      //     code: status,
      //     status: 'FAIL'
      //   }
      // } else {
      //   response = {
      //     headers: null,
      //     data: null,
      //     code: 502,
      //     message: '服务器网络错误！😅',
      //     status: 'FAIL'
      //   }
      // }
      return error
    }
  )
}
