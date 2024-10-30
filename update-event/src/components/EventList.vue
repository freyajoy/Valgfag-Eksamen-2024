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
  import { ref, onMounted } from 'vue';
  
  // Definér en reactive variabel til at holde events
  const events = ref([]);
  
  // Function for at hente events fra Facebook API
  const fetchEvents = async () => {
    const accessToken = 'EAAHfUOhwwBsBO6WtNLH3fp6rvhJ4bRJJ8E251hikjfH1WCQPCmqkntPa35YxyCDJ4PhOkAnOKCHciKAiUMr7HKQ4AH9kJm74DlJCRYCc3Ems3qUrrsWlmJr9RZASej89MES0pZCoVS1d6scFY3ugnJhXZC5mKZB6J5FFcYALqZBfugZCIsl7j1Fqqcpkaf0vvt5N7U8tsZBL0Wor6QD3vKjfpoByzkZD'; // Indsæt dit token her
    const userId = '527013566791707'; // Indsæt din bruger-id eller event-id
  
    try {
      const response = await fetch(
        `https://graph.facebook.com/v13.0/527013566791707/events?access_token=EAAHfUOhwwBsBO6WtNLH3fp6rvhJ4bRJJ8E251hikjfH1WCQPCmqkntPa35YxyCDJ4PhOkAnOKCHciKAiUMr7HKQ4AH9kJm74DlJCRYCc3Ems3qUrrsWlmJr9RZASej89MES0pZCoVS1d6scFY3ugnJhXZC5mKZB6J5FFcYALqZBfugZCIsl7j1Fqqcpkaf0vvt5N7U8tsZBL0Wor6QD3vKjfpoByzkZD`
      );
      const data = await response.json();
      events.value = data.data || []; // Opdaterer `events`-arrayet
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Kald fetchEvents, når komponenten indlæses
  onMounted(fetchEvents);
  </script>
  
  <style scoped>
  /* Tilføj valgfri styling her */
  </style>
  
  