<template>
    <nav @mouseleave="showDropdown = false">
      <ul>
        <li @mouseover="showDropdown = true">
          <a href="#">Arrangementer</a>
          <ul v-if="showDropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
            <!-- Dropdown-menu holder sig åben, indtil musen forlader både menuen og dens elementer -->
            <li v-for="event in events" :key="event.id">
              <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';
    import { fetchEventsFromFirebase } from '../firebaseService';

    const events = ref([]);  // Definer en reaktiv variabel til events
    const showDropdown = ref(false);

    async function loadEvents() {
    events.value = await fetchEventsFromFirebase();  // Hent events fra Firebase
    }

    // Kald loadEvents, når komponenten monteres
    onMounted(loadEvents);


    // import { ref } from 'vue';
    // import useEvents from '../useEvents.js';  // Importér `useEvents` som en funktion

    // const { events } = useEvents();  // Brug `useEvents()` til at få adgang til `events`
    // const showDropdown = ref(false);
  </script>
  