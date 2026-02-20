![v.420i_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# v.420i: Nuxt 4 Starter con i18n

Plantilla mínima y rápida de Nuxt 4 con **internacionalización (i18n)** integrada.  
**Leer en otros idiomas:** [English (README.md)](README.md) · [Português (README.pt.md)](README.pt.md) La app soporta **tres idiomas** (inglés, español, portugués) usando [@nuxtjs/i18n](https://i18n.nuxtjs.org/). Utiliza las últimas versiones de Nuxt y está lista para producción tanto en proyectos pequeños como al escalar.

## Stack tecnológico

- **[Nuxt 4](https://nuxt.com/)** – Framework Vue full-stack con SSR, rutas basadas en archivos y auto-imports
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** – Internacionalización: rutas por locale, mensajes en lazy-load, SEO por idioma
- **[Nuxt UI](https://ui.nuxt.com/)** – Biblioteca de componentes Vue accesibles con theming basado en Tailwind
- **[Nuxt Image](https://image.nuxt.com/)** – Optimización de imágenes con redimensionado y múltiples proveedores
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** – Store de estado Vue con soporte SSR
- **[Tailwind CSS](https://tailwindcss.com/)** – CSS utility-first

## Idiomas (i18n)

Este repo es **i18n-first**. Incluye tres locales:

| Código | Idioma    | Prefijo URL   |
|--------|------------|---------------|
| `en`   | Inglés     | (por defecto, sin prefijo) |
| `es`   | Español    | `/es`         |
| `pt`   | Portugués  | `/pt`         |

- **Módulo:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — Integración Vue I18n para Nuxt, rutas por locale y SEO.
- **Traducciones:** `i18n/locales/` — un archivo JSON por locale (`en.json`, `es.json`, `pt.json`) con las mismas claves.
- **Rutas:** El locale por defecto no lleva prefijo en la URL; el resto sí (ej. `/es/about`, `/pt/about`). La primera visita puede redirigir al idioma del navegador; el locale elegido se guarda en una cookie.
- **Enlaces:** Usa `localePath('/ruta')` para mantener el locale actual; usa `switchLocalePath('es')` (u otro código) para enlaces que cambien de idioma.
- **SEO:** El layout usa `useLocaleHead` para el idioma del documento y las etiquetas hreflang; títulos y descripciones usan claves de traducción.

## Características

- **Nuxt 4** – Versión actual con mejor rendimiento y DX
- **i18n** – Tres locales (en, es, pt), rutas por locale, selector de idioma, SEO por locale
- **Pinia** – Estado centralizado con hidratación SSR
- **Tailwind CSS** – Estilos utility-first y design tokens
- **Nuxt Image** – Redimensionado, formatos modernos y abstracción de proveedores
- **Modo oscuro** – Alternancia de tema (claro/oscuro)
- **Temas de color** – Paleta primaria configurable
- **Responsive** – Diseño mobile-first
- **SEO** – Meta tags y configuración de head por locale

## Inicio rápido

**Opción 1 – CLI (recomendado)**  
Generar un proyecto sin clonar. Requiere [Bun](https://bun.sh/) o npm/yarn con `npx`/`yarn dlx`:

```sh
bunx v420
```

Esto ejecuta la CLI v420 (template base) para generar un proyecto en el directorio actual (o una ruta indicada). No hace falta clonar el repo ni instalar dependencias a mano.

**Opción 2 – Clonar y ejecutar en local**

### Requisitos

- **Node.js** ≥ 18.x
- **Bun** (recomendado) o npm/yarn

### Instalación

```sh
git clone https://github.com/{username}/v.420i.git
cd v.420i
bun i
```

### Desarrollo

```sh
bun dev
```

El servidor de desarrollo corre en `http://localhost:3000` con HMR. Abre `/`, `/es` o `/pt` para ver la app en cada idioma.

### Build de producción

```sh
bun build
```

La salida está en `.output`. Sirve con `bun run preview` o despliega los archivos generados en tu hosting.

## Estructura del proyecto

```
app/
├── components/     # Componentes Vue (auto-importados)
├── layouts/        # Layouts
├── pages/          # Rutas basadas en archivos (Vue Router)
├── stores/         # Stores Pinia
└── assets/css/     # Estilos globales
i18n/
└── locales/        # Archivos de traducción (en.json, es.json, pt.json)
```

## Componentes principales

- **Color Picker** – Personalización del color primario (token del tema)
- **Logo** – Logo del sitio en layout/header
- **Layout** – Estructura responsive con navegación, cambio de tema y selector de idioma

## Configuración Pinia SSR

La plantilla incluye un store Pinia preparado para **hidratación SSR**:

- **Hidratación:** El estado inicial no se serializa; los valores se leen en el cliente (p. ej. de `localStorage`) tras la hidratación.
- **SSR:** Seguro para renderizado en servidor con estado solo en cliente.
- **TypeScript:** Usa `@ts-expect-error` donde hace falta por [limitaciones de tipado de Pinia](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501).

Consulta la [documentación de Pinia SSR](https://pinia.vuejs.org/cookbook/composables.html#SSR) para más detalles.

## Internacionalización (i18n) en detalle

- **Dónde están las traducciones:** En `i18n/locales/` en la raíz del proyecto — un JSON por locale (`en.json`, `es.json`, `pt.json`) con las mismas claves.
- **Cambiar de idioma:** Usa los enlaces de idioma en el header del layout; llevan a la misma página en otro locale.
- **Añadir un idioma:** Añade una entrada en `i18n.locales` en `nuxt.config.ts` y un nuevo JSON en `i18n/locales/` con las mismas claves. No hace falta tocar rutas ni el selector.
- **Enlaces dentro de la app:** Usa `localePath('/ruta')` (o el nombre de la ruta) para que los enlaces conserven el locale. Usa `switchLocalePath('es')` (u otro código) para enlaces que cambien de idioma.
- **SEO:** El layout raíz usa `useLocaleHead` para que el idioma del documento y las etiquetas hreflang sigan el locale activo. Títulos y descripciones usan claves de traducción para mantenerse en sync.

Para una referencia breve que Cursor pueda usar al trabajar en i18n en este proyecto, ver la skill **nuxt-i18n** más abajo.

## Cursor skills (incluidas en este repo)

Este repo incluye skills de agente de [Cursor](https://cursor.com/) en `.cursor/skills/`. La IA las usa para trabajo con Nuxt, UI e i18n en este código.

| Skill        | Ruta                      | Propósito |
|-------------|---------------------------|-----------|
| **nuxt**    | `.cursor/skills/nuxt/`    | Framework Nuxt: SSR, auto-imports, rutas por archivos, server routes, `useFetch`, middleware, render híbrido. Usar al editar config, rutas, data fetching o despliegue. |
| **nuxt-ui** | `.cursor/skills/nuxt-ui/` | [@nuxt/ui](https://ui.nuxt.com/) v4: más de 125 componentes Vue accesibles, theming Tailwind, formularios, dashboards. Usar al construir o personalizar UI, temas o layouts. |
| **nuxt-i18n** | (recomendada para i18n) | [@nuxtjs/i18n](https://i18n.nuxtjs.org/): locales (en, es, pt), rutas por locale, selector de idioma, SEO por locale, claves de traducción. Usar al añadir o cambiar idiomas, traducir UI o enlaces y meta por locale. |

Las skills en `.cursor/skills/` se cargan automáticamente al abrir el proyecto en Cursor; no hace falta configuración extra. Puedes añadir una skill **nuxt-i18n** en la misma carpeta para más guía en i18n.

## Contribuir

Se aceptan issues y pull requests.

## Licencia

MIT.
