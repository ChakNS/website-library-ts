import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'
import Tools from './routes/tools'
import Tips from './routes/tips'
import Menus from './routes/menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/library-info',
    component: Layout,
    children: [
      {
        path: 'library-info',
        name: 'library-info',
        component: (): Promise<typeof import('*.vue')> =>
          import(/* webpackChunkName: "index" */ '@/pages/index')
      }
    ]
  },
  ...Tips,
  ...Tools,
  ...Menus,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})

export default router
