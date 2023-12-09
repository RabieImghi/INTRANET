<template>
  <div>
    <header class="flex items-center justify-between p-4 px-8 text-dark bg-white shadow-md">
      <div class="flex items-center">
        <img src="@/assets/logo.png" alt="Logo" class="w-24 h-12 mr-2">
      
      </div>

        <div class="flex">  
          <span class="mx-2  "><font-awesome-icon class="w-6 h-6 text-custom-icon"  :icon="['fas', 'calendar-days']" /></span>
          <span class="mx-2 "><font-awesome-icon  class="w-6 h-6 text-custom-icon" :icon="['fas', 'dollar-sign']" /></span>
          <span class="mx-2 " data-modal-target="extralarge-modal-contact" data-modal-toggle="extralarge-modal-contact"><font-awesome-icon  class="w-6 h-6 text-custom-icon" :icon="['fas', 'headset']" /></span>
          <span class="mx-2 " data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal" ><font-awesome-icon  class="w-6 h-6 text-custom-icon" :icon="['fas', 'pen-to-square']" /></span>
        </div>
      <div class="flex justify-between items-center">
       <div class="flex items-center">
        <img src="@/assets/person.png" alt="User" class="w-8 h-8 rounded-full mr-2">
        <div class="flex flex-col mr-4">
          <div class="text-sm font-semibold">SOUFIANE BOUSHABA</div>
          <div class="text-xs"> <span class="font-semibold"> matricule : </span> <span class=" text-slate-400"> ABC123  </span></div>
        </div>
       </div>

        <div class="ml-12">
          <span class="text-sm">12:34</span>
        </div>
        <button class="ml-12 flex gap-3 items-center px-3 py-1 bg-red-500 text-white rounded">  <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />deconnexion</button>
      </div>
    </header>

   
     <router-view />
  </div>
  <AppModal />
  <AppContactModal />

</template>
<script>
import AppModal from './components/componentModal/AppModal.vue';
import AppContactModal from './components/componentModal/AppContactModal.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

export default {
  components: {
    AppModal,
    AppContactModal,
  },
  props: {
    msg: String,
  },
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  },
};
</script>


<style scoped>
header{
  position:sticky;
  top:0;
  z-index:100;
} 
.text-custom-icon {
  color: #243464;
  transition: color 0.3s ease;
  cursor:pointer;
}

.text-custom-icon:hover {
  color: #cc1c24;
}
</style>