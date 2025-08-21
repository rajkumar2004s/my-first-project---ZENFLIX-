import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'

function isAuthenticated() {
  return !!localStorage.getItem('token')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Home.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/popular',
      name: 'popular',
      component: () => import('@/components/Popular.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/toprated',
      name: 'toprated',
      component: () => import('@/components/Toprated.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: () => import('@/components/MovieDetails.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/popular/:id',
      name: 'PopularMovieDetails',
      component: () => import('@/components/MovieDetails.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/search',
      name: 'SearchedMovieDetails',
      component: () => import('@/components/SearchedMovies.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/favourites',
      name: 'FavouriteMovies',
      component: () => import('@/components/FavouriteMovies.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('@/components/Logout.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/NotFound.vue'),
      meta: { requiresAuth: false },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.requiresAuth

  if (authRequired && !isAuthenticated()) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated()) {
    next('/')
  } else {
    next()
  }
})

export default router
