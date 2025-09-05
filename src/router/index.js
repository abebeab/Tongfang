import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { supabase } from '@/supabase'; // Import the supabase client for the guard

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/products', name: 'products', component: () => import('../views/ProductsView.vue') },
  
  // Route for product categories (must be before individual product route)
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
  },
  // Dashboard Route
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true } // Add meta field to protect this route
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
});

// Navigation Guard for Authentication
router.beforeEach(async (to, from, next) => { // Make the guard async
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession(); // Get current Supabase session
    const isLoggedIn = !!session; // True if a session exists, false otherwise

    if (!isLoggedIn) {
      // If the route requires auth and no active Supabase session, redirect to login
      next('/login');
    } else {
      // If there's an active session, allow access
      next();
    }
  } else {
    // If the route doesn't require authentication, always allow access
    next();
  }
});

export default router;