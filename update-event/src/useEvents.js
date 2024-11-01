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
