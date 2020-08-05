<template>
    <div class="keycomp">
        <h3>Управление повторным использованием элементов при помощи key</h3>
        <span v-if="loginType === 'username'">
                <label>Имя пользователя</label>
                <input placeholder="Введите имя пользователя" key="username-input">
            </span>
        <span v-else>
                <label>Email</label>
                <input placeholder="Введите адрес email" key="email-input">
            </span>
        <span>
                <button @click="toggleLoginType">Переключить тип логина</button>
            </span>
    </div>
</template>

<script>
export default {
  name: 'ReusableComponent',
  props: {
    loginType: String,
    toggleLoginType: Function
  }
}
</script>

<style scoped>
    .keycomp {
        display: flex;
        flex-direction: column;
    }
</style>
