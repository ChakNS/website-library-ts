import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '_c/main/main.vue'
import Tools from './tools'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/library-info',
      component: Main,
      children: [
        {
          path: 'library-info',
          name: 'library-info',
          component: (): Promise<typeof import('*.vue')> =>
            import(/* webpackChunkName: "index" */ '@/pages/index/index.vue')
        }
      ]
    },
    ...Tools
  ]
})

export default router
