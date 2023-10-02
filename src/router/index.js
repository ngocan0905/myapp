import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',

      component: DashBoardView
    },
    {
      path: '/order/tao-don-le',
      name: 'tao-don-le',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/order/nhap-excel',
      name: 'nhap-excel',
      component: () => import('../views/ExcelView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
