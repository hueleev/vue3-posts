import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

console.log('BASE_URL: ', import.meta.env.VITE_APP_API_URL);
