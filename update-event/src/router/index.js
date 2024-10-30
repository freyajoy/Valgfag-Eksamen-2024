import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../components/EventList.vue';
import EventDetail from '../components/EventDetail.vue';

const routes = [
  { path: '/', component: EventList },           // Gør `EventList.vue` til "startside"
  { path: '/events', name: 'EventList', component: EventList },
  { path: '/events/:id', name: 'EventDetail', component: EventDetail }  // Dynamisk rute til hver event
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
