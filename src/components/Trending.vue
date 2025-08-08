<template>
  <div class="text-white pl-0 md:pl-12 md:pr-8 pt-8">
    <h1 class="text-2xl font-bold pl-6 md:pl-16 t hover:text-red-500">Trending Now</h1>

    <div
      v-if="loading"
      class="flex justify-center items-center text-red-500 text-3xl text-center pt-8 pl-12"
    >
      <font-awesome-icon spin icon="fa-solid fa-spinner text-red-500" />
    </div>
    <div v-else-if="error" class="text-red-500 flex justify-center items-center flex-col p-12 pt-2">
      <img
        class="w-10"
        alt="error "
        :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753622110/alert-triangle_tegsdw.png'"
      />
      <p class="text-white p-2 pb-2">Something went wrong. Please try again</p>
      <button class="bg-white p-2 text-black rounded w-[120px]">Try Again</button>
    </div>

    <div v-else class="flex items-center relative">
      <button
        @click="scrollLeft"
        class="text-white p-2 rounded-full hover:bg-white/20 hidden md:block"
      >
        <ArrowLeftCircleIcon class="w-6 h-6 text-white text-xl" />
      </button>

      <div
        ref="carousel"
        class="flex overflow-x-auto scroll-smooth no-scrollbar md:gap-2 md:px-4 pt-4"
      >
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="relative flex-shrink-0 rounded-xl overflow-hidden transition hover:scale-105"
        >
          <router-link :to="`/movie/${movie.id}`">
            <img
              :src="movie.poster_path"
              :alt="movie.title"
              class="md:w-[170px] h-[200px] md:h-[220px] object-cover rounded-xl hover:scale-100 transition p-2"
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
      <router-view />
      <button
        @click="scrollRight"
        class="text-white p-2 rounded-full hover:bg-white/20 btn hidden md:block"
      >
        <ArrowRightCircleIcon class="w-6 h-6 text-white text-xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import { useFavouritesStore } from '@/stores/favourites'

const favouritesStore = useFavouritesStore()

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
const movies = ref([])
const loading = ref(true)
const error = ref(false)
const carousel = ref(null)

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'

const fetchTrendingMovies = async () => {
  try {
    const res = await axios.get('https://apis.ccbp.in/movies-app/trending-movies', {
      headers: { Authorization: `Bearer ${token}` },
    })
    movies.value = res.data.results
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
}

const scrollLeft = () => {
  const container = carousel.value
  const cardWidth = container.clientWidth / 4
  container.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' })
}

const scrollRight = () => {
  const container = carousel.value
  const cardWidth = container.clientWidth / 4
  container.scrollBy({ left: cardWidth * 2, behavior: 'smooth' })
}

onMounted(() => {
  fetchTrendingMovies()
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

.t {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.btn {
  margin: 15px;
}
</style>
