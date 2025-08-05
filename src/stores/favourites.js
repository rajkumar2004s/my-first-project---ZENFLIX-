import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavouritesStore = defineStore('favourites', () => {
  const saved = localStorage.getItem('favourites')
  const favourites = ref(saved ? JSON.parse(saved) : [])

  watch(
    favourites,
    (newFavourites) => {
      localStorage.setItem('favourites', JSON.stringify(newFavourites))
    },
    { deep: true },
  )

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
