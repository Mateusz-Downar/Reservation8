<script setup lang="ts">
const modelValue = defineModel<string>()

defineProps<{
  label: string
  type?: string
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
}>()
</script>

<template>
  <div class="w-full">
    <label class="block mb-2 font-semibold text-slate-700">{{ label }}</label>
    <input 
      v-model="modelValue" 
      :type="type || 'text'" 
      :placeholder="placeholder" 
      class="input input-bordered w-full transition-colors"
      :class="{ 'input-error border-red-500': hasError }"
    />
    <span v-if="hasError" class="text-red-500 text-sm mt-1">
      {{ errorMessage }}
    </span>
  </div>
</template>