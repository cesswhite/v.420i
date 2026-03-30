<template>
  <UApp :locale="nuxtUiLocale" :toaster="toaster">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import colors from 'tailwindcss/colors'
const appConfig = useAppConfig();
const colorMode = useColorMode()

const { nuxtUiLocale } = useNuxtUiI18n()

// See documentation here: https://ui.nuxt.com/docs/components/toast#stacked-toasts
const toaster = { expand: false }

// See documentation here: https://x.com/Atinux/status/1912803617566081396
useFaviconFromTheme()


const color = computed(() => colorMode.value === 'dark' ? (colors as any)[appConfig.ui.colors.neutral][900] : 'white')

const i18nHead = useLocaleHead({ seo: true })

// Document lang/dir follow Nuxt UI locale (same as UApp); hreflang/meta still from @nuxtjs/i18n.
useHead(() => ({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    ...(i18nHead.value.meta ?? [])
  ],
  htmlAttrs: {
    lang: nuxtUiLocale.value.code,
    dir: nuxtUiLocale.value.dir
  },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    ...(i18nHead.value.link ?? [])
  ]
}))
</script>
