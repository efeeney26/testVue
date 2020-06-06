<template>
  <div id="app">
    <BasicComponent />
    <ol>
      <FirstComponent
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      />
    </ol>
  </div>
</template>

<script>
import FirstComponent from "@/components/FirstComponent"
import BasicComponent from "@/components/BasicComponent"

export default {
  name: 'App',
  components: {
    BasicComponent,
    FirstComponent
  },
  data: () => ({
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
