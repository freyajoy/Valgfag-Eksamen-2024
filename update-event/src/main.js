import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importér routeren

const app = createApp(App);

app.use(router); // Brug routeren i din app
app.mount('#app');
