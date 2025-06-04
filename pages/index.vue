<template>
  <div class="m-auto max-w-[1400px] px-8">
    <div class="p-10 flex flex-col gap-8">
      <ul class="grid gap-5">
        <li v-for="(goal, index) in goalsStore.goals" v-bind:key="index">
          <ProgressItem
            :key="index"
            :title="goal.title"
            :actions="goal.actions"
            :progress="goal.progress"
          />
        </li>
      </ul>
      <div class="gap-4 flex">
        <button
          class="bg-[#C4E2FF] hover:bg-[#B2D9FF] p-2 w-full text-center text-base text-[#007EFF] rounded-md mt-4 max-w-56"
          @click="toggleSidebar"
        >
          + Add an action
        </button>
        <button
          v-if="goalsStore.goals.length > 0"
          class="bg-[#E2E48D] hover:bg-[#E2E48D] p-2 w-full text-center text-base text-[#6A6500] rounded-md mt-4 max-w-56"
          @click="goalsStore.randomiseProgress()"
        >
          Progress quarter
        </button>
        <button
          v-if="goalsStore.goals.length > 0"
          class="bg-yellow-400/50 hover:bg-yellow-400/75 p-2 w-full text-center text-base text-abmer-800 rounded-md mt-4 max-w-56"
          @click="goalsStore.resetProgress()"
        >
          Reset quarter
        </button>
      </div>
      <div>
        <p>Step 2 design variations</p>
        <select
          v-model="selectedStep"
          class="mt-1 p-2 border rounded-md max-w-56 border-0 bg-[#ddd]"
        >
          <option value="step2-alt" selected>Step 2 alternative</option>
          <option value="original">Original</option>
        </select>
      </div>
      <TheSidebar
        :edit-mode="editMode"
        :show="isSidebarOpen"
        :step2designs="selectedStep"
        @close="handleClose"
      />
      {{ goalsStore.goals }}
    </div>
  </div>
</template>

<script setup>
const goalsStore = useGoalsStore();
const selectedStep = ref("step2-alt");
const editMode = ref(false);
const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

function handleClose() {
  isSidebarOpen.value = false;
}
</script>
