<script setup>
import Header from './components/Header.vue';

import { onMounted } from 'vue';
import { fetchFacebookEvents } from './facebookService';  // Sørg for stien passer til din projektstruktur

onMounted(async () => {
  const events = await fetchFacebookEvents();
  console.log("Events hentet fra Facebook:", events);  // Tjek konsollen for data
});
</script>

<template>
    <div>
    <Header></Header>
    <router-view/>
  </div>
  <div>
    <h1>Facebook Event Test</h1>
    <p>Tjek konsollen for hentede data.</p>
  </div>
</template>

<style scoped>

</style>
