import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('../views/ProductDetailView.vue')
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('../views/SolutionsView.vue')
  },
  {
    path: '/solutions/:slug',
    name: 'solution-detail',
    component: () => import('../views/SolutionDetailView.vue')
  },
  // --- NEW ROUTES ADDED HERE ---
  {
    path: '/achievements',
    name: 'achievements',
    component: () => import('../views/AchievementView.vue')
  },
  {
    path: '/partner',
    name: 'partner',
    component: () => import('../views/PartnerView.vue')
  },
  // --- END OF NEW ROUTES ---
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/SupportView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active-link', 
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router