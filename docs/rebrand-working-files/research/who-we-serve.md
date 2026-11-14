# Content inventory: Who We Serve audience pages (Optometrists, Startups, Multi-Location Practices)

Source: crawl of foreyessolutions.com (text files in `site/text/`, raw HTML in `site/raw/html/`).
Pages covered (all three are KEPT on the new ForEyes Books & Billing site):

1. `https://foreyessolutions.com/who-we-serve/optometrists`
2. `https://foreyessolutions.com/who-we-serve/startups`
3. `https://foreyessolutions.com/who-we-serve/multi-location-practices`

Conventions in this file:
- Copy inside backticks or blockquotes is VERBATIM from the current site, including its punctuation quirks (en dashes with no spaces used as em dashes, mixed curly/straight apostrophes, missing serial commas).
- Anything in *[square-bracket italics]* is my annotation, not site copy.
- FAQ answers are collapsed accordions and do NOT appear in the `.txt` crawl; I recovered them verbatim from the `__NEXT_DATA__` JSON payload in the raw HTML.
- All three pages share one template. Blocks that are byte-identical on all three pages are recorded once in section 0 and referenced from each page; everything page-specific is recorded in full under its page.
- These pages contain NO statistics, percentages, prices, dollar amounts or guarantees with numbers. Where a "stat/number" slot would be, there is nothing to record. The only numbers are in testimonials ("two years", "about 2 years") and in process-step counts.

---

## 0. Shared template and blocks identical on all three pages

### 0.1 Page template (section order, same on all three)

| # | Section (CMS type) | What it does |
|---|---|---|
| 1 | Hero (`graphicTwoColumnSection`) | H1 only, plus an illustration (alts `mobile-image` / `desktop-image`). No subhead, no button. |
| 2 | Intro (`altTwoColumnSection`) | H2 + two paragraphs + `Book a Discovery Call` button; names the audience's pain and positions ForEyes. |
| 3 | Challenges (`bodyBlocksSection`, block 1) | H2 + (optional lead-in) + five icon cards, each a pain-point title and a one/two-sentence answer. |
| 4 | Services (`bodyBlocksSection`, block 2) | H2 + five service cards (H3 + paragraph + text-link CTA): Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing. |
| 5 | Process (`bodyBlocksSection`, block 3) | H2 + bulleted steps (4 or 5) in `Label: sentence` form. |
| 5b | Sticky sidebar next to 3-5 | `Jump To` anchor list + button `Book a discovery Call` *[lower-case "d", see Problems]*. |
| 6 | FAQ (`faqSection`) | H2 + six accordion Q&As + `More FAQs` button to `/resources/faq`. |
| 7 | Testimonials (`testimonialSection`, "General - Testimonials") | H2 `Proof in Practice` + subhead + 4-slide carousel. Identical on all three pages. |
| 8 | Pricing teaser (`genericTwoColumnSection`) | H2 + paragraph + link to `/pricing-calculator`. Identical on all three. |
| 9 | Cross-links (`whoWeServeHubSection`) | H2 `Other Practices We Support` + two cards for the other two audiences. |
| 10 | Location band (`locationSection`, "General - Remote, Nationwide Assistance") | H2 + two short paragraphs + `Connect With Us`. Identical on all three. |
| 11 | Blog teaser (`blogHubSection`, "General - Blog (top 3)") | H2 + one line; post cards load client-side. Identical on all three. |
| 12 | Closing CTA (`ctaSection`) | H2 + paragraph + `Book a Discovery Call`. Identical on all three. |

### 0.2 Global nav / header / footer (noted once, then ignored)

- Header nav: **Services** (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services, Payroll) · **Who We Serve** (Optometrists, Multi Location Practices, Startups) · **Pricing Calculator** · **About** (Our Team) · **Resources** (Blog, FAQs). Header button `Get Started`. Phone `844-505-3937`.
- Contact flyout: `Book a Call` · `Send a Message` · heading `Let’s Talk Eyecare` · `Have a question or ready to learn how we can help your practice?`
- Footer: Services column lists Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services *[Payroll is in the header nav but missing from the footer]*; `Get To Know Us` (About, Team); Resources (Pricing Calculator, Blog, FAQs); `Contact`: `2429 Curbow Dr` / `Murfreesboro, TN 37127`, `844-505-3937`, hello@foreyessolutions.com (Cloudflare-obfuscated in crawl), `Hours: Mon-Fri at 8AM-5PM CT`. Legal: `© 2026 ForEyes Solutions` · `Privacy Policy` · `Powered by` (links to wisedigitalpartners.com/technology/nest).
- og:image on all three: `https://foreyessolutions.com//images/open-graph/default.jpg` *[double slash in URL]*.

### 0.3 Testimonials block (identical on all three pages)

- H2: `Proof in Practice`
- Subhead (rendered publicly, verbatim): `Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page.`
  *[The second sentence is a stray editorial/CMS note that leaked into live copy. Recorded as a finding only. See Problems.]*
- Carousel: 4 slides, pagination buttons `1` `2` `3` `4`. Rendered order is Ryan Corte, Nona Kalfayan, Brandon Luu, Cristine Areola (the crawl then shows Ryan Corte and Nona Kalfayan a second time; those are carousel loop clones, not extra testimonials). Each slide has a headshot image with empty alt text.

Testimonial 1, attribution `Ryan Corte, OD`:
> Wade and his team do an outstanding job providing accurate, timely, and reliable bookkeeping services. They’re responsive, detail-oriented, and take the time to explain financials in a way that’s easy to understand. Working with them has given me greater peace of mind and confidence in the financial side of my business. I highly recommend Wade and his team to any business owner looking for a trustworthy and professional bookkeeping partner.

Testimonial 2, attribution `Nona Kalfayan, OD` (two paragraphs):
> I've been working with Wade and his team at ForEyes Solutions for the past two years, and the experience has been nothing short of excellent. From onboarding to goal setting and ongoing support, they've made a huge impact on my business by taking bookkeeping and organization off my plate so I can focus on growth. They truly understand the industry and provide value whether you're just starting out or already established and looking to improve your systems. What sets them apart is their communication — fast, reliable, and always helpful. You never feel left in the dark and are always supported.
>
> If you're looking for bookkeeping or business consulting, I highly recommend ForEyes Solutions. They're professional, knowledgeable, and genuinely committed to your success. They are absolutely the real deal!

Testimonial 3, attribution `Brandon Luu, OD`:
> Wade and his team have been rock solid. It's been about 2 years, and they've done an excellent job keeping my books in order. They are always available if I have any questions. Recently, Wade has really elevated his business beyond just bookkeeping. I am excited to be along for the ride. Extremely satisfied client and would definitely recommend his services to other practice owners.

Testimonial 4, attribution `Cristine Areola, OD`:
> For Eyes has been a great resource for my business as a first-time practice owner. I am very thankful for their expertise and their attentiveness to the small financial details. I don't know what I would do without them!

*[No practice name, city or title beyond "OD" is given for any testimonial. The page payload also carries four more testimonials that are NOT rendered on these three pages (Tri Nguyen, OD; Kyle Wilson, OD; Annie Miller, OD; Stephen McCollough, OD); they belong to other pages' inventories.]*

### 0.4 Pricing teaser (identical on all three pages)

- H2: `Transparent Pricing, Tailored to You`
- Body: `Not every optometry practice needs the same level of financial support. That's why we've built a simple, interactive pricing calculator to give you a clear picture of what your services will cost, based on practice size, service level, and add-ons. No hidden fees, no surprise invoices–just custom pricing that matches your workflow.`
- Link CTA: `Calculate Your Price Now` → `/pricing-calculator`

### 0.5 Location band (identical on all three pages)

- H2: `Remote, Nationwide Assistance`
- Paragraph 1: `Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state.`
- Paragraph 2: `Our remote team keeps both on schedule and answers questions quickly.`
- Button: `Connect With Us` (opens the Contact Us form)

### 0.6 Blog teaser (identical on all three pages)

- H2: `Smart Reads for ODs`
- Body: `Our blog helps you simplify your numbers and grow smarter, one post at a time.`
- *[Post cards are not in the server-rendered HTML. The block is labelled "top 3" in the CMS; by publish date in the payload the three newest posts are: `What Healthy Expense Ratios Look Like in a Profitable Optometry Practice` (2026-10-08), `How to Forecast Revenue Accurately in an Eye Care Practice and Plan Growth` (2026-08-31), `How Labor Costs Quietly Drain Profit in Eyecare Practices (and How to Fix It)` (2026-07-30). The payload's post list also includes `Quarterly Taxes for Optometrists Made Easy`, which is tax content.]*

### 0.7 Closing CTA (identical on all three pages)

- H2: `See Further. Move Faster. Grow Smarter.`
- Body: `Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients.`
- Button: `Book a Discovery Call`

### 0.8 Button behaviour (all three pages)

- `Book a Discovery Call`, `Book a discovery Call` (sidebar) and `Connect With Us` are form-action buttons: they open the "Contact Us" modal rather than linking to `/book-a-call`. *[The payload shows the modal tab as "Send a Message" for every button, which may just be a CMS default; worth checking that a button labelled "Book a ... Call" does not open a message form.]*
- Text-link CTAs under service cards go to service pages (targets listed per page below).

---

## 1. Optometrists

- **URL:** `https://foreyessolutions.com/who-we-serve/optometrists`
- **`<title>`:** `Bookkeeping & Accounting for Optometrists | For Eyes Solutions`
- **Meta description:** `Focus on patient care while we handle your books. Get expert bookkeeping for optometrists, payroll services, and billing solutions tailored to your eye care practice.`
- og:title / og:description: same as title / meta description.

### 1.1 Hero
- H1 (four lines as broken on the page): `Accounting,` / `Advisory, and` / `Practice Solutions` / `for Optometrists`
  i.e. `Accounting, Advisory, and Practice Solutions for Optometrists`
- No subhead, no button. Illustration only.

### 1.2 Intro
- H2: `Take Back Your Time`
- P1: `You became an optometrist to improve lives, not to spend time chasing insurance claims or sorting through spreadsheets. But somewhere along the way, the business side of your practice began to take over. That’s where we can help.`
- P2: `We specialize in optometry accounting, tax, advisory, and practice solution services, so you can get the clarity, accuracy and strategy you need to grow–without wasting your time.`
  *[Inline links: "optometry accounting" → /services/accounting; "tax" → /services/tax-services; "practice solution services" → /services/practice-consulting. TAX CONTENT.]*
- Button: `Book a Discovery Call`

### 1.3 Challenges
- H2: `What’s Holding Your Practice Back?`
- Lead-in: `Over time, what starts as a few side tasks, such as tax strategy, becomes a full-time distraction. Here are some of the most common issues we solve for optometrists:` *[mentions tax strategy]*
- Five icon cards (title, then body):
  1. `Spending too much time on admin.`
     `From payroll and AP to revenue cycle management, our team can tackle these tasks to free up your internal team’s time.`
  2. `Unsure if books are accurate.`
     `We clean up your financials and give you reporting you can actually use.`
  3. `Not knowing if the practice is profitable.`
     `Other accounting firms simply deliver your data. We deliver insight based on your data, which you can then leverage to make more informed business decisions.`
  4. `Not knowing how much you take home.`
     `Between W-2 wages and owner draws, it’s easy to confuse what the books show you with what actually lands in your bank account. We clarify your true take-home pay so you know exactly what you earn without fearing surprise taxes.`
  5. `The tax-time and filing scramble.`
     `Our professionals plan ahead and keep your books up to date, so you’re never caught off guard.`
- Closing line of the block: `You deserve support that understands optometry inside and out. We’ve built our entire service model around helping optometrists succeed.`

### 1.4 Services
- H2: `Tailored Services` *[anchor id is `#services`; the Jump To label is just "Services"]*
- Lead-in: `Here’s how each of our services is tailored to ODs, and how they deliver measurable impact.`
- Cards:
  - H3 `Bookkeeping`
    `Bookkeeping for eyecare professionals is not a simple "plug and chug" task and is about more than just categorizing expenses. Partner with us to build your books around a chart of accounts made specifically for optometry practices. With us, you’ll get speed, efficiency, and monthly deliverables you can rely on.`
    Link CTA: `Clean Your Books` → `/services/bookkeeping`
  - H3 `Accounting`
    `Tired of spending hours managing payroll or writing vendor checks? Outsource to our accountants for optometrists! Our accounts payable and payroll services make sure every team member and vendor is paid on time. It’s operational peace of mind, without the admin burden.`
    Link CTA: `Get Stress-Free Payroll` → `/services/accounting`
  - H3 `Tax Services` *[TAX CONTENT, do not carry over]*
    `Ready for a smart strategy that reduces your tax liability, improves cash flow, and eliminates last-minute surprises? Partner with us for a plan built around your goals. From business to personal returns, our experts have you covered.`
    Link CTA: `Develop a Tax Strategy` → `/services/tax-services`
  - H3 `Practice Consulting`
    `Maybe your revenue is up, but your profits aren’t following. Or your staffing feels off, but you’re not sure how to fix it. We can analyze your operational model, identify what’s working well and what’s holding you back, and present specific strategies that drive growth.`
    Link CTA: `Boost Profits` → `/services/practice-consulting`
  - H3 `Billing Services`
    `Insurance claims are complicated, but they don’t have to derail your day. Our billing team manages your claim submissions, tracks aging AR, follows up, and keeps your cash flow consistent. We know the codes, the carriers, and how to get results.`
    Link CTA: `Claim Control` → `/services/billing-services`

### 1.5 Process
- H2: `What to Expect When Working With ForEyes Solutions`
- Steps (4), verbatim:
  1. `Discovery call: We’ll learn more about your goals, what’s working, and what’s not.`
  2. `Customized plan: You’ll receive a clear scope of services based on your needs and priorities.`
  3. `Onboarding: Our team helps you get set up and organized so you can hit the ground running.`
  4. `Ongoing support: From a dedicated account manager and timely reports to ongoing strategic guidance, we’re here for you.`
- Sidebar: `Jump To` → `What’s Holding Your Practice Back?` · `Services` · `What to Expect When Working With ForEyes Solutions`; button `Book a discovery Call`

### 1.6 FAQ
- H2: `The Questions Optometrists Frequently Ask`
- Q1: `Why should I choose a specialized bookkeeper?`
  A: `Anyone can categorize expenses, but only a team with deep experience in eyecare knows how those categories impact your practice’s profitability. Led by an optometrist, our systems are built specifically for eyecare practices, giving you the accuracy, clarity, and insights a generalist simply can’t deliver.`
- Q2: `My practice is unique–how can a standardized system work for me?`
  A: `While our core chart of accounts is built on proven, optometry-specific best practices, nothing we do is one-size-fits-all. Your account manager takes time to understand every aspect of your practice, from your staffing model to your services and goals. From there, we tailor our services to meet your operations and needs. Every data point and insight is aligned with how your practice actually runs. That means you get the consistency of a proven system with the customization to make it truly yours.`
- Q3: `How involved do I need to be in the day-to-day financials?`
  A: `After a smooth onboarding, you don’t have to be involved in the day-to-day at all! Our services are designed to free up your time while keeping you confidently in the driver’s seat.`
- Q4: `How can I tell if my practice is profitable?` *[marked up as H1]*
  A: `Profitability is more than simply looking at revenue. Understanding expenses, owner compensation, payroll costs, and operational performance provides a clearer picture of how your practice is performing financially. Accurate reporting and financial analysis can help identify opportunities to improve profitability and support better business decisions.`
- Q5: `Can you support startup optometry practices?` *[marked up as H1]*
  A: `Yes. ForEyes Solutions works with both established practices and startups. From building financial processes and reporting systems to providing accounting, tax, and advisory support, our team helps create a strong foundation for long-term growth.` *[mentions tax support]*
- Q6: `Do you work with multi-location practices?` *[marked up as H1]*
  A: `Yes. ForEyes Solutions supports multi-location optometry practices by providing financial visibility, operational insights, and advisory services designed to help practice owners understand performance across locations and manage growth more effectively.`
- Button: `More FAQs` → `/resources/faq`

### 1.7 Testimonials: see 0.3 (identical).

### 1.8 Pricing teaser: see 0.4 (identical).

### 1.9 Other Practices We Support
- H2: `Other Practices We Support`
- Card H3 `Multi-Location Practices`
  `Growth brings opportunity–and new complexities. When you’re managing multiple clinics, keeping tabs on performance, staffing, and billing can quickly become overwhelming. Our multi-location financial support and advisory services give you a clear picture of how each location is performing, as well as guidance on overcoming obstacles. With ForEyes Solutions, you’ll have both the tools and the insight to grow without losing control.`
  Link CTA: `Get Support` → `/who-we-serve/multi-location-practices`
- Card H3 `Startups and Emerging ODs`
  `Getting your first practice up and running? Our hands-on guidance and foundational services will help you build a strong financial footing from day one.`
  Link CTA: `Build on Solid Ground` → `/who-we-serve/startups`

### 1.10 Location band, blog teaser, closing CTA: see 0.5, 0.6, 0.7 (identical).

### 1.11 Facts & claims (Optometrists)
- Firm specialises in optometry: "We’ve built our entire service model around helping optometrists succeed."
- Books are built "around a chart of accounts made specifically for optometry practices"; FAQ calls it a "core chart of accounts ... built on proven, optometry-specific best practices".
- Bookkeeping comes with "monthly deliverables".
- "Led by an optometrist" (FAQ Q1). Testimonials name the lead as "Wade".
- Each client has an "account manager" / "dedicated account manager" who "takes time to understand every aspect of your practice".
- Services listed: bookkeeping; accounts payable and payroll (sold under the label "Accounting"); tax (strategy, business and personal returns); practice consulting; billing (claim submissions, aging AR tracking, follow-up). Also mentions "revenue cycle management".
- AP/payroll promise: "every team member and vendor is paid on time".
- Billing claim: "We know the codes, the carriers, and how to get results."
- Reporting clarifies "true take-home pay" across "W-2 wages and owner draws".
- After onboarding "you don’t have to be involved in the day-to-day at all".
- 4-step process: discovery call, customized plan, onboarding, ongoing support.
- Works with "both established practices and startups" and with multi-location practices.
- Pricing: interactive pricing calculator based on "practice size, service level, and add-ons"; "No hidden fees, no surprise invoices".
- Tools named: Bill.com (payments/approvals) and Gusto (pay runs), both cloud-based; service is remote and works "the same from any state".
- Testimonial facts: Nona Kalfayan, OD a client "for the past two years"; Brandon Luu, OD "about 2 years"; Cristine Areola, OD is "a first-time practice owner"; Ryan Corte, OD.
- No numeric stats, prices, turnaround times, or guarantees on this page.

### 1.12 Tax content (Optometrists): must NOT carry over
- Intro P2: "We specialize in optometry accounting, **tax**, advisory, and practice solution services..." with a link to `/services/tax-services`.
- Challenges lead-in: "what starts as a few side tasks, **such as tax strategy**, becomes a full-time distraction."
- Challenge card 5 title: `The tax-time and filing scramble.` The title sells tax-season help. *[The body, "Our professionals plan ahead and keep your books up to date, so you’re never caught off guard", is about bookkeeping and can be kept if reframed as tax-ready books handed to the client's own CPA.]*
- Challenge card 4, last clause: "...so you know exactly what you earn **without fearing surprise taxes**." *[The card is about bookkeeping/owner compensation clarity, not a tax service; keep the idea, drop or soften the tax clause.]*
- Entire `Tax Services` card ("reduces your tax liability", "From business to personal returns, our experts have you covered", CTA `Develop a Tax Strategy`).
- FAQ Q5 answer: "providing accounting, **tax**, and advisory support".
- Global nav and footer link `Tax Services`.
- Positioning to revisit (not tax, but out of step with the rebrand): H1 `Accounting, Advisory, and Practice Solutions for Optometrists`; repeated "advisory" language; the service label "Accounting" for what is actually AP + payroll.

---

## 2. Startups

- **URL:** `https://foreyessolutions.com/who-we-serve/startups`
- **`<title>`:** `Startup Bookkeeping & Accounting for New Optometry Practices`
- **Meta description:** `Launch your practice with confidence. For Eyes Solutions offers outsourced accounting for startups, startup bookkeeping, and consulting for optometrists.`
- og:title / og:description: same as title / meta description.

### 2.1 Hero
- H1 (three lines as broken on the page): `Financial Setup and` / `Support for New` / `Optometry Practices`
  i.e. `Financial Setup and Support for New Optometry Practices`
- No subhead, no button.

### 2.2 Intro
- H2: `Launch Confidently`
- P1: `Starting a new optometry or eyecare practice is exciting, but it can also be overwhelming. Between choosing a location, hiring staff, and attracting patients, daily operational needs can drain both your time and your energy. And mismanaged bookkeeping, unclear cash flow, and inefficient systems can stall growth before your practice even opens. That’s where ForEyes Solutions comes in.`
- P2: `We partner with new optometry practices to handle the numbers, systems, and strategy, so you can focus on building a profitable practice from day one.`
- Button: `Book a Discovery Call`

### 2.3 Challenges
- H2: `The Obstacles Most Startup Practices Encounter` *[no lead-in paragraph on this page]*
- Five icon cards:
  1. `Too much time spent on admin`
     `Eyecare professionals often find themselves juggling invoices, payroll, and optometry startup bookkeeping tasks, which leaves little time for addressing operational needs and attending to patients. We handle the back-office work, freeing you up to focus on building your client base and reputation.`
     *[inline link "bookkeeping" → /services/bookkeeping]*
  2. `Entity setup confusion`
     `Should you choose an S-Corp? Partnership? LLC? These decisions impact taxes, liability, and how you pay yourself. Our accounting experts guide you through entity setup and long-term tax planning, ensuring your practice starts on solid ground.` *[TAX CONTENT]*
  3. `Unclear profitability & owner compensation`
     `As a startup eyecare practice, it’s tough to know how much money you’re really making–or how much you can safely pay yourself. We break down revenue, expenses, and owner draws to offer a clear picture of your practice’s profitability.`
  4. `Insurance and billing roadblocks`
     `Insurance denials and patient billing delays put your revenue at risk–revenue that’s crucial in the early days of a startup. We manage your entire billing cycle, improving clean claim rates and keeping cash flow steady.`
  5. `Unexpected practice challenges`
     `Changing regulations, staffing issues, and vendor contracts can catch new business owners off guard. Our practice consulting services provide the guidance you need to navigate challenges before they turn into major setbacks.`

### 2.4 Services
- H2: `Our Full-Service Startup Support` *[no lead-in paragraph]*
- Cards:
  - H3 `Bookkeeping`
    `Start your eyecare practice with confidence, knowing every transaction is accurately recorded and categorized. Our specialized bookkeeping for startups ensures you have up-to-date financials, making tax prep, cash flow tracking, and profitability analysis simple and stress-free. With our detailed reports, you’ll always know exactly where your practice stands.`
    Link CTA: `Be Confident in Your Numbers` → `/services/bookkeeping`
  - H3 `Accounting`
    `It’s not enough to record your numbers–you have to understand them. Our new practice accounting services deliver timely, actionable insights, from monthly profit and loss statements to balance sheets and reconciliations. You’ll make smarter decisions, track growth more effectively, and avoid surprises, all while saving hours of administrative work each week.`
    Link CTA: `Interpret the Data` → `/services/accounting`
  - H3 `Tax Services` *[TAX CONTENT, do not carry over]*
    `Taxes shouldn’t be a guessing game, especially for new practice owners. Our tax experts provide planning, strategy, and preparation for both business and personal returns, ensuring you optimize deductions and minimize liabilities. You focus on patients–we’ll handle the complex tax strategy and compliance needs.`
    Link CTA: `Plan for Success` → `/services/tax-services`
  - H3 `Billing`
    `Revenue is the lifeblood of your new optometry or eyecare practice. Our billing experts manage claims submission, payment posting, denial follow-ups, and even patient billing inquiries, so you get paid faster and with fewer headaches. By reducing errors and improving cash flow, you’ll be able to concentrate on building your patient base.`
    Link CTA: `Claim Control` → `/services/practice-consulting` *[WRONG TARGET: billing card links to the consulting page]*
  - H3 `Practice Consulting`
    `Starting a practice comes with decisions that affect profitability for years. Our consulting team–led by a practicing OD–helps you optimize everything from operations and inventory to your financial strategy. We solve real-world challenges using real-world experience, offering industry-specific guidance that allows you to grow without the trial-and-error phase.`
    Link CTA: `Get Industry-Specific Guidance` → `/services/billing-services` *[WRONG TARGET: consulting card links to the billing page]*

### 2.5 Process
- H2: `How We Work`
- Steps (5), verbatim:
  1. `Discovery call: We learn about where you’re starting from, as well as your short- and long-term goals.`
  2. `Kickoff and onboarding: Meet your onboarding specialist and get set up in your client portal.`
  3. `Foundation setup: We structure your systems, organize your financials, and prepare you for growth.`
  4. `Ongoing support: From monthly reports to strategic guidance and everything in between, we keep your books accurate and your practice on track.`
  5. `Annual review: Each year, we revisit your performance and plan for what’s ahead.`
- Sidebar: `Jump To` → `The Obstacles Most Startup Practices Encounter` · `Our Full-Service Startup Support` · `How We Work`; button `Book a discovery Call`

### 2.6 FAQ
- H2: `Frequently Asked Questions`
- Q1: `How involved do I need to be in setting up my practice’s finances?`
  A: `Other than an initial connect and onboarding session, not at all! We can handle the setup of your accounting systems, bookkeeping structure, and reporting, giving you a ready-to-go foundation that frees you up to focus on other crucial areas to get your startup practice off the ground.`
- Q2: `I’m not sure which entity is right for my practice. Can you help?`
  A: `Of course, our team can help you choose the right entity and financial setup that best suits your goals and long-term profitability.` *[tax-adjacent advisory]*
- Q3: `Can you support me before my practice opens?`
  A: `Absolutely. We help pre-launch clients implement accounting systems, organize operations, plan cash flow, anticipate operational bottlenecks, and implement practice solutions before issues have a chance to slow you down. With ForEyes Solutions, your practice starts on solid ground.`
- Q4: `How do I track whether my practice is truly profitable?`
  A: `Our reporting breaks down performance by revenue streams and expenses, giving you a crystal clear picture of your actual take-home pay, as well as the areas that are driving (or draining) business profitability.`
- Q5: `Can you help improve cash flow for a startup practice?` *[marked up as H1]*
  A: `Yes. Our team helps support healthy cash flow through accurate financial reporting, proactive tax planning, and billing services that include claim submission, payment posting, and denial follow-up. These systems help practices collect revenue more efficiently and better manage expenses.` *[mentions tax planning]*
- Q6: `What financial reports will I receive?` *[marked up as H1]*
  A: `Depending on the services selected, you may receive financial reports such as profit and loss statements, balance sheets, and other performance reports. These reports provide visibility into your practice's financial health and support better decision-making as your business grows.`
- Button: `More FAQs` → `/resources/faq`

### 2.7 Testimonials: see 0.3 (identical).

### 2.8 Pricing teaser: see 0.4 (identical).

### 2.9 Other Practices We Support
- H2: `Other Practices We Support`
- Card H3 `Optometrists`
  `Running an optometry practice means juggling patient care, staff management, and day-to-day operations. We go beyond traditional bookkeeping for optometrists, offering accurate financials, smarter billing systems, and guidance tailored to the unique challenges you face and opportunities you have. The result? More time for patients and a practice that’s moving forward.`
  Link CTA: `Explore Solutions` → `/who-we-serve/optometrists`
- Card H3 `Multi-Location Practices`
  `Growth brings opportunity–and new complexities. When you’re managing multiple clinics, keeping tabs on performance, staffing, and billing can quickly become overwhelming. Our multi-location financial support and advisory services give you a clear picture of how each location is performing, as well as guidance on overcoming obstacles. With ForEyes Solutions, you’ll have both the tools and the insight to grow without losing control.`
  Link CTA: `Get Support` → `/who-we-serve/multi-location-practices`

### 2.10 Location band, blog teaser, closing CTA: see 0.5, 0.6, 0.7 (identical).

### 2.11 Facts & claims (Startups)
- ForEyes works with pre-launch practices: "We help pre-launch clients implement accounting systems, organize operations, plan cash flow, anticipate operational bottlenecks".
- Setup is done for the owner: accounting systems, bookkeeping structure and reporting; owner involvement is "an initial connect and onboarding session".
- Offers entity-setup guidance (S-Corp, Partnership, LLC named) and "long-term tax planning" *[tax-adjacent; see Tax content]*.
- Billing scope: "claims submission, payment posting, denial follow-ups, and even patient billing inquiries"; "We manage your entire billing cycle, improving clean claim rates" *[no number given]*.
- Reporting deliverables: "monthly profit and loss statements", "balance sheets and reconciliations"; FAQ hedges this as "Depending on the services selected, you may receive ... profit and loss statements, balance sheets, and other performance reports."
- Claim: "saving hours of administrative work each week" *[unquantified]*.
- Consulting team is "led by a practicing OD"; consulting covers "operations and inventory to your financial strategy".
- Named roles/tools in the process: "onboarding specialist", "client portal".
- 5-step process: discovery call, kickoff and onboarding, foundation setup, ongoing support, annual review ("Each year, we revisit your performance and plan for what’s ahead").
- Reporting shows "actual take-home pay" and breaks performance down "by revenue streams and expenses".
- Shared blocks: Bill.com, Gusto, pricing calculator, "No hidden fees, no surprise invoices", four OD testimonials (see section 0).
- No numeric stats, prices, or timelines.

### 2.12 Tax content (Startups): must NOT carry over
- Challenge card 2 `Entity setup confusion`: "These decisions impact **taxes**, liability, and how you pay yourself. Our accounting experts guide you through entity setup and **long-term tax planning**..." *[Entity selection is tax/legal advisory. If the new firm no longer gives tax advice, the whole card needs rethinking, e.g. "we set your books up to match whatever entity your CPA/attorney chooses".]*
- Entire `Tax Services` card ("planning, strategy, and preparation for both business and personal returns", "optimize deductions and minimize liabilities", "complex tax strategy and compliance needs", CTA `Plan for Success`).
- FAQ Q2 (entity choice): "our team can help you choose the right entity and financial setup" *[tax-adjacent advisory; rewrite or drop]*.
- FAQ Q5 answer: "...accurate financial reporting, **proactive tax planning**, and billing services..."
- Global nav and footer link `Tax Services`.
- Bookkeeping-related, NOT a tax service (fine to keep, reframed): Bookkeeping card says up-to-date financials make "**tax prep**, cash flow tracking, and profitability analysis simple and stress-free", i.e. tax-ready books.
- Positioning to revisit: "Full-Service Startup Support" (the new firm is no longer full-service); "Accounting" card (its content, monthly P&L, balance sheets, reconciliations, is really bookkeeping deliverables).

---

## 3. Multi-Location Practices

- **URL:** `https://foreyessolutions.com/who-we-serve/multi-location-practices`
- **`<title>`:** `Accounting & Consulting for Multi-Location Optometry Practices`
- **Meta description:** `Scale your practice with remote bookkeeping, payroll management, and optometry management consulting from For Eyes Solutions. Contact us today!`
- og:title / og:description: same as title / meta description.

### 3.1 Hero
- H1: `Serving Multi-Location Eyecare Practices`
- No subhead, no button.

### 3.2 Intro
- H2: `Spend Less Time on Admin, More on Patients`
- P1: `Managing a single eyecare office is challenging, but running multiple locations multiplies the complexity. Payroll, bookkeeping, billing, and operational oversight can quickly consume your time and energy, taking your attention away from patient care and strategic growth.`
  *[inline links: "bookkeeping" → /services/bookkeeping; "billing" → /services/billing-services]*
- P2: `ForEyes Solutions provides scalable bookkeeping and accounting for multi-location practices, as well as comprehensive practice solutions, giving you actionable insights across every location. With us, you can make confident decisions without getting bogged down in the numbers.`
- Button: `Book a Discovery Call`

### 3.3 Challenges
- H2: `Common Challenges for Growing Practices`
- Lead-in: `As practices expand, new obstacles emerge. Here are the main challenges we help multi-group eyecare practices overcome.`
- Five icon cards:
  1. `Administrative Overload & Precious Time Lost`
     `Adding location often multiplies day-to-day tasks, from payroll and accounts payable to billing follow-ups. We take these time-consuming administrative tasks off your plate, freeing up your staff while ensuring consistency across your eyecare practices.` *[typo: "Adding location"]*
  2. `Fragmented Financial Across Locations` *[typo: should be "Financials"]*
     `Different processes, teams, or systems at each of your locations make it difficult to see the full picture. We provide centralized reporting and separate profit and loss statements for each location, giving you a clear view of performance–all without needing to manually consolidate numbers.`
  3. `Unclear Profitability & Owner Compensation`
     `Revenue may look strong across locations, but that doesn’t always mean profits (or personal income) are where they should be. Between varying expenses at each clinic, W-2 wages and owner draws, it’s easy to lose track of what you’re actually earning. We break down profitability by location and clarify your true take-home pay, so you know exactly which clinic contributes to the bottom line–and what ends up in your pocket.`
  4. `Difficulty Benchmarking Performance`
     `Without standardized metrics, it’s difficult to know which locations are thriving and which need attention. Our systems create consistent, actionable reporting to help you identify trends, compare results, and make data-driven decisions.`
  5. `Chaos While Scaling`
     `From inefficiencies to redundant workflows, opening new locations also opens you up to costly mistakes. We implement scalable systems from day one, so growth is smooth, predictable, and profitable.`

### 3.4 Services
- H2: `Accounting, Advisory & Practice Solutions Services` *[no lead-in paragraph]*
- Cards:
  - H3 `Bookkeeping`
    `When bookkeeping for multiple clinics, it’s easy to feel in the dark about performance. Our assistance gives you reliable profit and loss statements for each location, helping focus your resources. No more second-guessing–just decisions backed by clear data.`
    Link CTA: `Get Your Books in Order` → `/services/bookkeeping`
  - H3 `Accounting`
    `Managing payroll and payables across several locations can take hours each month–hours that, as a business owner, you don’t have. By teaming up with us for multi-location practice accounting, you get on-time payments for staff and vendors at every location. This means less admin stress and more energy for running each practice.`
    Link CTA: `Free Yourself From Admin Burdens` → `/services/accounting`
  - H3 `Tax Services` *[TAX CONTENT, do not carry over]*
    `Continuing to scale your practice shouldn’t come with unpredictable tax bills. Our experts provide proactive planning and strategy year-round, helping you minimize liability and protect cash flow across all locations. Head into tax season confidently, knowing all deductions are maximized and that each location has been set up for success.`
    Link CTA: `Grow Without Tax Surprises` → `/services/tax-services`
  - H3 `Practice Consulting`
    `Expanding doesn’t always equal earning more, and with only optometry group financial services, it’s difficult to know why you’re falling short–you need practice consulting assistance for that. With deep OD and practice management experience, ForEyes Solutions pinpoints inefficiencies in systems, staffing, and operations, then delivers strategies that increase profitability and free up time for leadership teams. You’ll finally feel like your growth is paying off.`
    Link CTA: `Get a Roadmap to Profitability` → `/services/practice-consulting`
  - H3 `Billing Services`
    `The more eyecare practices you run, the more difficult billing gets–and the easier it is for revenue to slip through the cracks. Our specialists handle claims, denials, and patient billing across all of your locations, resulting in fewer delays and less billing stress.`
    Link CTA: `Stop Chasing Payments` → `/services/billing-services`

### 3.5 Process
- H2: `How We Work With Multi-Location Eyecare Practices`
- Steps (4), verbatim:
  1. `Discovery call: We’ll learn about your growth plans so we can create a scalable, customized solution.`
  2. `Tailored plan: You’ll get a clear scope of services for each location, as well as an overarching strategy for your group of practices.`
  3. `Onboarding: Your dedicated point of contact will connect financial systems, organize workflows, and standardize reporting for all your offices.`
  4. `Delivery & ongoing support: Expect monthly P&L reports for each location, strategic guidance, and centralized oversight, saving you hours of consolidation and review.`
- Sidebar: `Jump To` → `Common Challenges for Growing Practices` · `Accounting, Advisory & Practice Solutions Services` · `How We Work With Multi-Location Eyecare Practices`; button `Book a discovery Call`

### 3.6 FAQ
- H2: `Frequently Asked Questions`
- Q1: `Can you help me manage multiple locations without confusion?`
  A: `Absolutely. Because we create separate profit and loss statements for each of your eyecare practices, as well as consistent reporting for each while maintaining a centralized view, you’ll always know how each location is performing–without spending hours reconciling numbers.`
- Q2: `How involved do I need to be?`
  A: `After onboarding, not at all! Our services are designed to save you time, freeing you up to focus on core business operations. You’ll no longer need to be involved in the day-to-day accounting of your practices.`
- Q3: `Can your services scale as I open more locations?`
  A: `Of course. Each new eyecare practice you open is added to your existing structure seamlessly, keeping your workflows consistent, reporting accurate, and your management time minimal.`
- Q4: `Will I receive separate financial reports for each location?` *[marked up as H1]*
  A: `Yes. ForEyes Solutions provides separate profit and loss statements for each location, allowing you to evaluate performance individually while maintaining a clear view of your organization as a whole. This makes it easier to identify strengths, address challenges, and make informed business decisions.`
- Q5: `Can you help identify underperforming locations?` *[marked up as H1]*
  A: `Yes. Through centralized reporting and performance benchmarking, we help practice owners compare results across locations. This visibility can help identify operational inefficiencies, profitability concerns, and opportunities for improvement at specific clinics.`
- Q6: `How do you improve financial visibility across locations?` *[marked up as H1]*
  A: `We standardize reporting and consolidate financial data across your practices while maintaining location-specific performance metrics. This provides a clearer understanding of revenue, expenses, profitability, and overall business performance without requiring manual consolidation.`
- Button: `More FAQs` → `/resources/faq`

### 3.7 Testimonials: see 0.3 (identical).

### 3.8 Pricing teaser: see 0.4 (identical).

### 3.9 Other Practices We Support
- H2: `Other Practices We Support`
- Card H3 `Optometrists`
  `Running an optometry practice means juggling patient care, staff management, and day-to-day operations. We go beyond traditional bookkeeping for optometrists, offering accurate financials, smarter billing systems, and guidance tailored to the unique challenges you face and opportunities you have. The result? More time for patients and a practice that’s moving forward.`
  Link CTA: `Explore Solutions` → `/who-we-serve/optometrists`
- Card H3 `Startups and Emerging ODs`
  `Getting your first practice up and running? Our hands-on guidance and foundational services will help you build a strong financial footing from day one.`
  Link CTA: `Build on Solid Ground` → `/who-we-serve/startups`

### 3.10 Location band, blog teaser, closing CTA: see 0.5, 0.6, 0.7 (identical).

### 3.11 Facts & claims (Multi-Location)
- Deliverable: "separate profit and loss statements for each location" plus "centralized reporting" / a "centralized view"; process step promises "monthly P&L reports for each location". This is the single most concrete, repeated claim on the page (stated in challenge 2, Bookkeeping card, process step 4, FAQ Q1 and Q4).
- No manual consolidation by the owner: "all without needing to manually consolidate numbers", "saving you hours of consolidation and review", "without requiring manual consolidation".
- Profitability broken down "by location"; "true take-home pay" clarified across "W-2 wages and owner draws".
- Benchmarking: "standardized metrics", "performance benchmarking", "location-specific performance metrics".
- AP/payroll (labelled "Accounting"): "on-time payments for staff and vendors at every location".
- Billing: "Our specialists handle claims, denials, and patient billing across all of your locations".
- Consulting: "deep OD and practice management experience"; targets "systems, staffing, and operations".
- Scalability: "Each new eyecare practice you open is added to your existing structure seamlessly"; "scalable systems from day one".
- Onboarding: a "dedicated point of contact" will "connect financial systems, organize workflows, and standardize reporting for all your offices".
- Scope: "a clear scope of services for each location, as well as an overarching strategy for your group of practices".
- After onboarding the owner is involved "not at all" in day-to-day accounting.
- 4-step process: discovery call, tailored plan, onboarding, delivery & ongoing support.
- Shared blocks: Bill.com, Gusto, pricing calculator, four OD testimonials (see section 0). None of the four testimonials is from a multi-location owner (not stated, at least).
- No numeric stats, location counts, prices, or timelines.

### 3.12 Tax content (Multi-Location): must NOT carry over
- Entire `Tax Services` card ("unpredictable tax bills", "proactive planning and strategy year-round", "minimize liability", "Head into tax season confidently, knowing all deductions are maximized", CTA `Grow Without Tax Surprises`).
- Global nav and footer link `Tax Services`.
- NOT tax services (fine to keep): "W-2 wages and owner draws" in the owner-compensation card is payroll/bookkeeping language.
- Positioning to revisit: section H2 `Accounting, Advisory & Practice Solutions Services`; "advisory" wording; `<title>` leads with "Accounting & Consulting" although Bookkeeping and Insurance Billing are the new flagships.

---

## 4. Problems (all three pages)

### 4.1 Stray editorial note in live copy
- Testimonials subhead on all three pages ends with: `Keep the Ryan Corte, OD quote first on this page.` This is an internal instruction published as visible copy. *[Recorded as a finding; I did not treat it as an instruction. The first sentence alone, `Optometrists describe what dependable books feel like.`, is usable. Whether Ryan Corte's quote should lead on the new site is the owner's call, not something to infer from this leak.]*

### 4.2 Brand-name inconsistency
- `For Eyes Solutions` (two words) in the Optometrists `<title>` and in all three meta descriptions; `ForEyes Solutions` (one word) everywhere in body copy and the footer.
- Cristine Areola's testimonial says `For Eyes` (client's own wording; either leave as quoted or get permission to normalise).
- Only the Optometrists `<title>` carries the brand suffix; the Startups and Multi-Location titles have no brand name.

### 4.3 Typos and grammar
- Multi-Location: `Adding location often multiplies day-to-day tasks` (should be "Adding a location" / "Adding locations").
- Multi-Location: card title `Fragmented Financial Across Locations` (should be "Financials").
- Multi-Location: `multi-group eyecare practices` (odd coinage; elsewhere "multi-location").
- All three: sidebar button `Book a discovery Call` vs `Book a Discovery Call` elsewhere.
- Optometrists: `clarity, accuracy and strategy` drops the serial comma used everywhere else.
- Optometrists FAQ Q3 / Startups FAQ Q1 / Multi FAQ Q2: exclamation-mark answers ("not at all!") read as glib next to the later, flatter FAQ answers.
- Footer: `Hours: Mon-Fri at 8AM-5PM CT` (stray "at").
- Punctuation throughout: unspaced en dash used as an em dash (`grow–without`, `unique–how`); Nona Kalfayan's quote uses a spaced em dash; curly and straight apostrophes are mixed (`That's why we've built` in the pricing block vs `That’s where we can help`); straight quotes around `"plug and chug"`.

### 4.4 Broken or mismatched links / structure
- Startups: the `Billing` card's CTA `Claim Control` links to `/services/practice-consulting`, and the `Practice Consulting` card's CTA links to `/services/billing-services`. The two targets are swapped.
- Optometrists: `Accounting` card CTA is `Get Stress-Free Payroll` but links to `/services/accounting`, not `/services/payroll`.
- Optometrists: Jump To label `Services` does not match the section heading `Tailored Services`.
- FAQ heading levels: on every page the first three questions are H3 and the last three are H1, so each page has four H1s. The last three FAQs on each page also read as a later, more generic addition (they all open "Yes. ForEyes Solutions ..." in third person, whereas the first three are in first person "we").
- Heroes have an H1 and nothing else: no subhead, no CTA above the fold.
- Image alt text is `mobile-image`, `desktop-image`, `Edge Decorator` or empty; testimonial headshots have empty alts. Both mobile and desktop variants are in the DOM.
- og:image URL has a double slash.
- "Book a Discovery Call" buttons open the Contact Us modal rather than a booking page (and possibly on the "Send a Message" tab).
- Footer omits Payroll although the header nav lists it.

### 4.5 Inconsistencies between the pages
- What "Accounting" means: on Optometrists and Multi-Location it is accounts payable + payroll; on Startups it is monthly P&L, balance sheets and reconciliations (i.e. bookkeeping reporting).
- Service label: `Billing Services` (Optometrists, Multi-Location) vs `Billing` (Startups). Service card order also differs (Startups puts Billing before Practice Consulting).
- The client's contact person is named three ways: `dedicated account manager` / `Your account manager` (Optometrists), `onboarding specialist` (Startups), `dedicated point of contact` (Multi-Location).
- Process length and labels differ: 4 steps (Optometrists: Customized plan), 5 steps (Startups: adds Foundation setup and Annual review), 4 steps (Multi-Location: Tailored plan, Delivery & ongoing support). `client portal` and `Annual review` are mentioned only on Startups.
- Leadership claim phrased three ways: `Led by an optometrist` (Optometrists FAQ), `led by a practicing OD` (Startups, said of the consulting team), `deep OD and practice management experience` (Multi-Location). None names the person; testimonials call him "Wade".
- Page `<title>`s promise "Bookkeeping & Accounting" / "Accounting & Consulting" while the Optometrists H1 says "Accounting, Advisory, and Practice Solutions": title, H1 and meta do not agree on what the firm sells.
- Startups FAQ Q6 hedges ("Depending on the services selected, you may receive ...") while the Accounting card on the same page promises monthly P&Ls and balance sheets outright.
- Startups challenge 1 says `building your client base`; the Billing card on the same page says `building your patient base`.

### 4.6 Duplicated / boilerplate text
- Testimonials, pricing teaser, location band, blog teaser and closing CTA are byte-identical across all three pages (and, per the CMS identifiers "General - ...", across much of the site). The same four testimonials on every audience page means none is matched to its audience: there is no startup-specific framing even though Cristine Areola is a "first-time practice owner", and nothing from a multi-location owner.
- Carousel loop clones cause Ryan Corte and Nona Kalfayan to appear twice in the HTML.
- The `Remote, Nationwide Assistance` band is AP/payroll copy (Bill.com, Gusto, "approvals and pay runs", "keeps both on schedule") reused on audience pages where "both" has no antecedent and the heading promises something broader than the body delivers. It is a "location" section with no location in it, while the footer gives a Murfreesboro, TN street address.
- The two cross-link card blurbs for each audience repeat verbatim on the other two pages (and probably on the Who We Serve hub).
- "true take-home pay ... W-2 wages and owner draws" appears in near-identical form on Optometrists and Multi-Location.

### 4.7 Weak, generic or SEO-stuffed passages
- Optometrists lead-in: `Over time, what starts as a few side tasks, such as tax strategy, becomes a full-time distraction.` Tax strategy is not a "side task", and the example is off-brand now.
- Optometrists: `Outsource to our accountants for optometrists!` (keyword phrase forced into a sentence).
- Startups: `juggling invoices, payroll, and optometry startup bookkeeping tasks`; `new optometry or eyecare practice` (twice); `Our new practice accounting services`.
- Multi-Location: `with only optometry group financial services, it’s difficult to know why you’re falling short–you need practice consulting assistance for that` (keyword-stuffed and hard to parse); `By teaming up with us for multi-location practice accounting`; `Our assistance gives you ...`.
- Optometrists: `how they deliver measurable impact` promises measurement, but no page gives a single number.
- Optometrists challenge 3: `Other accounting firms simply deliver your data.` Unsupported competitor comparison.
- Unquantified outcome claims: `improving clean claim rates`, `get paid faster`, `saving hours of administrative work each week`, `can take hours each month`.
- The three late-added FAQs per page are generic and hedge-heavy ("can help identify opportunities", "may receive").
- Multi-Location meta description ends with the generic `Contact us today!`.
- Closing CTA body is a long abstract sentence ("Unlock the clarity and expert, industry-specific support ...") beneath a strong headline.
- Time-relative testimonial facts ("for the past two years", "about 2 years") will go stale.

---

## 5. Best lines (worth keeping, lightly edited at most)

1. `You became an optometrist to improve lives, not to spend time chasing insurance claims or sorting through spreadsheets.` (Optometrists intro; names both flagships, billing and books, in one sentence)
2. `We clean up your financials and give you reporting you can actually use.` (Optometrists)
3. `Between W-2 wages and owner draws, it’s easy to confuse what the books show you with what actually lands in your bank account.` (Optometrists)
4. `Partner with us to build your books around a chart of accounts made specifically for optometry practices.` (Optometrists, Bookkeeping card)
5. `Insurance claims are complicated, but they don’t have to derail your day.` and `We know the codes, the carriers, and how to get results.` (Optometrists, Billing card)
6. `Anyone can categorize expenses, but only a team with deep experience in eyecare knows how those categories impact your practice’s profitability.` (Optometrists FAQ)
7. `That means you get the consistency of a proven system with the customization to make it truly yours.` (Optometrists FAQ)
8. `Insurance denials and patient billing delays put your revenue at risk–revenue that’s crucial in the early days of a startup.` (Startups)
9. `It’s not enough to record your numbers–you have to understand them.` (Startups)
10. `We provide centralized reporting and separate profit and loss statements for each location, giving you a clear view of performance–all without needing to manually consolidate numbers.` (Multi-Location)
11. `...so you know exactly which clinic contributes to the bottom line–and what ends up in your pocket.` (Multi-Location)
12. `The more eyecare practices you run, the more difficult billing gets–and the easier it is for revenue to slip through the cracks.` (Multi-Location, Billing card)

Strong short headings and CTA labels: `Take Back Your Time` · `What’s Holding Your Practice Back?` · `Launch Confidently` · `Spend Less Time on Admin, More on Patients` · `Proof in Practice` · `Transparent Pricing, Tailored to You` · `See Further. Move Faster. Grow Smarter.` · `Smart Reads for ODs` · `Clean Your Books` · `Claim Control` · `Stop Chasing Payments` · `Get Your Books in Order` · `Be Confident in Your Numbers` · `Build on Solid Ground` · `No hidden fees, no surprise invoices`.

Testimonial pull-quotes: `Wade and his team have been rock solid.` (Brandon Luu, OD) · `You never feel left in the dark and are always supported.` (Nona Kalfayan, OD) · `...take the time to explain financials in a way that’s easy to understand.` (Ryan Corte, OD) · `I don't know what I would do without them!` (Cristine Areola, OD).

---

## 6. Reuse notes for the new Books & Billing site

**Keep all three audience pages, same skeleton, new service set.** The current five-card services block (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing) should become two prominent flagship cards (Bookkeeping, Insurance Billing) plus three smaller ones (Accounts Payable, Payroll, Practice Consulting). Delete every Tax Services card and the tax mentions listed in 1.12, 2.12 and 3.12.

**Splitting the old "Accounting" card.** On Optometrists and Multi-Location the "Accounting" copy is really AP + payroll: split it into the Accounts Payable and Payroll minor cards ("every team member and vendor is paid on time"; "on-time payments for staff and vendors at every location"). On Startups the "Accounting" copy (monthly P&L, balance sheets, reconciliations, "It’s not enough to record your numbers–you have to understand them") belongs under Bookkeeping.

**New Optometrists page**
- Hero/intro: reuse `Take Back Your Time` and best line 1; rewrite P2 without "tax, advisory".
- Challenges: keep cards 1-4 (admin time, book accuracy, profitability, take-home pay). Replace card 5 (`The tax-time and filing scramble.`) with a billing pain point (denials, aging AR), since Insurance Billing is now a flagship and has no challenge card here; or reframe it as "books your CPA can file from".
- Process and the first three FAQs carry over nearly as-is.

**New Startups page**
- Keep `Launch Confidently` intro and challenges 1, 3, 4, 5. Rework or drop `Entity setup confusion` and FAQ Q2 (entity choice): the new firm should not appear to give entity/tax advice.
- Fix the swapped Billing / Practice Consulting links.
- The 5-step process with `Foundation setup` and `Annual review` is the most distinctive process copy of the three; confirm `client portal` and `onboarding specialist` are real before reusing.
- Lead the testimonials with Cristine Areola (first-time practice owner) or Nona Kalfayan ("whether you're just starting out") here, subject to the owner's preference on ordering.

**New Multi-Location page**
- Per-location P&Ls + centralized reporting + no manual consolidation is the core promise; keep it as the headline benefit under Bookkeeping. Challenges 2-5 and FAQs 1-4 carry over after fixing the two typos.
- Billing card (best line 12) can be promoted to flagship size as-is.

**Feeds the Bookkeeping service page:** optometry-specific chart of accounts; "monthly deliverables"; clean-up ("We clean up your financials"); true take-home pay / W-2 vs owner draws; per-location P&Ls; FAQ "Why should I choose a specialized bookkeeper?" and "My practice is unique..."; startup "tax prep ... simple and stress-free" reframed as tax-ready books for the client's CPA.

**Feeds the Insurance Billing service page:** scope list "claims submission, payment posting, denial follow-ups, and even patient billing inquiries"; "tracks aging AR, follows up"; "We manage your entire billing cycle"; "We know the codes, the carriers"; startup revenue-at-risk line; multi-location "revenue slip through the cracks" line. Any "clean claim rate" or "get paid faster" claim needs a real number or should be softened.

**Feeds Accounts Payable and Payroll pages:** the Bill.com / Gusto paragraph ("Payments and paychecks do not wait on geography...") belongs there, not on audience pages; "paid on time" promises.

**Feeds Practice Consulting page:** "revenue is up, but your profits aren’t following"; "led by a practicing OD"; "grow without the trial-and-error phase"; benchmarking and underperforming-location FAQs.

**Feeds global components:** `Proof in Practice` testimonial block (strip the leaked editorial sentence from the subhead; consider audience-matched ordering); `Transparent Pricing, Tailored to You` teaser (only if the pricing calculator survives the rebrand; "add-ons" and "service level" must match the new service list); `See Further. Move Faster. Grow Smarter.` closing CTA; `Smart Reads for ODs` blog teaser (exclude the quarterly-taxes post).

**Feeds the FAQ page:** all 18 Q&As above, minus the tax/entity ones (Optometrists Q5 needs "tax" removed; Startups Q2 and Q5 need rewriting). Merge the three near-duplicate "How involved do I need to be?" answers into one.

**Global fixes to apply while reusing:** one brand spelling (new name "ForEyes Books & Billing"; never "For Eyes"); one name for the client's contact role; one process (decide 4 or 5 steps); single H1 per page with FAQ questions as H3; real alt text; "Book a Discovery Call" should go to a booking flow; replace unquantified claims with real figures where the owner can supply them, since these pages currently contain no numbers at all.
