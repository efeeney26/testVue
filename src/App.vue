<template>
  <div id="app">
    <BasicComponent />
  </div>
</template>

<script>
import BasicComponent from "@/containers/BasicComponent"

export default {
  name: 'App',
  components: {
    BasicComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
