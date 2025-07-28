<template>
  <div class="p-6 text-white pt-24">
    <div
      v-if="loading"
      class="flex justify-center h-[70vh] items-center text-red-500 text-2xl text-center"
    >
      <font-awesome-icon spin icon="fa-solid fa-spinner text-red-500" />
    </div>
    <div v-else-if="movies.length === 0" class="flex justify-center h-[67vh]">
      <div>
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753594838/Group_7394_1_lua2yy.png'"
          class="error"
        />
        <p class="text-white text-xl pt-2">
          Your search for "{{ searchQuery }}" did not find any matches !!
        </p>
      </div>
    </div>

    <div class="grid grid-cols- 2 md:grid-cols-4 gap-6 min-h-[67vh]" v-else>
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="bg-[#1e1e1e] p-4 rounded-lg shadow h-[210px] transition hover:scale-105"
      >
        <router-link :to="`movie/${movie.id}`">
          <img :src="movie.backdrop_path || movie.poster_path" :alt="movie.title" class="rounded" />
        </router-link>
        <p class="mt-2 pt-2 text-sm">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const movies = ref([])
const loading = ref(false)

const searchQuery = ref(route.query.q || '')

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'

const fetchSearchResults = async () => {
  if (!searchQuery.value) return
  loading.value = true
  try {
    const response = await axios.get(
      `https://apis.ccbp.in/movies-app/movies-search?search=${encodeURIComponent(searchQuery.value)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    movies.value = response.data.results
  } catch (error) {
    console.error('Search failed:', error)
    movies.value = []
  } finally {
    loading.value = false
  }
}

onMounted(fetchSearchResults)

watch(
  () => route.query.q,
  (newQuery) => {
    searchQuery.value = newQuery
    fetchSearchResults()
  },
)
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
