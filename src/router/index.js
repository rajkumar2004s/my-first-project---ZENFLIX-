import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'

function isAuthenticated() {
  return !!localStorage.getItem('token') // or check Vuex/pinia state if used
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }, // Public route
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
      meta: { requiresAuth: true }, // Protected
    },
    {
      path: '/popular',
      name: 'popular',
      component: () => import('@/components/Popular.vue'),
      meta: { requiresAuth: true }, // Protected
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: () => import('@/components/MovieDetails.vue'),
      meta: { requiresAuth: true }, // Protected
    },
    {
      path: '/popular/:id',
      name: 'PopularMovieDetails',
      component: () => import('@/components/MovieDetails.vue'),
      meta: { requiresAuth: true }, // Protected
    },
    {
      path: '/search',
      name: 'SearchedMovieDetails',
      component: () => import('@/components/SearchedMovies.vue'),
      meta: { requiresAuth: true }, // Protected
    },
    {
      path: '/favourites',
      name: 'FavouriteMovies',
      component: () => import('@/components/FavouriteMovies.vue'),
      meta: { requiresAuth: true }, // Protected
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('@/components/Logout.vue'),
      meta: { requiresAuth: true }, // Protected
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/NotFound.vue'),
      meta: { requiresAuth: false }, // Public
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

// ✅ Global navigation guard
router.beforeEach((to, from, next) => {
  const authRequired = to.meta.requiresAuth

  if (authRequired && !isAuthenticated()) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated()) {
    next('/') // already logged in, prevent login access
  } else {
    next()
  }
})

export default router
