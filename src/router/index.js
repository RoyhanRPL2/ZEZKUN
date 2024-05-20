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
      path: '/success',
      name: 'success',
      component: () => import('../views/SuccessPage.vue')
    },
    {
      path: '/size-guide',
      name: 'size-guide',
      component: () => import('../views/SizeGuide.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue')
    },
    {
      path: '/product-detail/:id',
      name: 'product-detail',
      component: () => import('../views/ProductDetail.vue')
    }
  ]
})

export default router
