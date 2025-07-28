<template>
  <div>
    <div class="flex justify-center items-center flex-col pt-22">
      <div class="relative h-[100vh] w-[86%] overflow-hidden rounded-2xl">
        <video
          :src="videoUrl"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="absolute top-0 left-0 w-full h-[75%] object-cover scale-125"
          @loadeddata="handleLoaded"
        ></video>

        <div
          v-if="loading"
          class="flex justify-center items-center text-red-500 text-4xl text-center pt-8 pl-12 h-[67h]"
        >
          <div class="pt-46">
            <font-awesome-icon spin icon="fa-solid fa-spinner text-red-500" />
          </div>
        </div>
      </div>

      <Trending />
      <Originals />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Trending from './Trending.vue'
import Originals from './Originals.vue'
import videoUrl from '@/assets/avatar-trailer.mp4'

const loading = ref(true)

const handleLoaded = () => {
  loading.value = false
}
</script>
