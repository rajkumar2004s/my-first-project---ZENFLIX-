<template>
  <div class="bg-[#111111]">
    <Navbar v-if="route.path != '/login'" />
    <router-view />
    <Footer v-if="route.path != '/login'" />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
