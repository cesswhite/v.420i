import * as uiLocales from '@nuxt/ui/locale'

/** Maps @nuxtjs/i18n locale codes to Nuxt UI locale bundles (pt → pt_br for pt-BR). */
const i18nCodeToUiKey: Record<string, keyof typeof uiLocales> = {
  en: 'en',
  es: 'es',
  pt: 'pt_br'
}

/** Maps Nuxt UI locale `code` back to @nuxtjs/i18n locale codes. */
const uiCodeToI18nCode: Record<string, string> = {
  en: 'en',
  es: 'es',
  'pt-BR': 'pt'
}

/** Locales exposed in the UI switcher (same order as i18n config). */
export const nuxtUiAppLocales = [uiLocales.en, uiLocales.es, uiLocales.pt_br]

type AppI18nCode = 'en' | 'es' | 'pt'

export function useNuxtUiI18n() {
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const nuxtUiLocale = computed(() => {
    const key = i18nCodeToUiKey[locale.value] ?? 'en'
    return uiLocales[key]
  })

  const currentUiLocaleCode = computed(() => nuxtUiLocale.value.code)

  async function selectUiLocale(code: string) {
    const i18nCode = uiCodeToI18nCode[code]
    if (!i18nCode) return
    await navigateTo(switchLocalePath(i18nCode as AppI18nCode))
  }

  return {
    nuxtUiLocale,
    currentUiLocaleCode,
    selectUiLocale,
    nuxtUiAppLocales
  }
}
