<template>
    <div class="container">
        <h1>База</h1>
        <div>
            <h3>v-bind(атрибуты)</h3>
            <span v-bind:title="message">
                Наведи на меня курсор на пару секунд, чтобы увидеть динамически связанное значение title!
            </span>
        </div>
        <div>
            <h3>v-if(директивы)</h3>
            <span v-if="seen">Сейчас меня видно</span>
        </div>
        <div>
            <h3>v-for(директивы)</h3>
            <ol>
                <li v-for="todo in todos" v-bind:key="todo.text">
                    {{ todo.text }}
                </li>
            </ol>
        </div>
        <div>
            <h3>v-on:click(модификаторы)</h3>
            <p>{{ message1 }}</p>
            <button v-on:click="reverseMessage">Перевернуть сообщение</button>
        </div>
        <div>
            <h3>v-model(модификаторы)</h3>
            <p>{{ message2 }}</p>
            <input v-model="message2">
        </div>
        <div>
            <h3>computed(вычисляемые свойства)</h3>
            <p>Изначальное сообщение: «{{ message1 }}»</p>
            <p>Сообщение задом наперёд: «{{ reversedMessage }}»</p>
        </div>
        <div>
            <h3>watch(наблюдатель)</h3>
            <p>
                Задайте вопрос, на который можно ответить «да» или «нет»:
                <input v-model="question">
            </p>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import { capitalize, debounce } from 'lodash'

  export default {
    name: "BasicComponent",
    props: {},
    data() {
      return {
        message: `Вы загрузили эту страницу: ${new Date().toLocaleString()}`,
        seen: true,
        todos: [
          {text: 'Изучить JavaScript'},
          {text: 'Изучить Vue'},
          {text: 'Создать что-нибудь классное'}
        ],
        message1: 'Привет, Vue.js!',
        message2: '',
        question: '',
        answer: 'Пока вы не зададите вопрос, я не могу ответить!'
      }
    },
    created() {
      // _.debounce — это функция lodash, позволяющая ограничить то,
      // насколько часто может выполняться определённая операция.
      // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
      // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
      // Узнать больше о функции _.debounce (и её родственнице _.throttle),
      // можно в документации: https://lodash.com/docs#debounce
      this.debouncedGetAnswer = debounce(this.getAnswer, 500)
    },
    watch: {
      // эта функция запускается при любом изменении вопроса
      question: function () {
        this.answer = 'Ожидаю, когда вы закончите печатать...'
        this.debouncedGetAnswer()
      }
    },
    methods: {
      reverseMessage: function () {
        this.message1 = this.message1.split('').reverse().join('')
      },
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
          return
        }
        this.answer = 'Думаю...'
        const vm = this
        axios.get('https://yesno.wtf/api')
          .then((response) => {
            vm.answer = capitalize(response.data.answer)
          })
          .catch((error) => {
            vm.answer = 'Ошибка! Не могу связаться с API. ' + error
          })
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message1.split('').reverse().join('')
      }
    }
}
</script>

<style scoped>
    .container div {
        margin-bottom: 20px;
        border: 1px solid black;
    }
</style>