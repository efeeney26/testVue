<template>
    <div>
        <h3>{{ `${post.title} написанный ${post.author.name}` }}</h3>
        <div v-html="post.content"></div>
        <div>{{`likes - ${post.likes}`}}</div>
        <button v-on:click="$emit('enlarge-text', '0.1')">
            Увеличить размер текста
        </button>
        <div>{{`Кол-во комментариев - ${commentIds.length}`}}</div>
    </div>
</template>

<script>
  export default {
    name: "BlogPost",
    props: {
      post: {
        type: Object,
        required: true
      },
      commentIds: Array
    }
  }
</script>

<style scoped>

</style>