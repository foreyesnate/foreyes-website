# Rebrand build: status

Updated 2026-11-15. Everything here is committed and pushed.

## Done

- All 19 routes plus 10 blog posts are built and individually reviewed:
  home, Services hub, Bookkeeping, Insurance Billing, Accounts Payable,
  Payroll, Practice Consulting, Who We Serve (hub and three audience pages),
  Pricing Calculator, About, Our Team, Resources, Blog, FAQs, Contact,
  Privacy Policy, 404.
- Owner answers applied site-wide: Insurance Billing at 8% (medical) and 5%
  (vision, plus applicable lab fees) of net receipts; payroll per employee and
  bill pay per bill per month; fully remote, headquartered in Nashville; the
  two billing testimonials.
- Cross-site consistency and facts review: finished (prices, timelines,
  service descriptions, CTA labels and titles now agree across pages).
- Checks passing at this commit: production build (all pages static),
  type-check, lint, and a crawl of 29 pages with no broken links or anchors,
  no console or hydration errors (normal and reduced motion), no overflow at
  390px, and all legacy redirects resolving.

## Paused part-way (finish later)

Both were stopped at the owner's request; any edits they had already made are
committed. `tools/final-review-workflow.js` holds their full instructions.

1. **Cross-site visual sweep** (stopped near the end). Remaining: confirm the
   look is consistent across pages at 360/390/768/1024/1280/1440, check the
   header navigation between 1024 and 1280, de-duplicate pictures used on
   several pages, check the pricing calculator's pinned mobile bar, and the
   homepage testimonial panel that can look empty mid-transition.
2. **Accessibility and performance audit** (stopped early). Remaining:
   measured colour contrast, accessible names, keyboard order and focus,
   reduced-motion and no-JavaScript checks, zoom to 200%, largest-contentful-
   paint and layout-shift measurements, image sizes versus rendered size,
   oversized files in `public/`, and form robustness.

## Waiting on the owner

See the decision checklist in the session summary (prices carried over from
the old calculator, implementation fee scope, sales tax filing add-on,
Discovery Call length, privacy policy legal review, vision statement, team
bios and titles, blog edits and the draft tax post, production domain).

## Not verifiable from the build environment

- Netlify Forms delivery (needs a test submission on the deployed site).
- The embedded booking calendar (its host is not reachable from here).
