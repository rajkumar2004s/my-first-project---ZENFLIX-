<template>
  <div class="p-6 text-white pt-24">
    <div
      v-if="loading"
      class="flex justify-center items-center text-red-500 text-2xl text-center pt-8"
    >
      <font-awesome-icon spin icon="fa-solid fa-spinner text-red-500" />
    </div>
    <div v-else-if="favouritesStore.favourites.length === 0" class="flex justify-center h-[67vh]">
      <div>
        <img
          :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753594838/Group_7394_1_lua2yy.png'"
          class="error"
        />
        <p class="text-white text-xl text-center pt-4">No Favourites added yet !!</p>
      </div>
    </div>

    <div class="flex flex-wrap min-h-[67vh] pl-14" v-else>
      <div
        v-for="movie in favouritesStore.favourites"
        :key="movie.id"
        class="p-4 rounded-lg shadow relative"
      >
        <router-link :to="`movie/${movie.id}`">
          <img
            :src="movie.poster_path"
            :alt="movie.title"
            class="w-[160px] h-[210px] object-cover rounded-xl hover:scale-105 z-10 transition"
          />
        </router-link>
        <span @click="removefavourites(movie.id)" class="z-16 absolute top-[6%] left-[72%] text-2xl"
          >❤️</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavouritesStore } from '@/stores/favourites'

const favouritesStore = useFavouritesStore()

const removefavourites = (movieId) => {
  favouritesStore.removeFromFavourites(movieId)
}
</script>

<style scoped></style>
