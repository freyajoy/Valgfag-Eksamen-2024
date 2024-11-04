<template>
    <div v-if="event">
        <img  src="/src/assets/images/event-img.png" alt="Event banner">
        <h1>{{ event.name }}</h1>
         <!-- Lokation -->
         <p v-if="event.place && event.place.name">
             <span><i class="fa-solid fa-location-dot"></i>
                 Lokation:
            </span> {{ event.place.name }}
        </p>
    
      <!-- Start Dato -->
       <div>
        <p>
        <span>
            <i class="fa-regular fa-calendar-days"></i>
            Start dato:
        </span> {{ formatDate(event.start_time) }}
        </p>
        <p>
        <span>
            <i class="fa-regular fa-clock"></i>
             Starttidspunkt:
            </span> {{ formatTime(event.start_time) }}
        </p>
    </div>

    <!-- Slut Dato -->
     <div>
        <p>
        <span>
            <i class="fa-regular fa-calendar-days"></i>
            Slut dato:
        </span> {{ formatDate(event.end_time) }}
        </p>
        <p>
        <span>
            <i class="fa-regular fa-clock"></i>
            Sluttidspunkt:
        </span> {{ formatTime(event.end_time) }}
        </p>
     
      <p><em>{{ event.description }}</em></p>
      </div>
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

// Funktion til at formatere datoen alene
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Funktion til at formatere tiden alene
const formatTime = (dateString) => {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit",
  }).replace('.', ':');  // Skift punktum til kolon i tiden
  return `kl. ${time}`;  // Tilføj "kl." foran tiden
};


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

<style scoped>
h1 {
  font-size: 3rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

span {
  font-weight: bold;
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
}





</style>