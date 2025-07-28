import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import { faL } from '@fortawesome/free-solid-svg-icons'

// ✅ Simple authentication check (update as per your logic: cookies, JWT, Pinia, etc.)
function isAuthenticated() {
  return !!localStorage.getItem('token') // Or use cookies / Vuex / Pinia
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
    },
    {
      path: '/popular',
      name: 'popular',
      component: () => import('@/components/Popular.vue'),
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: () => import('@/components/MovieDetails.vue'),
    },
    {
      path: '/popular/:id',
      name: 'PopularMovieDetails',
      component: () => import('@/components/MovieDetails.vue'),
    },
    {
      path: '/search',
      name: 'SearchedMovieDetails',
      component: () => import('@/components/SearchedMovies.vue'),
    },
    {
      path: '/favourites',
      name: 'FavouriteMovies',
      component: () => import('@/components/FavouriteMovies.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('@/components/Logout.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/NotFound.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

// ✅ Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

export default router
