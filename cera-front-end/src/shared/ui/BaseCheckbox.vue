<template>
  <label class="base-checkbox">
    <input type="checkbox" v-model="model" />
    <span><slot /></span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean
})

const emits = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})
</script>

<style scoped>
.base-checkbox {
  display: flex;
  align-items: center;
  font-size: 1rem;
}
.base-checkbox input {
  margin-right: 0.65rem;
  accent-color: #ef4444;
}
</style>
