![v.420i_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# v.420i: Nuxt 4 Starter with i18n

Minimal, fast Nuxt 4 boilerplate with **internationalization (i18n)** built in.  
**Read this in other languages:** [Español (README.es.md)](README.es.md) · [Português (README.pt.md)](README.pt.md) The app supports **three languages** (English, Spanish, Portuguese) using [@nuxtjs/i18n](https://i18n.nuxtjs.org/). Uses the latest Nuxt releases and stays production-ready whether you keep the project small or scale it.

## Tech Stack

- **[Nuxt 4](https://nuxt.com/)** – Full-stack Vue framework with SSR, file-based routing, and auto-imports
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** – Internationalization: locale routing, lazy-loaded messages, SEO by locale
- **[Nuxt UI](https://ui.nuxt.com/)** – Accessible UI component library with Tailwind-based theming
- **[Nuxt Image](https://image.nuxt.com/)** – Image optimization with built-in resizer and multiple providers
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** – Vue state store with SSR support
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS

## Languages (i18n)

This repo is **i18n-first**. It ships with three locales:

| Code | Language   | URL prefix   |
|------|------------|--------------|
| `en` | English    | (default, no prefix) |
| `es` | Spanish    | `/es`        |
| `pt` | Portuguese | `/pt`        |

- **Module:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — Vue I18n integration for Nuxt, locale-aware routes, and SEO.
- **Translations:** `i18n/locales/` — one JSON file per locale (`en.json`, `es.json`, `pt.json`) with the same keys.
- **Routing:** Default locale has no URL prefix; other locales are prefixed (e.g. `/es/about`, `/pt/about`). First visit can redirect to the browser language; the chosen locale is stored in a cookie.
- **Links:** Use `localePath('/path')` to keep the current locale; use `switchLocalePath('es')` (or another code) for language switcher links.
- **SEO:** The layout uses `useLocaleHead` for document language and hreflang tags; page titles and descriptions use translation keys.

## Features

- **Nuxt 4** – Current major with improved performance and DX
- **i18n** – Three locales (en, es, pt), locale routing, lang switcher, SEO by locale
- **Pinia** – Centralized state with SSR hydration
- **Tailwind CSS** – Utility-first styling and design tokens
- **Nuxt Image** – Resizing, modern formats, and provider abstraction
- **Dark mode** – Theme toggle (light/dark)
- **Color themes** – Configurable primary palette
- **Responsive** – Mobile-first layout
- **SEO** – Meta tags and head configuration per locale

## Quick Start

**Option 1 – CLI (recommended)**  
Scaffold a new project without cloning. Requires [Bun](https://bun.sh/) or npm/yarn with `npx`/`yarn dlx`:

```sh
bunx v420
```

This runs the v420 CLI (base template) to generate a project in the current directory (or a target path). No git clone or manual dependency install needed.

**Option 2 – Clone and run locally**

### Prerequisites

- **Node.js** ≥ 18.x
- **Bun** (recommended) or npm/yarn

### Installation

```sh
git clone https://github.com/{username}/v.420i.git
cd v.420i
bun i
```

### Development

```sh
bun dev
```

Dev server runs at `http://localhost:3000` with HMR. Open `/`, `/es`, or `/pt` to see the app in each locale.

### Production build

```sh
bun build
```

Output is in `.output`. Serve with `bun run preview` or deploy the generated files to your host.

## Project structure

```
app/
├── components/     # Vue components (auto-imported)
├── layouts/        # Layout wrappers
├── pages/          # File-based routes (Vue Router)
├── stores/         # Pinia stores
└── assets/css/     # Global styles
i18n/
└── locales/        # Translation files (en.json, es.json, pt.json)
```

## Main components

- **Color Picker** – Primary color customization (theme token)
- **Logo** – Site logo used in layout/header
- **Layout** – Responsive shell with navigation, theme toggle, and language switcher

## Pinia SSR configuration

The template ships with a Pinia store set up for **SSR hydration**:

- **Hydration**: Initial state is not serialized; values are read on the client (e.g. from `localStorage`) after hydration.
- **SSR**: Safe for server-side rendering with client-only state.
- **TypeScript**: Uses `@ts-expect-error` where required due to [Pinia typing limitations](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501).

See [Pinia SSR documentation](https://pinia.vuejs.org/cookbook/composables.html#SSR) for details.

## Internationalization (i18n) in depth

- **Where translations live:** `i18n/locales/` at the project root — one JSON file per locale (`en.json`, `es.json`, `pt.json`) with the same keys.
- **Changing language:** Use the language links in the layout header; they point to the same page in another locale.
- **Adding a new language:** Add an entry to `i18n.locales` in `nuxt.config.ts` and a new JSON file in `i18n/locales/` with the same keys as the others. No code changes are required for routing or the switcher.
- **Links inside the app:** Use `localePath('/path')` (or the route name) so links keep the current locale. Use `switchLocalePath('es')` (or another code) for links that switch locale.
- **SEO:** The root layout uses `useLocaleHead` so the document language and hreflang tags follow the active locale. Page titles and descriptions use translation keys so they stay in sync with the locale.

For a short reference that Cursor can use when working on i18n in this project, see the **nuxt-i18n** skill below.

## Cursor skills (included in this repo)

This repo ships with [Cursor](https://cursor.com/) agent skills in `.cursor/skills/`. The AI uses them for Nuxt, UI, and i18n work in this codebase.

| Skill        | Path                   | Purpose |
|-------------|------------------------|---------|
| **nuxt**    | `.cursor/skills/nuxt/` | Nuxt framework: SSR, auto-imports, file-based routing, server routes, `useFetch`, middleware, hybrid rendering. Use when editing config, routes, data fetching, or deployment. |
| **nuxt-ui** | `.cursor/skills/nuxt-ui/` | [@nuxt/ui](https://ui.nuxt.com/) v4: 125+ accessible Vue components, Tailwind theming, forms, dashboards. Use when building or customizing UI, themes, or layouts. |
| **nuxt-i18n** | (recommended for i18n) | [@nuxtjs/i18n](https://i18n.nuxtjs.org/): locales (en, es, pt), locale routing, lang switcher, SEO by locale, translation keys. Use when adding or changing languages, translating UI, or wiring locale-aware links and meta. |

Skills in `.cursor/skills/` are loaded automatically when the project is opened in Cursor; no extra setup is required. You can add a **nuxt-i18n** skill in the same folder for deeper i18n guidance.

## Contributing

Issues and pull requests are welcome.

## License

MIT.
