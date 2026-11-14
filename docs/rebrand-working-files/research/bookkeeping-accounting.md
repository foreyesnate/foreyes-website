# Content inventory: Bookkeeping + Accounting service pages

Source: crawl of foreyessolutions.com (current "ForEyes Solutions" site).
Pages covered:

1. `/services/bookkeeping` (becomes a FLAGSHIP service on the new Books & Billing site)
2. `/services/accounting` ("Accounting" as a named service is going away; the page is really Accounts Payable + Payroll)

How this was built: the plain-text crawl was read in full, then cross-checked against the raw HTML (`__NEXT_DATA__` CMS payload and the JSON-LD block). The FAQ answers are collapsed accordions, so they are missing from the `.txt` files; they were recovered from the raw HTML and are reproduced verbatim below. All copy is verbatim, including the source's punctuation (curly apostrophes, en dashes used as dashes). Anything in *italics* or under "Note" is my annotation, not site copy.

Global boilerplate (noted once, ignore elsewhere):

- Header nav: Services (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services, Payroll) / Who We Serve (Optometrists, Multi Location Practices, Startups) / Pricing Calculator / About (Our Team) / Resources (Blog, FAQs). Button: "Get Started". Phone: 844-505-3937.
- Contact drawer: tabs "Book a Call" / "Send a Message"; heading "Let’s Talk Eyecare"; text "Have a question or ready to learn how we can help your practice?"
- Footer: Services list (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services; Payroll is missing from the footer list), Who We Serve, "Get To Know Us" (About, Team), Resources (Pricing Calculator, Blog, FAQs). Contact: "2429 Curbow Dr Murfreesboro, TN 37127", 844-505-3937, hello@foreyessolutions.com, "Hours: Mon-Fri at 8AM-5PM CT". "© 2026 ForEyes Solutions", Privacy Policy, "Powered by" (Wise Digital Partners / Nest).

---

# PAGE 1: Bookkeeping

- **URL:** https://foreyessolutions.com/services/bookkeeping
- **`<title>`:** Bookkeeping Services for Optometrists | For Eyes Solutions
- **Meta description:** Get expert remote and outsourced bookkeeping from certified professionals for optometrists. Accurate, trusted support nationwide. Contact us today.
- **og:title / og:description:** same as title / meta description. og:image: `https://foreyessolutions.com//images/open-graph/default.jpg` (note the double slash).
- **Robots:** index,follow. No canonical tag found in the HTML.
- **JSON-LD WebPage name (differs from `<title>`):** Bookkeeping for Optometrists & Eyecare Professionals | ForEyes Solutions
- **JSON-LD WebPage description (differs from meta):** Gain trusted clarity and absolute ledger confidence. Explore full-service bookkeeping for eye care practices with human-vetted reports finalized by the 10th business day.
- **Breadcrumb (schema only):** Home > Services > Bookkeeping

## 1.1 Section structure (in order)

| # | Section heading | What it does |
|---|---|---|
| 1 | H1 "Bookkeeping for Optometrists and Eyecare Professionals" | Hero: headline + image only. No subhead, no visible button label in the hero block. |
| 2 | "Books That Show What Your Practice Actually Earns" | Intro / value proposition with founder credential. CTA "Book a Discovery Call". |
| 3 | "Full-Service Eyecare Bookkeeping" | What is included: intro paragraph + 4 feature cards. |
| 4 | "Why Us for Optometry Bookkeeping?" | Benefits: intro + 4 benefit cards. |
| 5 | "Process Overview" | 7 numbered process steps. |
| 6 | "Proof in Practice" | Testimonial carousel (4 Google reviews). Contains a stray editorial note. |
| 7 | "Eyecare Bookkeeping FAQs" | 6 accordion FAQs + "More FAQs" link. |
| 8 | "See What Bookkeeping Costs for a Practice Like Yours" | Pricing calculator teaser. |
| 9 | "More Ways We Can Support Your Practice" | Cross-sell cards: Accounting, Tax Services, Practice Consulting, Billing Services. |
| 10 | "Remote, Nationwide Assistance" | Shared global block (copy is about AP/payroll tools, not bookkeeping). CTA "Connect With Us". |
| 11 | "Smart Reads for ODs" | Blog teaser (top 3 posts, loaded client-side). |
| 12 | "See Further. Move Faster. Grow Smarter." | Closing CTA. "Book a Discovery Call". |

## 1.2 Verbatim copy

### Section 1: Hero

**H1:** Bookkeeping for Optometrists and Eyecare Professionals

*(Rendered with forced line breaks: "Bookkeeping for / Optometrists and / Eyecare / Professionals". No body copy. Hero image only.)*

### Section 2: Intro

**H2:** Books That Show What Your Practice Actually Earns

**Body:** Exams, optical sales, and contact lenses all deposit into the same bank account, which makes it hard to see which part of your practice carries its weight. Our bookkeeping for optometrists in Nashville, TN, and nationwide sorts every dollar into a structure built for eyecare, so your monthly P&L reads like a story you can act on. It comes from Wade Weisz, OD, and his 25-plus years in the owner's seat.

**Button:** Book a Discovery Call *(opens the contact form, "Send a Message" tab)*

### Section 3: What is included

**H2:** Full-Service Eyecare Bookkeeping

**Body:** Good books explain your practice instead of merely recording it. We manage your daily transactions, code them to a structure designed for eyecare, keep your general ledger current, and deliver reviewed reports on a fixed schedule. The same team also supports your accounting and payroll needs, so nothing is lost between bookkeeping and the work that follows.

*(Links: "accounting" → /services/accounting; "payroll" → /services/payroll)*

**Card 1 H3:** Custom Chart of Accounts

Most bookkeeping software lumps income into a few broad lines and costs into a handful of buckets. Ours separates medical exam revenue from optical sales, and optical cost of goods from overhead, so you can see which services earn their keep. It also calculates Earnings Before Interest, Tax, Depreciation, and Amortization (EBITDA) automatically, the valuation metric buyers and lenders ask about first.

**Card 2 H3:** Accurate Transaction Categorization

Every deposit, vendor payment, and card swipe is coded to the right account the first time, whether it arrives through a bank feed or a manual import. Each month we match every account to its statement, so the balance in your books is the balance in your bank. The IRS expects books that clearly show gross income, deductions, and credits, and its recordkeeping guidance describes the supporting documents that back them up.

*(Link: "its recordkeeping guidance" → https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep)*

**Card 3 H3:** A Clean General Ledger, Every Month

Your general ledger is the foundation every report sits on, and small slips compound quickly. Each month we review adjustments, accruals, and uncategorized items so the ledger closes clean and stays consistent from one period to the next. Equipment purchases are recorded as assets with the details needed to calculate depreciation under IRS Publication 946, which keeps your tax work accurate later.

*(Link: "IRS Publication 946" → https://www.irs.gov/publications/p946)*

**Card 4 H3:** Reviewed Reports by the 10th Business Day

Speed matters only when the numbers are right. Before any P&L or balance sheet reaches your client portal, a dedicated quality control manager reviews it. By the 10th business day each month, you'll have complete, reviewed, and accurate financials for the month prior, far faster than many other Nashville, TN bookkeepers can deliver. Most firms don't close the books until the end of the month.

### Section 4: Benefits

**H2:** Why Us for Optometry Bookkeeping?

**Body:** Clinical skill brings patients through the door. Financial clarity lets you hire well, invest wisely, and plan an exit on your own terms. Here is what our bookkeeping puts in your hands:

**Card 1 H3:** Hours Back Each Month

Daily bookkeeping tasks leave your desk entirely, so evenings go to family and growth instead of receipts.

**Card 2 H3:** A Second Set of Eyes

A dedicated quality control manager reviews every report before delivery, so you can rely on what you read.

**Card 3 H3:** Review, Ask, Decide

Your job is to review reports and ask questions. Your account manager handles the rest and will meet whenever a number needs explaining.

**Card 4 H3:** A Ledger Built Around Eyecare

From startups to multi-location groups, your books mirror how an eyecare practice operates, with exam, optical, and contact lens activity tracked separately so growth plans rest on real margins.

*(Link: "multi-location groups" → /who-we-serve/multi-location-practices)*

### Section 5: Process

**H2:** Process Overview

**Subhead:** A clear path from first call to monthly close.

1. **Discovery Call** — We learn how your practice earns, spends, and reports today, and where the numbers have stopped making sense.
2. **Onboarding** — Meet your onboarding specialist, tour your client portal, and receive an intake form covering your accounts, vendors, and software.
3. **Intake Form Review** — We walk through your answers together, connect your financial institutions, and agree on what happens next.
4. **Cleanup** — An account manager works through your historical transactions and codes each one to your Custom Chart of Accounts. Depending on the scope of your needs, this step typically takes 6 to 8 weeks.
5. **Cleanup Review** — We walk through the cleaned-up books with you, explain what changed, and set expectations for monthly service.
6. **Monthly Services** — Your books close within the first ten business days, reviewed reports land in your portal, and your account manager is one meeting away.
7. **Annual Financial Review** — Each year ends with a review that confirms your books are tax-ready and still point toward your practice goals.

*(The dash after each step name is mine; on the page each step is an H3 heading with the sentence below it and a step number.)*

### Section 6: Testimonials

**H2:** Proof in Practice

**Subhead (as published, includes a stray editorial note):** Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page.

All four are tagged `platform: google` in the CMS (Google reviews). Rendered carousel order: Ryan Corte, Nona Kalfayan, Brandon Luu, Cristine Areola.

**Ryan Corte, OD**

> Wade and his team do an outstanding job providing accurate, timely, and reliable bookkeeping services. They’re responsive, detail-oriented, and take the time to explain financials in a way that’s easy to understand. Working with them has given me greater peace of mind and confidence in the financial side of my business. I highly recommend Wade and his team to any business owner looking for a trustworthy and professional bookkeeping partner.

**Nona Kalfayan, OD**

> I've been working with Wade and his team at ForEyes Solutions for the past two years, and the experience has been nothing short of excellent. From onboarding to goal setting and ongoing support, they've made a huge impact on my business by taking bookkeeping and organization off my plate so I can focus on growth. They truly understand the industry and provide value whether you're just starting out or already established and looking to improve your systems. What sets them apart is their communication — fast, reliable, and always helpful. You never feel left in the dark and are always supported.
>
> If you're looking for bookkeeping or business consulting, I highly recommend ForEyes Solutions. They're professional, knowledgeable, and genuinely committed to your success. They are absolutely the real deal!

**Brandon Luu, OD**

> Wade and his team have been rock solid. It's been about 2 years, and they've done an excellent job keeping my books in order. They are always available if I have any questions. Recently, Wade has really elevated his business beyond just bookkeeping. I am excited to be along for the ride. Extremely satisfied client and would definitely recommend his services to other practice owners.

**Cristine Areola, OD**

> For Eyes has been a great resource for my business as a first-time practice owner. I am very thankful for their expertise and their attentiveness to the small financial details. I don't know what I would do without them!

**Additional reviews in the page's CMS payload (site-wide review pool, not rendered in this section, but real attributed Google reviews that are bookkeeping-relevant):**

- **Tri Nguyen, OD:** "Wade being an optometrist helps me out tremendously because he knows the industry. Wade has become a great asset and friend. He has kept my books up to date and given suggestions that have saved me a lot of money."
- **Kyle Wilson, OD:** "Super happy to have ForEyes doing the nitty gritty on my financials. They do it so much better than I used to and it's taken a ton off my plate."
- **Annie Miller, OD:** "As my practice grows, I don't even know what I would do without you guys. Seriously. How do people make financial decisions like this without being up to date on their books constantly?! I know I don't have time for it or to remember how to do it right."
- **Stephen McCollough, OD:** "This time last year I was drowning in financials and had a lot of trouble keeping up with everything. And then my third kiddo was born lol. This year has been a cinch. Thanks to you and your team! Looking forward to continued growth with you guys :)"

### Section 7: FAQs

**H2:** Eyecare Bookkeeping FAQs

Answers below are the VISIBLE on-page accordion answers (from the CMS payload). The page's JSON-LD FAQ schema carries different, differently-worded answers to the same questions; those are listed separately in 1.3.

**Q: What are my responsibilities?**

A: Because you’ll no longer need to be involved in the day-to-day tasks, your only bookkeeping responsibility will be to ask any questions you have or answer ours via your client portal.

**Q: How will I get my financial reports?**

A: For convenience and quick access, standard monthly management reports are delivered to your portal. For custom insights or questions, don’t hesitate to schedule a meeting with your account manager.

**Q: How will ForEyes Solutions help me better run my practice?**

A: By taking bookkeeping completely off your plate, we free up hours each month that you can put back into your practice–whether that’s building your team, refinancing operations, or focusing more on patient care.

At the same time, our timely, accurate financials give you the insights needed to make confident decisions about growth opportunities, from adding new equipment to opening an additional location. With ForEyes Solutions, you gain both the time and clarity to run a stronger, more profitable eyecare practice.

**Q: What is a custom chart of accounts?**

A: A custom chart of accounts helps optometry practices separate revenue and expenses into meaningful categories, making it easier to understand profitability. ForEyes Solutions designs charts of accounts specifically for eyecare practices and structures them to automatically calculate EBITDA, providing clearer financial insights for growth planning and practice valuation.

**Q: What does monthly bookkeeping include?**

A: Monthly bookkeeping services include transaction categorization, account reconciliation, general ledger accounting, financial reporting, and ongoing account management. The goal is to keep books accurate, organized, and up to date while reducing the administrative burden on optometrists and their staff.

**Q: Do you support multi-location practices?**

A: Yes. ForEyes Solutions works with a range of eyecare businesses, from startup practices to multi-location groups. The bookkeeping system is customized to reflect how each practice operates, providing financial reporting and organization that supports business growth and operational visibility.

**Link/button:** More FAQs → /resources/faq

### Section 8: Pricing teaser

**H2:** See What Bookkeeping Costs for a Practice Like Yours

**Body:** Bookkeeping fees depend on your transaction volume, your number of locations, and how much cleanup your history needs. Use the pricing calculator to build an estimate in a few minutes, then book a Discovery Call to confirm it. Every figure shown is an estimate only.

**Button:** Pricing Calculator → /pricing-calculator

*(No prices appear on this page.)*

### Section 9: Cross-sell

**H2:** More Ways We Can Support Your Practice

- **Accounting** — Comprehensive accounting services including payroll, accounts payable, financial reporting, and ongoing support that keeps your practice operating efficiently.
- **Tax Services** — Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry. *(TAX: do not carry over)*
- **Practice Consulting** — Increase profitability and improve operational performance with expert consulting focused on staffing, workflows, systems, and optical business performance.
- **Billing Services** — Our revenue cycle management and coding audit services help maximize collections, improve cash flow, and ensure your practice receives the revenue it has earned.

### Section 10: Remote block (global, shared with Accounting page)

**H2:** Remote, Nationwide Assistance

**Body:** Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state.

Our remote team keeps both on schedule and answers questions quickly.

**Button:** Connect With Us

### Section 11: Blog teaser (global)

**H2:** Smart Reads for ODs

**Body:** Our blog helps you simplify your numbers and grow smarter, one post at a time.

*(Shows the latest 3 posts. At crawl time the three newest in the payload were: "What Healthy Expense Ratios Look Like in a Profitable Optometry Practice" (2026-10-08), "How to Forecast Revenue Accurately in an Eye Care Practice and Plan Growth" (2026-08-31), "How Labor Costs Quietly Drain Profit in Eyecare Practices (and How to Fix It)" (2026-07-30). Bookkeeping-category posts in the pool: "5 Time-Saving Bookkeeping Tips for Busy Eye Doctors" (/blog/bookkeeping-tips-eye-doctors, 2026-04-20) and "Why More Eyecare Professionals Are Switching to Outsourced Bookkeeping" (/blog/eyecare-bookkeeping-outsourcing, 2026-01-23).)*

### Section 12: Closing CTA (global)

**H2:** See Further. Move Faster. Grow Smarter.

**Body:** Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients.

**Button:** Book a Discovery Call

## 1.3 Hidden schema copy (JSON-LD) that differs from the visible page

Not visible to visitors, but it is published, it is indexed, and it contradicts or over-writes the visible copy. Recorded so the new site does not inherit it by accident.

- **Service name:** Bookkeeping Services for Optometrists and Eyecare Professionals
- **serviceType:** Specialized Eyecare Bookkeeping and Financial Management
- **Service description:** Full-service bookkeeping systems designed exclusively for independent optometry practices in Nashville, TN, and nationwide. Features include a custom chart of accounts with automated EBITDA tracking, transaction categorization, general ledger reconciliation, and human quality-reviewed monthly reports by the 10th business day.
- **areaServed:** United States; Nashville
- **audienceType:** Optometrists, Eye Care Practice Owners, Medical Startups, Multi-Location Eyecare Groups
- **knowsAbout:** Optometry Chart of Accounts; EBITDA Calculation for Practice Valuations; General Ledger Reconciliation; Transaction Categorization; Eyecare Financial Statement Auditing
- **Offer catalog "Core Eyecare Bookkeeping Deliverables":**
  - Custom Chart of Accounts — Industry-specific chart of accounts that isolates revenue categories and expenses, automatically scaling to calculate EBITDA metrics essential for clinic growth and sale valuations.
  - Transaction Categorization & Reconciliation — Correct classification of bank feeds and manual account imports to eliminate ledger errors, mismatched numbers, and missed tax deductions.
  - Monthly General Ledger Accounting — Complete, end-to-end management of all micro-entries, balance sheets, and transaction adjustments to preserve error-free accounting trails.
  - Reviewed Reports by the 10th Business Day — Punctual delivery of accurate, fully managed financial statements vetted by an internal quality control manager before portal delivery.
- **HowTo "Our Step-by-Step Bookkeeping Process"** (description: "A thorough, timely, and hands-off financial transition designed to clean up historic clinic numbers and launch optimized ongoing bookkeeping services."):
  1. Discovery Call — An initial consultation to understand your optometry practice metrics, setup architecture, and baseline back-office constraints.
  2. Onboarding — Meet your assigned onboarding specialist, view the core client hub space, and receive your secure onboarding forms.
  3. Intake Form Review — A tactical sync to break down your submitted form details, integrate bank and financial institutions, and outline next-phase expectations.
  4. Cleanup — Your accounting manager runs a comprehensive historical audit and cleanup, grouping past ledger errors and applying your custom chart of accounts over 6-8 weeks.
  5. Cleanup Review — A live milestone session to evaluate the completed ledger modifications and project your forward-looking accounting milestones.
  6. Monthly Services — Fully managed transactional oversight with monthly books closed cleanly by the 10th business day and financial records sent directly to your web portal.
  7. Annual Financial Review — A final yearly check to confirm your financial ledgers are structurally tax-ready and fully synchronized with your next-stage business plans.
- **FAQ schema answers (different from the visible answers above):**
  - What are my responsibilities? — Your daily bookkeeping strain is entirely removed. Your primary responsibilities are simply to securely upload missing receipts when prompted, review your final monthly portal updates, and bring forward any business questions to your account manager.
  - How will I get my financial reports? — All financial statements—including balance sheets and profit and loss records—are uploaded cleanly to your encrypted client portal dashboard by the 10th business day each month.
  - How will ForEyes Solutions help me better run my practice? — We transform random data points into real strategic leverage. By organizing operational revenue streams and expense lines, we unlock real margin visibility so you can confidently navigate equipment overhead, payroll adjustments, and practice valuation scales.
  - What is a custom chart of accounts? — It is an accounting roadmap built specifically around optometry workflows. Unlike standard charts, it segmentally flags frame sales, contact lens inventories, clinical metrics, and operational expenses, allowing you to instantly isolate true EBITDA benchmarks.
  - What does monthly bookkeeping include? — It includes active ledger maintenance, bank statement reconciliations, credit card line evaluations, correct category tagging, quality-reviewed financial closures, and real-time portal reporting updates.
  - Do you support multi-location practices? — Yes. We build layered bookkeeping records calibrated to trace individualized branch performance variables, manage parent holding company tracking, and cleanly evaluate consolidated practice operations.

## 1.4 Facts & claims (Bookkeeping page)

People and credentials

- Founder named as "Wade Weisz, OD" (an optometrist).
- "his 25-plus years in the owner's seat" (practice-ownership experience claim).
- Meta description claims "certified professionals" (no certification is named anywhere on this page).
- Roles named: "onboarding specialist", "account manager", "dedicated quality control manager".

Timelines and service levels

- Reviewed financials delivered "By the 10th business day each month" for "the month prior". Repeated as "Reviewed Reports by the 10th Business Day" and "Your books close within the first ten business days".
- Comparative claim: "far faster than many other Nashville, TN bookkeepers can deliver. Most firms don't close the books until the end of the month."
- Cleanup "typically takes 6 to 8 weeks" ("Depending on the scope of your needs").
- A "dedicated quality control manager reviews every report before delivery" / before any P&L or balance sheet reaches the portal.
- Monthly reconciliation of every account to its statement ("Each month we match every account to its statement").
- Monthly review of "adjustments, accruals, and uncategorized items".
- An "Annual Financial Review" every year.
- 7-step process: Discovery Call, Onboarding, Intake Form Review, Cleanup, Cleanup Review, Monthly Services, Annual Financial Review.

Product and method

- "Custom Chart of Accounts" built for eyecare: separates "medical exam revenue from optical sales, and optical cost of goods from overhead"; exam, optical and contact lens activity tracked separately.
- Chart of accounts "calculates ... EBITDA ... automatically"; EBITDA described as "the valuation metric buyers and lenders ask about first".
- Transactions come in via "a bank feed or a manual import".
- Reports named: P&L, balance sheet, "standard monthly management reports".
- Delivery channel: "client portal" (Q&A with the team also happens in the portal).
- Equipment purchases recorded as fixed assets with depreciation detail (cites IRS Publication 946).
- Cites IRS recordkeeping guidance (irs.gov "what kind of records should I keep").
- Same team handles accounting (AP) and payroll.
- Serves "From startups to multi-location groups".

Tools and partners named

- Bill.com and Gusto (only in the shared "Remote, Nationwide Assistance" block).
- No accounting software (QuickBooks, Xero, etc.) is named on this page. The portal product is not named.

Location and contact

- "bookkeeping for optometrists in Nashville, TN, and nationwide"; "Nashville, TN bookkeepers".
- Footer address: 2429 Curbow Dr, Murfreesboro, TN 37127.
- Phone 844-505-3937; email hello@foreyessolutions.com; hours Mon-Fri 8AM-5PM CT.
- Remote, nationwide service ("from any state").

Pricing

- No prices. Fees "depend on your transaction volume, your number of locations, and how much cleanup your history needs." Pricing calculator at /pricing-calculator; "Every figure shown is an estimate only."

Testimonial facts

- Nona Kalfayan, OD: client "for the past two years"; mentions bookkeeping and business consulting.
- Brandon Luu, OD: "about 2 years".
- Cristine Areola, OD: "first-time practice owner".
- Ryan Corte, OD: "accurate, timely, and reliable bookkeeping services".
- All four are Google reviews.

Schema-only claims (not visible; treat with caution): "designed exclusively for independent optometry practices"; "encrypted client portal dashboard"; "securely upload missing receipts when prompted"; "manage parent holding company tracking"; "Eyecare Financial Statement Auditing" (the firm does not offer audits on the visible page).

## 1.5 Tax content (Bookkeeping page)

Tax SERVICE content: must NOT be carried into the new site

- Cross-sell card "Tax Services": "Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry." Links to /services/tax-services.
- Global nav and footer link "Tax Services" (/services/tax-services).
- Service pool in the page payload lists "Tax Advisory for Optometry Practices" (/services/tax-services/tax-advisory), "Tax Planning" (/services/tax-services/tax-planning), "Tax Services".
- Blog pool includes "Quarterly Taxes for Optometrists Made Easy" (category "Tax Strategy"); it can surface in the "Smart Reads for ODs" block.

Tax-ADJACENT bookkeeping content: fine in substance, but reword so it does not imply ForEyes does the tax work

- "Equipment purchases are recorded as assets with the details needed to calculate depreciation under IRS Publication 946, which keeps your tax work accurate later." ("your tax work" should become something like "your CPA's tax work".)
- "Each year ends with a review that confirms your books are tax-ready and still point toward your practice goals." ("tax-ready books" is a bookkeeping deliverable, keep; position as a clean hand-off to the client's own CPA.)
- "The IRS expects books that clearly show gross income, deductions, and credits, and its recordkeeping guidance describes the supporting documents that back them up." (Recordkeeping, not a tax service; keep or trim.)
- EBITDA expansion "Earnings Before Interest, Tax, Depreciation, and Amortization" (a metric, not a service; note the standard term is "Taxes").
- Schema only: "missed tax deductions" (offer catalog) and "structurally tax-ready" (HowTo step 7).

## 1.6 Problems (Bookkeeping page)

1. **Stray editorial note published in live copy:** "Keep the Ryan Corte, OD quote first on this page." appears as the second sentence of the testimonials subhead. It is an instruction to an editor, not copy. (It also appears, identically, on the Accounting page.) In the CMS the reviews array actually starts with Nona Kalfayan; the carousel happens to render Ryan Corte first.
2. **Brand name inconsistency:** `<title>` says "For Eyes Solutions"; body copy, FAQs, schema and footer say "ForEyes Solutions"; a testimonial says "For Eyes".
3. **Location inconsistency:** copy says "Nashville, TN" twice and schema lists Nashville as area served, but the footer address is Murfreesboro, TN. "Nashville, TN" is also bolted on for local SEO and reads awkwardly on a nationwide remote service ("far faster than many other Nashville, TN bookkeepers can deliver").
4. **Visible FAQ answers and FAQ schema answers do not match.** Six questions, two different sets of answers (see 1.2 vs 1.3). The schema set adds claims the page never makes (receipt uploads, "encrypted" portal, holding-company tracking).
5. **Schema copy is AI-flavored word salad** and should not be reused: "segmentally flags", "tactical sync", "core client hub space", "micro-entries", "practice valuation scales", "absolute ledger confidence", "individualized branch performance variables".
6. **Two `<h1>` elements on the page.** The FAQ "What does monthly bookkeeping include?" contains an empty H1 block in the CMS (shows as a bare "#" in the crawl). The FAQ "Do you support multi-location practices?" also has an empty extra heading block.
7. **Title and meta description are generic** and do not match the page: "expert remote and outsourced bookkeeping from certified professionals"; nothing about the custom chart of accounts or the 10th-business-day close. The JSON-LD WebPage name/description disagree with them.
8. **"certified professionals" is unsupported** on this page (the only certifications cited anywhere are Bill.com and Gusto, on the Accounting page).
9. **The "Remote, Nationwide Assistance" block is off-topic here:** it talks only about "Payments and paychecks", Bill.com and Gusto, on a bookkeeping page.
10. **"25-plus years in the owner's seat"** appears here; the Accounting page gives no number. Verify against the About page inventory for consistency.
11. **Internal typo in CMS identifiers:** "Bookeeping" (not visitor-facing).
12. **"Earnings Before Interest, Tax, Depreciation, and Amortization"**: standard wording is "Taxes".
13. **Unsupported comparative claim:** "Most firms don't close the books until the end of the month." No source.
14. **Minor process wording drift:** "by the 10th business day" vs "within the first ten business days" (numeral vs word); "Custom Chart of Accounts" capitalized in some places, lower case in others.
15. **Hero has no supporting copy or CTA**, just the H1; the first CTA is in section 2.
16. **Weak/generic passages:** the closing CTA ("Unlock the clarity and expert, industry-specific support...") and blog teaser are sitewide boilerplate; the multi-location FAQ answer is vague ("supports business growth and operational visibility").
17. **Punctuation:** en dash used as an em dash with no spaces ("your practice–whether", "returns–handled", "most–your patients"); mixed straight and curly apostrophes.
18. **Footer nav omits Payroll** although the header nav includes it. og:image URL has a double slash.
19. **Link to "accounting"** in section 3 and the "Accounting" cross-sell card point at a service that is being retired.

## 1.7 Best lines (Bookkeeping page)

1. "Books That Show What Your Practice Actually Earns"
2. "Exams, optical sales, and contact lenses all deposit into the same bank account, which makes it hard to see which part of your practice carries its weight."
3. "...sorts every dollar into a structure built for eyecare, so your monthly P&L reads like a story you can act on."
4. "Good books explain your practice instead of merely recording it."
5. "Each month we match every account to its statement, so the balance in your books is the balance in your bank."
6. "Speed matters only when the numbers are right."
7. "Clinical skill brings patients through the door. Financial clarity lets you hire well, invest wisely, and plan an exit on your own terms."
8. "Daily bookkeeping tasks leave your desk entirely, so evenings go to family and growth instead of receipts."
9. "Your job is to review reports and ask questions. Your account manager handles the rest and will meet whenever a number needs explaining."
10. "A clear path from first call to monthly close." / "We learn how your practice earns, spends, and reports today, and where the numbers have stopped making sense."

Also strong as headings: "Reviewed Reports by the 10th Business Day", "A Second Set of Eyes", "Review, Ask, Decide", "A Ledger Built Around Eyecare".

---

# PAGE 2: Accounting

- **URL:** https://foreyessolutions.com/services/accounting
- **`<title>`:** Accounting for Optometrists | Virtual & Outsourced Solutions
- **Meta description:** For Eyes Solutions delivers online accountant support, accounting outsourcing, and tailored accounting services for optometrists. Contact us today.
- **og:title / og:description:** same as title / meta description. og:image: `https://foreyessolutions.com//images/open-graph/default.jpg`.
- **Robots:** index,follow. No canonical tag found in the HTML.
- **JSON-LD WebPage name (differs from `<title>`):** Accounting Services for Optometry Practices | ForEyes Solutions
- **JSON-LD WebPage description (differs from meta):** Delegate accounts payable and payroll headaches to certified professionals. Discover our specialized Bill.com and Gusto accounting workflows optimized for eyecare clinics.
- **Breadcrumb (schema only):** Home > Services > Accounting
- **Child page exists (not assigned here):** /services/accounting/accounts-payable, "Accounts Payable Services for Optometry Practices".

**What this page really is:** there is no general "accounting" content on it. Its two service blocks are Accounts Payable (via Bill.com) and Payroll (via Gusto, as a bookkeeping/posting view of payroll). The schema says so outright: serviceType "Optometry Accounts Payable and Payroll Services". See 2.8 for the line-by-line split.

## 2.1 Section structure (in order)

| # | Section heading | What it does |
|---|---|---|
| 1 | H1 "Accounting Services for Optometry Practices" | Hero: headline + image only. |
| 2 | "Control Over Every Dollar Going Out" | Intro: frames the page as payables + payroll. CTA "Book a Discovery Call". |
| 3 | "Where Bookkeeping Ends and Financial Management Begins" | Defines accounting vs bookkeeping; 2 service cards (Accounts Payable, Payroll), each with paragraph + 4 bullets. |
| 4 | "Why Accounting Works Better With an Eyecare Specialist" | Differentiators: intro + 3 cards. |
| 5 | "What to Expect When Working With Us" | 5 numbered process steps. |
| 6 | "Proof in Practice" | Same testimonial carousel as Bookkeeping page, same stray editorial note. |
| 7 | "Payroll FAQs" | 6 accordion FAQs (AP, payroll and general) + "More FAQs". |
| 8 | "Estimate Your Accounting Costs in Minutes" | Pricing calculator teaser. |
| 9 | "More Ways We Can Support Your Practice" | Cross-sell: Bookkeeping, Tax Services, Practice Consulting, Billing Services. |
| 10 | "Remote, Nationwide Assistance" | Shared global block (Bill.com / Gusto). CTA "Connect With Us". |
| 11 | "Smart Reads for ODs" | Blog teaser (global). |
| 12 | "See Further. Move Faster. Grow Smarter." | Closing CTA (global). |

## 2.2 Verbatim copy

### Section 1: Hero

**H1:** Accounting Services for Optometry Practices

*(No body copy or button label in the hero block.)*

### Section 2: Intro

**H2:** Control Over Every Dollar Going Out

**Body:** Your practice pays frame vendors, lab partners, contact lens suppliers, a landlord, and a team that depends on every paycheck. When those payments run through inboxes and memory, bills slip and cash timing suffers. Our accounting services for optometry practices put payables and payroll accounting on a predictable system, built on the owner's-seat experience of Wade Weisz, OD.

**Button:** Book a Discovery Call

### Section 3: Services

**H2:** Where Bookkeeping Ends and Financial Management Begins

**Body:** Bookkeeping records what happened. Accounting manages how money moves next: which vendors get paid when, how payroll costs show up against revenue, and what the numbers mean for the months ahead. We handle that layer for practices at every stage, from an eyecare startup setting up its first approval workflow to established groups tightening cash flow. If you also want the records side covered, our bookkeeping services pair naturally with this work.

*(Links: "eyecare startup" → /who-we-serve/startups; "bookkeeping services" → /services/bookkeeping)*

**Card 1 H3:** Accounts Payable (AP)

Every vendor bill follows the same path: entered, coded, approved by you, and paid on the date that protects your cash and your supplier relationships. We run that path exclusively through Bill.com, so nothing depends on a paper trail or a forwarded email. Under the accrual method, an expense counts when you become liable for it rather than when you pay it, which is why payable timing matters to your reports. When a vendor might actually be a worker, we flag it, because classification rules decide what you owe and report.

*(Links: "payable timing matters to your reports" → https://www.irs.gov/publications/p538; "classification rules decide what you owe and report" → https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee)*

- Approval on your terms: You review and approve in Bill.com. We handle entry, coding, and scheduling.
- Vendor-term awareness: We track due dates and payment terms with frame, lab, and supply vendors so bills are paid on time and cash is not tied up early.
- A clear audit trail: Each approval and payment is recorded in one place, so questions about what was paid, and when, have answers.
- Certified in Bill.com: Our team is certified in the platform, so your practice uses features most offices never turn on.

**Card 2 H3:** Payroll

Payroll is also an accounting question: what does your team really cost, and what is left for you? We run payroll through Gusto and make sure each pay run, deposit, and deduction lands in the right account, so labor cost shows up cleanly in your P&L and your own take-home pay is never a guess. For setup, filings, and benefits detail, see our payroll page.

*(Link: "payroll page" → /services/payroll)*

- Labor cost visibility: Wages, employer taxes, and benefits post to separate categories, so you can see payroll as a share of revenue.
- Owner pay clarity: We keep W-2 wages and owner draws separate, so your true take-home pay is unmistakable.
- Gusto-certified support: Our team works inside the platform, so you do not have to train staff on new software.
- Reports you can use: Payroll summaries feed your monthly financials and tax planning without re-keying.

### Section 4: Differentiators

**H2:** Why Accounting Works Better With an Eyecare Specialist

**Body:** You didn’t become an optometrist or eyecare professional to chase invoices or troubleshoot payroll software. That’s where we come in, with the experience, systems, and support to keep your AP and payroll running smoothly. Here’s what sets our accounting services apart:

**Card 1 H3:** Eyecare Vendor Fluency

We know which payments recur weekly, which arrive quarterly, and which swing with frame and lens orders, so your cash plan reflects how your practice really spends.

**Card 2 H3:** Two Platforms, Two Certifications

Certified in both Bill.com and Gusto, we configure approvals, schedules, and permissions around your practice instead of accepting defaults.

**Card 3 H3:** Approve, Don't Administrate

On payables you review and approve. On payroll you choose how involved to be. Either way, you keep visibility and control without the data entry.

### Section 5: Process

**H2:** What to Expect When Working With Us

**Subhead:** Our process is designed to remove the stress of accounting without removing your visibility or control. From onboarding to monthly tasks, you’ll always know what’s happening, when, and why.

1. **Discovery Call** — We learn about your practice, current systems, and pain points before reviewing how our support and platforms can improve workflows.
2. **Onboarding** — You’ll be introduced to your onboarding specialist, complete a short intake form, and get a tour of your client portal.
3. **Cleanup** — If needed, our experts can organize past transactions and clean vendor and payroll data so you can have an accurate, fresh start.
4. **Ongoing Monthly Service** — Your dedicated account manager ensures all AP and payroll tasks are handled efficiently, helping you stay focused on patient care.
5. **Annual Financial Review** — We’ll wrap the year with a strategic review to ensure our support continues to align with your evolving goals.

### Section 6: Testimonials

**H2:** Proof in Practice

**Subhead (as published, includes the stray editorial note):** Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page.

Same four Google reviews as the Bookkeeping page, verbatim in section 1.2 above (Ryan Corte, OD; Nona Kalfayan, OD; Brandon Luu, OD; Cristine Areola, OD). None of them mentions accounts payable or payroll; all are about bookkeeping.

### Section 7: FAQs

**H2:** Payroll FAQs

Answers below are the VISIBLE on-page accordion answers. The JSON-LD schema has different answers (see 2.3).

**Q: What would you need from me to change my payroll over to ForEyes Solutions?** *(Payroll)*

A: For the initial setup, we will need you to provide access to necessary documentation and employee information, complete a short intake form, and connect your financial institutions during the onboarding process. Our team handles the heavy lifting of system setup and data cleanup.

**Q: What would you need from me on an ongoing basis?** *(Payroll)*

A: For your ongoing service, because we handle all the backend setup and management, in most cases, all you need to do is review time cards and click submit. Want us to take that off your plate, too? No problem. We offer full-service payroll management for a cost-effective, flat monthly fee.

**Q: Can’t I handle AP and payroll in-house?** *(AP + Payroll)*

A: Yes, you could, but it often comes at the cost of your time, accuracy, and peace of mind. In-house accounting pulls you or staff away from other core business functions and patient care, and without dedicated training in tools like Gusto, costly errors or inefficiencies can pile up.

Optometry practices turn to us for AP and payroll for streamlined systems, expert execution, and the confidence that it’s all done correctly the first time around.

**Q: Do you support multi-location optometry practices?** *(General)*

A: Yes. ForEyes Solutions provides accounting services for independent eyecare practices of various sizes, including multi-location groups. Our team understands the operational and financial complexities that come with managing multiple locations and can help streamline accounting processes across your practice.

**Q: Why outsource accounts payable services?** *(AP)*

A: Outsourcing accounts payable services can help reduce administrative workload, improve payment accuracy, and provide greater visibility into vendor expenses. With a structured AP process, optometry practices can spend less time managing invoices and more time focusing on patient care and business growth.

**Q: Can accounting services help improve practice efficiency?** *(AP + Payroll)*

A: Yes. By managing accounts payable and payroll processes, accounting services can eliminate time-consuming administrative tasks and create more efficient workflows. This allows practice owners and staff to focus on delivering patient care rather than handling financial administration.

**Link/button:** More FAQs → /resources/faq

### Section 8: Pricing teaser

**H2:** Estimate Your Accounting Costs in Minutes

**Body:** Accounting fees reflect how many vendors you pay, how many people you employ, and how hands-on you want to be. Enter those details in the pricing calculator for an estimate, then confirm it on a Discovery Call. Every figure shown is an estimate only.

**Button:** Calculate Your Price Now → /pricing-calculator

*(No prices on this page. The only pricing statement is in a FAQ: "full-service payroll management for a cost-effective, flat monthly fee.")*

### Section 9: Cross-sell

**H2:** More Ways We Can Support Your Practice

- **Bookkeeping** — Full-service bookkeeping with customized financial reporting, timely monthly closes, and organized records that support better decision-making.
- **Tax Services** — Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry. *(TAX: do not carry over)*
- **Practice Consulting** — Increase profitability and improve operational performance with expert consulting focused on staffing, workflows, systems, and optical business performance.
- **Billing Services** — Our revenue cycle management and coding audit services help maximize collections, improve cash flow, and ensure your practice receives the revenue it has earned.

### Sections 10 to 12 (global blocks, identical to Bookkeeping page)

**H2:** Remote, Nationwide Assistance — Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state. / Our remote team keeps both on schedule and answers questions quickly. — Button: Connect With Us

**H2:** Smart Reads for ODs — Our blog helps you simplify your numbers and grow smarter, one post at a time.

**H2:** See Further. Move Faster. Grow Smarter. — Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients. — Button: Book a Discovery Call

## 2.3 Hidden schema copy (JSON-LD) that differs from the visible page

- **Service name:** Accounting Services for Optometry Practices
- **serviceType:** Optometry Accounts Payable and Payroll Services
- **Service description:** Specialized accounting support exclusively for independent eyecare practices. Providing comprehensive Accounts Payable management via Bill.com and full-service compliance payroll administration powered by Gusto.
- **areaServed:** United States (no Nashville here, unlike the Bookkeeping page)
- **audienceType:** Optometrists, Eye Care Practice Owners, Eyecare Startups
- **knowsAbout:** Accounts Payable Optimization; Optometry Payroll Management; Bill.com Certified Workflows; Gusto Payroll Compliance; Eyecare Practice Financial Reporting
- **Offer catalog "Optometry Back-Office Accounting Modules":**
  - Accounts Payable (AP) Management — Secure, automated vendor payment cycles handled exclusively via Bill.com with certified platform support, clear receipt transparency, and custom client approvals.
  - Payroll Administration — End-to-end small business payroll processing managed via Gusto. Covering complete team onboarding, wage distribution, federal/state employment tax filing, and proactive compliance audits.
- **HowTo "How to Onboard with ForEyes Solutions Accounting Services"** (description: "Our specialized process transitions your practice's accounting infrastructure safely without losing operations control or transaction historical oversight."):
  1. Discovery Call — We review your operational layout, identify software bottleneck pain points, and outline how our Bill.com and Gusto integrations optimize your local clinic flow.
  2. Onboarding — Meet your dedicated setup manager, complete an intake verification sequence, and secure administrative links to your custom client processing space.
  3. Cleanup — Our backend team investigates and normalizes historic bookkeeping records, correcting legacy payroll data errors and legacy vendor record inconsistencies.
  4. Ongoing Monthly Service — Your dedicated accounts manager executes recurring payables tracking and employee distributions punctually, removing the daily back-office overhead entirely.
  5. Annual Financial Review — We conclude the target fiscal year with an exhaustive strategy evaluation session to scale systems ahead of your evolving professional growth goals.
- **FAQ schema answers (different from the visible answers):**
  - What would you need from me to change my payroll over to ForEyes Solutions? — We handle the entire setup. We will collect your baseline business profile, active employee rosters, historical year-to-date tax summaries, and securely hook up your system access parameters inside our dedicated Gusto framework.
  - What would you need from me on an ongoing basis? — Minimal effort is required. For accounts payable, you simply log in to review and approve invoices with a click. For payroll, you just need to submit or review staff hours according to your selected service plan tier.
  - Can't I handle AP and payroll in-house? — You can, but it presents major time costs and elevated liability exposure. Outsourcing to our platform-certified eye care experts ensures absolute tax compliance, minimizes input errors, and completely frees up your schedule for operational patient care.
  - Do you support multi-location optometry practices? — Yes. We deploy highly flexible multi-clinic financial architectures designed to map segmented ledger parameters, balance regional tax nexus requirements, and consolidate complex overhead setups across diverse operating hubs.
  - Why outsource accounts payable services? — Outsourcing AP eliminates manual entries, minimizes vendor disputes, secures invoice tracking records, and stops internal accounting duplicate errors using our hardened cloud integration pathways.
  - Can accounting services help improve practice efficiency? — Yes. By deploying cloud-synchronized tools like Bill.com and Gusto under expert configuration, we remove administrative strain, decrease internal staffing dependencies, and give owners clear, data-driven cash flow insights.

## 2.4 Facts & claims (Accounting page)

People and credentials

- "built on the owner's-seat experience of Wade Weisz, OD" (no number of years given on this page).
- Team is "Certified in Bill.com" ("Our team is certified in the platform").
- "Gusto-certified support"; "Certified in both Bill.com and Gusto" ("Two Platforms, Two Certifications").
- Roles: "onboarding specialist", "dedicated account manager".

Tools and partners

- Accounts payable runs "exclusively through Bill.com". Client reviews and approves in Bill.com; ForEyes handles "entry, coding, and scheduling".
- Payroll runs "through Gusto".
- Client portal (tour at onboarding).
- No accounting ledger software named (no QuickBooks/Xero mention).

AP specifics

- Bill path: "entered, coded, approved by you, and paid on the date that protects your cash and your supplier relationships."
- Tracks due dates and payment terms with "frame, lab, and supply vendors".
- Audit trail: "Each approval and payment is recorded in one place".
- Accrual-method statement citing IRS Publication 538: "an expense counts when you become liable for it rather than when you pay it".
- Flags possible worker misclassification among vendors (cites IRS independent contractor vs employee guidance).
- Vendor types named: frame vendors, lab partners, contact lens suppliers, landlord.
- Knows payment cadence: "which payments recur weekly, which arrive quarterly, and which swing with frame and lens orders".

Payroll specifics

- "each pay run, deposit, and deduction lands in the right account".
- "Wages, employer taxes, and benefits post to separate categories" so payroll shows as a share of revenue.
- "We keep W-2 wages and owner draws separate".
- "Payroll summaries feed your monthly financials and tax planning without re-keying."
- Ongoing client effort: "in most cases, all you need to do is review time cards and click submit."
- Two service levels implied: client-submits vs "full-service payroll management for a cost-effective, flat monthly fee."
- "On payroll you choose how involved to be."
- Detail on "setup, filings, and benefits" deferred to /services/payroll.

Process

- 5 steps: Discovery Call, Onboarding, Cleanup ("If needed"), Ongoing Monthly Service, Annual Financial Review. (Bookkeeping page has 7.)
- Onboarding needs: documentation and employee information, a short intake form, connecting financial institutions.

Audience and reach

- "practices at every stage, from an eyecare startup ... to established groups"; "independent eyecare practices of various sizes, including multi-location groups".
- Remote, any state. No Nashville mention in visible copy. Footer address Murfreesboro, TN.

Pricing

- No prices. Fees "reflect how many vendors you pay, how many people you employ, and how hands-on you want to be." Estimate via pricing calculator; "Every figure shown is an estimate only."

Schema-only claims (not visible; treat with caution, several are compliance guarantees the firm should not make): "federal/state employment tax filing"; "proactive compliance audits"; "ensures absolute tax compliance"; "balance regional tax nexus requirements"; "exclusively for independent eyecare practices"; "selected service plan tier"; "historical year-to-date tax summaries".

## 2.5 Tax content (Accounting page)

Tax SERVICE content: must NOT be carried into the new site

- Cross-sell card "Tax Services": "Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry." (/services/tax-services)
- Payroll bullet: "Reports you can use: Payroll summaries feed your monthly financials **and tax planning** without re-keying." (Implies ForEyes does tax planning. Rewrite to end at "monthly financials", or say the summaries are ready for the client's CPA.)
- Global nav/footer "Tax Services" link; service pool entries "Tax Advisory for Optometry Practices", "Tax Planning", "Tax Services"; blog pool "Quarterly Taxes for Optometrists Made Easy" (Tax Strategy).

Tax-ADJACENT content that is really payroll/AP bookkeeping (keep the substance, check the wording)

- "Labor cost visibility: Wages, employer taxes, and benefits post to separate categories..." (employer payroll taxes as a posting category; bookkeeping, fine.)
- "For setup, filings, and benefits detail, see our payroll page." ("filings" = payroll tax filings handled through Gusto; this is payroll, not a tax service, but keep the wording specific: "payroll filings".)
- "Under the accrual method, an expense counts when you become liable for it rather than when you pay it..." (links IRS Pub 538; accounting-method explanation, not tax advice. Fine, or trim.)
- "When a vendor might actually be a worker, we flag it, because classification rules decide what you owe and report." (worker classification; links IRS. This borders on tax/compliance advice. Keep as "we flag it for you and your CPA" or cut.)
- "We keep W-2 wages and owner draws separate..." (bookkeeping of owner compensation; fine.)
- Schema only, and should be dropped: "federal/state employment tax filing", "ensures absolute tax compliance", "balance regional tax nexus requirements", "historical year-to-date tax summaries".

Note: the meta description's "online accountant support" and the page's use of "accounting" may also imply CPA-style services; neither fits a books-and-billing firm.

## 2.6 Problems (Accounting page)

1. **Same stray editorial note in live copy:** "Keep the Ryan Corte, OD quote first on this page." in the testimonials subhead.
2. **FAQ section is headed "Payroll FAQs"** but three of the six questions are about AP or accounting in general.
3. **The page is mislabeled.** It is titled "Accounting" but contains only AP and payroll. It also duplicates two pages that already exist: /services/payroll and /services/accounting/accounts-payable.
4. **Brand name inconsistency:** meta description says "For Eyes Solutions"; body, FAQs, schema and footer say "ForEyes Solutions"; a testimonial says "For Eyes". The `<title>` has no brand name at all ("Accounting for Optometrists | Virtual & Outsourced Solutions").
5. **Visible FAQ answers and FAQ schema answers do not match**, and the schema versions make risky promises ("ensures absolute tax compliance", "regional tax nexus requirements", "hardened cloud integration pathways").
6. **Schema HowTo text is word salad:** "intake verification sequence", "custom client processing space", "employee distributions", "target fiscal year", "transaction historical oversight", "local clinic flow".
7. **Testimonials do not match the page.** The subhead says "what dependable books feel like" and every quote is about bookkeeping; none mentions AP or payroll. It is the Bookkeeping page's block reused unchanged.
8. **Meta description is keyword-stuffed and generic:** "online accountant support, accounting outsourcing, and tailored accounting services". The JSON-LD WebPage description disagrees with it.
9. **"Approve, Don't Administrate"**: "administrate" is awkward ("administer"); straight apostrophe here while neighbouring copy uses curly.
10. **Process inconsistency with the Bookkeeping page:** 5 steps here vs 7 there (no Intake Form Review or Cleanup Review); the final step is described differently ("strategic review" vs "confirms your books are tax-ready").
11. **Experience claim inconsistency:** Bookkeeping says "25-plus years in the owner's seat"; this page gives only "owner's-seat experience".
12. **Location inconsistency across the two pages:** Bookkeeping pushes "Nashville, TN"; this page never mentions a city; the footer says Murfreesboro, TN. Schema areaServed differs too (Bookkeeping lists Nashville, Accounting does not).
13. **Certification claims need verification** and exact naming (Bill.com is now branded "BILL"; Gusto's program is partner/"Gusto People Advisory" certification). "Gusto-certified support" bullet then says only "Our team works inside the platform", which does not actually back the certification claim.
14. **"exclusively through Bill.com"** is a strong operational constraint; confirm it is still true before reusing.
15. **Generic/weak passages:** the three general FAQ answers ("can help reduce administrative workload, improve payment accuracy...") are hedged and interchangeable with any firm; process steps 4 and 5 are filler ("handled efficiently", "align with your evolving goals"); section 4 intro opens with the "You didn’t become an optometrist... to chase invoices" cliché.
16. **CMS identifiers show leftover older headlines** (not visitor-facing): "Efficient. Accurate. Reliable.", "Built for Your Practice–And Peace of Mind", "No Hidden Fees Here; Get an Instant Estimate", "Why ForEyes Solutions for AP & Payroll?".
17. **Button label inconsistency for the same destination:** "Calculate Your Price Now" here vs "Pricing Calculator" on Bookkeeping. CTA labels also vary: "Book a Discovery Call", "Connect With Us", "Get Started", "Book a Call".
18. **Punctuation:** en dash used as an em dash ("returns–handled", "most–your patients"); mixed curly and straight apostrophes.
19. **"Financial Management" framing** ("Where Bookkeeping Ends and Financial Management Begins", "what the numbers mean for the months ahead") promises forecasting/advisory the page never delivers; the content below is transactional AP and payroll.
20. **Footer omits Payroll** from the services list; og:image URL has a double slash; no canonical tag.

## 2.7 Best lines (Accounting page)

1. "Control Over Every Dollar Going Out"
2. "Your practice pays frame vendors, lab partners, contact lens suppliers, a landlord, and a team that depends on every paycheck. When those payments run through inboxes and memory, bills slip and cash timing suffers."
3. "Every vendor bill follows the same path: entered, coded, approved by you, and paid on the date that protects your cash and your supplier relationships."
4. "You review and approve in Bill.com. We handle entry, coding, and scheduling."
5. "We track due dates and payment terms with frame, lab, and supply vendors so bills are paid on time and cash is not tied up early."
6. "Each approval and payment is recorded in one place, so questions about what was paid, and when, have answers."
7. "Payroll is also an accounting question: what does your team really cost, and what is left for you?"
8. "We keep W-2 wages and owner draws separate, so your true take-home pay is unmistakable."
9. "We know which payments recur weekly, which arrive quarterly, and which swing with frame and lens orders, so your cash plan reflects how your practice really spends."
10. "On payables you review and approve. On payroll you choose how involved to be. Either way, you keep visibility and control without the data entry."

Also strong as headings: "Eyecare Vendor Fluency", "Two Platforms, Two Certifications", "Approve, Don't Administrate" (fix to "Administer").

## 2.8 What in "Accounting" is really Bookkeeping, AP or Payroll

| Accounting-page content | Really belongs to |
|---|---|
| H1, title, meta, "Accounting Services for Optometry Practices" | Retire. No general accounting service exists behind it. |
| "Control Over Every Dollar Going Out" + intro paragraph | **Accounts Payable** (lead), with the "team that depends on every paycheck" clause usable for **Payroll**. |
| "Bookkeeping records what happened. Accounting manages how money moves next..." | Retire the bookkeeping-vs-accounting distinction. The sentence "Bookkeeping records what happened." could be reused on **Bookkeeping** only if reframed; the "which vendors get paid when" clause is **AP**; "how payroll costs show up against revenue" is **Payroll**/Bookkeeping. |
| "Accounts Payable (AP)" card + 4 bullets | **Accounts Payable** (all of it). Accrual-method sentence and audit-trail bullet also support **Bookkeeping** (accrual books, clean records). |
| Worker-classification sentence | **AP** (vendor review) / hand-off to the client's CPA. Not tax advice. |
| "Payroll" card + 4 bullets | **Payroll**. The posting detail (pay runs landing in the right account, wages/employer taxes/benefits in separate categories, W-2 wages vs owner draws, labor cost in the P&L) is also a **Bookkeeping** proof point: payroll flows into the books without re-keying. |
| "Eyecare Vendor Fluency" | **AP**. |
| "Two Platforms, Two Certifications" | Split: Bill.com → **AP**; Gusto → **Payroll**. Could also be a home/about trust badge row. |
| "Approve, Don't Administrate" | First sentence **AP**, second **Payroll**. |
| Process steps | Fold into the single shared process (the Bookkeeping page's 7-step version is the stronger one). "clean vendor and payroll data" → **AP**/**Payroll** onboarding. |
| FAQ: change my payroll over / ongoing basis | **Payroll**. |
| FAQ: Can’t I handle AP and payroll in-house? | **AP** and **Payroll** (split or keep on both). |
| FAQ: Why outsource accounts payable services? | **AP**. |
| FAQ: multi-location / practice efficiency | Generic; merge into the Bookkeeping multi-location FAQ or drop. |
| "Estimate Your Accounting Costs in Minutes": "how many vendors you pay, how many people you employ, and how hands-on you want to be" | Pricing drivers: vendors → **AP**; employees and hands-on level → **Payroll**. |
| "Remote, Nationwide Assistance" block | **AP** + **Payroll** (it is about Bill.com approvals and Gusto pay runs); not for Bookkeeping as written. |

---

# Reuse notes for the new Books & Billing site

**Bookkeeping flagship page (primary destination for Page 1)**

- Hero: use "Books That Show What Your Practice Actually Earns" as the headline candidate and the "Exams, optical sales, and contact lenses all deposit into the same bank account..." paragraph as the lede. Drop "in Nashville, TN, and"; keep "nationwide". Keep "Wade Weisz, OD, and his 25-plus years in the owner's seat" once the number is verified.
- "What's included": reuse the four cards nearly as written (Custom Chart of Accounts, Accurate Transaction Categorization, A Clean General Ledger, Every Month, Reviewed Reports by the 10th Business Day). Edits: remove the "Nashville, TN bookkeepers" comparison; change "keeps your tax work accurate later" to a CPA hand-off phrasing; fix "Tax" to "Taxes" in the EBITDA expansion.
- Signature proof points to feature as stats/badges: **10th business day** reviewed close; **6 to 8 weeks** typical cleanup; **dedicated quality control manager** reviews every report; **EBITDA calculated automatically**; **25-plus years** owner experience (verify).
- Benefits: reuse all four "Why Us" cards verbatim.
- Process: reuse the 7-step process verbatim; in step 7 keep "tax-ready" but make clear the books are handed to the client's own CPA.
- FAQs: reuse the six VISIBLE answers (not the schema answers). Tighten the multi-location answer.
- Testimonials: Ryan Corte, OD first (per the client's own editorial note, which must be removed from the visible subhead), then Nona Kalfayan, Brandon Luu, Cristine Areola. Consider adding Tri Nguyen, Kyle Wilson, Annie Miller and Stephen McCollough from the review pool; all are books-focused.
- Pricing teaser: reuse "Bookkeeping fees depend on your transaction volume, your number of locations, and how much cleanup your history needs." if the calculator carries over.
- From the Accounting page, pull the payroll-posting detail as a supporting point: labor cost lands cleanly in the P&L; wages, employer taxes and benefits in separate categories; W-2 wages and owner draws kept separate.
- New cross-sell: point to Insurance Billing (the other flagship) first, then AP, Payroll, Practice Consulting. Remove every link to Accounting and Tax Services.

**Accounts Payable (minor service page or section)**

- Headline candidate: "Control Over Every Dollar Going Out". Lede: the frame vendors / lab partners / landlord paragraph.
- Body: the "Accounts Payable (AP)" card and its four bullets, "Eyecare Vendor Fluency", the Bill.com half of "Two Platforms, Two Certifications", the payables half of "Approve, Don't Administrate".
- FAQs: "Why outsource accounts payable services?" and the AP half of "Can’t I handle AP and payroll in-house?".
- Verify before reuse: Bill.com certification, "exclusively through Bill.com", current product name (BILL).
- Also check the separate /services/accounting/accounts-payable page inventory for overlap.

**Payroll (minor service page or section)**

- Lede: "Payroll is also an accounting question: what does your team really cost, and what is left for you?" (consider "a bookkeeping question" now that Accounting is gone).
- Body: the Payroll card and bullets, minus "and tax planning"; the Gusto half of the certifications card; "On payroll you choose how involved to be."
- FAQs: the two payroll FAQs (switching over; ongoing needs), including "full-service payroll management for a cost-effective, flat monthly fee" if that offer still stands.
- Merge with the existing /services/payroll page inventory.

**Home / services overview**

- One-line service descriptions: Bookkeeping card text "Full-service bookkeeping with customized financial reporting, timely monthly closes, and organized records that support better decision-making." and the Billing Services card text can seed the two flagship tiles. The Practice Consulting card text can seed its minor tile.
- "Remote, Nationwide Assistance" block: reuse the idea sitewide but rewrite so it is not only about Bill.com and Gusto.
- Closing CTA "See Further. Move Faster. Grow Smarter." is the existing sitewide tagline; decide whether it survives the rebrand.

**About / trust**

- Wade Weisz, OD; owner's-seat experience; Bill.com and Gusto certifications; dedicated QC manager; account manager and onboarding specialist roles.

**Do NOT carry over**

- The "Accounting" service name, H1, title, meta and the "Where Bookkeeping Ends and Financial Management Begins" framing.
- Every "Tax Services" card, link and the phrase "tax planning"; tax blog posts in the "Smart Reads" feed.
- The stray note "Keep the Ryan Corte, OD quote first on this page."
- All JSON-LD copy as written (FAQ answers, HowTo steps, offer descriptions); regenerate schema from the final visible copy.
- "Nashville, TN" SEO insertions, unless the client confirms a Nashville positioning; resolve against the Murfreesboro address.
- "For Eyes Solutions" / "For Eyes" spellings; standardize on the new "ForEyes Books & Billing" name.
- "certified professionals" / "certified pros" unless tied to a named certification.

**Open questions for the client**

- Is "25-plus years" correct and current for Wade Weisz, OD?
- Are the Bill.com and Gusto certifications current, and what are their exact names?
- Is the 10th-business-day close a commitment they will stand behind as a headline promise?
- Nashville vs Murfreesboro: which location, if any, should the site mention?
- Does the Annual Financial Review continue now that tax is gone, and what does it cover?
- Does the pricing calculator carry over to the new site?
