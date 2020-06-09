<template>
    <div>
        <h4>Компонент счетчик откликов</h4>
        <button v-on:click="addCount">Счётчик кликов — {{ count }}</button>
    </div>
</template>

<script>
  export default {
    name: "ButtonCounter",
    data() {
      return {
        count: 0
      }
    },
    methods: {
      addCount() {
        this.count++
      }
    }
  }
</script>

<style scoped>

</style>