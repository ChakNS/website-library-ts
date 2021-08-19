import { AxiosPromise } from 'axios'
import $axios from '../request'

export default {
  // TODO 菜单列表接口
  MenuList (params = {}, options = {}): Promise<AxiosPromise> {
    return $axios.$post('menus/list', params, options).then((res: any) => res).catch((err: any) => err)
  },
  // 新增菜单
  MenuAdd (params = {}, options = {}): Promise<AxiosPromise> {
    return $axios.$post('menus/add', params, options).then((res: any) => res).catch((err: any) => err)
  },
  // 新增菜单
  MenuUpdate (menuId: number | string, params = {}, options = {}): Promise<AxiosPromise> {
    return $axios.$post(`menus/update/${menuId}`, params, options).then((res: any) => res).catch((err: any) => err)
  },
  // 新增菜单
  MenuDelete (menuId: number | string, params = {}, options = {}): Promise<AxiosPromise> {
    return $axios.$post(`menus/delete/${menuId}`, params, options).then((res: any) => res).catch((err: any) => err)
  }
}
