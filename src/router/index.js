import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/products', name: 'products', component: () => import('../views/ProductsView.vue') },
  
  // --- FIX 1: ADDED A SPECIFIC ROUTE FOR PRODUCT CATEGORIES ---
  // This route is placed *before* the individual product route to ensure it's matched first.
  { 
    path: '/products/category/:categorySlug', 
    name: 'product-category-detail', 
    component: () => import('../views/ProductCategoryDetailView.vue') 
  },
  
  { path: '/products/:id', name: 'product-detail', component: () => import('../views/ProductDetailView.vue') },
  { path: '/solutions', name: 'solutions', component: () => import('../views/SolutionsView.vue') },
  { path: '/solutions/:slug', name: 'solution-detail', component: () => import('../views/SolutionDetailView.vue') },
  { path: '/achievements', name: 'achievements', component: () => import('../views/AchievementView.vue') },
  { path: '/partner', name: 'partner', component: () => import('../views/PartnerView.vue') },
  { path: '/support', name: 'support', component: () => import('../views/SupportView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } 
    else if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ 
            el: to.hash, 
            behavior: 'smooth',
            top: 140,
          });
        }, 500);
      });
    }
    else {
      return { top: 0, behavior: 'smooth' };
    }
  },
})

export default router