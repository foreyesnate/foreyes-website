# ForEyes Solutions - visual audit of the current site

Audited 2026-11-14 against the live site https://foreyessolutions.com (Next.js front end, Sanity CMS, built on Wise Digital Partners' "NEST" platform - "Powered by NEST" is in the footer) plus the GoHighLevel landing page start.foreyessolutions.com/invision.

Method: Playwright/Chromium full-page captures at 1440px and 390px for 10 pages, each split into viewport-height tiles and looked at; computed styles read from the live DOM; hex values and scale pulled from the two production stylesheets; CTAs clicked (nothing was submitted or booked).

- Screenshots: `/tmp/claude-0/-home-user/9c3d5c24-e0be-5c4e-b814-8362260e483c/scratchpad/site/shots/` - `<page>-d-full.png` / `<page>-m-full.png`, tiles `<page>-d-tNN.png` (1440x1300) and `<page>-m-tNN.png` (390x1688), mobile review sheets `<page>-m-sheetN.png`, UI states `ui-*.png`. Pages: home, bookkeeping, billing, about, team, startups, pricing, faq, blog, post (= /blog/eyecare-bookkeeping-outsourcing).
- Raw probe data: `shots/_probe.json`, `shots/_probe2.json`; CSS: `site/raw/css/`.
- Assets + manifest: `/tmp/claude-0/-home-user/9c3d5c24-e0be-5c4e-b814-8362260e483c/scratchpad/site/assets/manifest.md`
- Capture caveat: the header is `position: sticky`, so in some mobile full-page captures it is painted mid-page over the hero. That is a screenshot artefact, not a live bug (see `ui-mobile-top-m.png` for the true first screen).

---

## 1. What the design actually is

### 1.1 Colour (hex from CSS custom properties, confirmed in computed styles)

Brand colours in use:

| Token | Hex | Where it shows up |
|---|---|---|
| `--color-dark-navy` | `#110F2B` | Logo wordmark, footer, dark bands (intro band, testimonials, hero bands on inner pages), text on yellow buttons |
| `--color-navy` (really a mid blue) | `#415D9E` | Default button fill, "Remote, Nationwide Assistance" band, service-card titles, active tab |
| `--color-yellow` | `#FCBA02` | "Get Started" button, accent buttons on dark bands, closing CTA band, calculator estimate card, map pins, "Our (20/20) Vision" heading |
| `--color-teal` | `#51A0AD` | Logo iris, every icon, "Proof in Practice" heading, blog category labels, 4px left rule on feature blocks, FAQ divider lines, "More ways" card titles |
| `--color-brand-secondary` | `#EDF0FC` | Pale lavender band ("Services With Vision", process sections) |
| `--color-stone` | `#F4F4F8` | Pale grey band (core values, FAQ page, blog post background `#F3F4F6`) |
| `--color-content-dark` | `#000512` (also `#00080B`) | Headings and body text on light |
| white | `#FFFFFF` | Page background, cards |

Off-palette colours that leak in:

- Inline text links are `#3957DF` (`--color-primary-600`, a bright royal blue, bold weight) - a fourth blue that is not in the logo or buttons.
- Nav link hover is orange `#F27F0D` with underline - orange appears nowhere else.
- FAQ accordion chevrons are green `#5EBB46` (`--color-primary-main`). The stylesheet still carries the platform template's green "primary" ramp (`#5EBB46`, `#7EC86A`, `#38702A`), a red-orange `#DB4B1B`, lilac `#FBF2FF` and a Tailwind blue ramp (`#476FEA` ... `#1B2050`).
- The drawer header uses class `bg-golden-rod`, which is not defined (see 1.10).

Contrast spot checks (WCAG ratio): white on `#415D9E` 6.4 (pass); navy on yellow 10.8 (pass); teal `#51A0AD` on white 3.0 (fails for the 14px blog category labels and teal card titles); white on yellow 1.7 (fails - "Your Estimate", "Per Month" and the disclaimer inside the calculator's yellow card); link blue on dark navy 3.2 (fails for the bold links in the navy intro band); green chevron on white 2.4; orange hover on white 2.7; inactive drawer tab grey `#9CA3AF` on white 2.5.

### 1.2 Typography

- One family for everything: **Parkinsans** (Google Fonts variable, `wght 300..800`), loaded via `fonts.googleapis.com/css2?family=Parkinsans:wght@300..800`. `--font-heading` and `--font-body` are both `"Parkinsans", sans-serif`. It is a geometric sans with quirky details (single-storey "a", descending "y" with a curl) - it reads a lot like Poppins with more personality. The logo wordmark is a different, lighter geometric face (outlined paths).
- **Inter** (`wght 400..600`) is also loaded and used only in odd corners: the footer copyright row, the outline buttons on the Startups page, and the embedded booking widget. The `body` element itself falls back to the system UI stack, so any unstyled text is a third face.
- Type scale (desktop >=1024px / mobile), line-height 120% for h1-h3, 130-140% below:

| Role | Desktop | Mobile | Weight |
|---|---|---|---|
| h1 | 56px | 40px | 600 |
| h2 | 48px | 36px | 500 |
| h3 | 36px | 30px | 500 |
| h4 | 30px | 24px | 500 |
| h5 | 24px | 20px | 500 |
| h6 | 20px | 18px | 500 |
| Lead / hero paragraph | 18px | 18px | 400 |
| Body | 16px / 24px line | 16px | 400 |
| Small (footer links, labels) | 14px | 14px | 400-500 |
| Button | 18px / 24px | 18px | 500 |
| Nav link | 16px | 20px bold in mobile menu | 400 |

- Observed quirks: the home hero headline ("Bring your financials into focus") is a `<p>` at 56px/500 with 1.8px letter-spacing, while the first real `<h1>` is the 48px line in the navy band below it. Section headings on inner pages are 48px even inside the 800px blog column, sitting directly on 16px body copy (a 3:1 jump with nothing in between). Feature-block headings in the same grid alternate between weight 500 and 700 (e.g. "Custom Chart of Accounts" vs "Accurate Transaction Categorization" on /services/bookkeeping) because bold is applied ad hoc in the CMS rich text. Heading colour varies by section with no rule: near-black, white, teal, yellow, mid-blue.

### 1.3 Layout grid and width

- Content container: `max-width: 1272px` (`max-w-318`), centred, which at 1440px gives 84px side margins. Mobile gutter is 16px (some sections 32px).
- Default section pattern: two columns of 596px with an 80px gap (text one side, image the other), alternating sides down the page.
- Card grids: 3-up (397px columns, 40px gap) for home service cards top row, blog cards and team; 2-up for the bottom service-card row and feature blocks; 4-up (288px) for "Why us" and "More ways we can support your practice".
- Outliers that break the grid: the closing yellow CTA band and the footer use a `max-width: 1512px` container with 16px padding, so at 1440px their content starts 16px from the edge while everything above starts at 84px. The blog post body is a centred 800px column; the pricing calculator sits in a 1240px two-card row; the Startups page uses a 708px text column plus a sticky "Jump To" sidebar; the testimonial text block is 720px, centred.
- Breakpoints: 768 / 1024 / 1280 / 1520px. The 1024px switch is the real one (mobile nav <-> desktop nav, stacked <-> two-column).

### 1.4 Section rhythm

- Section padding is small and uniform: 60-64px top and bottom (80px on a few). Sections run 400-1,200px tall; pages are long - home is 8,258px at desktop and ~14,000px on mobile; service pages 9,300-9,600px desktop and ~17,000px mobile.
- Background sequence on home: white hero -> dark navy intro -> white ("Why") -> white (audience) -> lavender (services) -> dark navy (testimonial) -> white (about) -> mid-blue (nationwide) -> white (tools) -> white (blog) -> yellow CTA -> dark navy footer. Five different band colours on one page.
- Every service page uses the same 10-block template in the same order: hero -> navy intro with high-five photo -> "Full-service..." feature blocks -> "Why us" 4-up -> process cards on lavender -> testimonial -> FAQ accordion -> pricing-calculator teaser -> "More ways" cross-sell 4-up -> nationwide map -> blog cards -> yellow CTA -> footer. The same testimonial carousel, map band, blog row and CTA band repeat on ~16 pages.

### 1.5 The wavy "edge decorator" dividers

- They are 8 static SVG files (`/images/edges/*.svg`, saved in `assets/decor/`), each `1512x80` (one is 95, one 73 tall): a white rectangle with one huge ellipse (`rx 1326`) in the band colour, giving a single shallow convex or concave arc across the full width. Not waves - one gentle bowl/dome per seam.
- Variants: dark-navy bottom, dark-navy "inward" (concave, used under inner-page heroes so the hero image overlaps the curve), mid-blue top and bottom, white top into lavender, yellow top (closing CTA) and yellow bottom into the footer.
- Because the colours are hard-coded in the files (white + one fill), they only work between specific pairs of backgrounds; where a coloured band meets a non-white band you get a visible white sliver or a hard straight edge instead (e.g. lavender -> navy on home is a straight line while navy -> white is curved). The curve appears on roughly half the seams, so the rhythm reads as inconsistent rather than as a system.

### 1.6 Cards and buttons

Buttons (one component, three skins):

- Shape: full pill, `border-radius: 100px`, `padding: 10px 24px`, 3px border in the fill colour, 50px tall, Parkinsans 18px/500, no shadow, no icon.
- Primary (default): fill `#415D9E`, white text. Accent: fill `#FCBA02`, text `#110F2B` (header "Get Started" and most buttons on dark bands).
- Hover: background goes transparent and the text takes the border colour (`transition-colors 300ms linear`).
- A fourth style appears only on the Startups page: small outline buttons, 1px black border, ~8px radius, Inter bold 16px ("Be Confident in Your Numbers", "Claim Control").
- Blog category filter: dark-navy pill for the active item, bold plain text for the rest.
- Labels are inconsistent for the same action: "Get Started", "Book a Discovery Call", "Book a discovery Call" (Startups sidebar), "Connect With Us", "Schedule" (mobile menu) all open the same drawer.

Cards:

- Image cards (services, team): photo with `border-radius: 20px`, no border or shadow, title underneath in mid-blue 30px (services) or bold 18px black + 16px role (team). No description, no arrow, no hover state beyond the cursor.
- Process cards: white, `border-radius: 12px`, no shadow, on the lavender band; teal icon + 20px title + body, with a giant ghost step number (about 249px, very pale teal) in the bottom-right corner that runs under the body text.
- Feature blocks: white with a 4px teal left border and 32px padding, in a 2-up grid.
- Value cards (About): white, rounded (about 12px), no shadow, on pale grey.
- Blog cards: square-cornered image (no radius - the only un-rounded photos on the site), teal 14px category, 24px title, 16px excerpt, no date, no author.
- Pricing calculator: a white card with a large corner radius and toggle switches per service, beside a yellow estimate card with the same radius.
- FAQ accordion: bold 20px question, 1px teal top rule, green chevron.

### 1.7 Imagery

- Almost entirely **generic stock photography**: smiling office workers with laptops, tablets and printouts; several "team high-five" shots; a few eyecare-flavoured ones (people trying on glasses, slit-lamp exams, an optical shop). Nothing shows ForEyes' own people at work, a real client practice, or the actual product (reports, the client portal, a P&L, a claims dashboard). There are **no screenshots, no device mockups, no charts or data visualisation** anywhere.
- Home hero: a stock photo of a smiling woman in a cream blazer holding an open document folder; she is cut out so her head breaks above a rounded photo frame, with pale-yellow concentric rings behind her head. Centre-aligned under the headline, 833px wide.
- Signature treatment: a **concentric broken-ring motif** (three partial arcs, like an iris or a focus ring). It is the background of the testimonial section (`testimonial-bg.svg`) and is baked into many photos (yellow/gold behind high-fives, grey-blue behind cut-out people on lavender tiles).
- Second treatment: cut-out people on a pale lavender rounded tile (Startups hero, pricing teaser).
- Illustration: exactly one - a flat teal-blue USA silhouette with three yellow map pins, repeated on ~16 pages.
- Real photography: Wade Weisz's portrait (outdoor, brick storefront) with his handwritten signature on /about-us, and seven team headshots on /about-us/our-team (mixed backdrops and crops; an eighth person shows a grey placeholder).
- Problems visible in the images themselves: the "How It All Started" photo on /about-us has **Adobe Stock watermarks** across it; the "About Us / Meet the Team" group photo is five people in lab coats holding an eye chart with garbled letters (AI-generated look, and not the actual team); the sample blog post's hero photo is **horizontally flipped** (keyboard and invoice text are mirrored); blog thumbnails look AI-generated; "Multi-Location Practices" is illustrated with a generic glass office tower.
- Technical: photos are exported as PNGs (often 8-bit palette) with rounded corners and ring graphics flattened in, served through `/_next/image` as WebP. Alt text is mostly "desktop-image", "mobile-image", "image", "icon" or empty.

### 1.8 Iconography

- One consistent set: ~60 solid glyph icons (Font Awesome-style) at 30x30, all teal `#51A0AD`, stored as individual SVGs in the CMS. Used inline to the left of 20px headings. Clean and consistent, but generic (lightbulb, handshake, clock, puzzle piece, calendar).
- UI icons come from a single `/sprite.svg` (chevrons, phone, calendar, envelope, arrows, social, a multi-colour Google logo used as the review-source badge under testimonials).
- The eye icon from the logo is used once as an icon ("Rooted in Eyecare") and as the favicon; it is not used as a system element elsewhere.

### 1.9 Motion

- Very little. No scroll-reveal, no keyframe animations (`document.getAnimations()` returns 0; the CSS has no `@keyframes`).
- Button/link colour transitions (300ms linear); nav dropdown appears on hover with a 180-degree chevron flip; underline grow on some links; the contact drawer slides in from the right (width transition, 500ms ease-in-out).
- Testimonial carousel: `react-slick`, one slide at a time, 4 slides, infinite loop, **no autoplay** (sampled for 45s - it never advances), with left/right arrow buttons and dots. The dots are near-black on dark navy (effectively invisible) and slides differ in height with quote length. Most visitors therefore only ever read the first quote.
- A third-party accessibility overlay button (yellow circle, person icon) floats at the right edge of every page and overlaps content on mobile.

### 1.10 Header, navigation, footer

Header (desktop):

- Sticky, white, 72px tall, light shadow; padding 40px. Logo left (168x37), nav right-aligned, then the yellow "Get Started" pill.
- Nav: Services (dropdown: Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services, Payroll) / Who We Serve (Optometrists, Multi Location Practices, Startups) / Pricing Calculator / About (Our Team) / Resources (Blog, FAQs). 16px regular; dropdowns are plain white panels with a drop shadow, opened on hover; hover colour is orange.
- No phone number, no utility bar, no client-login link on desktop.

Header (mobile):

- Phone icon (tel: link) left, logo centred, hamburger right; all icons bright blue. The menu slides in as a pale panel about 310px wide with bold 20px items, chevron accordions, then a yellow "Call" pill and a full-width blue "Schedule" pill (labels used nowhere else).

Footer:

- Dark navy `#110F2B`, preceded by the yellow CTA band and a curved yellow edge. White logo left; five columns right: Services (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services - Payroll is missing), Who We Serve, Get To Know Us (About, Team), Resources (Pricing Calculator, Blog, FAQs), Contact (2429 Curbow Dr, Murfreesboro, TN 37127 / 844-505-3937 / hello@foreyessolutions.com / Hours Mon-Fri 8AM-5PM CT).
- Column headings 16px bold white; links 14px white at 70% opacity. Bottom row: "(c) 2026 ForEyes Solutions", Privacy Policy, "Powered by NEST" (in Inter).
- No social links, no newsletter, no trust badges, no secondary CTA.
- Mobile: everything centre-aligned in one long column (~900px tall).

### 1.11 The contact drawer ("Let's Talk Eyecare")

- It is a right-hand slide-over drawer, not a centred modal: full height, `max-width: 720px` (full width on mobile), white, over a 51%-black backdrop. It is mounted on every page and animates its width from 0.
- Top strip: phone icon + **844-505-3937** (tel: link) and a close button. Two tabs with icons: **Book a Call** (calendar icon, default) and **Send a Message** (envelope); the active tab is mid-blue with a 4px underline.
- Heading "Let's Talk Eyecare" (h3-size, centred), then "Have a question or ready to learn how we can help your practice?" (the Message tab adds "Send us a message or book a free discovery call today.").
- **Book a Call tab** = an embedded scheduler iframe:
  - Provider: **GoHighLevel / LeadConnector** booking widget, white-labelled on the firm's own domain.
  - URL: `https://link.foreyesbookkeeping.com/widget/booking/Bs6Chzybusu2eycw8H5p` (loader script `https://link.foreyesbookkeeping.com/js/form_embed.js`; it calls `backend.leadconnectorhq.com`).
  - Content: eye icon, "Discovery Call with ForEyes Solutions", 45 min, timezone selector, description ("Discover the health of your practice's finances with a Discovery Call! ... Schedule your free Discovery Call today"), then a month calendar and time slots. It renders in its own Inter-based styling, not the site's.
- **Send a Message tab** = a native form rendered by the site itself (no iframe; the submit endpoint was not exercised). Fields, all with labels above and blue 1px outlined inputs:
  1. Name (text, required)
  2. Phone Number (tel)
  3. Email Address (email)
  4. Message (optional) (textarea)
  5. "Submit" pill button (mid-blue)
  No service selector, no practice name, no consent text, no visible spam protection. (Not submitted during the audit.)
- Defects: the close "X" is the sprite's white icon on a white strip (the `bg-golden-rod` class it relies on does not exist), so **the close button is invisible** at the top right; clicking the backdrop does close it. No `role="dialog"`/`aria-modal`, and the page behind still scrolls.

### 1.12 What the main CTAs do

| CTA | Where | Behaviour |
|---|---|---|
| **Get Started** (yellow) | Header on every page; navy intro band; calculator card | A `<button>`, no navigation. Opens the "Let's Talk Eyecare" drawer on the Book a Call tab (GoHighLevel/LeadConnector scheduler above). URL does not change. |
| **Book a Discovery Call** (blue or yellow) | Home hero, service-page intro bands, About hero, pricing hero, yellow closing band on every page, Startups sidebar | Exactly the same: opens the same drawer on the Book a Call tab. |
| **Connect With Us** | "Remote, Nationwide Assistance" band | Same drawer. |
| Mobile menu **Call** / **Schedule** | Mobile nav panel | tel:844-505-3937 / same drawer. |
| Who We Serve, Explore Our Services, More About Us, Calculate Your Price Now, Get Answers, More FAQs, Pricing Calculator | Section buttons | Ordinary links to internal pages. |

So there is one conversion path - a GoHighLevel calendar inside a drawer - reached by five differently worded buttons. There is no dedicated, linkable booking or contact page: **`/book-a-call` and `/contact` both render the 404 page** (and the 404's browser title is "Page Not Found | EHS Navigator", another client's name left in the template).

---

## 2. Frank critique

### 2.1 What feels dated, generic, cluttered or inconsistent

1. **It looks like a template, because it is one.** The same NEST page skeleton (image-right hero, arc divider, alternating 50/50 blocks, icon grid, numbered process cards, carousel, FAQ, map, blog row, yellow band) is stamped onto every page. Nothing on screen could only belong to an eyecare bookkeeping and billing firm.
2. **Stock photography carries the whole visual identity** and it is the weakest part: interchangeable smiling-office imagery, repeated "high-five" shots for bookkeeping, billing, consulting and AP alike, a watermarked comp, an AI lab-coat "team", a mirrored blog photo. For a firm whose pitch is trust and accuracy, visibly careless imagery works against the message.
3. **No proof of the work.** A bookkeeping and billing firm never shows a report, a close calendar, a KPI, a before/after A/R figure or the client portal. The only numbers on the site are in the pricing calculator.
4. **Colour is undisciplined.** Navy, mid-blue, yellow, teal, lavender and grey bands all on one page, plus a stray royal-blue link colour, orange hover and green chevrons. Yellow is spread across buttons, a full band, headings and pins, so it no longer signals "the action".
5. **Hierarchy is flat.** Every section opens with a 48px medium-weight heading and 16px text; there are no eyebrows, no pull-figures, no intermediate sizes. Headings are frequently Title Case SEO phrases ("Bookkeeping for Optometrists and Eyecare Professionals") that wrap to four lines.
6. **The home hero is weak.** A small centred headline, one line of copy, one button and a stock portrait; the actual positioning statement and the only `<h1>` are below the fold in a navy band. No trust signal (ODs on Finance, review count, client count) is visible on the first screen.
7. **Dividers and containers are inconsistent** - curved arcs on some seams and straight edges on others; the CTA band and footer are on a different grid from the rest of the page.
8. **Testimonials are buried in a carousel**: one quote at a time, 56px avatars, long centred paragraphs of white text over ring graphics, invisible dots. Strong, specific quotes from named ODs are the site's best content and are given the least scannable presentation.
9. **Endorsements are text only.** "Endorsed by ODs on Finance and trusted by TSO, ALLDocs, Vision Source practices" sits in a 16px paragraph under an icon. No logos, no badge strip.
10. **Unfinished details are live:** the editor's note "Keep the Ryan Corte, OD quote first on this page." is printed in the testimonial intro on 14 pages (recorded as a finding, not acted on); "Bookeeping" is misspelt in the pricing calculator; a team member has a placeholder image; `/contact` and `/book-a-call` are 404s; the OG image URL 404s on every page; the office is "Franklin, TN" in the FAQ and "Murfreesboro, TN" in the footer; the nationwide band's copy talks about Bill.com and Gusto on pages that have nothing to do with AP or payroll; the billing page's testimonial intro talks about "dependable books".
11. **Three typefaces by accident** (Parkinsans, Inter, system UI) and bold applied by hand inside headings.
12. **Accessibility:** low-contrast teal and white-on-yellow text, invisible drawer close button, meaningless alt text, an overlay widget instead of fixes.

### 2.2 What is working - keep as brand equity

- **The name and the eye.** "ForEyes" + the line-drawn eye with teal iris is distinctive and already on the favicon. Keep the wordmark and icon; redraw only the descriptor for "Books & Billing".
- **The focus-ring motif.** The concentric broken arcs are the one ownable graphic idea (focus, lens, iris, clarity). It deserves to be a real system (masks, progress, section markers, loading states) instead of being flattened into stock photos.
- **Core palette: dark navy `#110F2B` + yellow `#FCBA02` + teal `#51A0AD`.** High contrast, recognisable, not the usual accounting blue/green. Navy-on-yellow is a strong, accessible CTA pairing. Keep these three; demote or drop mid-blue `#415D9E`, lavender and the stray link blue.
- **Pill buttons and the generous 20px image radius** - friendly without being childish.
- **Parkinsans.** It has more character than Poppins/Inter and is already associated with the brand in headings. It is tiring as 16px body copy over long pages; keep it for display and pair it with a calmer text face.
- **Vision wordplay in the voice**: "Bring your financials into focus", "Proof in Practice", "Services With Vision", "Our (20/20) Vision", "See Further. Move Faster. Grow Smarter.", "Smart Reads for ODs".
- **The founder story and face.** A practising OD of 25+ years with a real portrait and signature is the strongest trust asset on the site.
- **Named testimonials with headshots** and the Google source badge.
- **The pricing calculator** - a genuinely differentiating, useful tool that deserves better staging.
- **The single conversion mechanism** (drawer with Book a Call / Send a Message + phone) is a good pattern; the GoHighLevel calendar and form are already wired up.
- **Numbered process steps** and the "what you do / what we do" clarity on service pages; FAQs per service.

### 2.3 Top 10 opportunities for the redesign

1. **Lead with the two flagships.** Make Bookkeeping and Insurance Billing the visual centre of the home page (two large, distinct panels with their own outcome and proof), and present AP, Payroll and Practice Consulting as a compact secondary row. Remove Tax and "Accounting" from nav, cards, footer, calculator and cross-sell blocks.
2. **Replace stock with evidence.** Show the product of the work: a sample monthly P&L built on the eyecare chart of accounts, the "reports by the 10th business day" close timeline, a claims/A-R aging snapshot, clean-claim and days-in-A/R figures. Designed data artefacts beat photos of people pointing at laptops.
3. **Turn the ring motif into the brand system** - as a lens/focus device around key numbers, as section markers and step indicators, as a subtle hero graphic - and stop baking it into images.
4. **Tighten the palette to navy + yellow + teal on warm neutrals**, with yellow reserved for the primary action and one highlight per screen. One link colour, one hover behaviour, AA contrast everywhere.
5. **Build a real type hierarchy.** Larger, tighter display headlines in sentence case; eyebrow labels; a 20-22px lead size; a calmer body face; a consistent 2-3 weight system; headings that say something ("Books closed by the 10th business day") rather than keyword strings.
6. **Rebuild the hero around a claim and proof**: headline, one-sentence value, primary CTA plus a secondary ("See pricing"), and immediate trust signals - "Founded by an OD", ODs on Finance endorsement, review count, practices served - with real logos once supplied.
7. **Give social proof a proper layout**: a featured quote (Ryan Corte, OD first, per the client's own note) with large portrait, practice name and outcome, plus a grid of shorter quotes; retire the one-at-a-time carousel.
8. **Use real people consistently.** Lead About/Team with Wade's portrait and story; reshoot or at least uniformly crop and grade team headshots; fill or hide the placeholder; drop the lab-coat image and the watermarked photo.
9. **One CTA label and a real destination.** Standardise on "Book a Discovery Call", keep the drawer for speed, and add working `/book-a-call` and `/contact` pages (linkable from email, ads and INVISION columns). Fix the drawer's close button, add a service selector to the message form, and restyle or frame the GoHighLevel embed so it does not look foreign.
10. **Shorten and vary the pages.** Cut the service template from ~12 stacked sections to about 6 purposeful ones; stop repeating the map, blog row and testimonial on every page; give each flagship service page its own structure (bookkeeping: monthly cycle and deliverables; billing: claim lifecycle and denial recovery). Feature the pricing calculator as a designed product moment rather than a stock-photo teaser.

---

## 3. Mobile-specific problems (390px)

- **Extreme length.** Home ~14,000px; bookkeeping ~17,000px; billing ~16,800px; startups ~16,400px. That is 17-20 screens of single-column scrolling with full-size stock images between every block.
- **"Tools That Take the Guesswork Out" cards break**: the image and text stay side-by-side in the narrow column, text wraps to 2-3 words per line, and the pill button ("Calculate Your Price Now") wraps to three lines and is clipped by the right edge of the screen.
- **Inconsistent gutters and alignment**: some sections use 16px side padding, others 32px, so left edges jump from section to section; hero headings are centred on service pages while everything below is left-aligned; "Smart Reads for ODs" is centred while other headings are left.
- **2px horizontal overflow** on home and about (document renders 392px wide in a 390px viewport); the only elements past the right edge are the off-canvas drawer's children, so that is the likely cause.
- **Pricing calculator**: the yellow "Your Estimate" card becomes a sticky bottom sheet about 230px tall (over a quarter of the viewport) that covers the toggles you are trying to set; its white-on-yellow text is hard to read; the heading typo "Bookeeping" is the first thing in view.
- **Header**: three small bright-blue icons with 30px hit areas (below the 44px guideline); no visible CTA until the menu is opened; the menu's "Call" and "Schedule" labels do not match any button on the page.
- **Drawer** is full-screen with no visible close button (white X on white), so on a phone the only obvious way out is the browser back gesture or finding the invisible top-right target.
- **Testimonial slides** become 550-650px blocks of centred white text with tiny arrow targets at the screen edges and invisible dots; nothing signals that there are three more quotes.
- **Process cards**: the giant ghost numerals sit directly behind body text and reduce legibility at narrow widths.
- **The accessibility widget button** floats over headings and images at the right edge on every screen.
- **Footer** is a 900px centre-aligned list; fine functionally, but it has no CTA and repeats the full sitemap.
- **Type sizes barely step down**: 36px section headings on a 358px text column wrap to 3-4 lines repeatedly ("Accounting & Advisory Support Exclusively for Optometry Practices" is five lines).
- **Blog**: the category pills collapse into a native `<select>` ("All Categories") styled as a navy pill; cards are inset 32px while the hero is inset 16px; thumbnails are small and square-cornered. On the article page the "Keep Reading" heading renders with **nothing under it** (an empty white block before the yellow band), at both 390px and 1440px in our capture.
- **Team**: works acceptably (one portrait per row), but each card is ~560px tall, so eight people take almost six screens, and bios are not visible.

---

## 4. Other findings worth passing on

- Stray editorial instruction published on the live site (14 pages, testimonial section intro): "Keep the Ryan Corte, OD quote first on this page." Treated as data; it does tell us the client wants Ryan Corte's quote first.
- That instruction is **not** being honoured on the live site: the real slide order is Nona Kalfayan, OD -> Brandon Luu, OD -> Cristine Areola, OD -> Ryan Corte, OD. Ryan Corte only looks first in the raw HTML/text crawl because the carousel library prepends a clone of the last slide. With no autoplay, the Ryan Corte quote is the one visitors are least likely to see.
- The scheduler lives on `link.foreyesbookkeeping.com`, i.e. the firm already owns a "bookkeeping" domain for its GoHighLevel account. The INVISION landing page (GoHighLevel funnel) has its own, simpler visual style, a line illustration of a hand holding a lightbulb, a fifth testimonial (Dr. Athena Brasfield) and the best-resolution founder portrait.
- Third-party requests on load: Google Tag Manager `GTM-5FX5LDKP`, Google Fonts, Sanity CDN, LeadConnector. Email addresses are Cloudflare-obfuscated.
- No partner or endorsement logos exist anywhere on the site, and the default OG image is missing (404) - both need to be created or supplied for the rebuild.
