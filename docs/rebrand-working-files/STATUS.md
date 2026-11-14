# Rebrand build: where it was paused

Paused on 2026-11-14 at the owner's request. Everything here is committed and
pushed; nothing is half-saved outside the repo.

## Finished

- Design system, header, footer, logo, homepage (with illustrations, the
  founder portrait and the video band).
- Shared page sections, animation building blocks, lead form (Netlify Forms),
  booking calendar embed, picture library (23 illustrations, 6 photos, 3 video
  loops), sitemap, robots, social image, icons, legacy URL redirects.
- Built: Bookkeeping, Insurance Billing, About, Our Team, Who We Serve hub and
  its three audience pages, Pricing Calculator, Blog index, blog posts,
  Resources hub.

## Not finished

- **Not built yet:** Services hub, Accounts Payable, Payroll, Practice
  Consulting, FAQs, Contact, Privacy Policy, 404 page. (Their builders were
  stopped part-way; partial files may exist under `src/content/` and
  `src/components/pages/`.)
- **Built but not reviewed:** every inner page. The review pass (visual check
  at desktop and phone widths, copy and fact check, accessibility) had only
  started on Bookkeeping.
- **Owner answers not yet applied to pages** (they are recorded at the end of
  `build-brief.md`):
  - Insurance Billing pricing: medical plan billing 8% of net receipts; vision
    plan billing 5% of net receipts plus applicable lab fees. Needs to go on
    the Insurance Billing page, into the pricing calculator and the FAQ.
  - Calculator units: Payroll per employee, Accounts Payable per bill per month.
  - Location wording: fully remote, headquartered in Nashville; Murfreesboro
    is the mailing address only. (Footer already updated.)
  - Billing testimonials (Patty Haley, Kim Crance) are in
    `src/content/testimonials.ts` but not yet placed on the Insurance Billing
    page; the Bookkeeping page should switch to `bookkeepingTestimonials`.
- Pictures and video loops are on the homepage only; inner pages still use
  coded graphics alone.
- Homepage "Smart Reads for ODs" blog teaser not yet added.
- Final checks not run: production build, full-site link check, lint.

## To resume

`build-brief.md` is the instruction set each page builder and reviewer works
from. `tools/build-pages-workflow.js` is the script that ran them. `research/`
holds the voice guide, pricing logic, visual audit and content inventories;
`site-crawl/` is the text of every page of the current site.
