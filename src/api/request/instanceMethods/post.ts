import { HttpInterface, OptionsMap } from '@/model/api'
import { AxiosPromise } from 'axios'

export default function (http: HttpInterface): (path: string, params: unknown, options: OptionsMap) => AxiosPromise {
  return (path = '', params = {}, options: OptionsMap): AxiosPromise => {
    const accessToken = ''
    const defaultHeaderData = {
      accessToken: '',
      pagingInfo: {}
    }
    // 默认请求参数：token
    if (accessToken) {
      defaultHeaderData['accessToken'] = accessToken
    }
    if (options.pagingInfo) {
      defaultHeaderData['pagingInfo'] = options.pagingInfo
    }

    // 请求body
    const body = {
      header: Object.assign({}, defaultHeaderData),
      params: params
    }
    const option = {
      url: http.baseUrl + path,
      data: body,
      method: 'post',
      headers: http.header,
      responseType: 'json'
    }
    return http.request(http, option).then((res: any) => res)
  }
}
