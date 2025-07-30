<template>
  <div class="flex justify-center items-center h-[82vh]">
    <div class="pt-28 flex justify-center items-center">
      <img
        :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753877646/93955cfc4c28572ced55c420bbcd234b14c68813_cpjdqz.jpg'"
        class="object-cover pb-4 relative"
      />
      <div class="text-[#171F46] absolute">
        <h1>Lost your way ?</h1>
        <p class="text-xl text-center w-[650px] p1">
          We are sorry the page you requested could not be found Please go back to the home page
        </p>
        <div class="flex justify-center pt-4 pr-36 p-4 pb-18">
          <router-link to="/"
            ><button
              class="text-white bg-[#171F46] w-[150px] p-4 rounded absolute hover:bg-transparent hover:border-2 hover:text-[#171F46]"
            >
              Go to Home
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 75vh;
  width: 100vw;
}
h1 {
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.p1 {
  font-weight: 600;
}
</style>
