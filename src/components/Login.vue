<template>
  <div class="container">
    <h1 class="logo text-center">ZENFLIX</h1>

    <div class="flex justify-center items-center relative z-20">
      <div class="bg-[#141414] md:w-[25%] w-[80vw] h-[45vh] md:h-[50vh] p-6 rounded-md card">
        <h1 class="text-white text-2xl text-center pb-4 log">Login</h1>

        <label class="text-gray-400 bold">USERNAME</label>
        <div>
          <input
            type="text"
            v-model="username"
            placeholder="Enter your name"
            class="w-full mb-4 text-black"
            @keyup.enter="Login"
            v-tooltip="'Enter your name'"
          />
        </div>

        <label class="text-gray-400 bold">PASSWORD</label>
        <div class="relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Enter your password"
            @keyup.enter="Login"
            class="w-full pr-10 text-black"
            v-tooltip="'Enter the Username'"
          />
          <span
            class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-black-400"
            @click="togglePassword"
          >
            <svg
              v-if="!showPassword"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.712-4.362M6.219 6.219A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-1.507 2.49M9.88 9.88a3 3 0 104.24 4.24"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3l18 18"
              />
            </svg>
          </span>
        </div>

        <div class="pt-6">
          <button @click="Login" class="bg-[#7d0101] text-white w-full py-2 rounded">Login</button>
        </div>

        <p v-if="error" class="text-sm pt-4 text-red-500 text-center">{{ error }}</p>
      </div>
    </div>
    <div class="pt-4">
      <p class="text-white pl-24">Username : raju</p>
      <p class="text-white pl-24">Password : zenflix</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const showPassword = ref(false)

const router = useRouter()

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const Login = () => {
  if (username.value === 'raju' && password.value === 'zenflix') {
    localStorage.setItem('token', 'zenflix@2025')
    router.push('/')
  } else {
    error.value = 'Please enter valid Credentials..'
  }
}
</script>

<style scoped>
svg {
  color: rgb(33, 33, 33);
  z-index: 10px;
}
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  position: relative;
  z-index: 2;
}

.log {
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.card {
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 -4px 6px rgba(235, 234, 234, 0.1),
    4px 0 6px rgba(0, 0, 0, 0.1),
    -4px 0 6px rgba(0, 0, 0, 0.1);
}
.bold {
  font-weight: 600;
  font-size: 10px;
}
.logo {
  font-weight: bold;
  font-family: 'Anton', sans-serif;
  font-size: 40px;
  color: #ff4c4c;
  letter-spacing: 2px;
  padding-bottom: 35px;
}
input {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e4eaf3;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  margin-top: 4px;
  font-size: 14px;
  outline: none;
}

button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
