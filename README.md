# ForEyes Books & Billing website

The marketing site for ForEyes Books & Billing (a trade name of For Eyes Solutions, LLC):
bookkeeping and insurance billing for eyecare practices.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and
[Motion](https://motion.dev). Every page is statically rendered.

## Run it

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000. Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build (also type-checks) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

> This Next.js version differs from older ones in places (see `AGENTS.md`).
> The docs that match the installed version are in
> `node_modules/next/dist/docs/`.

## Where things live

```
src/app/                 Routes. One folder per URL.
src/content/             The words and data: edit copy here, not in layouts.
  site.ts                Company facts, phone, email, navigation.
  testimonials.ts        Client quotes.
  team.ts                Team members and bios.
  faqs.ts                Every FAQ, grouped by topic.
  pricing.ts             Pricing calculator numbers.
  art.ts                 Picture and video catalogue (with alt text).
  services/, audiences/  Copy for each service and audience page.
content/blog/*.md        Blog posts (Markdown with front matter).
src/components/
  ui/                    Buttons, layout, icons, picture frames.
  motion/                Animation building blocks.
  sections/              Page sections shared across pages.
  graphics/              Coded, animated explainer graphics.
  pages/                 Components that belong to one area of the site.
  site/                  Header, footer, logo, lead form, booking calendar.
public/art/              Illustrations, photos and video loops.
public/brand/            Logo files.
public/team/             Team photos.
```

## Common edits

- **Change a phone number, address or the booking link:** `src/content/site.ts`.
- **Change a price in the calculator:** `src/content/pricing.ts`.
- **Add a blog post:** add a Markdown file to `content/blog/` with the same
  front matter as the others. `draft: true` keeps it off the site.
- **Add a testimonial or team member:** `src/content/testimonials.ts`,
  `src/content/team.ts`.
- **Add a picture:** put the file in `public/art/…` and add it to
  `src/content/art.ts`. Use it with `<Illustration name="…" />` or
  `<Photo name="…" />`.

## Design system

Tokens are in `src/app/globals.css`.

| Colour | Hex | Use |
| --- | --- | --- |
| Navy | `#415D9E` | Primary surfaces, links |
| Teal | `#51A0AD` | Primary surfaces, accents (carries dark text, not white) |
| Stone | `#F4F4F8` | Page background |
| Yellow | `#FCBA02` | Accent: the one thing on screen to act on or notice |
| Dark Navy | `#110F2B` | Text, dark surfaces |

Headings use Parkinsans (the typeface in the logo); body copy uses Figtree.
Both are self-hosted in `src/fonts/`.

Motion follows one idea: things come into focus. Use the building blocks in
`src/components/motion/` rather than one-off animations. Everything respects
the visitor's reduced-motion setting.

## Forms and booking

- Lead forms (`src/components/site/LeadForm.tsx`) post to **Netlify Forms**,
  the same service the previous site used. `public/__forms.html` registers the
  form fields with Netlify at deploy time. On a local dev server there is no
  form handler, so submissions are treated as sent to let you preview the flow.
- "Book a Discovery Call" opens the contact page, which embeds the existing
  scheduling widget (`bookingWidgetUrl` in `src/content/site.ts`).

## Deploying

`netlify.toml` is set up for Netlify, where the previous site is hosted.
Netlify detects Next.js and needs no further configuration.

Old URLs from foreyessolutions.com are redirected in `next.config.ts`
(renamed services, the retired tax pages, and so on). If the site moves to a
new domain, change `url` in `src/content/site.ts`.
