import { defineStore } from "pinia";

type Goal = {
  title: string;
  actions: string;
  denominator: number;
  progress: number;
};

export const useGoalsStore = defineStore("goal", () => {
  const goals = ref([] as Goal[]);

  function addGoal(
    title: string,
    actions: string,
    denominator: number,
    progress: number = 0
  ) {
    goals.value.push({ title, actions, denominator, progress });
  }

  function randomiseProgress() {
    console.log("active");

    goals.value.forEach((goal) => {
      goal.progress = Math.floor(Math.random() * 101);
    });
  }

  function resetProgress() {
    goals.value.forEach((goal) => {
      goal.progress = 0;
    });
  }

  function deleteGoal(index: number) {
    if (index >= 0 && index < goals.value.length) {
      console.log(`Deleting goal: ${goals.value[index].title}`);
      goals.value.splice(index, 1);
    } else {
      console.error("Invalid index for goal deletion");
    }
  }

  return { goals, addGoal, randomiseProgress, resetProgress, deleteGoal };
});
