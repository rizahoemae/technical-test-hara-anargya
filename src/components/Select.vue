<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  options: Array,
  modelValue: String,
});
const emits = defineEmits(['update:modelValue']);
const updateValue = (val) => {
  emits('update:modelValue', val);
};
</script>
<template>
  <form class="">
    <select
      :value="modelValue"
      @input="(e) => updateValue(e.target.value)"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </form>
</template>
