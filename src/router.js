
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
import AppFactureEncaiss from './components/componentFacturation/AppFactureEncaiss.vue';

import ajouterClient from './components/componentAffaire/AppAddClient.vue';
import ajouterInterlocuteur from './components/componentAffaire/AppAddInterlocuteur.vue';
import AppAddOffer from './components/componentAffaire/AppAddOffer.vue';

import { createRouter, createWebHistory } from 'vue-router';
import AppAgenda from './components/componentAgenda/AppAgenda.vue';

const routes = [
  { path: '/', component: AppInterface },
  { path: '/Administrativ', component: AppAdmin },
  { path: '/Production', component: AppProduction },
  { path: '/Technique', component: AppTech },
  { path: '/Quality', component: AppQuality },
  { path: '/Agenda', component: AppAgenda },
  {
    path: '/GestionDesAffaire',
    component: AppGestionAffaire,
    children: [
      { path: 'ajouterClient', component: ajouterClient },
      { path: 'client', component: AppClient },
      { path: 'ajouterInterlocuteur', component: ajouterInterlocuteur },
      { path: 'interlocuteur', component: AppInterlocuteur },
      { path: 'ajouterOffres', component: AppAddOffer },
      { path: 'offresCommerciales', component: AppOfferCommercial },
    ],
  },
  {
    path: '/comptabilitFacturation',
    component: AppFacture,
    children: [
      { path: 'EnAttenteFActuration', component: AppAttentFacture },
      { path: 'EmiseFacture', component: AppEmiseFacture },
      { path: 'FactureEncaissee', component: AppFactureEncaiss },
      
    ],
  },
  
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
