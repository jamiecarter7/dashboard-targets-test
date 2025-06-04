<template>
  <div
    class="relative bg-[#FEFFD8] grid grid-cols-2 p-5 shadow-md shadow-black/7 gap-8 pr-10 min-h-[140px] rounded-md border-t border-[#ECEEB1]/50"
  >
    <button
      class="absolute top-1 right-1 border-2 border-[#ECEEB1] flex gap-0.75 p-2 px-1 rounded-sm"
      :class="{ 'focus:bg-[#ECEEB1]': show }"
      @click="show = !show"
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
    </button>
    <div
      v-if="show"
      :id="'menu-' + keyIndex"
      class="absolute top-7 shadow-md shadow-black/8 right-1 bg-white rounded-sm overflow-hidden py-1"
    >
      <ul class="flex flex-col w-20">
        <li>
          <button
            class="hover:bg-[#BED4FA60] text-sm w-full text-left px-3 py-2 duration-200 easy-out"
            @click="test()"
          >
            Edit
          </button>
        </li>
        <li><hr class="text-black/10 mx-1.5" /></li>
        <li>
          <button
            class="hover:bg-[#FABEBE75] hover:text-red-700 text-sm w-full text-left px-3 py-2 duration-200 easy-out"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
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
  keyIndex: number;
  title: string;
  actions: string;
  progress?: number;
}>();

const show = ref(false);

const formattedActions = computed(() => {
  return props.actions.split("\n").map((action) => action.trim());
});

function test() {
  console.log("Edit button clicked");
}

function handleClickOutside(event: MouseEvent) {
  const modal = document.getElementById("menu-" + props.keyIndex);
  console.log(show.value, modal, event.target);

  if (modal && !modal.contains(event.target as Node) && show.value) {
    show.value = false;
    console.log("trigerred");
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
