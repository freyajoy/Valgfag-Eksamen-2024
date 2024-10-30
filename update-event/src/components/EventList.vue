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
  
  <script>
  export default {
    data() {
      return {
        events: [], // Her gemmes begivenhederne
      };
    },
    mounted() {
      this.fetchEvents();
    },
    methods: {
      async fetchEvents() {
        const accessToken = 'DIN_ACCESS_TOKEN'; // Indsæt dit token her
        const userId = 'DIT_BRUGER_ID'; // Indsæt din bruger-id eller event-id
  
        try {
          const response = await fetch(
            `https://graph.facebook.com/v13.0/${userId}/events?access_token=${accessToken}`
          );
          const data = await response.json();
          this.events = data.data || []; // Opdaterer `events` med data fra Facebook
        } catch (error) {
          console.error('Error:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tilføj valgfri styling her */
  </style>
  