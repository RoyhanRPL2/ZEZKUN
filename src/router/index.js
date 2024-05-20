import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/ProductCheckout.vue')
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/ShoppingCart.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/SuccessPage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
