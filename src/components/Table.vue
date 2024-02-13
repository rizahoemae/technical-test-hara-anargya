<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  headings: Array,
  data: Array,
});
const emit = defineEmits(['select', 'view']);

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
</script>
<template>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" v-for="heading in headings" class="px-6 py-3">
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in props.data"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ data.id }}
          </th>
          <td class="px-6 py-4">{{ data.first_name }} {{ data.last_name }}</td>
          <td class="px-6 py-4">{{ formatDate(data.date_of_birth) }}</td>
          <td class="px-6 py-4">{{ data.email }}</td>
          <td class="px-6 py-4">{{ data.job }}</td>
          <td class="px-6 py-4">{{ data.country }}</td>
          <td class="px-6 py-4 space-x-2">
            <button
              @click="emit('select', data.id)"
              class="border-gray-200 px-4 py-1"
            >
              Select
            </button>
            <button
              @click="emit('view', data)"
              class="border-gray-200 px-4 py-1"
            >
              View Detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
