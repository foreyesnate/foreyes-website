# Content inventory: Homepage + Services, Resources, Who We Serve hubs

Source: crawl of foreyessolutions.com (text files in `site/text/`, raw HTML in `site/raw/html/`).
Pages covered:

1. `https://foreyessolutions.com/` (Homepage)
2. `https://foreyessolutions.com/services` (Services hub)
3. `https://foreyessolutions.com/resources` (Resources hub)
4. `https://foreyessolutions.com/who-we-serve` (Who We Serve hub)

Conventions in this file: copy inside blockquotes or after "Copy:" is VERBATIM from the current site, including its punctuation quirks (en dashes with no spaces, mixed curly/straight apostrophes). Anything in *[square-bracket italics]* is my annotation, not site copy.

---

## 0. Global boilerplate (appears on every page; recorded once)

### Header / nav
- Logo (alt "logo") links to `/`
- **Services** `/services` > Bookkeeping `/services/bookkeeping` · Accounting `/services/accounting` · Tax Services `/services/tax-services` · Practice Consulting `/services/practice-consulting` · Billing Services `/services/billing-services` · Payroll `/services/payroll`
- **Who We Serve** `/who-we-serve` > Optometrists `/who-we-serve/optometrists` · Multi Location Practices `/who-we-serve/multi-location-practices` · Startups `/who-we-serve/startups`
- **Pricing Calculator** `/pricing-calculator`
- **About** `/about-us` > Our Team `/about-us/our-team`
- **Resources** `/resources` > Blog `/resources/blog` · FAQs `/resources/faq`
- Header button: `Get Started`
- Header phone: `844-505-3937` (tel:844-505-3937)

### Contact flyout / modal (header)
- Tabs/buttons: `Book a Call` · `Send a Message`
- Heading: `Let’s Talk Eyecare`
- Sub-line: `Have a question or ready to learn how we can help your practice?`

### Closing CTA band (identical on all four pages)
- Heading (H2): `See Further. Move Faster. Grow Smarter.`
- Body: `Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients.`
- Button: `Book a Discovery Call`

### Footer
- Column "Services": Bookkeeping · Accounting · Tax Services · Practice Consulting · Billing Services *[note: Payroll is in the header nav but missing from the footer]*
- Column "Who We Serve": Optometrists · Multi Location Practices · Startups
- Column `Get To Know Us`: About · Team
- Column "Resources": Pricing Calculator · Blog · FAQs
- Column `Contact`:
  - `2429 Curbow Dr` / `Murfreesboro, TN 37127` (links to Google Maps search)
  - `844-505-3937`
  - Email (Cloudflare-obfuscated in crawl): hello@foreyessolutions.com
  - `Hours: Mon-Fri at 8AM-5PM CT`
- Legal line: `© 2026 ForEyes Solutions` · `Privacy Policy` (`/privacy-policy`) · `Powered by` (links to https://www.wisedigitalpartners.com/technology/nest, the current site vendor's platform)

### Structured data (JSON-LD, homepage only; not visible copy but contains claims and service one-liners)
- `@type`: ProfessionalService (additionalType FinancialService), name `ForEyes Solutions`
- Description: `Specialized accounting, bookkeeping, tax services, and practice consulting exclusively for independent optometry and eyecare practices nationwide.`
- Telephone `+1-844-505-3937` (TollFree, areaServed US), email `hello@foreyessolutions.com`
- Founder: `Wade Weisz, OD`
- sameAs: `https://www.facebook.com/foreyessolutions`, `https://www.linkedin.com/company/foreyessolutions`
- Address: 2429 Curbow Dr, Murfreesboro, TN 37127, US; geo 35.8456, -86.3903
- Hours: Monday-Friday, opens 08:00, closes 17:00
- knowsAbout: `Optometry Practice Accounting`, `Eyecare Bookkeeping`, `Optometrist Tax Services`, `Practice Consulting`, `Optometry Insurance Billing`, `Optical Practice Benchmarking`
- Offer catalog `Eyecare Financial & Consulting Services`, with one-line service descriptions (verbatim):
  - Bookkeeping: `Streamlined, automated bookkeeping systems built specifically for busy eye doctors.`
  - Accounting: `Comprehensive accounting and financial management for independent optometry practices.`
  - Tax Services: `Strategic tax planning and compliance services structured for medical and eyecare practices.` *[TAX: drop]*
  - Practice Consulting: `High-level advisory support and practice consulting to scale cash flow and optimize performance.`
  - Billing Services: `Specialized optometry and medical insurance billing solutions to reduce overhead and audit risk.`
  - Payroll: `Accurate, compliant payroll solutions designed to scale smoothly with single or multi-location eye clinics.`
- WebSite description: `Accounting & Advisory Support Exclusively for Optometry Practices`
- WebPage name: `Bring Your Financials Into Focus | ForEyes Solutions`
- WebPage description: `At ForEyes Solutions, we provide independent optometry practices with the bookkeeping, tax, and practice advisory support needed to grow confidently.` *[TAX mention]*
- BreadcrumbList is misused as a list of service pages (Home, Bookkeeping Services, Accounting Services, Tax Services, Practice Consulting, Billing Services, ...).
- None of the four pages has a `<link rel="canonical">`. The three hub pages have no JSON-LD.

---

## 1. Homepage

- **URL:** https://foreyessolutions.com/
- **`<title>`:** `Bookkeeping & Accounting for Optometrists`
- **Meta description:** `Outsource your optometry bookkeeping, accounting, payroll, and consulting to For Eyes Solutions. Certified experts. Contact us today.`
- **og:title / og:description:** same as title / meta description. og:image `https://foreyessolutions.com//images/open-graph/default.jpg` (double slash in URL)

### 1.1 Section-by-section structure and verbatim copy

**Section 1: Hero** (large display text, not a heading tag; one CTA; hero illustration, separate mobile and desktop images)
- Headline (rendered as a `<p>` with a line break, not an H1): `Bring your financials` / `into focus`
- Subheadline: `Specialized accounting and consulting services that bring clarity to your independent eyecare practice.`
- Button: `Book a Discovery Call`

**Section 2: Intro / positioning** (carries the page's actual H1; two paragraphs; CTA; side image)
- H1: `Accounting & Advisory Support Exclusively for Optometry Practices`
- Paragraph 1: `You became an optometrist to care for patients–not to spend late nights reconciling receipts and second-guessing your financials. That's where we come in. At ForEyes Solutions, we provide independent optometry practices with the support, systems, and financial clarity needed to grow confidently.` *[the words "optometry practices" are hyperlinked to `/services/practice-consulting`]*
- Paragraph 2: `Founded by an OD who has spent 25+ years running successful practices, we don’t just talk the talk–we’ve walked the walk. Today, we're a go-to accounting advisory, and solution partner for forward-thinking eyecare practices across the country–and we're ready to help you trust your numbers and reclaim your time.`
- Button: `Get Started`

**Section 3: Why us** (three icon cards)
- H2: `Why ForEyes Solutions?`
- Card 1, H3: `Built for Eyecare`
  - `We don’t “also work with eyecare professionals.” We only work with them, and that industry expertise shows.`
- Card 2, H3: `Backed by Your Peers`
  - `Endorsed by ODs on Finance and trusted by TSO, ALLDocs, Vision Source practices, and more. Our reputation is hard-earned and referral-built.`
- Card 3, H3: `Less Work, Smarter Spend`
  - `We replace in-house headaches with systems that save you time, reduce overhead, and grow with your practice.`

**Section 4: Audience teaser** (text + image; link to Who We Serve; this exact block is reused on the Services hub)
- H2: `For Eyecare Pros Like You`
- Paragraph 1: `We partner with independent optometry and eyecare practices at every stage, from first-time owners building a solid financial foundation to multi-location groups looking for sharper insights and scalable systems.`
- Paragraph 2: `If you want a strategic partner who understands the industry, speaks the eyecare language, and helps you run a more profitable business, we’re here for you.`
- Link: `Who We Serve` → `/who-we-serve`

**Section 5: Services overview** (intro paragraph + five image tiles; this exact block is reused on Who We Serve)
- H2: `Services With Vision`
- Body: `We don’t just balance books–we see what others miss. From optometry bookkeeping and accounting to tax services and high-level advisory support, every service we offer meets the specific, unique financial demands of running an optometry or eyecare practice. Our core services bring structure, clarity, and insight to every part of your back office.` *[inline links: "optometry bookkeeping" → `/services/bookkeeping`, "accounting" → `/services/accounting`, "tax services" → `/services/tax-services`]*
- Link: `Explore Our Services` → `/services`
- Tiles (label only, each an image link):
  1. `Bookkeeping` → `/services/bookkeeping`
  2. `Accounting` → `/services/accounting`
  3. `Tax Services` → `/services/tax-services`
  4. `Practice Consulting` → `/services/practice-consulting`
  5. `Insurance Billing` → `/services/billing-services`
  - *[No Payroll tile, although Payroll is in the nav and the JSON-LD catalog.]*

**Section 6: Testimonials carousel** (4 unique testimonials with headshots; 4 pagination dots; the first two are repeated in the markup as carousel-loop clones)
- H2: `Proof in Practice`
- Sub-line as published: `Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page.` *[the second sentence is a stray editorial instruction that leaked into live copy; see Problems]*
- Testimonial 1, attribution `Ryan Corte, OD`:
  > Wade and his team do an outstanding job providing accurate, timely, and reliable bookkeeping services. They’re responsive, detail-oriented, and take the time to explain financials in a way that’s easy to understand. Working with them has given me greater peace of mind and confidence in the financial side of my business. I highly recommend Wade and his team to any business owner looking for a trustworthy and professional bookkeeping partner.
- Testimonial 2, attribution `Nona Kalfayan, OD` (two paragraphs):
  > I've been working with Wade and his team at ForEyes Solutions for the past two years, and the experience has been nothing short of excellent. From onboarding to goal setting and ongoing support, they've made a huge impact on my business by taking bookkeeping and organization off my plate so I can focus on growth. They truly understand the industry and provide value whether you're just starting out or already established and looking to improve your systems. What sets them apart is their communication — fast, reliable, and always helpful. You never feel left in the dark and are always supported.
  >
  > If you're looking for bookkeeping or business consulting, I highly recommend ForEyes Solutions. They're professional, knowledgeable, and genuinely committed to your success. They are absolutely the real deal!
- Testimonial 3, attribution `Brandon Luu, OD`:
  > Wade and his team have been rock solid. It's been about 2 years, and they've done an excellent job keeping my books in order. They are always available if I have any questions. Recently, Wade has really elevated his business beyond just bookkeeping. I am excited to be along for the ride. Extremely satisfied client and would definitely recommend his services to other practice owners.
- Testimonial 4, attribution `Cristine Areola, OD`:
  > For Eyes has been a great resource for my business as a first-time practice owner. I am very thankful for their expertise and their attentiveness to the small financial details. I don't know what I would do without them!
- No practice names, locations, or star ratings are shown with any testimonial.

**Section 7: About teaser** (image with alt "More About Us"; three paragraphs; link)
- H2: `About Us`
- Paragraph 1: `ForEyes Solutions was born from firsthand experience, because no one understands the challenges of running an eyecare practice quite like an optometrist.`
- Paragraph 2: `Founder Wade Weisz, OD, has over 25 years of experience managing successful eye care practices, but always struggled with the same issue: accounting, practice solutions, and advisory support that didn't truly reflect the business or help him make informed decisions. So, Wade built a firm explicitly designed for eyecare professionals, where industry expertise meets modern systems and personalized assistance.`
- Paragraph 3: `For us, comprehensive tax services, tax, accounting, and advisory support is about more than numbers–it’s about your practice’s future. We're here to help you see it clearly.`
- Link: `More About Us` → `/about-us`

**Section 8: Remote / nationwide** (image band; CTA)
- H2: `Remote, Nationwide Assistance`
- Paragraph 1: `Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state.`
- Paragraph 2: `Our remote team keeps both on schedule and answers questions quickly.`
- Button: `Connect With Us`

**Section 9: Tools** (two cards with images)
- H2: `Tools That Take the Guesswork Out`
- Card 1, H3: `Pricing Calculator`
  - `Get a clear, upfront estimate on what partnering with ForEyes Solutions could cost.`
  - Link: `Calculate Your Price Now` → `/pricing-calculator`
- Card 2, H3: `Frequently Asked Questions`
  - `From onboarding to ongoing support, these FAQs help you feel confident before you even book a call.`
  - Link: `Get Answers` → `/resources/faq`

**Section 10: Blog teaser**
- H2: `Smart Reads for ODs`
- Body: `Our blog helps you simplify your numbers and grow smarter, one post at a time.`
- *[No post cards are present in the server-rendered HTML; the section is an empty shell in the crawl (posts are presumably loaded client-side, or the feed is empty).]*

**Section 11: Closing CTA** (global; see section 0)
- `See Further. Move Faster. Grow Smarter.` / `Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients.` / button `Book a Discovery Call`

**Buttons/links on this page, in order:** `Get Started` (header) · `Book a Discovery Call` (hero) · `Get Started` (intro) · `Who We Serve` · `Explore Our Services` · five service tiles · carousel dots `1` `2` `3` `4` · `More About Us` · `Connect With Us` · `Calculate Your Price Now` · `Get Answers` · `Book a Discovery Call` (closing).

No FAQ items, process steps, prices, or numeric stats blocks on the homepage.

### 1.2 Facts & claims (homepage)
- Firm name as written in body copy: "ForEyes Solutions" (meta description: "For Eyes Solutions").
- Founder: Wade Weisz, OD.
- "Founded by an OD who has spent 25+ years running successful practices" / "over 25 years of experience managing successful eye care practices".
- Exclusivity: "We don’t 'also work with eyecare professionals.' We only work with them" / H1 "Exclusively for Optometry Practices".
- Endorsement/affiliations: "Endorsed by ODs on Finance"; "trusted by TSO, ALLDocs, Vision Source practices, and more". (TSO = Texas State Optical; needs confirming these are current and permitted to be named.)
- "Our reputation is hard-earned and referral-built."
- Serves practices "across the country"; "Remote, Nationwide Assistance"; "work the same from any state".
- Audience range: "first-time owners" through "multi-location groups".
- Named tools: Bill.com (vendor payments/approvals) and Gusto (payroll/pay runs), described as cloud-based. (Bill.com now brands itself "BILL"; confirm preferred naming.)
- "Our remote team keeps both on schedule and answers questions quickly."
- Meta description: "Certified experts" (no certification named anywhere on this page).
- Pricing calculator exists and gives "a clear, upfront estimate".
- Client tenure claims inside testimonials: Nona Kalfayan "for the past two years"; Brandon Luu "about 2 years"; Cristine Areola is "a first-time practice owner".
- Testimonial clients named: Ryan Corte, OD; Nona Kalfayan, OD; Brandon Luu, OD; Cristine Areola, OD.
- Contact facts (footer/JSON-LD): 844-505-3937 (toll-free); hello@foreyessolutions.com; 2429 Curbow Dr, Murfreesboro, TN 37127; Mon-Fri 8AM-5PM CT; Facebook `/foreyessolutions`; LinkedIn `/company/foreyessolutions`.
- Service lineup as presented on the homepage tiles: Bookkeeping, Accounting, Tax Services, Practice Consulting, Insurance Billing (five; nav adds Payroll for six).

### 1.3 Tax content (homepage) — do NOT carry over
- Services With Vision body: `From optometry bookkeeping and accounting to tax services and high-level advisory support, ...` (with a link to `/services/tax-services`). Sentence must be rewritten without "tax services".
- Services tile: `Tax Services` → `/services/tax-services` (image alt "Tax Services"). Remove tile.
- About Us paragraph 3: `For us, comprehensive tax services, tax, accounting, and advisory support is about more than numbers–it’s about your practice’s future.` Remove/rewrite (also garbled).
- Nav and footer: `Tax Services` link.
- JSON-LD: description "…bookkeeping, tax services, and practice consulting…"; knowsAbout "Optometrist Tax Services"; Offer "Tax Services: Strategic tax planning and compliance services structured for medical and eyecare practices."; WebPage description "…the bookkeeping, tax, and practice advisory support…"; breadcrumb item "Tax Services".
- Not a tax service (safe): nothing on the homepage uses "tax-ready books" style language. The `<title>`, meta description and hero do not mention tax.
- Related scope note (not tax, but also changing): "Accounting" is presented as a standalone service (tile, H1 "Accounting & Advisory Support", title "Bookkeeping & Accounting"). In the new lineup there is no "Accounting" service; its contents (payroll, vendor payments) map to Payroll and Accounts Payable.

### 1.4 Problems (homepage)
1. **Stray editorial note in live copy:** under "Proof in Practice": `Keep the Ryan Corte, OD quote first on this page.` This is an internal instruction published as body text. (Recorded as a finding only.) The preceding sentence `Optometrists describe what dependable books feel like.` also reads like a brief/placeholder rather than finished copy.
2. **Brand name inconsistency:** meta description says `For Eyes Solutions`; body, footer and JSON-LD say `ForEyes Solutions`; the Cristine Areola testimonial says `For Eyes` (client's own wording).
3. **Garbled sentence:** `For us, comprehensive tax services, tax, accounting, and advisory support is about more than numbers` ("tax" duplicated; subject-verb disagreement).
4. **Punctuation/grammar slip:** `we're a go-to accounting advisory, and solution partner` (missing comma after "accounting" or stray comma before "and").
5. **Heading structure:** the hero headline "Bring your financials into focus" is a `<p>`; the H1 is the second-section heading. Title tag ("Bookkeeping & Accounting for Optometrists"), H1 ("Accounting & Advisory Support Exclusively for Optometry Practices"), hero line and JSON-LD page name ("Bring Your Financials Into Focus | ForEyes Solutions") all differ.
6. **Service lineup inconsistencies:** five tiles (no Payroll) vs six nav items vs five footer items (no Payroll); "Insurance Billing" (tile) vs "Billing Services" (nav/URL) vs "Medical & Vision Billing Services" (Services hub).
7. **"Remote, Nationwide Assistance" copy is off-topic for its heading:** it talks only about Bill.com and Gusto (payments and paychecks), reads as copy lifted from an AP/payroll page, and "keeps both on schedule" is vague out of context. Different, clipped voice from the rest of the page (no en-dash style, "do not" instead of contractions).
8. **Empty blog section:** "Smart Reads for ODs" renders no posts in the HTML.
9. **Duplicated carousel items:** Ryan Corte and Nona Kalfayan testimonials appear twice in the markup (loop clones); a naive scrape or migration would duplicate them.
10. **Odd internal link:** "optometry practices" in the intro links to `/services/practice-consulting`. Inline links in "Services With Vision" are absolute URLs (`https://foreyessolutions.com/...`) while everything else is relative.
11. **Spelling variance:** "eyecare" (dominant) vs "eye care" (About paragraph: "successful eye care practices").
12. **Dash style:** unspaced en dashes used as em dashes throughout ("patients–not", "talk–we’ve", "numbers–it’s"); the Kalfayan testimonial uses a spaced em dash. Mixed curly and straight apostrophes ("don’t" vs "That's", "we're").
13. **Unsupported claims:** "Certified experts" (meta) names no certification; "go-to ... partner" and "Endorsed by ODs on Finance" have no logo, link or proof on the page.
14. **Empty alt text / generic alts:** testimonial headshots have empty alt; hero and section images use alt "mobile-image" / "desktop-image"; logo alt is just "logo".
15. **Footer hours wording:** `Hours: Mon-Fri at 8AM-5PM CT` (stray "at").
16. **Weak/generic passages:** "See Further. Move Faster. Grow Smarter." closing paragraph ("Unlock the clarity and expert, industry-specific support...") is generic and repeated on every page; "Less Work, Smarter Spend" card is vague; "forward-thinking eyecare practices" is filler.
17. **No canonical tag;** og:image URL contains `//images`.
18. **Address vs. positioning:** footer and JSON-LD say Murfreesboro, TN; the Services hub calls the firm "a Nashville, TN bookkeeping firm" (see 2.4).

### 1.5 Best lines (homepage)
1. `Bring your financials into focus`
2. `You became an optometrist to care for patients–not to spend late nights reconciling receipts and second-guessing your financials.`
3. `We don’t “also work with eyecare professionals.” We only work with them, and that industry expertise shows.`
4. `Founded by an OD who has spent 25+ years running successful practices, we don’t just talk the talk–we’ve walked the walk.`
5. `...we're ready to help you trust your numbers and reclaim your time.`
6. `Our reputation is hard-earned and referral-built.`
7. `We don’t just balance books–we see what others miss.`
8. `ForEyes Solutions was born from firsthand experience, because no one understands the challenges of running an eyecare practice quite like an optometrist.`
9. `Payments and paychecks do not wait on geography.`
10. Testimonial pull-quotes: `You never feel left in the dark and are always supported.` (Nona Kalfayan, OD) · `Wade and his team have been rock solid.` (Brandon Luu, OD) · `...take the time to explain financials in a way that’s easy to understand.` (Ryan Corte, OD)

---

## 2. Services hub

- **URL:** https://foreyessolutions.com/services
- **`<title>`:** `Full-Service Accounting, Payroll & Consulting for Optometrists`
- **Meta description:** `Explore For Eyes Solutions's complete range of accounting services, payroll and bookkeeping services, and optometry management consulting for growing eye care practices.`
- **og:title / og:description:** same as above.

### 2.1 Section-by-section structure and verbatim copy

**Section 1: Hero** (H1 with decorative line breaks, hero image)
- H1: `Services for` / `Eyecare Clinics &` / `Optometry` / `Practices` (i.e. "Services for Eyecare Clinics & Optometry Practices")

**Section 2: Intro** (two paragraphs, image, CTA)
- Paragraph 1: `Between bookkeeping, accounting, payroll, billing, and practice management, the business side of running an eyecare practice can quickly overwhelm even the most organized owner or OD. That’s where ForEyes Solutions steps in.`
- Paragraph 2: `As a Nashville, TN bookkeeping firm serving eyecare practices nationwide, we offer industry-specific solutions that free up your time and allow you to focus on patients. Whether you need optometry bookkeeping and accounting, tax assistance for your eyecare clinic, or practice solutions for your new ophthalmology business, our services can help.`
- Button: `Book a Discovery Call`

**Section 3: "Our Accounting Solutions"** (three alternating image/text service blocks)
- H2: `Our Accounting Solutions`
- Block 1, H3: `Accounting` (image alt "Outsource Your Accounting")
  - `Routine tasks like payroll and vendor payments can quickly eat into your schedule and distract you from patient care. Our accounting services free you up from the day-to-day while ensuring your team and vendors are always paid accurately and on time. With consistent, reliable processes in place, you won’t have to chase paperwork or worry about errors disrupting operations–you’ll simply know the details have been handled.`
  - Link: `Outsource Your Accounting` → `/services/accounting`
- Block 2, H3: `Bookkeeping` (image alt "Bookkeeping")
  - `Disorganized or incomplete books leave many practice owners feeling like they’re flying blind. Our industry-specific bookkeeping services bring clarity to your financials. Each month, you’ll receive easy-to-read profit and loss statements built around a custom chart of accounts. The result? Confidence in your numbers, insight into performance, and the data you need to make more informed decisions.`
  - Link: `Streamline Your Books` → `/services/bookkeeping`
- Block 3, H3: `Tax Services`
  - `Tax time shouldn’t come with surprise bills. Our tax services for eyecare professionals give you a year-round tax strategy, proactive planning, and compliant filings. Whether it’s your business or personal returns, our certified experts minimize liability while maximizing cash flow. Connect with us for a tax strategy that aligns with your growth goals.`
  - Link: `Create a Proactive Tax Plan` → `/services/tax-services`

**Section 4: "Our Practice Solutions"** (two service blocks)
- H2: `Our Practice Solutions`
- Block 1, H3: `Consulting`
  - `Working hard but not seeing that effort reflected in your bottom line? Our consulting team, led by a practicing OD, dives deep into your operations, evaluating everything from inventory and staffing to financial systems and optical processes. Because we’ve been in your shoes, we can identify inefficiencies, growth opportunities, and create a profitable path forward better than most. It’s like having a de facto COO–without the overhead.`
  - Link: `Solve Roadblocks` → `/services/practice-consulting`
- Block 2, H3: `Medical & Vision Billing Services`
  - `Insurance billing is one of the biggest time drains in any eyecare office, and mistakes can leave money on the table. Our certified billing specialists handle claims submission, denial management, A/R follow-up, and patient billing with an eyecare-specific focus. By increasing your clean claim rate and reducing days in A/R, we help you collect what you’ve earned, faster. And because we integrate billing with financial reporting, you get a complete picture of your revenue cycle, from first patient visit to final payment, all without managing an in-house biller.`
  - Link: `Take Billing Off Your Plate` → `/services/billing-services`

**Section 5: Audience teaser** (identical to homepage section 4)
- H2: `For Eyecare Pros Like You`
- `We partner with independent optometry and eyecare practices at every stage, from first-time owners building a solid financial foundation to multi-location groups looking for sharper insights and scalable systems.`
- `If you want a strategic partner who understands the industry, speaks the eyecare language, and helps you run a more profitable business, we’re here for you.`
- Link: `Who We Serve` → `/who-we-serve`

**Section 6: Pricing calculator promo**
- H2: `See What Bookkeeping Costs for a Practice Like Yours`
- Body: `Bookkeeping fees depend on your transaction volume, your number of locations, and how much cleanup your history needs. Use the pricing calculator to build an estimate in a few minutes, then book a Discovery Call to confirm it. Every figure shown is an estimate only.` *["pricing calculator" is an inline link to `https://foreyessolutions.com/pricing-calculator`]*
- Link: `Pricing Calculator` → `/pricing-calculator`

**Section 7: Closing CTA** (global; see section 0). Button `Book a Discovery Call`.

**Buttons/links on this page, in order:** `Get Started` (header) · `Book a Discovery Call` · `Outsource Your Accounting` · `Streamline Your Books` · `Create a Proactive Tax Plan` · `Solve Roadblocks` · `Take Billing Off Your Plate` · `Who We Serve` · `Pricing Calculator` · `Book a Discovery Call`.

No testimonials, FAQs, process steps, prices or numeric stats on this page. No dedicated Payroll block and no Accounts Payable block (both are folded into "Accounting").

### 2.2 Facts & claims (Services hub)
- Location claim: "a Nashville, TN bookkeeping firm serving eyecare practices nationwide".
- Service grouping: "Our Accounting Solutions" = Accounting, Bookkeeping, Tax Services; "Our Practice Solutions" = Consulting, Medical & Vision Billing Services.
- "Accounting" as defined here = payroll + vendor payments: "ensuring your team and vendors are always paid accurately and on time".
- Bookkeeping deliverable: "Each month, you’ll receive easy-to-read profit and loss statements built around a custom chart of accounts." (monthly cadence; custom chart of accounts)
- Consulting: "Our consulting team, led by a practicing OD"; scope "inventory and staffing to financial systems and optical processes"; "It’s like having a de facto COO–without the overhead."
- Billing: "Our certified billing specialists" (certification not named); scope "claims submission, denial management, A/R follow-up, and patient billing"; outcomes claimed "increasing your clean claim rate and reducing days in A/R" (no figures); "we integrate billing with financial reporting"; covers "Medical & Vision" billing; "without managing an in-house biller".
- Tax (to be dropped): "certified experts"; "business or personal returns"; "year-round tax strategy, proactive planning, and compliant filings".
- Mentions serving a "new ophthalmology business" (only mention of ophthalmology on these four pages).
- Pricing: bookkeeping fees "depend on your transaction volume, your number of locations, and how much cleanup your history needs"; estimate "in a few minutes"; "Every figure shown is an estimate only"; a Discovery Call confirms it.
- CTA name: "Discovery Call" (capitalised as a named thing).
- No tools (QuickBooks, Gusto, Bill.com) are named on this page.

### 2.3 Tax content (Services hub) — do NOT carry over
- Intro paragraph 2: `...tax assistance for your eyecare clinic...` (rewrite the sentence).
- Entire block **Tax Services**: `Tax time shouldn’t come with surprise bills. Our tax services for eyecare professionals give you a year-round tax strategy, proactive planning, and compliant filings. Whether it’s your business or personal returns, our certified experts minimize liability while maximizing cash flow. Connect with us for a tax strategy that aligns with your growth goals.` + button `Create a Proactive Tax Plan`.
- Grouping heading "Our Accounting Solutions" bundles Tax with Accounting and Bookkeeping; the grouping itself goes away.
- Nav/footer `Tax Services` links.
- Not tax (safe): no "tax-ready books" phrasing on this page. The Bookkeeping block is purely about monthly P&Ls and a custom chart of accounts.
- Related scope note: the standalone "Accounting" block is not a tax service, but "Accounting" is not in the new lineup; its copy is really Payroll + Accounts Payable copy and should be split that way. Title/meta ("Full-Service Accounting...", "complete range of accounting services") need rewriting for a Books & Billing positioning.

### 2.4 Problems (Services hub)
1. **Conflicting location:** "a Nashville, TN bookkeeping firm" vs footer/JSON-LD address in Murfreesboro, TN 37127 (Murfreesboro is in the Nashville metro, but the site states both).
2. **Brand name:** meta description `For Eyes Solutions's` (spaced name plus awkward possessive) vs `ForEyes Solutions` in body.
3. **Title/meta promise Payroll, page has no Payroll block.** Payroll appears only inside the "Accounting" paragraph; the nav has a dedicated `/services/payroll` page that this hub never links to. `/services/accounting/accounts-payable`, `/services/accounts-receivable-management`, and the consulting/tax sub-pages are not linked from the hub either.
4. **Naming inconsistencies:** "Consulting" (H3) vs "Practice Consulting" (nav) vs "optometry management consulting" (meta); "Medical & Vision Billing Services" (H3) vs "Billing Services" (nav) vs "Insurance Billing" (homepage tile).
5. **"Accounting" vs "Bookkeeping" distinction is confusing:** "Accounting" is described as payroll and vendor payments, which is not what a reader expects; the page also calls the whole firm "a ... bookkeeping firm" while the title says "Full-Service Accounting".
6. **Scope creep / off-target audience:** "practice solutions for your new ophthalmology business" conflicts with "Exclusively for Optometry Practices" on the homepage.
7. **Awkward sentence:** "we can identify inefficiencies, growth opportunities, and create a profitable path forward better than most" (broken parallelism; "better than most" is a weak boast).
8. **Unsubstantiated "certified":** "certified experts" (tax) and "certified billing specialists" with no credential named; "clean claim rate" and "days in A/R" improvements claimed with no numbers.
9. **Pricing section only covers bookkeeping** ("See What Bookkeeping Costs...") on a page about all services, whereas the Resources hub says the calculator lets you "mix and match" services.
10. **Decorative line breaks in the H1** ("Services for / Eyecare Clinics & / Optometry / Practices") are hard-coded; "Eyecare Clinics & Optometry Practices" is redundant.
11. **Duplicated blocks:** "For Eyecare Pros Like You" is word-for-word the homepage block; closing CTA is the global one.
12. **Spelling variance:** "eye care" in meta vs "eyecare" in body. Unspaced en dashes as em dashes ("operations–you’ll", "COO–without").
13. **Generic image alts** ("mobile-image", "desktop-image"); no canonical; no structured data.

### 2.5 Best lines (Services hub)
1. `Disorganized or incomplete books leave many practice owners feeling like they’re flying blind.`
2. `Each month, you’ll receive easy-to-read profit and loss statements built around a custom chart of accounts.`
3. `The result? Confidence in your numbers, insight into performance, and the data you need to make more informed decisions.`
4. `Insurance billing is one of the biggest time drains in any eyecare office, and mistakes can leave money on the table.`
5. `By increasing your clean claim rate and reducing days in A/R, we help you collect what you’ve earned, faster.`
6. `And because we integrate billing with financial reporting, you get a complete picture of your revenue cycle, from first patient visit to final payment, all without managing an in-house biller.` (the single best statement of why Books + Billing belong together)
7. `...ensuring your team and vendors are always paid accurately and on time.`
8. `...you won’t have to chase paperwork or worry about errors disrupting operations–you’ll simply know the details have been handled.`
9. `It’s like having a de facto COO–without the overhead.`
10. `Bookkeeping fees depend on your transaction volume, your number of locations, and how much cleanup your history needs.` / `Every figure shown is an estimate only.`
- Good button labels: `Streamline Your Books`, `Take Billing Off Your Plate`.

---

## 3. Resources hub

- **URL:** https://foreyessolutions.com/resources
- **`<title>`:** `Free Resources for Optometrists | For Eyes Solutions`
- **Meta description:** `Download checklists, guides, and tips from our expert team of bookkeepers and accountants to help your optometry practice grow and stay compliant.`
- **og:title / og:description:** same as above.

### 3.1 Section-by-section structure and verbatim copy

**Section 1: Hero** (H1, paragraph, CTA, hero image)
- H1: `Our Resources, Your Clarity`
- Body: `The insights needed to run your practice confidently–all in one place. From actionable advice to practical tools, our resources help eyecare professionals like you save time, make informed decisions, and see their practice clearly.`
- Button: `Book a Discovery Call`

**Section 2: "What You'll Find Here"** (image + text; the body is an exact duplicate of the hero paragraph)
- H2: `What You'll Find Here`
- Body: `The insights needed to run your practice confidently–all in one place. From actionable advice to practical tools, our resources help eyecare professionals like you save time, make informed decisions, and see their practice clearly.`
- Button: `Book a Discovery Call`

**Section 3: Resource cards** (three image/text blocks)
- H2: `Practice Support at Your Fingertips`
- Card 1, H3: `Blog`
  - `Stay informed with expert articles on bookkeeping for optometrists, accounting strategies, eyecare practice tax tips, operational best practices, and more. Our blog turns complex business topics into advice you can apply immediately.`
  - Link: `Read Our Blog` → `/resources/blog`
- Card 2, H3: `FAQs`
  - `Get answers to the questions eyecare practice owners ask most. From payroll and billing to consulting and practice solutions, our frequently asked questions help clarify what to expect when working with ForEyes Solutions.`
  - Link: `Explore FAQs` → `/resources/faq`
- Card 3, H3: `Pricing Calculator`
  - `Start planning with help from transparent pricing tailored to your practice’s size and needs. Our calculator shows the cost of our different services as you mix and match them, so you can better understand the investment needed to free up your time and grow your practice.`
  - Link: `Calculate Your Price Now` → `/pricing-calculator`

**Section 4: Closing CTA** (global; see section 0). Button `Book a Discovery Call`.

**Buttons/links on this page, in order:** `Get Started` (header) · `Book a Discovery Call` (hero) · `Book a Discovery Call` (section 2) · `Read Our Blog` · `Explore FAQs` · `Calculate Your Price Now` · `Book a Discovery Call` (closing).

No testimonials, FAQ items, process steps, prices, stats, tools or partners on this page.

### 3.2 Facts & claims (Resources hub)
- Three resources exist: Blog (`/resources/blog`), FAQs (`/resources/faq`), Pricing Calculator (`/pricing-calculator`).
- Title claims resources are "Free".
- Meta claims downloadable "checklists, guides, and tips" from "our expert team of bookkeepers and accountants" (no downloads are actually on the page).
- Blog topics claimed: "bookkeeping for optometrists, accounting strategies, eyecare practice tax tips, operational best practices".
- FAQ topics claimed: "payroll and billing to consulting and practice solutions".
- Pricing calculator: "transparent pricing tailored to your practice’s size and needs"; "shows the cost of our different services as you mix and match them".
- Not linked from this hub: the INVISION landing page (`start.foreyessolutions.com/invision`), which exists in the crawl.

### 3.3 Tax content (Resources hub) — do NOT carry over
- Blog card: `...eyecare practice tax tips...` (remove the phrase; note the existing blog includes a quarterly-taxes post, `/blog/quarterly-taxes-optometrists`, that will need a keep/retire decision elsewhere).
- Meta description: "...help your optometry practice grow and stay compliant" is compliance-flavoured but not explicitly tax; "bookkeepers and accountants" is fine or can become "bookkeepers and billers".
- Nav/footer `Tax Services` links.
- No "tax-ready books" phrasing on this page.

### 3.4 Problems (Resources hub)
1. **Duplicate paragraph:** the hero body and the "What You'll Find Here" body are identical word-for-word, each followed by the same `Book a Discovery Call` button. The second section is effectively placeholder.
2. **Meta description promises things the page does not have:** "Download checklists, guides, and tips" (there are no downloads, checklists or guides; only links to Blog, FAQs and the calculator).
3. **Brand name:** title says `For Eyes Solutions`; body says `ForEyes Solutions`.
4. **Thin page:** roughly 150 words of unique copy; a pure link hub with three cards; the Pricing Calculator already sits in the top nav.
5. **Grammar:** "help eyecare professionals like you save time, make informed decisions, and see their practice clearly" (shifts from "you" to "their").
6. **Wrong CTA for the page intent:** a resources page whose primary buttons (three of them) are all `Book a Discovery Call`.
7. **Inconsistent calculator description:** here "mix and match" services; on the Services hub the calculator is framed as bookkeeping-only.
8. **Generic passages:** "The insights needed to run your practice confidently–all in one place."; "Practice Support at Your Fingertips".
9. Unspaced en dash as em dash; generic image alts; no canonical; no structured data.

### 3.5 Best lines (Resources hub)
1. `Our Resources, Your Clarity`
2. `Our blog turns complex business topics into advice you can apply immediately.`
3. `Get answers to the questions eyecare practice owners ask most.`
4. `...our frequently asked questions help clarify what to expect when working with ForEyes Solutions.`
5. `Our calculator shows the cost of our different services as you mix and match them, so you can better understand the investment needed to free up your time and grow your practice.`
6. `...save time, make informed decisions, and see their practice clearly.` (fix pronoun to "your practice")

---

## 4. Who We Serve hub

- **URL:** https://foreyessolutions.com/who-we-serve
- **`<title>`:** `Serving Optometrists, Startups & Multi-Location Eye Care Practices`
- **Meta description:** `For Eyes Solutions supports optometry startups, multi-location practices, and independent optometrists with custom bookkeeping and accounting services.`
- **og:title / og:description:** same as above.

### 4.1 Section-by-section structure and verbatim copy

**Section 1: Hero** (H1, paragraph, CTA, hero image)
- H1: `Who We Serve`
- Body: `Running an eyecare practice isn’t just about helping patients–it’s about managing a business that runs smoothly behind the scenes. From long days juggling operations to the pressure of making smart growth decisions, it’s easy to feel stretched thin. At ForEyes Solutions, we work with eyecare practices of all sizes, helping you reclaim your time, regain control, and make informed decisions that future-proof your business.`
- Button: `Book a Discovery Call`

**Section 2: Audience segments** (three alternating image/text blocks)
- H2: `Here for Your Practice`
- Block 1, H3: `Optometrists`
  - `Running an optometry practice means juggling patient care, staff management, and day-to-day operations. We go beyond traditional bookkeeping for optometrists, offering accurate financials, smarter billing systems, and guidance tailored to the unique challenges you face and opportunities you have. The result? More time for patients and a practice that’s moving forward.`
  - Link: `Explore Solutions` → `/who-we-serve/optometrists`
- Block 2, H3: `Multi-Location Practices`
  - `Growth brings opportunity–and new complexities. When you’re managing multiple clinics, keeping tabs on performance, staffing, and billing can quickly become overwhelming. Our multi-location financial support and advisory services give you a clear picture of how each location is performing, as well as guidance on overcoming obstacles. With ForEyes Solutions, you’ll have both the tools and the insight to grow without losing control.`
  - Link: `Get Support` → `/who-we-serve/multi-location-practices`
- Block 3, H3: `Startups and Emerging ODs`
  - `Getting your first practice up and running? Our hands-on guidance and foundational services will help you build a strong financial footing from day one.`
  - Link: `Build on Solid Ground` → `/who-we-serve/startups`

**Section 3: Services overview** (same block as homepage section 5, but here the inline phrases are not hyperlinked)
- H2: `Services With Vision`
- Body: `We don’t just balance books–we see what others miss. From optometry bookkeeping and accounting to tax services and high-level advisory support, every service we offer meets the specific, unique financial demands of running an optometry or eyecare practice. Our core services bring structure, clarity, and insight to every part of your back office.`
- Link: `Explore Our Services` → `/services`
- Tiles: `Bookkeeping` · `Accounting` · `Tax Services` · `Practice Consulting` · `Insurance Billing` (same five; no Payroll)

**Section 4: Team teaser** (image + text + link)
- H2: `Meet the Team`
- Body: `We’re not just number crunchers–we’re industry insiders, strategic thinkers, and trusted advisors who know the ins and outs of running a successful eyecare practice. Our diverse team brings experience from both finance and the frontlines of optometry, giving us a unique perspective on what your business needs to grow. Learn more about the passionate professionals committed to excellence, transparency, and your success.`
- Link: `Our Team` → `/about-us/our-team`

**Section 5: Closing CTA** (global; see section 0). Button `Book a Discovery Call`.

**Buttons/links on this page, in order:** `Get Started` (header) · `Book a Discovery Call` · `Explore Solutions` · `Get Support` · `Build on Solid Ground` · `Explore Our Services` · five service tiles · `Our Team` · `Book a Discovery Call`.

No testimonials, FAQ items, process steps, prices, stats, tools or partners on this page.

### 4.2 Facts & claims (Who We Serve hub)
- Three audience segments with dedicated sub-pages: Optometrists; Multi-Location Practices; Startups and Emerging ODs (nav label: "Startups").
- "we work with eyecare practices of all sizes".
- Optometrists: "We go beyond traditional bookkeeping for optometrists, offering accurate financials, smarter billing systems, and guidance".
- Multi-location: "give you a clear picture of how each location is performing" (per-location reporting); "multi-location financial support and advisory services".
- Startups: "hands-on guidance and foundational services"; "strong financial footing from day one".
- Team: "experience from both finance and the frontlines of optometry".
- Meta: "custom bookkeeping and accounting services".
- No numbers, timelines, tools, credentials or guarantees on this page.

### 4.3 Tax content (Who We Serve hub) — do NOT carry over
- Services With Vision body: `From optometry bookkeeping and accounting to tax services and high-level advisory support, ...` (same sentence as homepage).
- Tile `Tax Services` → `/services/tax-services`.
- Nav/footer `Tax Services` links.
- The three audience blocks, the hero and the team teaser contain no tax language and are safe to adapt. No "tax-ready books" phrasing on this page.
- Related scope note: "Accounting" tile and "bookkeeping and accounting services" in the meta refer to the retiring "Accounting" label.

### 4.4 Problems (Who We Serve hub)
1. **Brand name:** meta description `For Eyes Solutions` vs body `ForEyes Solutions`.
2. **Uneven depth:** Optometrists and Multi-Location blocks have 3-4 sentences each; "Startups and Emerging ODs" has two short sentences.
3. **Segment labels inconsistent:** "Startups and Emerging ODs" (H3) vs "Startups" (nav/title); "Multi-Location Practices" (H3) vs "Multi Location Practices" (nav, no hyphen); title says "Multi-Location Eye Care Practices".
4. **"Optometrists" is not a real segment:** every client is an optometrist; the block is effectively "single-location / established independent practices" and overlaps the other two.
5. **Duplicated block:** "Services With Vision" (text and five tiles) is identical to the homepage; closing CTA is global.
6. **Service tiles omit Payroll** and say "Insurance Billing" while nav says "Billing Services".
7. **Generic/cliché copy:** "Meet the Team" paragraph ("passionate professionals committed to excellence, transparency, and your success"; "not just number crunchers"); "future-proof your business"; "guidance tailored to the unique challenges you face and opportunities you have" (clumsy).
8. **Vague CTAs:** `Explore Solutions`, `Get Support` say little; `Build on Solid Ground` is the only distinctive one.
9. **Spelling variance:** "Eye Care" (title) vs "eyecare" (body). Unspaced en dashes as em dashes ("patients–it’s", "opportunity–and", "crunchers–we’re").
10. **"all sizes"** is at odds with the homepage's "independent" positioning (no size limits or ideal-client profile stated).
11. Generic image alts; no canonical; no structured data.

### 4.5 Best lines (Who We Serve hub)
1. `Running an eyecare practice isn’t just about helping patients–it’s about managing a business that runs smoothly behind the scenes.`
2. `...helping you reclaim your time, regain control, and make informed decisions...`
3. `We go beyond traditional bookkeeping for optometrists, offering accurate financials, smarter billing systems, and guidance...` (already pairs books with billing)
4. `The result? More time for patients and a practice that’s moving forward.`
5. `Growth brings opportunity–and new complexities.`
6. `...give you a clear picture of how each location is performing...`
7. `...you’ll have both the tools and the insight to grow without losing control.`
8. `Getting your first practice up and running? Our hands-on guidance and foundational services will help you build a strong financial footing from day one.`
9. `Our diverse team brings experience from both finance and the frontlines of optometry...`
10. Button label: `Build on Solid Ground`

---

## 5. Cross-page summary

### 5.1 Consolidated facts & claims worth verifying before reuse
| Claim | Where | Note |
|---|---|---|
| Founder Wade Weisz, OD; 25+ years running/managing practices | Home (intro, About), JSON-LD | Two phrasings: "25+ years running successful practices", "over 25 years of experience managing successful eye care practices" |
| Works only with eyecare/optometry practices | Home | Contradicted by "new ophthalmology business" on Services hub |
| Endorsed by ODs on Finance; trusted by TSO, ALLDocs, Vision Source practices | Home | Confirm current status and permission to name |
| Consulting "led by a practicing OD" | Services | Confirm Wade is still practicing |
| "Certified experts" / "certified billing specialists" | Home meta, Services | No credential named; name it or drop it |
| Tools: Bill.com (vendor payments/approvals), Gusto (payroll) | Home | Only tools named on these four pages; QuickBooks is not mentioned here |
| Monthly P&L built on a custom chart of accounts | Services | Core bookkeeping deliverable |
| Billing scope: claims submission, denial management, A/R follow-up, patient billing; medical and vision | Services | Outcome claims (clean claim rate up, days in A/R down) have no numbers |
| Billing integrated with financial reporting | Services | Key differentiator for the rebrand |
| Per-location performance visibility for multi-location groups | Who We Serve | |
| Nationwide, remote | Home, Services, JSON-LD | |
| "Nashville, TN bookkeeping firm" vs 2429 Curbow Dr, Murfreesboro, TN 37127 | Services vs footer | Conflict to resolve |
| Phone 844-505-3937 (toll-free); hello@foreyessolutions.com; Mon-Fri 8AM-5PM CT | Footer, JSON-LD | |
| Pricing calculator: estimate "in a few minutes", estimate only, confirmed on a Discovery Call; inputs: transaction volume, number of locations, cleanup | Services, Resources, Home | |
| Testimonials: Ryan Corte, OD; Nona Kalfayan, OD (2 yrs); Brandon Luu, OD (~2 yrs); Cristine Areola, OD (first-time owner) | Home | All four are about bookkeeping; none mention tax; none mention billing |
| Social: facebook.com/foreyessolutions; linkedin.com/company/foreyessolutions | JSON-LD | |

### 5.2 Consolidated tax content to strip
- Nav + footer "Tax Services" item (all pages).
- "Tax Services" tile in the "Services With Vision" block (Home, Who We Serve).
- "...to tax services and high-level advisory support..." sentence (Home, Who We Serve).
- "comprehensive tax services, tax, accounting, and advisory support" (Home About teaser).
- "tax assistance for your eyecare clinic" (Services intro).
- Whole "Tax Services" block and `Create a Proactive Tax Plan` button (Services).
- "eyecare practice tax tips" (Resources blog card).
- JSON-LD: description, knowsAbout "Optometrist Tax Services", Tax Services offer, WebPage description, breadcrumb entry.
- Nothing on these four pages uses bookkeeping-side phrasing such as "tax-ready books"; if the new site wants that idea (clean books handed to the client's own CPA), it has to be written fresh.

### 5.3 Consolidated problems
- Brand name: "For Eyes Solutions" in every meta description/title suffix; "ForEyes Solutions" in all body copy; "For Eyes" in one testimonial.
- Stray editorial note live on the homepage ("Keep the Ryan Corte, OD quote first on this page.").
- Nashville vs Murfreesboro.
- Service naming and count vary by location (5 tiles, 6 nav items, 5 footer items; Insurance Billing / Billing Services / Medical & Vision Billing Services; Consulting / Practice Consulting).
- Heavy block reuse: closing CTA (4 pages), "For Eyecare Pros Like You" (2), "Services With Vision" (2), Resources hero paragraph duplicated within its own page.
- "eyecare" vs "eye care"; en dashes used as em dashes; mixed apostrophe styles.
- Unnamed certifications; unquantified outcomes; no stats anywhere on these four pages.
- Meta description on Resources promises downloads that do not exist; Services title promises Payroll with no Payroll block.
- Empty blog feed section on homepage; generic alt text; no canonical tags.

---

## 6. Reuse notes for the new Books & Billing site

**New Homepage**
- Keep the hero line `Bring your financials into focus` (or adapt it to span books and billing) and make it the real H1.
- Reuse the "You became an optometrist to care for patients–not to spend late nights reconciling receipts..." opener and the founder line ("Founded by an OD who has spent 25+ years running successful practices... we’ve walked the walk").
- Reuse the three "Why ForEyes" cards, especially "We don’t 'also work with eyecare professionals.' We only work with them" and "hard-earned and referral-built". Verify the ODs on Finance / TSO / ALLDocs / Vision Source claims first.
- Rebuild the services block as two flagship cards (Bookkeeping, Insurance Billing) plus three minor ones (Accounts Payable, Payroll, Practice Consulting). Rewrite "Services With Vision" without "accounting to tax services"; "We don’t just balance books–we see what others miss" survives.
- Lead the homepage with the Services-hub sentence about integrating billing with financial reporting ("a complete picture of your revenue cycle, from first patient visit to final payment"); it is the strongest existing argument for the Books & Billing pairing.
- Keep all four testimonials (Ryan Corte first, per the firm's leaked note). All are bookkeeping-focused; a billing testimonial is a gap to fill.
- Keep the pricing-calculator and FAQ teaser cards; drop or fix the empty blog section.
- Replace the "Remote, Nationwide Assistance" body with a real nationwide statement; move the Bill.com/Gusto sentences to the AP and Payroll pages.
- Delete the stray editorial sentence; rewrite the About teaser's third paragraph (tax + garbled).

**Bookkeeping page (flagship)**
- From Services hub: "Disorganized or incomplete books leave many practice owners feeling like they’re flying blind." through "...the data you need to make more informed decisions." (monthly P&L, custom chart of accounts).
- Pricing promo copy ("Bookkeeping fees depend on your transaction volume, your number of locations, and how much cleanup your history needs... Every figure shown is an estimate only.").
- Testimonials from Ryan Corte, Brandon Luu, Nona Kalfayan. Button label `Streamline Your Books`.

**Insurance Billing page (flagship)**
- From Services hub: the whole "Medical & Vision Billing Services" paragraph (claims submission, denial management, A/R follow-up, patient billing; clean claim rate; days in A/R; no in-house biller). Button label `Take Billing Off Your Plate`.
- From Who We Serve: "smarter billing systems"; multi-location "keeping tabs on performance, staffing, and billing".
- Settle on one name ("Insurance Billing") and name the billing certification or drop "certified".

**Accounts Payable page (minor)**
- From Services hub "Accounting" block: "vendor payments", "vendors are always paid accurately and on time", "you won’t have to chase paperwork... you’ll simply know the details have been handled".
- From Home: "Bill.com ... run[s] in the cloud, so your approvals ... work the same from any state."

**Payroll page (minor)**
- From Services hub "Accounting" block: "ensuring your team ... [is] always paid accurately and on time".
- From Home: "Payments and paychecks do not wait on geography." and the Gusto "pay runs" line.
- From JSON-LD: "Accurate, compliant payroll solutions designed to scale smoothly with single or multi-location eye clinics."

**Practice Consulting page (minor)**
- From Services hub "Consulting" block: "led by a practicing OD", scope list (inventory, staffing, financial systems, optical processes), "It’s like having a de facto COO–without the overhead." Button label `Solve Roadblocks`. Fix the "better than most" sentence.

**Who We Serve (if kept, or as a homepage section)**
- Reuse the hero paragraph and the three segment blocks; they are tax-free already. Expand the Startups block; consider renaming "Optometrists" to something that is actually a segment. `Build on Solid Ground` is a keeper.

**About / Team**
- Homepage About paragraphs 1-2 (Wade Weisz, OD origin story) are reusable as-is apart from "eye care"/"eyecare". From Who We Serve: "experience from both finance and the frontlines of optometry".

**Resources / FAQ / Pricing**
- The Resources hub has almost nothing unique; fold it into nav items or a short index. Keep "Our Resources, Your Clarity", "Our blog turns complex business topics into advice you can apply immediately.", and the calculator description. Remove "tax tips". Either create the checklists/guides the meta description promises or stop promising them.

**Global**
- Footer/contact facts: 844-505-3937, hello@foreyessolutions.com, 2429 Curbow Dr, Murfreesboro, TN 37127, Mon-Fri 8AM-5PM CT. Resolve Nashville vs Murfreesboro and write the brand as one word ("ForEyes") everywhere, including meta tags.
- CTA vocabulary already in use: `Book a Discovery Call` (primary), `Get Started`, `Connect With Us`, `Book a Call`, `Send a Message`, `Let’s Talk Eyecare`.
- Closing band `See Further. Move Faster. Grow Smarter.` is a usable tagline; its supporting sentence is generic and worth rewriting.
- Remove all tax items from nav, footer and structured data; replace the "Accounting" label with the new AP and Payroll services; add Payroll and Accounts Payable to footer and service tiles.
