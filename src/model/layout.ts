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
