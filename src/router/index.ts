import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '_c/main/main.vue'
import Tools from './tools'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/404',
      component: (): Promise<typeof import('*.vue')> =>
        import(/* webpackChunkName: "index" */ '@/pages/default/404')
    },
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
    ...Tools,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
