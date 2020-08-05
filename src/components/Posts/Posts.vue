<template>
    <div :style="{ fontSize: postFontSize + 'em' }" >
        <h4>Проброс свойст из дочернего комп-ра в родителя</h4>
        <BlogPost
                v-for="post in posts"
                v-bind:key="post.id"
                v-bind:post="post"
                v-on:enlarge-text="onEnlargeText"
                :comment-ids="comments"
        />
    </div>
</template>

<script>
import BlogPost from '@/components/Posts/BlogPost'
export default {
  name: 'Posts',
  components: { BlogPost },
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'Wow1', author: { name: 'Lol' }, likes: 42 },
        { id: 2, title: 'Blogging with Vue', content: 'Wow2', author: { name: 'Kek' }, likes: 45 },
        { id: 3, title: 'Why Vue is so fun', content: 'Wow3', author: { name: 'Chuck' }, likes: 0 }
      ],
      postFontSize: 1,
      comments: [234, 266, 273]
    }
  },
  methods: {
    onEnlargeText (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
}
</script>

<style scoped>

</style>
