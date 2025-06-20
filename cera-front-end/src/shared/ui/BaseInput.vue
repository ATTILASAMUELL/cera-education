<template>
  <input
    v-bind="$attrs"
    :type="type"
    :placeholder="placeholder"
    v-model="model"
    class="base-input"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: [String, Number, Boolean],
  type: { type: String, default: 'text' },
  placeholder: String
})

const emits = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: value => emits('update:modelValue', value)
})
</script>

<style scoped>
.base-input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 1rem 1.4rem;
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
  outline: none;
}
.base-input:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.3);
}
</style>
