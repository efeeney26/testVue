<template>
    <div class="container">
        <h3>v-if(условная)</h3>
        <h4 v-if="awesome">Vue восхитителен!</h4>
        <h4 v-else>О, нет 😢</h4>
        <h1 v-show="ok">Привет!</h1>
    </div>
</template>

<script>
  export default {
    name: "SuspendedComponent",
    props: {
      awesome: Boolean,
      ok: Boolean
    }
  }
</script>

<style scoped>
    .container {
        border: 1px solid black;
    }
</style>