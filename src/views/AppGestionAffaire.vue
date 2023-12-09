<template>
  <div class="flex">
    <div class="w-1/5">
      <AppAside />
    </div>

    <div class="content mt-6">
    <AppClient />
    </div>
  </div>
</template>

<script>
import AppAside from '../components/componentAffaire/AppAside.vue';
import AppClient from '../components/componentAffaire/AppClient.vue';
export default {
  components: {
    AppAside,
    AppClient,
  },
};
</script>

<style scoped>
body{
  background:gray;
  padding-right:10px;
}

</style>
