import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavouritesStore = defineStore('favourites', () => {
  const favourites = ref([])

  const addToFavourites = (movie) => {
    const exists = favourites.value.some((fav) => fav.id === movie.id)
    if (!exists) {
      favourites.value.push(movie)
    }
  }

  const removeFromFavourites = (movieId) => {
    favourites.value = favourites.value.filter((fav) => fav.id !== movieId)
  }

  return { favourites, addToFavourites, removeFromFavourites }
})
