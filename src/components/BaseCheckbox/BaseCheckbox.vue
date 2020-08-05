<template>
    <section>
        <label for="test">Чекбокс</label>
        <input
                id="test"
                type="checkbox"
                :checked="checked"
                @change="$emit('change', $event.target.checked)"
        >
    </section>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    checked: Boolean
  },
  model: {
    prop: 'checked',
    event: 'change'
  }
}
</script>

<style scoped>

</style>
