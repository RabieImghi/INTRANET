import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRightFromBracket, faCalendar, faCalendarDays , faDollarSign , faHeadset ,faPenToSquare} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRightFromBracket , faCalendar, faCalendarDays , faDollarSign , faHeadset, faPenToSquare);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')