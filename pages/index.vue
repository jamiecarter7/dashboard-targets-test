<template>
  <div>
    <button @click="toggleSidebar">Open sidebar</button>
    <TheSidebar :show="isSidebarOpen" @close="handleClose" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

function handleClose() {
  isSidebarOpen.value = false;
}
</script>
