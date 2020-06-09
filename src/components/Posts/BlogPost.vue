<template>
    <div>
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
        <button v-on:click="$emit('enlarge-text', '0.1')">
            Увеличить размер текста
        </button>
    </div>
</template>

<script>
  export default {
    name: "BlogPost",
    props: {
      post: Object
    }
  }
</script>

<style scoped>

</style>