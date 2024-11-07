import { saveEventsToFirebase } from './firebaseService';

// Facebook applikation
const pageId = "484706954727724";           
const accessToken = "EAAHfUOhwwBsBO7JGflH1yXumazCkE24ZAOUqfv2L99SosyZANmbvCqqf83VxnaQdYA1ffKfaNjP3wf5IxWtLzoZAH85izolKL4M2R2RoS41qVkeM55BRRe8ZAfuD4A4rU4qtIfD6gua09W24iLsYbY3R3ocuMcXPwsxoJNtyrVxUn3ohSeiqoo972gh1b3HS";   // Erstat med dit Facebook access token

// Henter events via API kald
export const fetchFacebookEvents = async () => { // Asynkron export funktion
  console.log("Event er hentet fra Facebook"); // Indikation at funktion er startet
  try {
    const response = await fetch(`https://graph.facebook.com/v13.0/${pageId}/events?access_token=${accessToken}`); // API response
    if (!response.ok) throw new Error('Fejl ved hentning af Facebook begivenhedsdata');
    
    const data = await response.json(); // Konverteres til JSON
    console.log("Data hentet fra Facebook:", data);
    return data.data;  // Funktionens værdi (events)
  } catch (error) {
    console.error("Kunne ikke hente event data fra Facebook:", error); // Javascript error
    return null; // Vise at funktionen ikke kunne hente data
  }
};

export const syncFacebookEventsToFirebase = async () => {
  console.log("Events fra Facebook er synkroniseret med Firebase");
  const events = await fetchFacebookEvents(); // Håndterer asynkrone operationer (referer til funktion over)
  if (events) {
    await saveEventsToFirebase(events); // Venter på på funktionen er færdig før den hopper videre.
  }
};
