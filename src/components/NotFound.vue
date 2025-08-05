<template>
  <div class="flex justify-center items-center relative">
    <div class="flex justify-center items-center">
      <div class="overlay"></div>

      <img
        :src="'https://res.cloudinary.com/dwdekki8t/image/upload/v1753877646/93955cfc4c28572ced55c420bbcd234b14c68813_cpjdqz.jpg'"
        class="object-cover relative z-0"
      />

      <div class="text-[#000000] absolute z-10">
        <h1 class="text-center">Lost your way ?</h1>
        <p class="text-xl text-center w-[650px] p1">
          We are sorry the page you requested could not be found. Please go back to the home page.
        </p>
        <center class="pt-6 pr-36">
          <router-link to="/">
            <button
              class="text-white bg-[#000000] w-[150px] p-4 rounded absolute hover:bg-transparent hover:border-2 hover:text-[#000000]"
            >
              Go to Home
            </button>
          </router-link>
        </center>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 100vh;
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

.overlay {
  background-color: rgba(171, 191, 201, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
