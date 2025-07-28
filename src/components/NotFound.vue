<template>
  <div class="flex justify-center items-center h-[82vh]">
    <div class="pt-23">
      <img
        :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753620922/Page_not_found_kto0yt.png'"
        class="object-cover pb-4 relative"
      />
      <router-link to="/"
        ><button
          class="bg-white text-[#171F46] w-[140px] p-4 rounded absolute top-[61%] left-[45%] z-10 hover:bg-black hover:text-white"
        >
          Go to Home
        </button></router-link
      >
    </div>
  </div>
</template>
<style scoped>
img {
  height: 75vh;
  width: 100vw;
}
</style>
