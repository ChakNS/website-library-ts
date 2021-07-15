import { RouteRecordRaw } from 'vue-router'
import Main from '_c/main/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tools',
    name: 'tools',
    redirect: '/tools/list',
    component: Main,
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
