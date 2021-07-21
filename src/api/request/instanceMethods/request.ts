import axios from 'axios'
import { HttpInterface, AxiosOptionMap } from '@/model/api'
import { AxiosPromise } from 'axios'

export default function (http: HttpInterface, options: AxiosOptionMap): AxiosPromise {
  const instance = axios.create()
  http.interceptors(http, instance, options.headers)
  let option = {}
  option = Object.assign(option, options)
  return instance(option)
}
