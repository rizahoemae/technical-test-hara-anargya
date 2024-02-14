<script setup>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import Table from '../components/Table.vue';
import Modal from '../components/Modal.vue';
import Select from '../components/Select.vue';
import province from '../assets/js/province';
import { findByIdProv, sortProv } from '../assets/js/province';
import { findByProv } from '../assets/js/city';
import { ref, onMounted } from 'vue';
const provinces = province.map((item) => {
  return {
    value: item.id,
    label: item.name,
  };
});
const prov = ref(null);
const sort = ref('asc');
const sortingOptions = () => {
  const matches = {
    asc: 'desc',
    desc: 'asc',
  };
  sort.value = matches[sort.value];
  options.value = sortProv(sort).map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
};

const datas = ref([]);
const options = ref([]);
const updateTable = (val) => {
  prov.value = val;
  datas.value = findByProv(val);
};
onMounted(() => {
  datas.value = findByProv(prov);
  options.value = provinces;
});
const headings = ['ID', 'Nama Provinsi', 'Nama Kota'];
</script>
<template>
  <div class="text-center flex justify-center flex-col items-center">
    <label>Pilih Provinsi</label>
    <div class="flex space-x-2 items-center">
      <Select
        :options="options"
        v-model="prov"
        @update:model-value="updateTable"
      />
      <button
        @click="sortingOptions"
        class="p-2 bg-white dark:bg-gray-800 dark:text-gray-400"
      >
        <Icon icon="square-transfer-vertical-broken" class="w-6 h-6" />
      </button>
    </div>
  </div>
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
          v-if="datas.length > 0"
          v-for="data in datas"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ data.id }}
          </th>
          <td class="px-6 py-4">{{ findByIdProv(data.provinsi_id) }}</td>
          <td class="px-6 py-4">{{ data.name }}</td>
        </tr>
        <tr
          v-else
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td colspan="3" class="px-6 text-center py-4">
            {{
              prov ? 'Tidak ada data' : 'Harap isi opsi provinsi terlebih dulu'
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
