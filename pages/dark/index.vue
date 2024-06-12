<script setup lang="ts">
//
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button unstyled class="rounded-4 bg-red px8 py4" @click="toggleDark()">
    dark
  </Button>
  <section
    class="max-w-3xl flex flex-col gap-8 rounded-xl bg-white p-10 dark:bg-purple-700/30"
  >
    <h1 class="font-mono font-sans">
      Uno CSS + PrimeVue
    </h1>
  </section>
</template>

<style scoped lang="scss">
</style>
