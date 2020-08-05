<template>
    <li>
        {{ title }}
        <button v-on:click="$emit('remove')">Удалить</button>
    </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>
