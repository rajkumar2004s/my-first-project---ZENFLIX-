<template>
  <div class="flex gap-4 pl-4 p-2 pt-27 block md:hidden">
    <router-link
      to="/"
      :class="['z-10 font-medium home ', route.path === '/' ? 'text-red-500' : 'text-white']"
    >
      Home
    </router-link>

    <router-link
      to="/popular"
      :class="['z-10 font-medium home', route.path === '/popular' ? 'text-red-500' : 'text-white']"
    >
      Popular
    </router-link>
    <router-link
      to="/toprated"
      :class="['z-10 font-medium home', route.path === '/toprated' ? 'text-red-500' : 'text-white']"
    >
      Top Rated
    </router-link>
    <router-link
      to="/favourites"
      :class="[
        'z-10 font-medium home',
        route.path === '/favourites' ? 'text-red-500' : 'text-white',
      ]"
    >
      Favourites
    </router-link>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
