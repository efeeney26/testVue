<template>
    <div class="alert-box">
        <h4>Слоты(аналог children)</h4>
        <strong>Ошибка!</strong>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Alert'
}
</script>

<style scoped>
    .alert-box {
        padding: 20px;
        background-color: red;
    }
</style>
