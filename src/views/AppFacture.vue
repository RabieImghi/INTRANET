
<template>
  <div class="flex">
    <div :style="{ width: asideMinimized ? '120px' : '20%' }" class="aside-container">
      <AppAside @asideToggled="handleAsideToggle" />
    </div>

    <div class="content mt-6 content-containe" :style="{ width: contentWidth }">
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
  data() {
    return {
      asideMinimized: false,
    };
  },
  computed: {
    contentWidth() {
      return this.asideMinimized ? 'calc(100% - 70px)' : 'calc(100% - 220px)';
    },
  },
  methods: {
    handleAsideToggle(minimized) {
      this.asideMinimized = minimized;
    },
  },
};
</script>

<style scoped>
body {
  background: gray;
  padding-right: 10px;
}

.aside-container,
.content-container {
  transition: width .6s ease; 
}
</style>
