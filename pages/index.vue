<template>
  <div class="p-10 flex flex-col gap-8">
    <button
      class="bg-[#C4E2FF] hover:bg-[#B2D9FF] p-2 w-full text-center text-base text-[#007EFF] rounded-md mt-4 max-w-56"
      @click="toggleSidebar"
    >
      + Add an action
    </button>
    <div>
      <p>Step 2 design variations</p>
      <select
        v-model="selectedStep"
        class="mt-1 p-2 border rounded-md max-w-56"
      >
        <option value="step2-alt" selected>Step 2 alternative</option>
        <option value="original">Original</option>
      </select>
    </div>
    <TheSidebar
      :show="isSidebarOpen"
      @close="handleClose"
      :step2designs="selectedStep"
    />
  </div>
</template>

<script setup>
const selectedStep = ref("step2-alt");

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

function handleClose() {
  isSidebarOpen.value = false;
}
</script>
