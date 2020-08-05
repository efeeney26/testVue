<template>
    <div class="container">
        <h1>Продвинутые компоненты</h1>
        <div>
            <h3>Настройка v-model у компонента</h3>
            <BaseCheckbox v-model="lovingVue" />
            <span>{{ `Значение -  ${lovingVue}` }}</span>
        </div>
        <div>
            <h3>Подписка на нативные события в компонентах</h3>
            <Input label="Label" value=""/>
        </div>
    </div>
</template>

<script>
import BaseCheckbox from '@/components/BaseCheckbox/BaseCheckbox'
import Input from '@/components/Input/Input'

export default {
  name: 'AdvancedComponent',
  components: { BaseCheckbox, Input },
  data () {
    return {
      lovingVue: true
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
