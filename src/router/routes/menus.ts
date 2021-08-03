import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/menus',
    name: 'menus',
    redirect: '/menus/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'menus-list',
        component: (): Promise<typeof import('*.vue')> =>
          import(
            /* webpackChunkName: "index" */ '@/pages/menus'
          )
      }
    ]
  }
]

export default routes
