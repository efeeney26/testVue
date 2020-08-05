<template>
    <div class="container">
        <h1>Основы</h1>
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
        <div>
            <h3>Работа с классами</h3>
            <span
                    class="wonder"
                    v-bind:class="classObject"
            >
                Nice!!
            </span>
        </div>
        <SuspendedComponent :awesome=isActive :ok=isActive />
        <ReusableComponent :login-type=loginType :toggle-login-type=toggleLoginType />
        <ListComponent :items=todos :object=object :even-numbers=evenNumbers :sets="sets" :even="even" />
        <ToDoList :todos="todos" />
        <div>
            <h3>Обработчики событий</h3>
            <button v-on:click="greet">Поприветствовать</button>
            <button v-on:click="say('hi')">Скажи hi</button>
            <button v-on:click="say('what')">Скажи what</button>
            <button v-on:click="warn('Форма не может быть отправлена.', $event)">
                Отправить
            </button>
        </div>
        <div>
            <h3>Работа с формами</h3>
            <section>
                <h4>Чекбоксы</h4>
                <input type="checkbox" id="jack" value="Джек" v-model="checkedNames">
                <label for="jack">Джек</label>
                <input type="checkbox" id="john" value="Джон" v-model="checkedNames">
                <label for="john">Джон</label>
                <input type="checkbox" id="mike" value="Майк" v-model="checkedNames">
                <label for="mike">Майк</label>
                <br>
                <span>Отмеченные имена: {{ checkedNames }}</span>
            </section>
            <section>
                <h4>Радио</h4>
                <input type="radio" id="one" value="Один" v-model="picked">
                <label for="one">Один</label>
                <br>
                <input type="radio" id="two" value="Два" v-model="picked">
                <label for="two">Два</label>
                <br>
                <span>Выбрано: {{ picked }}</span>
            </section>
            <section>
                <h4>Выпадашки</h4>
                <select v-model="selected">
                    <option disabled value="">Выберите один из вариантов</option>
                    <option>А</option>
                    <option>Б</option>
                    <option>В</option>
                </select>
                <span>Выбрано: {{ selected }}</span>
            </section>
            <section>
                <h4>Выбор нескольких вариантов из списка (с привязкой к массиву)</h4>
                <select v-model="selectedArr" multiple>
                    <option>А</option>
                    <option>Б</option>
                    <option>В</option>
                </select>
                <br>
                <span>Выбрано: {{ selectedArr }}</span>
            </section>
            <section>
                <h4>Динамическое отображение списка опций с помощью v-for</h4>
                <select v-model="selectedDyn">
                    <option v-for="todo in todos" v-bind:value="todo.text" :key="todo.text">
                        {{ todo.text }}
                    </option>
                </select>
                <span>Выбрано: {{ selectedDyn }}</span>
            </section>
        </div>
        <div>
            <h3>Компоненты</h3>
            <ButtonCounter />
            <Posts />
            <Alert>
                Произошло что-то плохое
            </Alert>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import { capitalize, debounce } from 'lodash'

  import SuspendedComponent from '@/components/SuspendedComponent/SuspendedComponent'
  import ReusableComponent from "@/components/ReusableComponent/ReusableComponent"
  import ListComponent from "@/components/ListComponent/ListComponent"
  import ToDoList from "@/components/TodoList/ToDoList";
  import ButtonCounter from "@/components/ButtonCounter/ButtonCounter";
  import Posts from "@/components/Posts/Posts";
  import Alert from "@/components/Alert/Alert";

  export default {
    name: "BasicComponent",
    components: {Alert, Posts, ButtonCounter, ToDoList, ListComponent, ReusableComponent, SuspendedComponent},
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
        answer: 'Пока вы не зададите вопрос, я не могу ответить!',
        isActive: true,
        loginType: 'username',
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        },
        numbers: [ 1, 2, 3, 4, 5 ],
        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],
        checkedNames: [],
        picked: [],
        selected: '',
        selectedArr: [],
        selectedDyn: []
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
      },
      toggleLoginType: function () {
        if (this.loginType === 'username') {
          this.loginType = 'email'
        }else {
          this.loginType = 'username'
        }
      },
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      greet(e) {
        alert('Привет, ' + this.loginType + '!')
        if (e) {
          alert(e.target.tagName)
        }
      },
      say(mes) {
        alert(mes)
      },
      warn: function (message, event) {
        // теперь у нас есть доступ к нативному событию
        if (event) {
          event.preventDefault()
        }
        alert(message)
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message1.split('').reverse().join('')
      },
      classObject: function () {
        return {
          active: this.isActive
        }
      },
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
}
</script>

<style scoped>
    .container div {
        margin-bottom: 20px;
        border: 1px solid black;
    }
    .active {
        color: red;
    }
    .wonder {
        background-color: #42b983;
    }
</style>