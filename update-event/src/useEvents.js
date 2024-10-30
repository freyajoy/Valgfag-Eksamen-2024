// import { ref, onMounted } from 'vue';

// // Definer en reaktiv variabel til at gemme event-data
// const events = ref([]);

// // Funktion til at hente events fra Firebase med fetch
// async function fetchEvents() {
//   try {
//     // Brug din Firebase-database-URL her og tilføj '/events.json' til slutningen
//     const response = await fetch('https://update-event-8f0f6-default-rtdb.europe-west1.firebasedatabase.app/events.json');
    
//     // Tjek for en fejl i HTTP-svaret
//     if (!response.ok) {
//       throw new Error('Fejl ved hentning af data');
//     }

//     // Konverter svaret til JSON
//     const data = await response.json();

//     // Hvis data findes, konverter det til en liste
//     events.value = data ? Object.values(data) : [];
//   } catch (error) {
//     console.error("Kunne ikke hente events:", error);
//   }
// }

// // Funktion til at bruges i komponenter
// function useEvents() {
//     onMounted(fetchEvents);
//     return { events };
//   }
  
//   export default useEvents;



import { ref, onMounted } from 'vue';

export default function useEvents() {
  const events = ref([]);

  async function fetchEvents() {
    try {
      const response = await fetch('https://update-event-8f0f6-default-rtdb.europe-west1.firebasedatabase.app/events.json');
      if (!response.ok) {
        throw new Error('Fejl ved hentning af data');
      }
      const data = await response.json();
      events.value = data ? Object.values(data) : [];
    } catch (error) {
      console.error("Kunne ikke hente events:", error);
    }
  }

  onMounted(fetchEvents);

  return { events };
}
