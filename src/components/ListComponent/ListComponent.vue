<template>
    <div>
        <h3>Отрисовка списков</h3>
        <h4>Отрисовка массива</h4>
        <ul id="example-1">
            <li v-for="(item, i) in items" :key="item.message">
                {{ item.text }} - {{ i }}
            </li>
        </ul>
        <h4>Отрисовка свойств объекта</h4>
        <ul id="v-for-object">
            <li v-for="(value, name, i) in object" :key="value">
                {{ i }}.{{ name }}: {{ value }}
            </li>
        </ul>
        <h4>Отсортированные данные</h4>
        <ul>
            <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
        </ul>
        <h4> Сет свойств</h4>
        <ul v-for="(set, i) in sets" :key="i">
            <li v-for="n in even(set)" :key="n">{{ n }}</li>
        </ul>
        <div>
            <h4>Диапозоны</h4>
            <span v-for="n in 10" :key="n" >{{ n }} </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    items: Array,
    object: Object,
    evenNumbers: Array,
    sets: Array,
    even: Function
  }
}
</script>

<style scoped>

</style>
