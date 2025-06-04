<template>
  <div
    class="relative bg-[#FEFFD8] grid grid-cols-2 p-5 shadow-md shadow-black/7 gap-8 pr-10 min-h-[140px] rounded-md border-t border-[#ECEEB1]/50"
  >
    <div
      class="absolute top-1 right-1 hover:bg-[#ECEEB1] border-2 border-[#ECEEB1] flex gap-0.75 p-2 px-1 rounded-sm peer"
    >
      <svg width="4" height="4">
        <circle cx="2" cy="2" r="2" fill="#9E9600" />
      </svg>
      <svg width="4" height="4">
        <circle cx="2" cy="2" r="2" fill="#9E9600" />
      </svg>
      <svg width="4" height="4">
        <circle cx="2" cy="2" r="2" fill="#9E9600" />
      </svg>
    </div>
    <div class="absolute top-1 right-1"></div>
    <div class="">
      <h2
        class="text-lg font-semibold text-[#483D04] !text-xl font-condensed mb-2"
      >
        {{ $props.title }}
      </h2>
      <div>
        <ul class="list-disc pl-5">
          <li v-for="(action, index) in formattedActions" :key="index">
            <p>{{ action }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-2">
      <p class="text-right font-condensed mb-2">
        Progress text {{ $props.progress }}
      </p>
      <div class="bg-[#ECEEB1] w-full h-[36px] rounded-md overflow-hidden">
        <span
          class="block bg-[#D7CD06] h-full relative"
          :style="'width: ' + progress + '%'"
        >
          <span
            class="absolute top-0 text-[#6A6500] text-2xl font-bold font-condensed inline-block pt-0.75"
            :style="
              progress === 0
                ? 'left: 8px'
                : progress < 85
                ? 'right: -46px'
                : 'right: 6px'
            "
            >{{ $props.progress }}%</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  actions: string;
  progress?: number;
}>();

const formattedActions = computed(() => {
  return props.actions.split("\n").map((action) => action.trim());
});
</script>
