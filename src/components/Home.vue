<template>
  <div v-if="!showContent" class="h-[60vh] md:h-screen flex justify-center items-center bg-black">
    <h1 class="welcome animate-welcome text-[40px] text-center md:text-[70px]">
      Welcome to Zenflix..
    </h1>
  </div>

  <div v-else>
    <div class="flex justify-center items-center flex-col pt-4 md:pt-26">
      <div class="relative h-[250px] md:h-[475px] w-full md:w-[85%] overflow-hidden md:rounded-xl">
        <video
          :src="videoUrl"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          class="absolute top-0 left-0 w-full h-full md:p-0 p-1 object-cover rounded-xl md:rounded-xl"
          @loadeddata="handleLoaded"
        ></video>

        <div v-if="loading" class="absolute inset-0 flex justify-center items-center bg-black/40">
          <font-awesome-icon spin icon="fa-solid fa-spinner" class="text-red-500 text-4xl" />
        </div>
      </div>

      <Trending />
      <Originals />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Trending from './Trending.vue'
import Originals from './Originals.vue'
import videoUrl from '@/assets/avatar-trailer.mp4'

const router = useRouter()
const loading = ref(true)
const showContent = ref(false)

const handleLoaded = () => {
  loading.value = false
}

onMounted(() => {
  const shouldShowWelcome = localStorage.getItem('showWelcome') === 'true'

  if (shouldShowWelcome) {
    setTimeout(() => {
      showContent.value = true
      localStorage.removeItem('showWelcome')
    }, 2000)
  } else {
    showContent.value = true
  }
})
</script>

<style scoped>
@media screen and (max-width: 576) {
  video {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
}
.welcome {
  color: red;
  font-weight: bold;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeInZoom 2s ease-out forwards;
  transition: smooth;
  font-family: cursive;
  cursor: pointer;
  font-style: italic;
}

@keyframes fadeInZoom {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
