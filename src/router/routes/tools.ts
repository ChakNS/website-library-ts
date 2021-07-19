import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tools',
    name: 'tools',
    redirect: '/tools/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'tools-list',
        component: (): Promise<typeof import('*.vue')> =>
          import(
            /* webpackChunkName: "index" */ '@/pages/tools'
          )
      },
      {
        path: 'decode',
        name: 'tools-decode',
        component: (): Promise<typeof import('*.vue')> =>
          import(
            /* webpackChunkName: "index" */ '@/pages/tools/components/toolsDecode'
          )
      }
    ]
  }
]

export default routes
