<template>
    <div>
      <h1>Facebook Events</h1>
      <ul>
        <li v-for="event in events" :key="event.id">
          <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
    import useEvents from '../useEvents.js';  // Importér `useEvents` som en funktion
    const { events } = useEvents();  // Brug `useEvents()` til at få adgang til `events`


  </script>
  
  <style scoped>
  /* Tilføj valgfri styling her */
  </style>
  
  