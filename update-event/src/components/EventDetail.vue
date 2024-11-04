<template>
    <div v-if="event">
        <div class="banner-container">
            <img class="banner-image" src="/src/assets/images/event-img.png" alt="Event banner" />
        </div>
        <h1>{{ event.name }}</h1>
         <!-- Lokation -->
         <p v-if="event.place && event.place.name">
        <i class="fa-solid fa-location-dot"></i>
        {{ event.place.name }}
        </p>
    
      <!-- Start Dato -->
       <div class="start-day">
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
     <div class="end-day">
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
     
      <p class="text-event"><em>{{ event.description }}</em></p>
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
  
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
}

i{
    font-size: 0.8rem;
    margin-right: 0.5rem;
}
.start-day{
    margin-top: 2.2rem;

}

.end-day{
    margin-top: 1rem;
}

.text-event{
    margin-top: 2.2rem;
}

.banner-container {
  width: 100%;          /* Strækker containeren over hele bredden */
  overflow: hidden;     /* Sikrer, at billedet ikke går ud over containeren */
}

.banner-image {
  width: 100%;          /* Billedet strækkes til fuld bredde */
  height: 100px;         /* Automatisk højde for at bevare billedets proportioner */
  display: block;       /* Fjerner eventuelle mellemrum under billedet */
  object-fit: cover;    /* Gør billedet til et banner-udseende ved at beskære det, hvis nødvendigt */
}


</style>