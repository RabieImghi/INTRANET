
import AppInterface from './components/componentInterface/AppInterface.vue';
import AppAdmin from './components/componentAdmin/AppAdmin.vue';
import AppProduction from './components/componentProduction/AppProduction.vue';
import AppTech from './components/componentTechnique/AppTechnique.vue';
import AppQuality from './components/componentQuality/AppQuality.vue';
import AppGestionAffaire from './views/AppGestionAffaire.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AppAgenda from './components/componentAgenda/AppAgenda.vue';

const routes = [
  { path: '/', component: AppInterface },
  { path: '/Administrativ', component: AppAdmin },
  { path: '/Production', component: AppProduction },
  { path: '/Technique', component: AppTech },
  { path: '/Quality', component: AppQuality },
  { path: '/Agenda', component: AppAgenda },
  { path: '/GestionDesAffaire', component: AppGestionAffaire },
 
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
