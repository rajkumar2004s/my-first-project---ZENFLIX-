<template>
  <div class="h-[83vh] text-black bg-[#49494a] flex flex-col justify-center items-center relative">
    <h1 class="text-3xl text-start">Account</h1>

    <div class="flex gap-4 pt-6">
      <strong class="text-[#94a3b8] text-[16px]">Membership:</strong>
      <div class="pl-8">
        <p class="pb-1">Email:</p>
        <input
          class="text-sm p-1 bg-[#c3d0e3] z-10 border-1 border-[#94a3b8] rounded"
          placeholder="Email@gmail.com"
        />
      </div>
    </div>
    <div class="pl-36 pt-4">
      <p class="pb-1">Password:</p>
      <input
        class="text-sm p-1 bg-[#c3d0e3] z-10 border-1 border-[#94a3b8] rounded"
        placeholder="passsword"
      />
    </div>
    <div class="flex pr-30 gap-4 pt-6">
      <strong class="text-[#94a3b8] text-[16px]">Plan Details:</strong>
      <div class="pl-8">
        <p class="pb-1">Premium</p>
        <p class="border-1 border-[#94a3b8] p-1 text-sm rounded">Ultra HD</p>
      </div>
    </div>

    <div class="pt-12">
      <button @click="logout" class="bg-red-500 p-2 rounded-sm text-white w-[120px] z-10">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
<style scoped>
h1 {
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.mem {
  padding-top: 10px;
}

input {
  outline: none;
}
</style>
