<template>
    <div class="container">
        <h1>База</h1>
        <div>
            <span v-bind:title="message">
                Наведи на меня курсор на пару секунд, чтобы увидеть динамически связанное значение title!
            </span>
        </div>
        <div>
            <span v-if="seen">Сейчас меня видно</span>
        </div>
        <div>
            <ol>
                <li v-for="todo in todos" v-bind:key="todo.text">
                    {{ todo.text }}
                </li>
            </ol>
        </div>
        <div>
            <p>{{ this.message1 }}</p>
            <button v-on:click="reverseMessage">Перевернуть сообщение</button>
        </div>
        <div>
            <p>{{ message2 }}</p>
            <input v-model="message2">
        </div>
    </div>
</template>

<script>
  export default {
    name: "BasicComponent",
    props: {},
    data:  () => ({
      message: `Вы загрузили эту страницу: ${new Date().toLocaleString()}`,
      seen: true,
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' }
      ],
      message1: 'Привет, Vue.js!',
      message2: ''
    }),
    methods: {
      reverseMessage: function () {
        this.message1 = this.message1.split('').reverse().join('')
      }
    }
}
</script>

<style scoped>
    .container {
        border: 1px solid black;
    }
    .container div {
        margin-bottom: 20px;
    }
</style>