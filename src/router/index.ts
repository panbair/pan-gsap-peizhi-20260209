import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import type {AppRouteModule} from './types'

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
        name: 'animation',
        component: () => import('@/views/animation/index.vue'),
        meta: {title: '动画'}
    },
    {
        path: '/show-demo2',
        name: 'show-demo2',
        component: () => import('@/views/show-demo2/index.vue'),
        meta: {title: 'show-demo2动画'}
    },
    {
        path: '/show-demo-scroll-trigger',
        name: 'show-demo-scroll-trigger',
        component: () => import('@/views/show-demo2/show-demo-scroll-trigger/index.vue'),
        meta: {title: '滚动触发动画'}
    },

    {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/page1/index.vue'),
        meta: {title: 'page1动画'}
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/page2/index.vue'),
        meta: {title: 'page2动画'}
    },

    {
        path: '/optimized-scroll-demo',
        name: 'optimized-scroll-demo',
        component: () => import('@/views/show-demo2/optimized-scroll-demo/index.vue'),
        meta: {title: '优化版滚动动画'}
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/Error/404.vue'),
        meta: {title: '404'}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
