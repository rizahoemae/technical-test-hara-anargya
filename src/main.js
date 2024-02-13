import { createApp } from 'vue';
import './style.css';
import '../src/assets/css/index.css';
import { Icon } from '@iconify/vue';
import routes from './router';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).component('Icon', Icon).mount('#app');
