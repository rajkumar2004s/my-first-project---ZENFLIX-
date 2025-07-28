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

    <div class="grid grid-cols- 2 md:grid-cols-4 gap-6 min-h-[67vh]" v-else>
      <div
        v-for="movie in favouritesStore.favourites"
        :key="movie.id"
        class="bg-[#1e1e1e] p-4 rounded-lg shadow h-[240px] relative"
      >
        <router-link :to="`movie/${movie.id}`">
          <img
            :src="movie.poster_path"
            :alt="movie.title"
            class="rounded h-[80%] w-full object-cover"
          />
        </router-link>
        <i
          @click="removefavourites(movie.id)"
          class="z-16 absolute top-[9%] right-[7%] fa-regular text-2xl fa-heart cursor-pointer text-red-500"
        />
        <p class="mt-2 pt-2 text-sm">{{ movie.title }}</p>
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
