<script setup>
import { ref } from 'vue';

const menus = ref([
  { title: 'Dashboard', icon: 'home-smile-linear', href: '/' },
  { title: 'Overview', icon: 'home-smile-linear', href: '/overview' },
]);
</script>
<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 drop-shadow-sm"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
      <h1 class="text-[#152544] font-extrabold text-3xl mb-2">heylink.</h1>
      <ul class="space-y-2 font-medium">
        <li v-for="menu in menus">
          <router-link
            :to="menu.href"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="
              $route.path == menu.href ? 'bg-gray-100 dark:bg-gray-700' : ''
            "
          >
            <div>
              <Icon :icon="`solar:${menu.icon}`" class="w-6 h-6" />
            </div>
            <span class="ms-3">{{ menu.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
