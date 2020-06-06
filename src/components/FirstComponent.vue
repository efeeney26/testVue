<template>
    <li class="container">
        {{ todo.text }}
    </li>
</template>

<script>
  export default {
    name: "FirstComponent",
    props: {
      todo: Object
    }
  }
</script>

<style scoped>
    .container {
        margin-top: 20px;
    }
</style>