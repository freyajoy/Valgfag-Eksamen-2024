
// src/facebookService.js
import { ref, set } from 'firebase/database';
import { database } from './firebaseConfig';  // Importér databasekonfigurationen

export async function saveEventsToFirebase(events) {
  for (let event of events) {
    const eventRef = ref(database, `events/${event.id}`);  // Reference til event-noden i Firebase
    await set(eventRef, event);  // Gem event-data i Firebase
  }
  console.log("Events gemt i Firebase!");
}

//  `page_id` og Page Access Token
const pageId = "484706954727724";            // Facebook-side ID
const accessToken = "EAAHfUOhwwBsBO7JGflH1yXumazCkE24ZAOUqfv2L99SosyZANmbvCqqf83VxnaQdYA1ffKfaNjP3wf5IxWtLzoZAH85izolKL4M2R2RoS41qVkeM55BRRe8ZAfuD4A4rU4qtIfD6gua09W24iLsYbY3R3ocuMcXPwsxoJNtyrVxUn3ohSeiqoo972gh1b3HS";   // Erstat med dit Facebook access token

export async function fetchFacebookEvents() {
  try {
    const response = await fetch(`https://graph.facebook.com/v13.0/${pageId}/events?access_token=${accessToken}`);
    if (!response.ok) throw new Error('Fejl ved hentning af Facebook begivenhedsdata');
    
    const data = await response.json();
    console.log("Data hentet fra Facebook:", data);
    return data.data;  // Dette er listen af events
  } catch (error) {
    console.error("Kunne ikke hente event data fra Facebook:", error);
    return null;
  }
}