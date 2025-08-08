<template>
  <div class="text-white bg-[#111] pb-4 pt-3 md:pt-0" v-if="movie">
    <div
      class="relative object-cover bg-cover bg-center w-[100vw] h-[60vh] md:h-[80vh] md:w-[99vw] shadow-md"
      :style="{ backgroundImage: `url(${movie.backdrop_path})` }"
    >
      <div
        class="absolute bottom-0 p-8 bg-gradient-to-t from-black w-full flex flex-col md:pl-28 gap-2 md:gap-4"
      >
        <h1 class="text-2xl md:text-4xl font-bold movie">{{ movie.title }}</h1>
        <p class="md:text-sm text-[10px]">
          {{ movie.runtime }} mins
          <span class="ua"> U/A </span>

          {{ movie.release_date.split('-')[0] }}
        </p>
        <p class="mt-2 text-[10px] md:text-[16px] md:w-[632px]">{{ movie.overview }}</p>

        <button
          class="mt-4 px-4 py-2 md:w-[120px] rounded text-white font-medium relative overflow-hidden z-10 border border-white group"
        >
          <span
            class="absolute inset-0 bg-gradient-to-r from-[#6297ec] to-[#cb27c0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          ></span>
          <span class="relative z-10 group-hover:font-bold transition-all duration-300">
            Play
          </span>
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-2 pl-8 md:flex md:pl-26 md:flex-row md:justify-start md:text-[16px] text-[10px] md:gap-x-24 pt-4 md:pr-26"
    >
      <div>
        <strong>Genres</strong>
        <div v-for="genre in movie.genres" :key="genre.id">
          <p>{{ genre.name }}</p>
        </div>
      </div>
      <div class="pb-4 md:pb-0">
        <strong>Languages</strong>
        <div v-for="lang in movie.spoken_languages" :key="lang.id">
          <p>{{ lang.english_name }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <strong>Rating Count</strong>
        <p>{{ movie.vote_count }} votes</p>
        <strong>Rating Average</strong>
        <p>{{ movie.vote_average }}</p>
      </div>
      <div class="flex flex-col gap-2">
        <strong>Budget</strong>
        <p>{{ movie.budget }}</p>
        <strong>Release Dsate:</strong>
        <p>{{ movie.release_date }}</p>
      </div>
    </div>

    <div class="pt-10 md:pl-26">
      <h2 class="text-2xl font-bold md:pl-0 pl-3 mb-4 movie">More like this</h2>

      <div class="grid grid-cols-2 md:flex md:flex-row md:flex-wrap">
        <div v-for="similar in movie.similar_movies" :key="similar.id">
          <router-link :to="`/movie/${similar.id}`">
            <img
              :src="similar.poster_path"
              class="md:w-[170px] md:h-[220px] w-full h-[250px] object-cover rounded-xl hover:scale-105 transition p-2 md:p-2"
              :alt="similar.title"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="flex justify-center items-center text-red-500 text-3xl text-center pt-8 h-[85vh]"
  >
    <font-awesome-icon spin icon="fa-solid fa-spinner text-red-500" />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie = ref(null)
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
const fetchMovieDetails = async () => {
  try {
    const response = await fetch(`https://apis.ccbp.in/movies-app/movies/${route.params.id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const responseData = await response.json()
    movie.value = responseData.movie_details
  } catch (err) {
    console.error('Error fetching movie details:', err)
  }
}

onMounted(fetchMovieDetails)

watch(() => route.params.id, fetchMovieDetails)
</script>

<style scoped>
.movie {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.movie:hover {
  color: rgb(230, 13, 13);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
p {
  font-family: 'Inter', sans-serif;
}
.ua {
  padding: 2px;
  border: 2px solid white;
  border-radius: 5px;
  margin: 10px;
}
strong {
  color: #94a3b8;
  font-weight: 400;
}
</style>
