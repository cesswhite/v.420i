![v.420i_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# v.420i: Nuxt 4 Starter com i18n

Boilerplate mínimo e rápido de Nuxt 4 com **internacionalização (i18n)** integrada.  
**Ler em outros idiomas:** [English (README.md)](README.md) · [Español (README.es.md)](README.es.md) A app suporta **três idiomas** (inglês, espanhol, português) usando [@nuxtjs/i18n](https://i18n.nuxtjs.org/). Usa as últimas versões do Nuxt e fica pronta para produção tanto em projetos pequenos quanto ao escalar.

## Stack tecnológico

- **[Nuxt 4](https://nuxt.com/)** – Framework Vue full-stack com SSR, rotas baseadas em arquivos e auto-imports
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** – Internacionalização: rotas por locale, mensagens em lazy-load, SEO por idioma
- **[Nuxt UI](https://ui.nuxt.com/)** – Biblioteca de componentes Vue acessíveis com theming baseado em Tailwind
- **[Nuxt Image](https://image.nuxt.com/)** – Otimização de imagens com redimensionamento e múltiplos provedores
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** – Store de estado Vue com suporte SSR
- **[Tailwind CSS](https://tailwindcss.com/)** – CSS utility-first

## Idiomas (i18n)

Este repo é **i18n-first**. Inclui três locales:

| Código | Idioma     | Prefixo URL   |
|--------|------------|---------------|
| `en`   | Inglês     | (padrão, sem prefixo) |
| `es`   | Espanhol   | `/es`         |
| `pt`   | Português  | `/pt`         |

- **Módulo:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — Integração Vue I18n para Nuxt, rotas por locale e SEO.
- **Traduções:** `i18n/locales/` — um arquivo JSON por locale (`en.json`, `es.json`, `pt.json`) com as mesmas chaves.
- **Rotas:** O locale padrão não tem prefixo na URL; os demais têm (ex.: `/es/about`, `/pt/about`). A primeira visita pode redirecionar para o idioma do navegador; o locale escolhido é salvo em um cookie.
- **Links:** Use `localePath('/caminho')` para manter o locale atual; use `switchLocalePath('es')` (ou outro código) para links que trocam de idioma.
- **SEO:** O layout usa `useLocaleHead` para o idioma do documento e as tags hreflang; títulos e descrições usam chaves de tradução.

## Recursos

- **Nuxt 4** – Versão atual com melhor performance e DX
- **i18n** – Três locales (en, es, pt), rotas por locale, seletor de idioma, SEO por locale
- **Pinia** – Estado centralizado com hidratação SSR
- **Tailwind CSS** – Estilos utility-first e design tokens
- **Nuxt Image** – Redimensionamento, formatos modernos e abstração de provedores
- **Modo escuro** – Alternância de tema (claro/escuro)
- **Temas de cor** – Paleta primária configurável
- **Responsivo** – Layout mobile-first
- **SEO** – Meta tags e configuração de head por locale

## Início rápido

**Opção 1 – CLI (recomendado)**  
Gerar um projeto sem clonar. Requer [Bun](https://bun.sh/) ou npm/yarn com `npx`/`yarn dlx`:

```sh
bunx v420
```

Isso executa a CLI v420 (template base) para gerar um projeto no diretório atual (ou em um caminho indicado). Não é preciso clonar o repo nem instalar dependências manualmente.

**Opção 2 – Clonar e rodar localmente**

### Pré-requisitos

- **Node.js** ≥ 18.x
- **Bun** (recomendado) ou npm/yarn

### Instalação

```sh
git clone https://github.com/{username}/v.420i.git
cd v.420i
bun i
```

### Desenvolvimento

```sh
bun dev
```

O servidor de desenvolvimento roda em `http://localhost:3000` com HMR. Abra `/`, `/es` ou `/pt` para ver a app em cada idioma.

### Build de produção

```sh
bun build
```

A saída fica em `.output`. Sirva com `bun run preview` ou faça deploy dos arquivos gerados no seu host.

## Estrutura do projeto

```
app/
├── components/     # Componentes Vue (auto-importados)
├── layouts/        # Layouts
├── pages/          # Rotas baseadas em arquivos (Vue Router)
├── stores/         # Stores Pinia
└── assets/css/     # Estilos globais
i18n/
└── locales/        # Arquivos de tradução (en.json, es.json, pt.json)
```

## Componentes principais

- **Color Picker** – Personalização da cor primária (token do tema)
- **Logo** – Logo do site no layout/header
- **Layout** – Estrutura responsiva com navegação, troca de tema e seletor de idioma

## Configuração Pinia SSR

O template inclui um store Pinia preparado para **hidratação SSR**:

- **Hidratação:** O estado inicial não é serializado; os valores são lidos no cliente (ex.: de `localStorage`) após a hidratação.
- **SSR:** Seguro para renderização no servidor com estado apenas no cliente.
- **TypeScript:** Usa `@ts-expect-error` onde necessário por [limitações de tipagem do Pinia](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501).

Consulte a [documentação do Pinia SSR](https://pinia.vuejs.org/cookbook/composables.html#SSR) para mais detalhes.

## Internacionalização (i18n) em detalhe

- **Onde ficam as traduções:** Em `i18n/locales/` na raiz do projeto — um JSON por locale (`en.json`, `es.json`, `pt.json`) com as mesmas chaves.
- **Mudar de idioma:** Use os links de idioma no header do layout; eles levam à mesma página em outro locale.
- **Adicionar um idioma:** Adicione uma entrada em `i18n.locales` no `nuxt.config.ts` e um novo JSON em `i18n/locales/` com as mesmas chaves. Não é preciso alterar rotas nem o seletor.
- **Links dentro da app:** Use `localePath('/caminho')` (ou o nome da rota) para os links manterem o locale. Use `switchLocalePath('es')` (ou outro código) para links que trocam de idioma.
- **SEO:** O layout raiz usa `useLocaleHead` para o idioma do documento e as tags hreflang seguirem o locale ativo. Títulos e descrições usam chaves de tradução para ficarem em sync.

Para uma referência curta que o Cursor possa usar ao trabalhar em i18n neste projeto, veja a skill **nuxt-i18n** abaixo.

## Cursor skills (incluídas neste repo)

Este repo inclui skills de agente do [Cursor](https://cursor.com/) em `.cursor/skills/`. A IA as usa para trabalho com Nuxt, UI e i18n neste código.

| Skill        | Caminho                    | Propósito |
|-------------|----------------------------|-----------|
| **nuxt**    | `.cursor/skills/nuxt/`     | Framework Nuxt: SSR, auto-imports, rotas por arquivo, server routes, `useFetch`, middleware, render híbrido. Usar ao editar config, rotas, data fetching ou deploy. |
| **nuxt-ui** | `.cursor/skills/nuxt-ui/`  | [@nuxt/ui](https://ui.nuxt.com/) v4: mais de 125 componentes Vue acessíveis, theming Tailwind, formulários, dashboards. Usar ao construir ou personalizar UI, temas ou layouts. |
| **nuxt-i18n** | (recomendada para i18n)  | [@nuxtjs/i18n](https://i18n.nuxtjs.org/): locales (en, es, pt), rotas por locale, seletor de idioma, SEO por locale, chaves de tradução. Usar ao adicionar ou mudar idiomas, traduzir UI ou links e meta por locale. |

As skills em `.cursor/skills/` são carregadas automaticamente ao abrir o projeto no Cursor; não é necessária configuração extra. Você pode adicionar uma skill **nuxt-i18n** na mesma pasta para mais orientação em i18n.

## Contribuir

Issues e pull requests são bem-vindos.

## Licença

MIT.
