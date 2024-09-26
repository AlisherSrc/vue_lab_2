<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/MainHeader.vue';
import MainMenu from './components/MainMenu.vue';
import { ref } from 'vue';

let menuToggle = ref(false);

const toggleMenu = () => {
  menuToggle.value = !menuToggle.value;
}
</script>

<template>
  <Header :menuShow="menuToggle" @clicked="toggleMenu"></Header>
  <MainMenu v-show="menuToggle" @clicked="toggleMenu"/>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
