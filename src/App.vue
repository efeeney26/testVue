<template>
  <div id="app">
    <p class="link-container">
      <router-link to="/basic">Базовые компоненты</router-link>
      <router-link to="/advanced">Продвинутые компоненты</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .link-container > :not(:last-child) {
    margin-right: 20px;
  }
</style>
