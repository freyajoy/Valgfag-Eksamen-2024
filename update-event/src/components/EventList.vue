<template>
    <div class="events-page-container">
      <h1>Alle Events</h1>
      <ul class="event-list">
        <li v-for="event in events" :key="event.id" class="event-item">
          <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted, watchEffect } from 'vue';
    import { fetchEventsFromFirebase } from '../firebaseService';  // Importér funktionen fra firebaseService

    const events = ref([]);  // Opret en reaktiv liste til at gemme events

    async function loadEvents() {
      events.value = await fetchEventsFromFirebase();  // Hent events fra Firebase og gem i `events`
    }

    onMounted(loadEvents);  // Kald loadEvents, når komponenten monteres
    
     // Overvåg ændringer og genindlæs events
    watchEffect(async () => {
      events.value = await fetchEventsFromFirebase();
    });
      
  </script>
  
<style scoped>
.events-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 2rem;
}

h1 {
  margin-top: 2rem;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.event-list {
  list-style-type: none; /* Removes bullet points */
  padding: 0;
  margin: 0;
}

.event-item {
  width: 100%;              /* Takes full width of container */
  max-width: 600px;          /* Limits width to keep items readable */
  margin-bottom: 15px;       /* Space between items */
}


.event-item a {
  color: inherit; 
  text-decoration: none;
}

.event-item a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #F4A38A;
  color: #1e1e1e;
  text-decoration: none;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s, color 0.3s;
}

.event-item a:hover {
  transform: scale(1.05);
  background-color: #AE2824;
  color: #fff;
}
 </style>
