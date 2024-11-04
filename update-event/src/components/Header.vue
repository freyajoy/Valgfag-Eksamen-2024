<template>
    <nav @mouseleave="showDropdown = false">
      <img src="../assets/images/Logo sommerfugl hvid.png" alt="Logo" />
      <ul class="menu-items">
        <li><a href="#">Forside</a></li>
        <li><a href="#">Om os</a></li>
        <li><a href="#">Biograf</a></li>
        <li><a href="#">Café</a></li>
        <li><a href="#">Gavekort</a></li>
        <li @mouseover="showDropdown = true">
          <a href="#">Arrangementer</a>
          <ul v-if="showDropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false" class="under-items">
            <!-- Dropdown-menu holder sig åben, indtil musen forlader både menuen og dens elementer -->
            <li v-for="event in events" :key="event.id">
              <router-link :to="`/events/${event.id}`">{{ event.name }}</router-link>
            </li>
          </ul>
        </li>
        <li><a href="#">Mere</a></li>
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

<style scoped>
  nav {
    background-color: #AE2824;
    display: flex;
    height: 90px;
  }

  nav img {
    margin: 20px;
  }
  .menu-items {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
  }
  .menu-items a{
    color: white;
    font-family: "gill-sans-nova", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
  }

  .under-items {
    background-color: #AE2824;
    margin-top: 190px;
  }
</style>