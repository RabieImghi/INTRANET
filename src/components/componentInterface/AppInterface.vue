<template>
  <div class="hello">
    <h1 class="text-sm font-bold">{{ msg }}</h1>
    <p class="mt-4">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener" class="text-teal-500">vue-cli documentation</a>.
    </p>
    <h3 class="mt-8 text-2xl">Installed CLI Plugins</h3>
    <ul class="list-none">
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" class="text-teal-500">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" class="text-teal-500">eslint</a></li>
    </ul>
    <h3 class="mt-8 text-2xl">Essential Links</h3>
    <ul class="list-none">
      <li><a href="https://vuejs.org" target="_blank" rel="noopener" class="text-teal-500">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener" class="text-teal-500">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener" class="text-teal-500">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" class="text-teal-500">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener" class="text-teal-500">News</a></li>
    </ul>
    <h3 class="mt-8 text-2xl">Ecosystem</h3>
    <ul class="list-none">
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener" class="text-teal-500">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" class="text-teal-500">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" class="text-teal-500">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" class="text-teal-500">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" class="text-teal-500">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppInterface',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
