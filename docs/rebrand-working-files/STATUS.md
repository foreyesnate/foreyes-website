# Rebrand build: status

Updated 2026-11-16. Everything here is committed and pushed.

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

## Final reviews (finished 2026-11-16)

1. **Cross-site visual sweep.** All 21 routes viewed at 1440 and 390, key
   templates at 768 and 1024. Fixed: side columns that stuck with their bottoms
   cut off on short screens (`ui/StickyColumn.tsx`), footer and audience
   layouts at tablet widths, a stone gutter above the call-to-action band, and
   pictures repeated across pages. Unused pictures: `spot-billing`,
   `step-bill`.
2. **Accessibility and performance audit.** Fixed: text contrast (155 measured
   failures down to 17, all inside decorative graphics), focus rings that
   follow the surface colour (534 weak or missing down to 0), headings
   invisible without JavaScript, the About timeline under reduced motion, the
   mobile menu focus trap, broken `aria-controls`, overflow at 320px, and
   lead-form error handling. Hero entrance is now CSS (`motion/Appear.tsx`),
   so throttled-mobile LCP on the production build is about 2.3-2.5s (was
   3.8-4.8s). Image `sizes` tightened; phones get a 720p homepage clip.

Left open by the audit:

- Looping illustrations and the ticker stop under reduced motion but have no
  on-page pause control (WCAG 2.2.2). Adding one is a design decision.
- Two decorative "eye chart" graphics (blog index, FAQ) keep deliberately
  defocused text below 3:1 contrast.
- Motion (52 KB gzipped) ships on every page through the header.
- The 404 page gets no font preloads, so it shifts slightly (CLS 0.065).
- `books.mp4` (675 KB) was not re-encoded.

## Waiting on the owner

See the decision checklist in the session summary (prices carried over from
the old calculator, implementation fee scope, sales tax filing add-on,
Discovery Call length, privacy policy legal review, vision statement, team
bios and titles, blog edits and the draft tax post, production domain).

## Not verifiable from the build environment

- Netlify Forms delivery (needs a test submission on the deployed site).
- The embedded booking calendar (its host is not reachable from here).
