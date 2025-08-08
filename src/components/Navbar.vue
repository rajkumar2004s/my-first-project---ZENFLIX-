<template>
  <div class="absolute top-0 left-0 w-full flex justify-between items-center md:p-2 z-10 fixed nav">
    <div class="overlay"></div>

    <div class="flex items-center gap-4 pl-26 x">
      <router-link :to="'/'" class="z-10">
        <p class="logo">ZENFLIX</p>
      </router-link>

      <div class="pl-10 gap-6 flex">
        <router-link
          to="/"
          :class="['z-10 font-medium home ', route.path === '/' ? 'text-red-500' : 'text-white']"
        >
          Home
        </router-link>

        <router-link
          to="/popular"
          :class="[
            'z-10 font-medium home',
            route.path === '/popular' ? 'text-red-500' : 'text-white',
          ]"
        >
          Popular
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
    </div>

    <div class="md:pr-26 flex items-center gap-4 relative z-10">
      <transition name="fade">
        <div v-if="showSearch">
          <input
            class="px-3 py-1 rounded-md transition-all duration-300"
            placeholder="Search movies..."
            type="text"
            v-model="searchInput"
            @keyup.enter="searchInput"
          />
        </div>
      </transition>

      <MagnifyingGlassIcon class="w-4 md:w-8 h-6 text-white cursor-pointer" @click="toggle" />

      <router-link to="/logout">
        <button>
          <img
            :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753264813/Avatar_1_cznbfr.png'"
            class="w-6 md:w-12 z-10 pt-2"
          />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const searchInput = ref('')
const showSearch = ref(false)

const route = useRoute()
const router = useRouter()

const toggle = () => {
  showSearch.value = !showSearch.value
}

watch(searchInput, (newValue) => {
  if (newValue.trim() !== '') {
    router.push({ path: '/search', query: { q: newValue } })
  } else {
    router.push('/')
  }
})
</script>

<style scoped>
.logo {
  font-weight: bold;
  font-family: 'Anton', sans-serif;
  font-size: 34px;
  color: #ff4c4c;
  letter-spacing: 2px;
}
.login-btn {
  color: white;
  background: red;
  padding: 8px 15px;
  border: 0;
  border-radius: 12px;
}
.login-btn:hover {
  background: darkred;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(28, 28, 28, 0.5);
  z-index: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
input {
  border: 1px solid #94a3b8;
  color: white;
  background: transparent;
  outline: none;
}

@media screen and (max-width: 576px) {
  .home {
    display: none;
  }
  .logo {
    font-size: 16px;
  }
  .nav {
    padding: 15px;
  }
  input {
    width: 130px;
    height: 25px;
    font-size: 10px;
  }
  .x {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
