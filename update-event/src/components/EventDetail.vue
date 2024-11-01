<template>
    <div v-if="event">
      <h1>{{ event.name }}</h1>
      <p>{{ event.description }}</p>
      <p>Start Date: {{ event.start_time }}</p>
      <p>End Date: {{ event.end_time }}</p>
      <img v-if="event.banner" :src="event.banner" alt="Event banner">
    </div>
    <div v-else>
    <p>Event not found. ID: {{ route.params.id }}</p> <!-- Tilføjet linje for at teste ID -->
    </div>

  </template>
  
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { syncFacebookEventsToFirebase } from '../facebookService';
import { fetchEventFromFirebase } from '../firebaseService';

const route = useRoute();
const event = ref(null);

async function loadEvent() {
  const eventId = route.params.id;  // Hent event-ID fra URL'en
  // Hent event fra Firebase og gem det i `event`
  if (eventId) {
    event.value = await fetchEventFromFirebase(eventId);
  }
}

onMounted(loadEvent);

// Overvåg ændringer i route.params.id og kald loadEvent ved ændring
watch(
  () => route.params.id,
  (newId, oldId) => {
    if (newId !== oldId) {
      loadEvent();
    }
  }
);
</script>