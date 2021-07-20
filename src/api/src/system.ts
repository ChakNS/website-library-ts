import $axios from '../request'

export default {
  // TODO 菜单列表接口
  MenuList (params = {}, options = {}): any {
    return $axios.$post('menu/list', params, options)
  }
}
