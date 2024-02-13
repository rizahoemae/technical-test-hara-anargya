<script setup>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
</script>
<template>
  <Sidebar />
  <Header />
  <div class="p-4 sm:ml-64 space-y-6">
    <router-view></router-view>
  </div>
</template>
