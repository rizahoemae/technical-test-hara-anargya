<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  isShow: Boolean,
  data: Object,
});
const emit = defineEmits(['close']);
</script>
<template>
  <div
    v-if="isShow"
    class="overflow-y-auto overflow-x-hidden z-99 fixed top-0 right-0 left-0 justify-center flex bg-black/20 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          class="flex items-center justify-emd p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <button
            @click="emit('close', !isShow)"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            :src="data.profile_picture"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {{ data.first_name }} {{ data.last_name }}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400"
            >{{ data.job }} at {{ data.country }}</span
          >
          <div class="flex mt-4 md:mt-6">
            <a
              :href="`tel:${data.phone}`"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Call</a
            >
            <a
              :href="`mailto:${data.email}`"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              >Email</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
