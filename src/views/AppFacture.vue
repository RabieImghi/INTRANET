<template>
  <div class="flex">
    <div class=" appside w-1/5">
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
.content{
  flex:shrink;
}
.appside {
  position: fixed;
  height: 100vh; /* Set the height to 100% of the viewport height */
  overflow-y: auto; /* Enable vertical scrolling if the content is taller than the viewport */
  top: 0;
  left: 0;
  width: 20%; /* Adjust the width as needed */
  padding-right: 10px;
  box-sizing: border-box;
}

</style>
