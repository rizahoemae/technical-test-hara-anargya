<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  data: Object,
});
</script>
<template>
  <div
    class="rounded-lg bg-white border-gray-200 dark:bg-gray-800 p-6 h-40 relative"
  >
    <div class="flex justify-between items-center">
      <p>{{ data.status }}</p>
      <div class="p-2 bg-gray-300 text-gray-700 rounded-lg">
        <Icon icon="solar:square-transfer-horizontal-broken" />
      </div>
    </div>
    <h1 class="font-semibold text-[20px]">{{ data.amount }}</h1>
    <div
      class="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gray-300 dark:bg-gray-900 px-6 h-[47px] flex items-center justify-between"
    >
      <div
        class="flex items-center"
        :class="data.increase ? 'text-[#4CBF93]' : 'text-[#EE7C85]'"
      >
        <Icon
          :icon="data.increase ? 'ph:arrow-up-bold' : 'ph:arrow-down-bold'"
        />
        <p>2,15%</p>
      </div>
      <a href="">View More</a>
    </div>
  </div>
</template>
