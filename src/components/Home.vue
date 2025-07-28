<template>
  <div>
    <div class="flex justify-center items-center flex-col pt-22">
      <div class="relative h-[100vh] w-[85%] overflow-hidden rounded-2xl">
        <video
          :src="videoUrl"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="absolute top-0 left-0 w-full h-[75%] object-cover scale-125"
        ></video>
      </div>

      <Trending />
      <Originals />
    </div>
  </div>
</template>

<script setup>
import Trending from './Trending.vue'
import Originals from './Originals.vue'
import videoUrl from '@/assets/liger-trailer-1080p.mp4'
</script>
