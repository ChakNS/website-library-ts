import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    component: (): Promise<typeof import('*.vue')> =>
      import(/* webpackChunkName: "index" */ '@/pages/default/404')
  }
]

export default routes
