<template>
  <div>
    <header class="flex items-center justify-between p-4 px-8 text-dark bg-white shadow-md">
      <div class="flex items-center">
        <a href="/"><img src="@/assets/logo.png" alt="Logo" class="w-24 h-12 mr-2"></a>
      
      </div>

        <div class="flex">  
          <a href="/Agenda"><span class="mx-2  "><font-awesome-icon class="w-6 h-6 text-custom-icon"  :icon="['fas', 'calendar-days']" /></span></a>
          <span class="mx-2 "><font-awesome-icon  class="w-6 h-6 text-custom-icon" :icon="['fas', 'dollar-sign']" /></span>
          <a href="/Contact"><span class="mx-2 "   data-te-ripple-init data-te-ripple-color="light"><font-awesome-icon  class="w-6 h-6 text-custom-icon" :icon="['fas', 'headset']" /></span></a>
          <a href="/DemandAbs"><span class="mx-2 " data-te-ripple-init data-te-ripple-color="light" ><font-awesome-icon  class="w-6 h-6 text-custom-icon" :icon="['fas', 'pen-to-square']" /></span></a>
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
  

</template>
<script>

export default {
  props: {
    msg: String,
  },
};
</script>


<style scoped>
*::-webkit-scrollbar{
  display: none;
}
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