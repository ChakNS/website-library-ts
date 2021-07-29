import { AxiosPromise } from 'axios'
import $axios from '../request'

export default {
  // TODO 菜单列表接口
  MenuList (params = {}, options = {}): Promise<AxiosPromise> {
    return $axios.$post('menus/list', params, options).then((res: any) => res).catch((err: any) => err)
  }
}
