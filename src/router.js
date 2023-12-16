
import AppInterface from './components/componentInterface/AppInterface.vue';
import AppAdmin from './components/componentAdmin/AppAdmin.vue';
import AppProduction from './components/componentProduction/AppProduction.vue';
import AppTech from './components/componentTechnique/AppTechnique.vue';
import AppQuality from './components/componentQuality/AppQuality.vue';
import AppGestionAffaire from './views/AppGestionAffaire.vue';
import AppClient from './components/componentAffaire/AppClient.vue';
import AppInterlocuteur from './components/componentAffaire/AppInterlocuteur.vue';
import AppOfferCommercial from './components/componentAffaire/AppOfferCommercial.vue';
import AppFacture from './views/AppFacture.vue';
import AppAttentFacture from './components/componentFacturation/AppAttentFacture.vue';
import AppEmiseFacture from './components/componentFacturation/AppEmiseFacture.vue';
import ajouterClient from './components/componentAffaire/AppAddClient.vue'
import ajouterInterlocuteur from './components/componentAffaire/AppAddInterlocuteur.vue'

import { createRouter, createWebHistory } from 'vue-router';
import AppAgenda from './components/componentAgenda/AppAgenda.vue';
import AppContact from './components/componentContact/AppContact.vue';
import AppDemandAbs from './components/componentDemandAbcense/AppDemandAbcense.vue';

import AppGestionCalendrier from './components/componentGestionCalendrier/AppGestionCalendrier.vue';
const routes = [
  { path: '/', component: AppInterface },
  { path: '/Administrativ', component: AppAdmin },
  { path: '/Production', component: AppProduction },
  { path: '/Technique', component: AppTech },
  { path: '/Quality', component: AppQuality },
  { path: '/Agenda', component: AppAgenda },
  { path: '/Contact', component: AppContact },
  { path: '/DemandAbs', component: AppDemandAbs },
  
  {
    path: '/GestionDesAffaire',
    component: AppGestionAffaire,
    children: [
      { path: 'ajouterClient', component: ajouterClient },
      { path: 'client', component: AppClient },

      { path: 'ajouterInterlocuteur', component: ajouterInterlocuteur },
      { path: 'interlocuteur', component: AppInterlocuteur },
      { path: 'offresCommerciales', component: AppOfferCommercial },
    ],
  },
  {
    path: '/comptabilitéFacturation',
    component: AppFacture,
    children: [
      { path: 'EnAttenteFActuration', component: AppAttentFacture },
      { path: 'EmiseFacture', component: AppEmiseFacture },
    
    ],
  },
  { path: '/GestionCalendrier', component: AppGestionCalendrier },
  
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
