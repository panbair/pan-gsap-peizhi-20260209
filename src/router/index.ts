import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteModule } from './types'

const routes: RouteRecordRaw[] = [
  /*  {
        path: '/',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        children: [
          {
            path: 'home',
            name: 'Home',
            component: () => import('@/views/Home/index.vue'),
            meta: { title: '首页' }
          }
        ]
      },*/
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
    meta: { title: '动画' }
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('@/views/animation/index.vue'),
    meta: { title: '动画' }
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('@/views/page2/index.vue'),
    meta: { title: 'page2动画' }
  },

  {
    path: '/page1',
    name: 'page1',
    component: () => import('@/views/page1/index.vue'),
    meta: { title: 'page1动画' }
  },

  {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/preview/index.vue'),
    meta: { title: 'preview动画' }
  },

  {
    path: '/web',
    name: 'web',
    component: () => import('@/views/web/index.vue'),
    meta: { title: 'preview动画' }
  },

  {
    path: '/masterpiece',
    name: 'masterpiece',
    component: () => import('@/views/masterpiece/index.vue'),
    meta: { title: '杰作动画' }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/Error/404.vue'),
    meta: { title: '404' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
