import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Main from '_c/main/main.vue'
import Tools from './routes/tools'
import Tips from './routes/tips'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/library-info',
    component: Main,
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
