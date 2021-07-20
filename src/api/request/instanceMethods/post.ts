export default function (http: any): any {
  return (path = '', params = {}, options: any) => {
    const accessToken = ''
    const defaultHeaderData = {
      accessToken: '',
      pagingInfo: ''
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
      headers: http.headers,
      responseType: 'json'
    }
    return http.request(option).then((res: any) => res)
  }
}
