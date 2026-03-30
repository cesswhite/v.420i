<template>
  <div class="relative w-full min-h-dvh h-auto bg-dark-50 dark:bg-dark-950">
    <header class="absolute top-0 right-0 left-0 flex justify-end gap-2 p-3">
      <ULocaleSelect
        class="w-44"
        :locales="nuxtUiAppLocales"
        :model-value="currentUiLocaleCode"
        size="sm"
        variant="ghost"
        @update:model-value="selectUiLocale"
      />
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { currentUiLocaleCode, selectUiLocale, nuxtUiAppLocales } = useNuxtUiI18n()
</script>