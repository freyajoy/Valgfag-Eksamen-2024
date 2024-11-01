<script setup>
import Header from './components/Header.vue';
import { onMounted } from 'vue';
import { fetchFacebookEvents } from './facebookService';  // Sørg for stien passer til din projektstruktur
import { syncFacebookEventsToFirebase } from './facebookService';

onMounted(async () => {
  const events = await fetchFacebookEvents();
  console.log("Events hentet fra Facebook:", events);  // Tjek konsollen for data

  console.log("Starter synkronisering af Facebook events til Firebase...");
  await syncFacebookEventsToFirebase();
});
</script>

<template>
    <div>
    <Header></Header>
    <router-view/>
  </div>
</template>

<style scoped>

</style>
