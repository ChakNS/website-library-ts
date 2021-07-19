export interface ReactiveData {
  activeMain: string[],
  activeSecondary: string[],
  collapsed: boolean,
  theme: string,
  menuList: Array<MenuConfig>,
  currTopMenu: Array<MenuConfig>
}

export interface MenuConfig {
  name: string,
  path: string,
  title: string,
  icon: string,
  menuId: number,
  isDisplay: string,
  urlOrder: number,
  children?: Array<MenuConfig>
}
