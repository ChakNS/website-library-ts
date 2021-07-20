import axios from 'axios'
export default function (http: any, options: any): any {
  const instance = axios.create()
  http.interceptors(http, instance, options.headers)
  let option = {}
  option = Object.assign(option, options)
  return instance(option)
}
