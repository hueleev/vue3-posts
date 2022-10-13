import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router';
import globalComponents from './plugins/global-components';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';

const app = createApp(App);
app.use(router);
app.use(globalComponents);
app.use(dayjs);
app.use(createPinia());
app.use(globalDirectives);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
