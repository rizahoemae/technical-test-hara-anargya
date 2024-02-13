<script setup>
import Card from '../components/Card.vue';
import Table from '../components/Table.vue';
import Modal from '../components/Modal.vue';

import { ref, onMounted } from 'vue';

const datas = ref([]);
const show = ref(false);

const paymentStatus = [
  {
    status: 'Pending',
    amount: '2.480,30',
    increase: true,
    persentation: 2.15,
  },
  {
    status: 'Paid',
    amount: '84.310',
    increase: false,
    persentation: 1.1,
  },
  {
    status: 'Rejected',
    amount: '12.155',
    increase: true,
    persentation: 2.15,
  },
];
const fetchData = async () => {
  try {
    const response = await fetch(
      'https://api.slingacademy.com/v1/sample-data/users',
      {
        method: 'GET',
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    datas.value = data.users;
  } catch (err) {}
};

const selectedData = ref(null);
const openDetails = (data) => {
  show.value = !show.value;

  selectedData.value = data;
};
onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="grid grid-cols-3 gap-6">
    <Card v-for="data in paymentStatus" :data="data" />
  </div>
  <div class="bg-white rounded-lg pt-4 text-[17px] font-semibold">
    <h1 class="m-6">User List</h1>
    <Table
      :headings="[
        'ID',
        'User',
        'Date Of Birth',
        'Email',
        'Job',
        'Country',
        'Action',
      ]"
      :data="datas"
      @view="openDetails"
    />
  </div>
  <Modal :is-show="show" @close="(val) => (show = val)" :data="selectedData" />
</template>
