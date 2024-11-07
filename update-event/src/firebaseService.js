import { ref as firebaseRef, set, get } from 'firebase/database';
import { database } from './firebaseConfig';

// Hvert event får sin egen placering i databasen baseret på sit id.
export async function saveEventsToFirebase(events) { 
  for (let event of events) { // Loop igennem listen af events
    const eventRef = firebaseRef(database, `events/${event.id}`); // Placering i databasen
    await set(eventRef, event); // Gemmer event udfra eventRef lokation
  }
  console.log("Events gemt i Firebase!");
}

// Hent alle events fra Firebase - til liste
export const fetchEventsFromFirebase = async () => { 
  const eventsRef = firebaseRef(database, 'events'); // Skaber 'events' reference i databasen
  const snapshot = await get(eventsRef); // Henter et snapshot fra Firebase 

  return snapshot.exists() // Leder efter data i databasen
      ? Object.values(snapshot.val())  // Ternary operator (if else)
      // Konverterer dette objekt til en liste af events
      : (console.warn("Ingen events fundet i Firebase."), []); // Returnerer tom liste
};

// Hente et specifikt event fra Firebase
export const fetchEventFromFirebase = async (eventId) => { // eventId som parameter
  const eventRef = firebaseRef(database, `events/${eventId}`); // Kreerer dynamisk sti
  const snapshot = await get(eventRef); // Henter adressen til event

  return snapshot.exists()  // Eksisterer dataen?
    ? snapshot.val() // Udskriver objektet
    : (console.warn("Event ikke fundet i Firebase."), null); 
};