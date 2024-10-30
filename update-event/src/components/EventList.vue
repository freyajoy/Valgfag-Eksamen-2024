<template>
    <div>
      <h1>Facebook Events</h1>
      <ul>
        <li v-for="event in events" :key="event.id">
          <h3>{{ event.name }}</h3>
          <p>{{ event.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>



//   import { ref, onMounted } from 'vue';
  
//   // Definér en reactive variabel til at holde events
//   const events = ref([]);
  
//   // Function for at hente events fra Facebook API
//   const fetchEvents = async () => {
//     const accessToken = 'EAAHfUOhwwBsBOydemGouls4roKhgptcLFkg9JUqAM4FHBj6NapM40CWU9p4A8lymDJpZCKtRIZArTV3ZABK16mFK0o2ooZBk3BiO10ZB79dNzutlarjWVhCRe6dRL3ZAvD3ZBihbeuiM7K2JZBdfi1jlJ7HfiZABRpmM68VF10CLmIm8hjxrnMelFy51y4bU3I6z4kOZC1rr2iwEEXX3Eb5AZDZD'; // Indsæt dit token her
//     const appId = '527013566791707'; // Indsæt din bruger-id eller event-id
 
//     try {
//       const response = await fetch(
//         `https://graph.facebook.com/v13.0/527013566791707/events?access_token=EAAHfUOhwwBsBOydemGouls4roKhgptcLFkg9JUqAM4FHBj6NapM40CWU9p4A8lymDJpZCKtRIZArTV3ZABK16mFK0o2ooZBk3BiO10ZB79dNzutlarjWVhCRe6dRL3ZAvD3ZBihbeuiM7K2JZBdfi1jlJ7HfiZABRpmM68VF10CLmIm8hjxrnMelFy51y4bU3I6z4kOZC1rr2iwEEXX3Eb5AZDZD`
//       );
//       const data = await response.json();
//       events.value = data.data || []; // Opdaterer `events`-arrayet
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   // Kald fetchEvents, når komponenten indlæses
//   onMounted(fetchEvents);
  </script>
  
  <style scoped>
  /* Tilføj valgfri styling her */
  </style>
  
  