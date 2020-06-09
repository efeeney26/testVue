<template>
    <div>
        <h3>Список дел</h3>
        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">Добавить задачу</label>
            <input
                    v-model="newTodoText"
                    id="new-todo"
                    placeholder="Например, покормить кота"
            >
            <button>Добавить</button>
        </form>
        <ul>
            <li
                    is="TodoItem"
                    v-for="(todo, index) in todos"
                    v-bind:key="todo.id"
                    v-bind:title="todo.text"
                    v-on:remove="todos.splice(index, 1)"
            />
        </ul>
    </div>
</template>

<script>
  import TodoItem from "@/components/TodoList/TodoItem"

  export default {
    name: "ToDoComponent",
    components: {TodoItem},
    data() {
      return {
        newTodoText: ''
      }
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          text: this.newTodoText
        })
      }
    },
    props: {
      todos: Array
    }
  }
</script>

<style scoped>

</style>