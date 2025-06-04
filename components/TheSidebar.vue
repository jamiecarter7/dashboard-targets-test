<template>
  <div
    class="fixed top-0 right-0 h-full w-[450px] bg-white drop-shadow-md text-black p-[20px] py-[16px] pb-[64px] text-[18px] z-10 overflow-y-scroll duration-200 ease-in-out"
    :class="{
      'translate-x-0': props.show,
      'translate-x-full': !props.show,
    }"
  >
    <div class="flex justify-between items-center just">
      <div class="relative">
        <button
          class="flex items-center after:absolute after:top-0 after:left-0 before:bg-white hover:after:bg-[#efefef] after:w-full after:h-full after:-z-10 after:scale-x-125 after:scale-y-110 after:rounded-md"
          @click.prevent="closeSidebar()"
        >
          <UIcon name="i-codex-cross" class="size-10 text-3xl -ml-[8px]" />
          Close
        </button>
      </div>
      <button
        class="text-black/60 text-[16px] hover:underline decoration-1 underline-offset-4"
        @click.prevent="clearForm()"
      >
        Clear form
      </button>
    </div>
    <h2 class="!font-bold py-[16px] inline-block">Apr 1 - jun 30 (Q2 2025)</h2>
    <div class="flex flex-col gap-[20px]">
      <!-- step1 -->
      <div
        class="bg-[#EFF8FF] !border !border-[#D5E6FF] py-4 px-[20px] rounded-md relative"
      >
        <h3 class="!font-semibold font-condensed inline-block">
          Which indicator to improve?
        </h3>
        <button
          v-if="indicator.length !== 0"
          class="text-[#007EFF] !text-[16px] absolute top-[16px] right-[20px] hover:underline decoration-1 underline-offset-4 z-10"
          @click.prevent="
            indicator = '';
            goal = null;
            goalValue = null;
          "
        >
          Edit
        </button>
        <ul
          v-if="indicator === ''"
          class="*:leading-[38px] !mt-px text-[#007EFF] text-[17px] *:*:hover:underline decoration-1 underline-offset-4"
        >
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'overdue'"
            >
              Contact overdue patients
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'drugstock'"
            >
              Increase drug stock
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'statins'"
            >
              Prescribe statins
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'fudging'"
            >
              Reduce BP fudging
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'refer'"
            >
              Refer patients to community clinics
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'register'"
            >
              Register patients
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'titrate'"
            >
              Titrate medication for uncontrolled patients
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'protocol'"
            >
              Treat patients to drug protocol
            </button>
          </li>
          <li>
            <button
              class="hover:underline decoration-1 underline-offset-4"
              @click.prevent="indicator = 'custom'"
            >
              Add a custom indicator
            </button>
          </li>
        </ul>

        <p v-else class="text-[#007EFF] text-[17px] pt-2 pb-0">
          Contact overdue patients
        </p>
      </div>

      <!--  -->
      <!--  -->
      <!-- STEP2 STEP2 STEP2 STEP2 STEP2 STEP2 STEP2 -->
      <!--  -->
      <div
        v-if="indicator.length > 0"
        class="bg-[#EFF8FF] !border !border-[#D5E6FF] py-4 px-[20px] pb-5 rounded-md relative"
      >
        <h3 class="!font-semibold font-condensed inline-block">
          What is the goal?
        </h3>
        <button
          v-if="goalValue !== null"
          class="text-[#007EFF] !text-[16px] absolute top-[16px] right-[20px] hover:underline decoration-1 underline-offset-4 z-10 duration-200 transform-"
          @click.prevent="goalValue = null"
        >
          Edit
        </button>
        <div
          v-if="goalValue === null && step2designs === 'original'"
          class="grid grid-cols-2 gap-4"
        >
          <div>
            <h4 class="text-sm font-bold mt-2 mb-3">Activity in Q1 2025</h4>
            <div
              class="bg-[#D9E6F6] flex p-0.5 rounded-md w-16 items-center h-[38px] mb-2"
            >
              <p
                class="text-[#323232] bg-[#D9E6F6] text-center w-full font-semibold"
              >
                6%
              </p>
            </div>
            <p class="text-sm">Called 600 of 10,000 overdue patients</p>
          </div>
          <div>
            <h4 class="text-sm font-bold mt-2 mb-3">Goal for Q2 2025</h4>
            <label
              class="border border-[#CAD0D7] bg-white flex p-0.5 rounded-md w-28 mb-2"
            >
              <input
                v-model.number="goal"
                type="text"
                class="block text-right p-0.5 px-2 py-1 text-base w-[calc(100%-30px)]"
                min="0"
                max="100"
              />
              <div
                class="bg-[#F0F0F0] text-black/50 flex items-center justify-center w-8 rounded-xs flex-none"
              >
                %
              </div>
            </label>
            <p class="text-sm">
              Call
              <span class="">
                <span
                  class="relative z-10 after:absolute after:top-0 after:left-1/2 after:w-[calc(100%+4px)] after:rounded-sm after:-translate-x-1/2 after:h-full after:bg-yellow-300/0 after:-z-10 after:duration-1000 after:ease-out"
                  :class="{
                    'after:bg-yellow-300/100': recentUpdate,
                  }"
                >
                  {{
                    calcGoalValue.toLocaleString("en", { useGrouping: true })
                  }}
                </span>
              </span>
              overdue patients by Jun-30
            </p>
          </div>
        </div>

        <!-- ALT1 -->
        <div
          v-if="goalValue === null && step2designs === 'step2-alt'"
          class="grid gap-4"
        >
          <div>
            <h4 class="text-sm font-bold mt-2 mb-3">Activity in Q1 2025</h4>

            <div class="flex gap-4 items-center">
              <div
                class="bg-[#D9E6F6] flex p-0.5 rounded-md w-16 items-center h-[38px]"
              >
                <p
                  class="text-[#323232] bg-[#D9E6F6] text-center w-full font-semibold"
                >
                  6%
                </p>
              </div>
              <p class="text-sm">Called 600 of 10,000 overdue patients</p>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-bold mt-2 mb-3">Goal for Q2 2025</h4>
            <label
              class="border border-[#CAD0D7] bg-white flex p-0.5 rounded-md w-28 mb-2"
            >
              <input
                v-model.number="goal"
                type="text"
                class="block text-right p-0.5 px-2 py-1 text-base w-[calc(100%-30px)]"
                min="0"
                max="100"
                placeholder="Goal"
              />
              <div
                class="bg-[#F0F0F0] text-black/50 flex items-center justify-center w-8 rounded-xs flex-none"
              >
                %
              </div>
            </label>
            <p class="text-[#007EFF] text-[17px] pt-1">
              Call
              <span class="">
                <span
                  class="relative z-10 after:absolute after:top-0 after:left-1/2 after:w-[calc(100%+4px)] after:rounded-sm after:-translate-x-1/2 after:h-full after:bg-yellow-300/0 after:-z-10 after:duration-1000 after:ease-out"
                  :class="{
                    'after:bg-yellow-300/100': recentUpdate,
                  }"
                >
                  {{
                    calcGoalValue.toLocaleString("en", { useGrouping: true })
                  }}
                </span>
              </span>
              overdue patients by Jun-30
            </p>
            <!-- <p class="text-base">
              Call
              {{ calcGoalValue.toLocaleString("en", { useGrouping: true }) }}
              overdue patients by Jun-30
            </p> -->
          </div>
        </div>
        <button
          v-if="goalValue === null"
          class="bg-[#C4E2FF] hover:bg-[#B2D9FF] p-2 w-full text-center text-base text-[#007EFF] rounded-md mt-4"
          @click.prevent="
            goal !== null && goal > 0 ? (goalValue = calcGoalValue) : null
          "
        >
          Next
        </button>
        <p v-else class="text-[#007EFF] text-[17px] pt-2 pb-0">
          Call {{ goalValue }} overdue patients by Jun-30
        </p>

        <!-- STEP3 STEP3 STEP3 STEP3 STEP3 STEP3 STEP3 STEP3 -->
        <!-- STEP3 STEP3 STEP3 STEP3 STEP3 STEP3 STEP3 STEP3 -->
      </div>
      <div
        v-if="goalValue !== null"
        class="bg-[#EFF8FF] !border !border-[#D5E6FF] py-4 px-[20px] rounded-md relative"
      >
        <h3 class="!font-semibold font-condensed inline-block">
          What action should be taken?
        </h3>
        <div>
          <textarea
            id=""
            v-model="actionsText"
            name=""
            cols="30"
            rows="4"
            class="block mt-3 p-4 py-3 text-base bg-white border border-[#CAD0D7] bg-white flex p-0.5 rounded-md w-28 mb-2 w-full min-height-32"
            placeholder="Write actions or select from list below..."
          ></textarea>
        </div>
        <p class="text-base mt-3">Common actions:</p>
        <ul
          class="text-base *:*:hover:underline list-disc ml-5 text-[#007EFF] *:*:py-1"
        >
          <li>
            <p
              @click="
                actionsText +=
                  actionsText.length > 0
                    ? `&#10;` + 'Allocate staff time for calling patients'
                    : 'Allocate staff time for calling patients'
              "
            >
              Allocate staff time for calling patients
            </p>
          </li>
          <li>
            <p
              @click="
                actionsText +=
                  actionsText.length > 0
                    ? `&#10;` +
                      'Train staff on SOP for calling overdue patients'
                    : 'Train staff on SOP for calling overdue patients'
              "
            >
              Train staff on SOP for calling overdue patients
            </p>
          </li>
          <li>
            <p
              @click="
                actionsText +=
                  actionsText.length > 0
                    ? `&#10;` + 'Call X patients per day'
                    : 'Call X patients per day'
              "
            >
              Call X patients per day
            </p>
          </li>
          <li>
            <p
              @click="
                actionsText +=
                  actionsText.length > 0
                    ? `&#10;` + 'Record call outcomes in Simple'
                    : 'Record call outcomes in Simple'
              "
            >
              Record call outcomes in Simple
            </p>
          </li>
        </ul>
      </div>
      <div>
        <!-- <button>Cancel</button> -->
        <button
          v-if="goalValue !== null"
          class="bg-[#0275EB] text-white p-2.5 w-full rounded-md"
          @click="
            closeSidebar();
            clearFormDelay();
          "
        >
          Create
        </button>
      </div>
      <!-- {{ indicator }}
      {{ goal }}
      {{ calcGoalValue > 0 ? calcGoalValue : null }}
      {{ goalValue }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps<{
  show: boolean | null;
  step2designs: string;
}>();

const indicator = ref<string>("");
const goal = ref<number | null>(null);
const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeSidebar = () => {
  emit("close");
};

const denominator = computed<number | null>(() =>
  indicator.value === "overdue" ? 10000 : null
);
const calcGoalValue = computed(() => {
  if (denominator.value === null) return 0;
  if (goal.value === null) return 0;
  return Math.round((goal.value / 100) * denominator.value);
});

const goalValue = ref<number | null>(null);

const actionsText = ref<string>("");

const recentUpdate = ref(false);

watch(goal, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    recentUpdate.value = true;
    if (debounceTimeout.value) {
      clearTimeout(debounceTimeout.value);
    }
    debounceTimeout.value = setTimeout(() => {
      recentUpdate.value = false;
    }, 750);
  }
});

const debounceTimeout = ref<NodeJS.Timeout | null>(null);

function clearForm() {
  indicator.value = "";
  goal.value = null;
  goalValue.value = null;
  actionsText.value = "";
}

function clearFormDelay() {
  setTimeout(() => {
    clearForm();
  }, 200);
}
</script>
