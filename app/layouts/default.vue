<template>
  <div class="relative w-full min-h-dvh h-auto bg-dark-50 dark:bg-dark-950">
    <header class="absolute top-0 right-0 left-0 flex justify-end gap-2 p-3">
      <NuxtLink
        v-for="loc in availableLocales"
        :key="loc.code"
        :to="switchLocalePath(loc.code)"
        class="text-sm text-dark-700 dark:text-dark-300 hover:underline"
      >
        {{ loc.name }}
      </NuxtLink>
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
)
</script>