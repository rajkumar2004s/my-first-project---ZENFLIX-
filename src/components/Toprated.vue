<template>
  <div class="md:pt-24 md:pl-26 md:pr-24 md:pb-6">
    <div class="md:flex md:flex-wrap md:gap-2 grid grid-cols-2 pt-4 pb-4">
      <div v-for="movie in movies" :key="movie.id" class="p-2 rounded-md shadow relative">
        <router-link :to="`popular/${movie.id}`">
          <img
            :src="movie.poster_path"
            :alt="movie.title"
            class="md:w-[160px] md:h-[210px] h-[250px] w-full object-cover rounded-md hover:scale-105 z-10 transition"
          />
        </router-link>
        <span
          @click="toggleFavourite(movie)"
          class="z-16 absolute top-[6%] left-[72%] text-xl md:text-2xl"
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
    const res = await axios.get('https://apis.ccbp.in/movies-app/top-rated-movies', {
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
