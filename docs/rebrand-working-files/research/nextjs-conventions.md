# Next.js 16.2 conventions cheat sheet (static marketing site, Cloudflare/OpenNext)

Source of truth: the docs bundled with `next@16.2.4`. `/home/user/foreyes-connect/node_modules` is NOT installed,
so the docs were read from a scratch copy:

    DOCS = /tmp/claude-0/-home-user/9c3d5c24-e0be-5c4e-b814-8362260e483c/scratchpad/nextdocs/node_modules/next/dist/docs

In the new project the same files live at `node_modules/next/dist/docs/`. Every rule below cites a path relative to
`DOCS/01-app/` (abbreviated `GS/` = `01-getting-started/`, `G/` = `02-guides/`, `API/` = `03-api-reference/`).
Items marked **[repo]** come from foreyes-connect config files, **[npm]** from registry metadata, **[rec]** are my
recommendation (not a doc statement).

---

## 0. TL;DR - what differs from Next 13-15 habits

| Old habit | Next 16.2 reality | Doc |
|---|---|---|
| `params.slug` / `searchParams.q` read synchronously | Sync access is **removed**. They are Promises everywhere: `await params` | G/upgrading/version-16.md |
| `next dev --turbopack`, webpack by default | Turbopack is the default for `dev` AND `build`. A custom `webpack` config makes `next build` **fail** | G/upgrading/version-16.md |
| `experimental.turbo` / `experimental.turbopack` | Top-level `turbopack: {}` | API/05-config/01-next-config-js/turbopack.md |
| `middleware.ts` + `export function middleware` | Deprecated; renamed `proxy.ts` + `export function proxy`. Node runtime only | GS/16-proxy.md |
| `next lint`, lint during `next build`, `eslint` key in next.config | All **removed**. Run `eslint` yourself; flat config | G/upgrading/version-16.md |
| `<Image priority>` | Deprecated; use `preload` (or `loading="eager"` / `fetchPriority="high"`) | API/02-components/image.md |
| `<Image quality={90}>` works freely | `images.qualities` defaults to `[75]`; other values are coerced to the nearest allowed | G/upgrading/version-16.md |
| `images.domains` | Deprecated; use `images.remotePatterns` | API/02-components/image.md |
| `experimental.ppr`, `experimental_ppr`, `experimental.dynamicIO` | Removed; replaced by top-level `cacheComponents: true` | G/upgrading/version-16.md |
| `unstable_cacheLife` / `unstable_cacheTag` | Stable: `import { cacheLife, cacheTag } from 'next/cache'` | G/upgrading/version-16.md |
| `revalidateTag('x')` | Needs 2nd arg: `revalidateTag('x', 'max')`; or `updateTag('x')` in Server Actions | G/upgrading/version-16.md |
| `serverRuntimeConfig` / `publicRuntimeConfig`, AMP, `next/legacy/image` | Removed / deprecated | G/upgrading/version-16.md |
| `error.tsx` receives `reset` | 16.2 adds `unstable_retry` (preferred); `reset` still exists | API/03-file-conventions/error.md |
| `useMDXComponents(components)` | Takes **no arguments** now | API/03-file-conventions/mdx-components.md |
| `<Link legacyBehavior>` | `@deprecated`, will be removed (type comment in `next/dist/client/app-dir/link.d.ts`) | (types) |
| `scroll-behavior: smooth` auto-overridden on navigation | No longer overridden; add `data-scroll-behavior="smooth"` on `<html>` to get the old behavior | G/upgrading/version-16.md |
| `.next/` holds dev output | `next dev` writes to `.next/dev`; tsconfig `include` needs `.next/dev/types/**/*.ts` | G/upgrading/version-16.md |
| `next build` prints Size / First Load JS | Removed from build output | G/upgrading/version-16.md |

Requirements: Node >= 20.9, TypeScript >= 5.1, browsers Chrome/Edge/Firefox 111+, Safari 16.4+ (GS/01-installation.md).

---

## 1. App Router file conventions (GS/02-project-structure.md)

Unchanged names: `layout`, `page`, `loading`, `not-found`, `error`, `global-error`, `route`, `template`, `default`.
Route groups `(marketing)`, private folders `_components`, dynamic `[slug]`, `[...slug]`, `[[...slug]]`.
`src/` is optional; if used, `app/`, `proxy.ts` and `mdx-components.tsx` all go inside `src/`.

New / changed:

- Top-level `proxy.ts` replaces `middleware.ts` (section 8).
- Every parallel-route slot (`@slot`) now **requires** a `default.tsx`, or the build fails (G/upgrading/version-16.md).
- `global-not-found.tsx` exists but is experimental (`experimental.globalNotFound: true`); plain `app/not-found.tsx`
  still handles all unmatched URLs and is enough for a single-root-layout site (API/03-file-conventions/not-found.md).
- `error.tsx` must be a Client Component; prefer the new `unstable_retry` prop (API/03-file-conventions/error.md):

```tsx
'use client' // Error boundaries must be Client Components
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => unstable_retry()}>Try again</button>
      </body>
    </html>
  )
}
```

- Root layout is required and must contain `<html>` and `<body>` (API/03-file-conventions/layout.md).
- A `route.ts` cannot sit in the same segment as a `page.tsx` (GS/15-route-handlers.md).

Metadata files (all still valid): `favicon.ico` (root of `app/` only), `icon.(ico|jpg|jpeg|png|svg)`,
`apple-icon.(jpg|jpeg|png)`, `opengraph-image.(jpg|jpeg|png|gif)`, `twitter-image.*`, `*.alt.txt`, `sitemap.(xml|ts)`,
`robots.(txt|ts)`, `manifest.(json|webmanifest|ts)`; code variants `icon.tsx`, `opengraph-image.tsx`.

---

## 2. Async request APIs - `params` / `searchParams` are Promises

Docs: G/upgrading/version-16.md, API/03-file-conventions/page.md, layout.md, route.md, API/04-functions/generate-metadata.md.
"Starting with Next.js 16, synchronous access is fully removed." Applies to `cookies()`, `headers()`, `draftMode()`,
`params` in layout/page/route/default/opengraph-image/twitter-image/icon/apple-icon, and `searchParams` in page.

Page:

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
}
```

Global type helpers (no import; generated by `next dev`, `next build` or `next typegen`):

```tsx
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const query = await props.searchParams
  return <h1>Blog Post: {slug}</h1>
}
```

```tsx
export default function Layout(props: LayoutProps<'/dashboard'>) { /* props.children, typed slots */ }
```

`generateMetadata` (params/searchParams are Promises; `parent` is a Promise too):

```tsx
import type { Metadata, ResolvingMetadata } from 'next'
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params
  const previousImages = (await parent).openGraph?.images || []
  return { title: '...', openGraph: { images: ['/some-specific-page-image.jpg', ...previousImages] } }
}
```

`generateStaticParams` itself is unchanged - it RETURNS plain objects (not promises); the page it feeds awaits `params`
(API/04-functions/generate-static-params.md):

```tsx
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}
```

Route handler context:

```ts
import type { NextRequest } from 'next/server'
export async function GET(_req: NextRequest, ctx: RouteContext<'/users/[id]'>) {
  const { id } = await ctx.params
  return Response.json({ id })
}
```

Image-generating files (v16 breaking): `params` AND `id` are Promises in `opengraph-image`/`twitter-image`/`icon`/
`apple-icon`; `generateImageMetadata` still gets sync `params`. `sitemap({ id })` receives `id` as `Promise<string>`
when `generateSitemaps` is used (G/upgrading/version-16.md).

WARNING for static sites: reading the `searchParams` prop is a Request-time API and "will opt the page into dynamic
rendering" (API/03-file-conventions/page.md). Never read it in a marketing page. If a client component needs the query
string (UTM capture etc.), use `useSearchParams()` inside a `<Suspense>` boundary - otherwise the production build fails
with "Missing Suspense boundary with useSearchParams" (API/04-functions/use-search-params.md).

---

## 3. Metadata, sitemap, robots, OG images, icons

Docs: API/04-functions/generate-metadata.md, generate-viewport.md, API/03-file-conventions/01-metadata/*.

- `metadata` / `generateMetadata` only in Server Components; cannot export both from one segment.
- Set `metadataBase` in the root layout - a relative URL in a URL-based field without it is a **build error**.
- `title.template` applies to child segments only and requires `title.default`.
- `themeColor`, `colorScheme`, `viewport` inside `metadata` are deprecated: export `viewport` separately.
- File-based metadata overrides the `metadata` object.
- `generateMetadata` can be streamed (since 15.2): for a prerendered page that adds no dynamic behaviour the tags are in
  the initial HTML, so static pages are unaffected.

```tsx
// app/layout.tsx
import type { Metadata, Viewport } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  title: { template: '%s | Acme', default: 'Acme' }, // a default is required when creating a template
  description: '...',
  alternates: { canonical: '/' },
  openGraph: { images: '/og-image.png' },
}
export const viewport: Viewport = { themeColor: 'black' }
```

Sitemap (cached by default "unless it uses a Request-time API or dynamic config"):

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://acme.com', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: 'https://acme.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
```

Robots:

```ts
// app/robots.ts
import type { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/private/' },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}
```

OG image - simplest and safest for a static site is a real file: `app/opengraph-image.png` (max 8MB; twitter-image max
5MB, build fails above) plus `app/opengraph-image.alt.txt`. Code-generated variant (statically optimized at build time
unless it uses request-time APIs or uncached data):

```tsx
// app/about/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
export const alt = 'About Acme'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(join(process.cwd(), 'assets/Inter-SemiBold.ttf'))
  return new ImageResponse(
    (<div style={{ fontSize: 128, background: 'white', width: '100%', height: '100%', display: 'flex',
      alignItems: 'center', justifyContent: 'center' }}>About Acme</div>),
    { ...size, fonts: [{ name: 'Inter', data: interSemiBold, style: 'normal', weight: 400 }] }
  )
}
```

`ImageResponse` limits (API/04-functions/image-response.md): flexbox + a CSS subset only (no `display: grid`), 500KB
bundle limit, fonts must be `ttf`/`otf`/`woff` (NOT woff2). For a dynamic segment the function signature is
`Image({ params }: { params: Promise<{ slug: string }> })`.

Icons: drop `app/favicon.ico`, `app/icon.png` (or `.svg`), `app/apple-icon.png`; tags are generated automatically.
If a `proxy.ts` is ever added, exclude metadata files from its matcher (API/03-file-conventions/01-metadata/index.md).

JSON-LD (G/json-ld.md) - native `<script>`, not `next/script`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
/>
```

---

## 4. next/font (GS/13-fonts.md, API/02-components/font.md)

API unchanged since 13.2 (`next/font`, never `@next/font`). Fonts are self-hosted at build; no request to Google from
the browser. `display` defaults to `'swap'`. Non-variable Google fonts need an explicit `weight`. Font functions used
in the root layout are preloaded on all routes.

Google + Tailwind 4 via CSS variables (the documented pattern, and exactly what foreyes-connect does):

```tsx
// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const roboto_mono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-roboto-mono' })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
```

```css
/* global.css */
@import 'tailwindcss';
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-roboto-mono);
}
```

Local font - path is relative to the file that calls `localFont`:

```tsx
import localFont from 'next/font/local'
const myFont = localFont({ src: './my-font.woff2' })
// multiple files:
const roboto = localFont({
  src: [
    { path: './Roboto-Regular.woff2', weight: '400', style: 'normal' },
    { path: './Roboto-Bold.woff2', weight: '700', style: 'normal' },
  ],
})
```

---

## 5. next/image (API/02-components/image.md, GS/12-images.md, G/upgrading/version-16.md)

Prop changes: `priority` deprecated -> `preload` (default false). Docs: "In most cases, you should use
`loading="eager"` or `fetchPriority="high"` instead of `preload`." `onLoadingComplete` deprecated -> `onLoad`.
`alt` required. SVG `src` is automatically `unoptimized`.

v16 config default changes:

| Option | v16 default |
|---|---|
| `images.qualities` | `[75]` only (was "all"); a non-listed `quality` is coerced to the closest allowed value |
| `images.imageSizes` | `[32, 48, 64, 96, 128, 256, 384]` (16 removed) |
| `images.deviceSizes` | `[640, 750, 828, 1080, 1200, 1920, 2048, 3840]` |
| `images.minimumCacheTTL` | 14400 s (4 h), was 60 s |
| `images.maximumRedirects` | 3 (was unlimited) |
| `images.dangerouslyAllowLocalIP` | false (new) |
| `images.formats` | `['image/webp']` |
| local `src` with a query string | needs `images.localPatterns` with `search` |

```ts
// next.config.ts
import type { NextConfig } from 'next'
const config: NextConfig = {
  images: {
    qualities: [50, 75, 100],
    localPatterns: [{ pathname: '/assets/images/**', search: '' }],
    remotePatterns: [
      { protocol: 'https', hostname: 's3.amazonaws.com', port: '', pathname: '/my-bucket/**', search: '' },
    ],
    // also valid: remotePatterns: [new URL('https://example.com/account123/**')]
  },
}
export default config
```

Local images - prefer static imports (width/height/blurDataURL are inferred):

```tsx
import Image from 'next/image'
import ProfileImage from './profile.png'
<Image src={ProfileImage} alt="Picture of the author" /* placeholder="blur" optional */ />
```

Responsive pattern: `sizes="100vw"` + `style={{ width: '100%', height: 'auto' }}`; always pass `sizes` with `fill`.
Dynamic import for content images: `const { default: image } = await import(\`@/content/blog/images/${file}\`)`.

Optimization and static hosting:

- The default loader needs a server at `/_next/image`. With `output: 'export'` it is **unsupported**
  (G/static-exports.md: "Image Optimization with the default loader"); use `images.unoptimized: true` or a custom loader:

```js
module.exports = { images: { unoptimized: true } }
// or
module.exports = { images: { loader: 'custom', loaderFile: './my/image/loader.js' } }
```

```js
// Cloudflare loader example from API/05-config/01-next-config-js/images.md (loaderFile must be 'use client' in App Router)
'use client'
export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
  return `https://example.com/cdn-cgi/image/${params.join(',')}/${src}`
}
```

- **[repo]** foreyes-connect sets no `images` config and its `wrangler.toml` has no Images binding; whether
  `/_next/image` optimization works on the OpenNext worker was not verified. **[rec]** pre-size assets and set
  `images.unoptimized: true` (or the Cloudflare loader) unless optimization is confirmed on the target worker.

---

## 6. next/link (API/02-components/link.md)

- No child `<a>` (since 13); `legacyBehavior` is deprecated.
- App Router props: `href`, `replace`, `scroll`, `prefetch` (`"auto"`/`null` default, `true`, `false`), `onNavigate`
  (15.3), and new `transitionTypes: string[]` (feeds `React.addTransitionType` for `<ViewTransition>`).
- Prefetching only runs in production; static routes are fully prefetched by default. v16 prefetches incrementally and
  dedupes shared layouts - expect more, smaller prefetch requests (G/upgrading/version-16.md).
- Sticky header + hash links: Next skips sticky/fixed elements when scrolling; use
  `html { scroll-padding-top: 64px; }`.
- `typedRoutes: true` is now a stable top-level option (statically typed `href`); non-literal hrefs need `as Route`
  (API/05-config/02-typescript.md).

---

## 7. Caching and rendering - keeping every page static

Two models exist in 16; pick one.

### A. Previous model - `cacheComponents` NOT set (what foreyes-connect uses) - **[rec] use this**

Doc: G/caching-without-cache-components.md, API/03-file-conventions/02-route-segment-config/index.md.

- A page with no Request-time API (`cookies()`, `headers()`, `draftMode()`, `connection()`, the `searchParams` prop)
  and no uncached data is prerendered at build time with zero config. Confirm in `next build` output:
  `○ (Static) prerendered as static content` vs `ƒ (Dynamic) server-rendered on demand` (API/06-cli/next.md).
- `fetch` is **not cached by default** (since 15); opt in with `{ cache: 'force-cache' }` or
  `{ next: { revalidate: 3600 } }`.
- Segment config still available in this model:

```tsx
export const dynamic = 'auto'      // 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = false    // false | 0 | number  (must be a literal: 600 ok, 60 * 10 not)
export const dynamicParams = true  // false => params not returned by generateStaticParams 404
```

- `dynamic = 'error'`: "Force prerendering ... by causing an error if any components use Request-time APIs or uncached
  data" (also equivalent to every `fetch` being `force-cache`) - a cheap guard for "this page must be static".
  `'force-static'` instead silently makes `cookies`, `headers()` and `useSearchParams()` return empty values.
- Fully static blog: `generateStaticParams()` returning every slug + `export const dynamicParams = false`.
- GET Route Handlers are dynamic by default (changed in 15); `export const dynamic = 'force-static'` caches them.
  `sitemap.ts`, `robots.ts`, `manifest.ts`, `opengraph-image.tsx`, `icon.tsx` are static by default.

### B. Cache Components - `cacheComponents: true` (opt-in; replaces PPR / dynamicIO)

Doc: GS/08-caching.md, API/05-config/01-next-config-js/cacheComponents.md, G/migrating-to-cache-components.md,
API/01-directives/use-cache.md, API/04-functions/cacheLife.md.

- Everything is dynamic by default; anything async/uncached must be inside `'use cache'` or `<Suspense>` or the
  build errors ("Uncached data was accessed outside of <Suspense>").
- `dynamic`, `revalidate`, `fetchCache`, `dynamicParams` segment configs are **removed** in this mode;
  `runtime = 'edge'` is unsupported.
- `generateStaticParams` must return at least one param (empty array = build error).
- `Date.now()`, `Math.random()`, `crypto.randomUUID()` must be cached or preceded by `await connection()`.
- Navigation keeps up to 3 routes mounted-but-hidden via React `<Activity>` (state/DOM preserved).

```tsx
import { cacheLife } from 'next/cache'
export default async function Page() {
  'use cache'
  cacheLife('max') // profiles: default, seconds, minutes, hours, days, weeks, max
  const data = await fetch('https://api.example.com/data')
  return <div>...</div>
}
```

`use cache` cannot be used directly in a Route Handler body (extract a helper).

**[rec]** A content-in-repo marketing site gains nothing from B, and it adds a deploy-side cache dependency
(G/deploying-to-platforms.md lists Cache Components as "Streaming required, shared cache recommended"). Stay on A,
leave `cacheComponents` unset, read content with imports / `node:fs` at build, and never touch request-time APIs
outside the contact endpoint.

### `output: 'export'` (pure static) - what it would cost (G/static-exports.md)

Unsupported: dynamic routes without `generateStaticParams` or with `dynamicParams: true`, Route Handlers that read the
Request (only static `GET`), cookies, rewrites, **redirects**, headers, Proxy, ISR, default-loader image optimization,
Draft Mode, **Server Actions**, intercepting routes. A contact-form POST handler therefore rules out `output: 'export'`;
the OpenNext worker build (static pages served from assets + a worker for the POST) is the fit.

---

## 8. Turbopack is the default (G/upgrading/version-16.md, API/05-config/01-next-config-js/turbopack.md)

- Scripts are just `next dev` / `next build` (no `--turbopack`). Opt out with `--webpack`.
- A `webpack()` key in next.config (including one injected by a plugin) fails `next build`.
- Config is top-level `turbopack: { root, rules, resolveAlias, resolveExtensions, debugIds }`.
- `turbopack.root` must be an absolute path. Next auto-detects the root from a lockfile
  (`pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`, `bun.lock`, `bun.lockb`); a lockfile in a parent directory can make it pick the wrong root, so foreyes-connect pins it
  explicitly **[repo]** - copy this into the new site:

```ts
// /home/user/foreyes-connect/next.config.ts (entire file)
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
```

- No CSS/PostCSS/Babel loaders needed. Loader options must be serializable (plain values, no functions).
- Sass `~` imports are unsupported (use bare specifiers or `resolveAlias: { '~*': '*' }`).
- Dev FS cache: `experimental.turbopackFileSystemCacheForDev` (already defaults to `true` in 16.2.4 per
  `next/dist/server/config-shared.d.ts`).
- `next.config.ts` module resolution is CommonJS-limited unless Node's native TS resolver is active (Node >= 22.18
  by default) - relevant when importing ESM-only plugins (API/05-config/02-typescript.md).

Proxy (GS/16-proxy.md, API/03-file-conventions/proxy.md): one `proxy.ts` at root or in `src/`.

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
export const config = { matcher: '/about/:path*' }
```

Runtime is Node.js and not configurable; setting `runtime` in a proxy file throws; "If you want to continue using the
`edge` runtime, keep using `middleware`". `skipMiddlewareUrlNormalize` -> `skipProxyUrlNormalize`.
**[repo]** foreyes-connect still ships `src/middleware.ts` with `export const middleware = clerkMiddleware(...)`
(deprecated but working). **[rec]** the marketing site needs neither; for old-URL redirects use `redirects()` in
next.config (`{ source, destination, permanent }`; `permanent: true` = 308) (API/05-config/01-next-config-js/redirects.md).

---

## 9. MDX blog (G/mdx.md, API/03-file-conventions/mdx-components.md)

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

```js
// next.config.mjs  (remark/rehype are ESM-only: use next.config.mjs or next.config.ts)
import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
const withMDX = createMDX({
  // extension: /\.(md|mdx)$/,   // to also compile .md
  options: {
    // Turbopack: plugins MUST be given as strings; options must be serializable
    remarkPlugins: ['remark-gfm', ['remark-toc', { heading: 'The Table' }]],
    rehypePlugins: ['rehype-slug'],
  },
})
export default withMDX(nextConfig)
```

"remark and rehype plugins without serializable options cannot be used yet with Turbopack, because JavaScript
functions can't be passed to Rust." So `remarkPlugins: [remarkGfm]` (imported function) is the webpack form only.

`mdx-components.tsx` is **required** for `@next/mdx` in App Router (project root, or inside `src/`):

```tsx
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
const components = {
  h1: ({ children }) => <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>,
  img: (props) => (
    <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...(props as ImageProps)} />
  ),
} satisfies MDXComponents
export function useMDXComponents(): MDXComponents {
  return components
}
```

Blog route with dynamic import, fully static:

```tsx
// app/blog/[slug]/page.tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)
  return <Post />
}
export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }]
}
export const dynamicParams = false
```

- Keep the `.mdx` extension in the import. Frontmatter is NOT supported by default: use
  `export const metadata = { ... }` in the MDX file and `import Post, { metadata } from '@/content/post.mdx'`, or add
  `remark-frontmatter` + `remark-mdx-frontmatter` (as strings). Build the index page by listing the dir with `node:fs`.
- `page.mdx` files can be routes directly and can export `metadata`.
- Styling: `@tailwindcss/typography` `prose` classes in a shared layout (Tailwind 4: `@plugin "@tailwindcss/typography";`
  in CSS - Tailwind's own convention, not in the Next docs).
- `experimental.mdxRs` (Rust compiler) is experimental; not recommended for production.
- **[repo]** foreyes-connect has no `@next/mdx`; it renders markdown at runtime with `react-markdown@10.1.0` +
  `remark-gfm@4.0.1`. **[npm]** `@next/mdx@16.2.4` peers: `@mdx-js/loader`, `@mdx-js/react` `>=0.15.0`.

---

## 10. Contact form: Route Handler (GS/15-route-handlers.md, API/03-file-conventions/route.md, G/forms.md)

- Handlers use Web `Request`/`Response`; `POST` is never cached and never prerendered, so it does not affect the
  static pages around it. Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS (others -> 405).
- **[rec]** Keep the page static: render the form in a Client Component and
  `fetch('/api/contact', { method: 'POST', body })`.

```ts
// app/api/contact/route.ts  (shape from the docs' FormData example)
export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  return Response.json({ name, email })
}
```

- `request.json()` for JSON bodies. Validate server-side (docs use zod; `formData` values are all strings).
- Alternative: Server Action + `useActionState` (`const [state, formAction, pending] = useActionState(action, initial)`;
  the action signature becomes `(prevState, formData)`). Works on the worker, not with `output: 'export'`.
- `next/form` (`import Form from 'next/form'`) is for GET forms that update search params, not for a contact POST.
- **[repo]** secrets on Cloudflare are set with `wrangler secret put KEY`; non-secret values go in `[vars]` in
  `wrangler.toml`; bindings are read with `const { env } = await getCloudflareContext()` from `@opennextjs/cloudflare`.
- `NEXT_PUBLIC_*` values are inlined into the JS bundle at `next build` time and do not change afterwards
  (G/environment-variables.md); server-only secrets must not use the prefix.

---

## 11. next.config.ts options renamed / removed (G/upgrading/version-16.md + config reference)

| Was | Now |
|---|---|
| `experimental.turbo`, `experimental.turbopack` | `turbopack` |
| `experimental.dynamicIO`, `experimental.ppr`, `experimental.useCache` | `cacheComponents: true` |
| `experimental.reactCompiler` | `reactCompiler: true` (stable, off by default; needs `babel-plugin-react-compiler`) |
| `experimental.typedRoutes` | `typedRoutes: true` |
| `experimental.adapterPath` | `adapterPath` (stable in 16.2) |
| `skipMiddlewareUrlNormalize` | `skipProxyUrlNormalize` |
| `images.domains` | `images.remotePatterns` |
| `eslint: {}` | removed |
| `serverRuntimeConfig`, `publicRuntimeConfig` | removed (use env vars / `NEXT_PUBLIC_`) |
| `amp` | removed |
| `devIndicators.appIsrStatus/buildActivity/buildActivityPosition` | removed |
| `export const experimental_ppr` | removed |
| `unstable_rootParams` | removed |

Still experimental: `experimental.viewTransition`, `experimental.globalNotFound`, `experimental.inlineCss`,
`experimental.mdxRs`, `unstable_instant` segment config (Cache Components only).
In `next dev`, `process.argv` no longer contains `'dev'` when the config loads; use `NODE_ENV` or `phase`.

---

## 12. Lint / typecheck / build commands

- `next lint` is gone and `next build` no longer lints (G/upgrading/version-16.md). `next build` still fails on
  TypeScript errors (API/05-config/02-typescript.md).
- Scripts (GS/01-installation.md): `"dev": "next dev"`, `"build": "next build"`, `"start": "next start"`,
  `"lint": "eslint"`, `"lint:fix": "eslint --fix"`.
- Typecheck without building (API/06-cli/next.md): `next typegen && tsc --noEmit` - `typegen` writes route types
  (`PageProps`, `LayoutProps`, `RouteContext`) and `next-env.d.ts`; plain `tsc --noEmit` on a fresh checkout will not
  know those globals. `next-env.d.ts` should be gitignored.
- Flat ESLint config (API/05-config/03-eslint.md) - identical to foreyes-connect's `eslint.config.mjs` **[repo]**:

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
```

  **[rec]** add `.open-next/**` and `.wrangler/**` to `globalIgnores` in the new repo.
- Debug a route that unexpectedly turns dynamic: `next build --debug-prerender` (API/06-cli/next.md).

---

## 13. React 19.2 features (G/upgrading/version-16.md, G/view-transitions.md, API/05-config/01-next-config-js/viewTransition.md)

App Router bundles a React canary with 19.2 features: View Transitions, `useEffectEvent`, `<Activity>`.

**View Transitions: yes, there is a flag, and it is still experimental** (`version: experimental` in the doc):

```ts
// next.config.ts
import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
}
export default nextConfig
```

The flag enables Next's integration (transitions on route navigation); the component comes from React:

```tsx
import { ViewTransition } from 'react'
```

Patterns from the guide:

```tsx
// shared-element morph: same `name` on both pages
<ViewTransition name={`photo-${photo.id}`}><Image src={photo.src} alt={photo.title} /></ViewTransition>

// directional page transitions keyed by <Link transitionTypes>
<Link href="/about" transitionTypes={['nav-forward']}>About</Link>
<ViewTransition
  enter={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
  exit={{ 'nav-forward': 'nav-forward', 'nav-back': 'nav-back', default: 'none' }}
  default="none"
>
  {/* page content */}
</ViewTransition>
```

```css
::view-transition-old(.nav-forward) { --slide-offset: -60px;
  animation: 150ms ease-in both fade reverse, 400ms ease-in-out both slide reverse; }
::view-transition-new(.nav-forward) { --slide-offset: 60px;
  animation: 210ms ease-out 150ms both fade, 400ms ease-in-out both slide; }
/* keep the header still */
::view-transition-group(site-header) { animation: none; z-index: 100; }
::view-transition-old(site-header) { display: none; }
::view-transition-new(site-header) { animation: none; }
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(*), ::view-transition-new(*), ::view-transition-group(*) {
    animation-duration: 0s !important; animation-delay: 0s !important; }
}
```

Header anchor: `<header style={{ viewTransitionName: 'site-header' }}>`. Notes: animations fire only on Transitions,
`<Suspense>` reveals and `useDeferredValue` (route navigations are transitions); `default="none"` stops a boundary
animating on unrelated transitions; browser back/forward carries no transition type; unsupported browsers simply do not
animate; Safari may differ.

**Activity:** the docs only describe it as what Next uses internally for navigation when `cacheComponents` is on
(G/preserving-ui-state.md). There is no Next flag for using it yourself; `import { Activity } from 'react'` is plain
React 19.2 and works in any Client Component (e.g. keeping tab/accordion panels mounted with `mode="hidden"`).

React Compiler: `reactCompiler: true` is stable but opt-in and slows builds (Babel). Not needed for a static site.

---

## 14. How foreyes-connect is wired (mirror this)

All paths under `/home/user/foreyes-connect/`.

**Versions** - declared in `package.json`, resolved in `package-lock.json`:

| Package | package.json | lockfile |
|---|---|---|
| next | 16.2.4 | 16.2.4 |
| react / react-dom | 19.2.4 | 19.2.4 |
| tailwindcss | ^4 | 4.3.0 |
| @tailwindcss/postcss | ^4 | 4.3.0 |
| tw-animate-css | ^1.4.0 | 1.4.0 |
| shadcn (CSS import + CLI) | ^4.3.0 | 4.8.0 |
| @opennextjs/cloudflare | ^1.19.1 | 1.19.11 (pulls @opennextjs/aws 4.0.2) |
| wrangler | ^4.84.0 | 4.94.0 |
| @cloudflare/workers-types | ^4.20260422.1 | 4.20260524.1 |
| typescript | ^5 | 5.9.3 |
| eslint | ^9 | 9.39.4 |
| eslint-config-next | 16.2.4 | 16.2.4 |
| @types/react / @types/react-dom | ^19 | 19.2.15 / 19.2.3 |
| @types/node | ^20 | 20.19.41 |
| lucide-react | ^1.8.0 | 1.16.0 |
| radix-ui | ^1.4.3 | 1.4.3 |
| class-variance-authority / clsx / tailwind-merge | ^0.7.1 / ^2.1.1 / ^3.5.0 | 0.7.1 / 2.1.1 / 3.6.0 |
| zod | ^4.3.6 | 4.4.3 |
| postcss / lightningcss / sharp (transitive) | - | 8.5.15 / 1.32.0 / 0.34.5 |

**Peer-dependency trap [npm]:** `@opennextjs/cloudflare@1.19.11` declares
`peerDependencies: { next: ">=15.5.18 <16 || >=16.2.6", wrangler: "^4.86.0" }`. `next@16.2.4` is outside that range;
foreyes-connect only installs because `.npmrc` contains `legacy-peer-deps=true`. For the new site either copy that
`.npmrc` (exact mirror) or use a `next` patch `>=16.2.6` (16.2.5 through 16.2.12 exist; keep `eslint-config-next` on
the same version). `package.json` `^1.19.1` also admits `@opennextjs/cloudflare` 1.20.x (latest seen 1.20.17) on a
fresh install with no lockfile - pin it if an exact mirror matters.

**Scripts** (`package.json`): `dev: next dev`, `build: next build`, `start: next start`, `lint: eslint`,
`preview: wrangler dev`, and `deploy` = `opennextjs-cloudflare build && opennextjs-cloudflare deploy` run with
`CI=1`, `CLOUDFLARE_ACCOUNT_ID` and a `CLOUDFLARE_API_TOKEN` read from the macOS keychain
(`security find-generic-password -s foreyes-connect-cf-deploy -w`) when the env var is unset. There is no `typecheck`
script for the app (only `typecheck:scheduler`).

**`next.config.ts`**: only `turbopack.root = path.resolve(__dirname)` (section 8). No `output`, no `images`,
no `cacheComponents`, no `experimental`.

**`open-next.config.ts`**:

```ts
import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache'

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
})
```

**`wrangler.toml`** (essentials):

```toml
name = "foreyes-connect"
main = ".open-next/worker.js"
compatibility_date = "2026-02-01"
account_id = "..."            # set in the file
compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]

[assets]
directory = ".open-next/assets"
binding = "ASSETS"

[[services]]                   # self-reference, required for ISR queue / res.revalidate
binding = "WORKER_SELF_REFERENCE"
service = "foreyes-connect"    # must equal the worker name

[[r2_buckets]]
binding = "NEXT_INC_CACHE_R2_BUCKET"
bucket_name = "foreyes-connect-opennext-cache"
```

Plus an app-specific `FOREYES_MEDIA` R2 bucket and a comment that `[triggers]` (cron) is deliberately absent because
the OpenNext worker exports no `scheduled()`. **[rec]** for a site with no ISR/revalidation the R2 incremental cache and
its bucket are optional: `defineCloudflareConfig({})` plus `main`, `compatibility_*`, `[assets]` and the self-reference
is the minimal shape; if you keep `r2IncrementalCache`, the bucket must exist and be bound as `NEXT_INC_CACHE_R2_BUCKET`.
The worker `name`, the self-reference `service` and bucket names must be changed for the new site.

**`postcss.config.mjs`** (Tailwind 4, no `tailwind.config.*`, no autoprefixer):

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

**`src/app/globals.css`** structure (Tailwind 4, CSS-first config, shadcn tokens):

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-plex);          /* next/font variable */
  --font-mono: var(--font-geist-mono);
  --font-heading: var(--font-sans);
  --color-brand-shell: #110F2B;
  --color-brand-nav: #1a1838;
  --color-brand-accent: #FCBA02;
  --color-brand-accent-foreground: #110F2B;
  --color-brand-teal: #51A0AD;
  --color-brand-content: #F4F4F8;
  --color-brand-header: #1f2937;
  --color-brand-sidebar: #111827;
  --color-brand-stone: #F0EDE8;
  --color-brand-navy: #415D9E;
  /* ...shadcn mappings: --color-primary: var(--primary) etc, --radius-sm..4xl derived from --radius */
}

:root { --background: oklch(1 0 0); --foreground: oklch(0.145 0 0);
  --primary: #FCBA02; --primary-foreground: #110F2B; --radius: 0.625rem; /* ... */ }
.dark { /* dark token overrides */ }

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
  html { @apply font-sans; }
  button:not(:disabled), [role="button"]:not(:disabled) { cursor: pointer; }
}
```

`@theme inline` entries become utilities (`bg-brand-accent`, `text-brand-teal`, `font-heading`). `components.json`:
shadcn style `radix-nova`, `rsc: true`, baseColor `neutral`, css `src/app/globals.css`, icon library `lucide`,
aliases `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`.

**`src/app/layout.tsx`** (fonts via CSS variables on `<html>`):

```tsx
import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { title: 'ForEyes Connect', description: 'ForEyes Solutions Platform' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overscroll-none">{children}</body>
    </html>
  );
}
```

(The real file also wraps children in `<ClerkProvider><Providers>` - app-only, drop for the marketing site. It sets no
`metadataBase`, no `viewport`, no OG image: add those.)

**`tsconfig.json`**: `target ES2017`, `lib [dom, dom.iterable, esnext]`, `strict`, `noEmit`, `module esnext`,
`moduleResolution bundler`, `jsx react-jsx`, `incremental`, `isolatedModules`, `resolveJsonModule`,
`types: ["@cloudflare/workers-types"]`, `plugins: [{ name: "next" }]`, `paths: { "@/*": ["./src/*"] }`,
`include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next/dev/types/**/*.ts", "**/*.mts"]`,
`exclude: ["node_modules", "workers"]`. Add `"**/*.mdx"` handling via `@types/mdx` if using MDX.

**`.gitignore`** entries worth copying: `/.next/`, `/out/`, `next-env.d.ts`, `*.tsbuildinfo`, `.env*`,
`/.open-next/`, `/.wrangler/`.

**`AGENTS.md` / `CLAUDE.md`**: `CLAUDE.md` is the single line `@AGENTS.md`; `AGENTS.md` tells agents to read
`node_modules/next/dist/docs/` first (the convention `create-next-app` generates - G/ai-agents.md).

---

## 15. Static-site checklist

1. `cacheComponents` unset; no `cookies()` / `headers()` / `searchParams` prop / `connection()` in any page or layout.
2. Every dynamic segment: `generateStaticParams` returning all slugs + `export const dynamicParams = false`.
3. Optional guard on pages: `export const dynamic = 'error'`.
4. `useSearchParams()` only inside `<Suspense>`.
5. `metadataBase` in root layout; `sitemap.ts`, `robots.ts`, icon + OG image files in `app/`.
6. `<Image>`: static imports, `sizes`, `preload`/`loading="eager"` for the LCP image (not `priority`); decide
   `unoptimized` vs loader for Cloudflare.
7. Contact form = Client Component + `POST app/api/contact/route.ts`; it is the only `ƒ` line in `next build` output.
8. No `webpack()` config, no function-valued MDX plugins, `turbopack.root` pinned.
9. CI: `eslint`, `next typegen && tsc --noEmit`, `next build`; deploy with
   `opennextjs-cloudflare build && opennextjs-cloudflare deploy`.
