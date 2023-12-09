
import AppInterface from './components/componentInterface/AppInterface.vue';
import AppAdmin from './components/componentAdmin/AppAdmin.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: AppInterface },
  { path: '/Administrativ', component: AppAdmin },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
