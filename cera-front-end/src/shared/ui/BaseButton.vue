<template>
  <button
    :type="type"
    :disabled="disabled"
    class="base-btn"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'button' },
  disabled: Boolean
})
</script>

<style scoped>
.base-btn {
  width: 100%;
  background: #ef4444;
  color: #fff;
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1.125rem;
}
.base-btn:hover {
  background: #b91c1c;
}
.base-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
