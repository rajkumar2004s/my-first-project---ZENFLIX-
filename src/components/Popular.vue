<template>
  <div class="pt-24 pl-20 pr-24 pb-6">
    <div class="flex flex-wrap gap-6 justify-center pt-4 pb-4">
      <div class="relative" v-for="movie in movies" :key="movie.id">
        <router-link :to="`popular/${movie.id}`">
          <img
            :src="movie.poster_path"
            :alt="movie.title"
            class="w-[170px] h-[220px] object-cover rounded-xl hover:scale-105 z-10 transition p-2"
          />
        </router-link>
        <span
          @click="toggleFavourite(movie)"
          class="z-16 absolute top-[9%] right-[7%] cursor-pointer text-2xl"
        >
          {{ isFavourite(movie.id) ? '❤️' : '🤍' }}
        </span>
      </div>
    </div>

    <div
      v-if="loading"
      class="flex justify-center h-[70vh] items-center text-red-500 text-4xl text-center"
    >
      <font-awesome-icon spin icon="fa-solid fa-spinner text-red-500" />
    </div>
    <div v-else-if="error" class="flex justify-center h-[59.5vh] pl-4">
      <div>
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753620525/Background-Complete_gbzrew.png'"
          class="pl-28"
          :alt="'error'"
        />
        <p class="text-white text-xl pt-4">
          Something went wrong please check your internet Connection 😎
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useFavouritesStore } from '@/stores/favourites'
const favouritesStore = useFavouritesStore()

const loading = ref(true)
const error = ref(false)
const movies = ref([])
const isFavourite = (id) => {
  return favouritesStore.favourites.some((m) => m.id === id)
}

const toggleFavourite = (movie) => {
  const index = favouritesStore.favourites.findIndex((m) => m.id === movie.id)
  if (index === -1) {
    favouritesStore.favourites.push(movie)
  } else {
    favouritesStore.favourites.splice(index, 1)
  }
}
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'

const fetchPopularMovies = async () => {
  try {
    const res = await axios.get('https://apis.ccbp.in/movies-app/popular-movies', {
      headers: { Authorization: `Bearer ${token}` },
    })
    movies.value = res.data.results
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPopularMovies()
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
