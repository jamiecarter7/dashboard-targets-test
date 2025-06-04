<template>
  <div class="font-display">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout />
    <UApp>
      <NuxtPage />
    </UApp>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "body",
  },
});
</script>

<style global>
.body {
  background: #f0f2f5;
}
</style>
