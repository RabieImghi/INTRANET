<template>
  <div class="flex">
    <div class="w-1/5">
      <AppAside />
    </div>

    <div class="content mt-6 w-4/5">
    
       <router-view />
    </div>
  </div>
</template>

<script>
import AppAside from '../components/componentFacturation/AppAside.vue';

export default {
  components: {
    AppAside,
    
  },
};
</script>

<style scoped>
body{
  background:gray;
  padding-right:10px;
}

</style>
