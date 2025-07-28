<template>
  <div>
    <div class="flex justify-center items-center flex-col pt-26">
      <div class="relative h-[475px] w-[75%] overflow-hidden rounded-2xl">
        <video
          :src="videoUrl"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
          @loadeddata="handleLoaded"
        ></video>

        <!-- Loading Spinner -->
        <div v-if="loading" class="absolute inset-0 flex justify-center items-center bg-black/40">
          <font-awesome-icon spin icon="fa-solid fa-spinner" class="text-red-500 text-4xl" />
        </div>
      </div>

      <!-- Other Components -->
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
