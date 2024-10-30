// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../components/Home.vue'; // Dette er et eksempel
import PrivacyPolicy from '../components/PrivacyPolicy.vue'; // Din privacy policy-side

const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
