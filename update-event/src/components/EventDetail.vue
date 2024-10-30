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
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const event = ref(null);
  
  async function fetchEvent() {
  try {
    const response = await fetch('https://update-event-8f0f6-default-rtdb.europe-west1.firebasedatabase.app/events.json'); // Hent alle events
    if (!response.ok) throw new Error('Fejl ved hentning af event data');

    const data = await response.json();

    // Find det event, der matcher `id` fra URL'en
    const eventId = route.params.id;
    event.value = Object.values(data).find(evt => String(evt.id) === eventId); // Match på `id` som streng

    if (!event.value) {
      console.warn("Event ikke fundet for ID:", eventId);
    }
  } catch (error) {
    console.error("Kunne ikke hente event data:", error);
  }
}


//   async function fetchEvent() {
//     try {
//       const response = await fetch(`https://update-event-8f0f6-default-rtdb.europe-west1.firebasedatabase.app/events/${route.params.id}.json`);
//       if (!response.ok) throw new Error('Fejl ved hentning af event data');
//       event.value = await response.json();
//     } catch (error) {
//       console.error("Kunne ikke hente event data:", error);
//     }
//   }
  
  onMounted(() => fetchEvent());
  </script>