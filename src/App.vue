<template>
  <div id="app">
    <HelloWorld :msg="'Hello World'" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
</style>
