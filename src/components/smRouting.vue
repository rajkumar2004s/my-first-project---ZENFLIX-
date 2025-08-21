<template>
  <div class="flex pr-6 bg">
    <div class="flex flex-col p-4 gap-4 pl-4 block md:hidden">
      <router-link
        to="/"
        @click="closeMenu"
        :class="['z-10 font-medium home ', route.path === '/' ? 'text-red-500' : 'text-white']"
      >
        Home
      </router-link>

      <router-link
        to="/popular"
        @click="closeMenu"
        :class="[
          'z-10 font-medium home',
          route.path === '/popular' ? 'text-red-500' : 'text-white',
        ]"
      >
        Popular
      </router-link>
      <router-link
        @click="closeMenu"
        to="/toprated"
        :class="[
          'z-10 font-medium home',
          route.path === '/toprated' ? 'text-red-500' : 'text-white',
        ]"
      >
        Top Rated
      </router-link>
      <router-link
        @click="closeMenu"
        to="/favourites"
        :class="[
          'z-10 font-medium home',
          route.path === '/favourites' ? 'text-red-500' : 'text-white',
        ]"
      >
        Favourites
      </router-link>
      <router-link
        @click="closeMenu"
        to="/logout"
        :class="['z-10 font-medium home', route.path === '/logout' ? 'text-red-500' : 'text-white']"
      >
        Logout
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps(['showMenu'])
const emit = defineEmits(['toggle'])
function closeMenu() {
  emit('toggle', false)
}
</script>

<style scoped>
.bg {
  background-color: rgb(55, 54, 54);
}
</style>
