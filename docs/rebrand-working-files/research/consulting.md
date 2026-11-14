# Content inventory: Practice Consulting (current foreyessolutions.com)

Pages covered:

1. `https://foreyessolutions.com/services/practice-consulting` (Practice Consulting, in main nav)
2. `https://foreyessolutions.com/services/practice-consulting/financial-consulting` (Financial Consulting, child page, NOT in nav or footer)

Sources: the crawled `.txt` files plus the matching raw HTML (the FAQ answers, the testimonial pool and the JSON-LD are only in the raw HTML / `__NEXT_DATA__`; the text crawl captured FAQ questions only because the accordions were collapsed).

Conventions: everything in a blockquote or after "Copy:" is VERBATIM, including the original punctuation (curly vs straight apostrophes, en dashes used as em dashes). `[link → /path]` marks where an inline link sits.

---

## Global boilerplate (noted once, same on both pages)

- Header nav: Services (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services, Payroll) / Who We Serve (Optometrists, Multi Location Practices, Startups) / Pricing Calculator / About (Our Team) / Resources (Blog, FAQs). Header button: "Get Started". Header phone: 844-505-3937.
- Contact modal (opened by every CTA button; button data says form "Contact Us", default tab "Send a Message"): tabs "Book a Call" / "Send a Message"; heading "Let’s Talk Eyecare"; text "Have a question or ready to learn how we can help your practice?"
- Footer nav: Services (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services; note Payroll is missing here but present in the header) / Who We Serve / "Get To Know Us" (About, Team) / Resources (Pricing Calculator, Blog, FAQs).
- Footer contact: 2429 Curbow Dr, Murfreesboro, TN 37127 (Google Maps link) / 844-505-3937 / hello@foreyessolutions.com (Cloudflare-obfuscated) / "Hours: Mon-Fri at 8AM-5PM CT".
- Footer legal: "© 2026 ForEyes Solutions" / Privacy Policy / "Powered by" (links to wisedigitalpartners.com/technology/nest).
- Tech: Next.js + Sanity CMS (project `8dgizo1e`). `robots: index,follow` on both pages. No `<link rel="canonical">` found in either crawled HTML file. `og:image` is the site default with a double slash in the URL (`https://foreyessolutions.com//images/open-graph/default.jpg`).

---

# PAGE 1: Practice Consulting

- **URL:** https://foreyessolutions.com/services/practice-consulting
- **`<title>`:** `Optometry Practice Consulting | For Eyes Solutions`
- **Meta description:** `Optimize your optometry practice with expert consulting and management support from For Eyes Solutions. Contact us today for growth help.`
- **og:title / og:description:** same as title / meta description.
- **CMS page title:** "Practice Consulting"
- **JSON-LD present:** yes (Service, HowTo, FAQPage, WebSite, WebPage, BreadcrumbList). Its copy differs from the visible copy; recorded in full in section 1.13.

## 1. Section-by-section structure and verbatim copy

CMS section order (identifiers from the page data):

| # | CMS block type | CMS identifier | Visible heading |
|---|---|---|---|
| 1 | graphicTwoColumnSection | Practice - Eyecare and Optometry Consulting | Eyecare and Optometry Consulting (H1) |
| 2 | altTwoColumnSection | Practice Consulting - Strategic Guidance, Optimized Profitability | Strategic Guidance, Optimized Profitability |
| 3 | twoColumnCardSection | Practice Consulting - Our Practice Consulting Services | Our Practice Consulting Services |
| 4 | itemColumnSection | Practice Consulting - Why Choose Us for Practice Consulting? | Why Choose Us for Practice Consulting? |
| 5 | processSection | Practice Consulting - Our Straightforward Process | Our Straightforward Process |
| 6 | testimonialSection | General - Testimonials (shared block) | Proof in Practice |
| 7 | faqSection | Practice Consulting - Eyecare Practice Consulting FAQs | Eyecare Practice Consulting FAQs |
| 8 | genericTwoColumnSection | General - Transparent Pricing, Tailored to You (shared block) | See What Bookkeeping Costs for a Practice Like Yours |
| 9 | relatedServicesSection | Practice Consulting - More Ways We Can Support Your Practice | More Ways We Can Support Your Practice |
| 10 | locationSection | General - Remote, Nationwide Assistance (shared block) | Remote, Nationwide Assistance |
| 11 | blogHubSection | General - Blog (top 3) (shared block) | Smart Reads for ODs |
| 12 | ctaSection | General - See Further. Move Faster. Grow Smarter. (White top) (shared block) | See Further. Move Faster. Grow Smarter. |

### 1.1 Hero

Purpose: page title over a hero image. No subheadline, no body copy and no button in the hero itself.

- H1: **Eyecare and Optometry Consulting**
- Images: alt="mobile-image" / alt="desktop-image" (generic alts)

### 1.2 Intro: "Strategic Guidance, Optimized Profitability"

Purpose: problem/solution opener with the first CTA.

- H2: **Strategic Guidance, Optimized Profitability**
- Body:

> Working hard but not seeing the financial results you expected? Feeling overwhelmed by inefficient workflows or day-to-day operations that slow your practice down? Our eyecare and optometry consulting services provide the strategic expertise, operational analysis, and actionable guidance independent eyecare practices need to improve efficiency, increase profitability, and support long-term growth. From practice management and financial performance to workflow optimization and business planning, we help identify opportunities to streamline operations, strengthen decision-making, and build a more productive, profitable practice—without adding more to your plate.

- Button: **Book a Discovery Call** (opens contact form)

### 1.3 "Our Practice Consulting Services"

Purpose: service overview paragraph plus four service cards (icon + H3 + paragraph).

- H2: **Our Practice Consulting Services**
- Intro paragraph:

> Running an optometry practice requires balancing patient care, staffing, operations, inventory management, and [link → /services/accounting] accounting responsibilities—all while trying to maintain sustainable growth. Our practice consulting services help eyecare professionals identify operational bottlenecks, improve workflow efficiency, uncover hidden revenue opportunities, and implement practical systems tailored to the unique needs of their practice. By combining industry insight with data-driven strategies, we help create smoother operations, stronger profitability, and a more scalable foundation for long-term success.

Card 1

- H3: **Financial Analysis & Profitability Optimization**

> Need practice profitability help? If your business feels like a lot of work for little reward, the problem may be a lack of financial clarity. We dive deep into your books to identify where revenue is slipping away and implement strategies to protect and improve your profitability.

Card 2

- H3: **Operations Review & Efficiency Solutions**

> Poorly managed inventory, inefficient workflows, and outdated systems can drain time and profits. Our team reviews every facet of your practice, from scheduling and patient flow to optical operations and supply chain management, and implements changes that reduce overhead, streamline operations, and free up your time.

Card 3

- H3: **Strategic Staffing Guidance**

> Your team is critical to success, but inefficient schedules or misaligned roles can cost money and create unnecessary stress. As part of our comprehensive business strategy for optometrists, we’ll analyze your staffing models, offering ways to optimize responsibilities and increase productivity–all while maintaining a positive team environment.

Card 4

- H3: **Tailored Consulting Engagements**

> Whether you need a one-time audit to identify immediate improvements or ongoing support in the form of a de facto Director of Operations, we tailor our services to your practice’s needs. No matter the level of assistance you need, you’ll get actionable insights and implementation support.

### 1.4 "Why Choose Us for Practice Consulting?"

Purpose: differentiators; intro paragraph plus four icon items.

- H2: **Why Choose Us for Practice Consulting?**
- Intro paragraph:

> ForEyes Solutions brings more than generic business know-how; we bring lived experience in eyecare. Our team is led by a practicing OD who has sat where you sit and solved the very problems you’re facing today. That unique perspective allows us to deliver strategies that are realistic, actionable, and tailored specifically to optometry practices.

Item 1

- H3: **Deep Expertise**

> This is hands-on experience, not theory. We understand the clinical, financial, and operational realities of eyecare practices, allowing us to deliver practical, implementable guidance that improves performance and supports smarter growth decisions.

Item 2

- H3: **Time Savings**

> We take on the heavy lifting of analyzing your systems, financials, and operations. For you, that means less time spent on reports and more time focusing on patients, staff, and practice growth.

Item 3

- H3: **Tailored Solutions**

> Just as our services aren’t one-size-fits-all, neither is the level of our support. Whether you want a one-time audit to diagnose problems or an ongoing partner, our consulting services are built around your needs and goals. We meet you right where you are.

Item 4

- H3: **Strategic Clarity**

> When your systems feel broken or your books are messy, it can feel impossible to see the bigger picture. We bring clarity and order, giving you the confidence to make strategic growth decisions backed by accurate data and expert guidance.

### 1.5 "Our Straightforward Process"

Purpose: five numbered process steps with icons, flanked by images (alt="image").

- H2: **Our Straightforward Process**
- Intro:

> You don’t need a plan six months from now. You need help now. We’ve got you covered, with a fast onboarding process that gets straight to the profitability point.

- Step 1, **Discovery Call**

> We start by understanding your practice, pain points, goals, and overall financial picture.

- Step 2, **Assessment**

> Our team reviews everything from your operations and staffing to your financials and systems to identify opportunities for improvement.

- Step 3, **Recommendations**

> You’ll receive a clear, prioritized plan to address the most critical issues currently affecting the efficiency and profitability of your eyecare practice.

- Step 4, **Implementation Support**

> Unlike other business consulting firms, we don’t simply create a plan and then send you on your way. We help you put that plan into practice, monitor progress, and adjust as needed to ensure lasting results.

- Step 5, **Ongoing Guidance (Optional)**

> If you’re looking for long-term support, we act as a strategic partner, guiding growth, scaling operations, and continually optimizing practice performance.

### 1.6 "Proof in Practice" (testimonials carousel, shared block)

Purpose: 4-slide testimonial carousel (pagination buttons 1 to 4). The crawl shows 6 cards because the carousel clones the first two slides for looping. All reviews are tagged `platform: "google"` in the page data. No practice names, locations or star ratings are shown.

- H2: **Proof in Practice**
- Subheadline as published (the second sentence is a stray editorial note, see Problems):

> Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page.

Slide 1, **Ryan Corte, OD**

> Wade and his team do an outstanding job providing accurate, timely, and reliable bookkeeping services. They’re responsive, detail-oriented, and take the time to explain financials in a way that’s easy to understand. Working with them has given me greater peace of mind and confidence in the financial side of my business. I highly recommend Wade and his team to any business owner looking for a trustworthy and professional bookkeeping partner.

Slide 2, **Nona Kalfayan, OD**

> I've been working with Wade and his team at ForEyes Solutions for the past two years, and the experience has been nothing short of excellent. From onboarding to goal setting and ongoing support, they've made a huge impact on my business by taking bookkeeping and organization off my plate so I can focus on growth. They truly understand the industry and provide value whether you're just starting out or already established and looking to improve your systems. What sets them apart is their communication — fast, reliable, and always helpful. You never feel left in the dark and are always supported.
> If you're looking for bookkeeping or business consulting, I highly recommend ForEyes Solutions. They're professional, knowledgeable, and genuinely committed to your success. They are absolutely the real deal!

Slide 3, **Brandon Luu, OD**

> Wade and his team have been rock solid. It's been about 2 years, and they've done an excellent job keeping my books in order. They are always available if I have any questions. Recently, Wade has really elevated his business beyond just bookkeeping. I am excited to be along for the ride. Extremely satisfied client and would definitely recommend his services to other practice owners.

Slide 4, **Cristine Areola, OD**

> For Eyes has been a great resource for my business as a first-time practice owner. I am very thankful for their expertise and their attentiveness to the small financial details. I don't know what I would do without them!

In the page data but NOT rendered in this carousel (review pool, also `platform: "google"`), **Tri Nguyen, OD**:

> Wade being an optometrist helps me out tremendously because he knows the industry. Wade has become a great asset and friend. He has kept my books up to date and given suggestions that have saved me a lot of money.

### 1.7 "Eyecare Practice Consulting FAQs"

Purpose: 6-item accordion plus a "More FAQs" button (→ /resources/faq). Answers below are the VISIBLE (CMS) answers pulled from the raw HTML. The JSON-LD carries different answers for the same questions (see 1.13).

- H2: **Eyecare Practice Consulting FAQs**

**Q: How quickly will I see improvements?**

> While some operational tweaks can deliver immediate results, most practices see measurable improvements within a few months.

**Q: Do you offer consulting services for multi-location practices?**

> Of course! We design strategies that scale across locations, giving you a cohesive plan for staffing, operations, and financial management.

**Q: Do you handle implementation?**

> Yes. We don’t just hand you a report. Our team works alongside you to implement changes and ensure improvements stick.

**Q: What does a practice assessment include?**

> A practice assessment includes a review of your operations, staffing, financial performance, and existing systems. The goal is to identify inefficiencies, uncover opportunities for improvement, and develop a prioritized plan to improve profitability and operational performance.

**Q: Can consulting help increase profitability?**

> Yes. Through financial analysis and profitability optimization, consulting can help identify areas where revenue may be slipping away and uncover opportunities to improve financial performance. Recommendations are tailored to the specific needs and goals of your eyecare practice.

**Q: Do you work with startup optometry practices?**

> Yes. ForEyes Solutions works with both established practices and eyecare startups. Consulting services can help new practice owners build efficient systems, improve operational planning, and create a strong foundation for long-term growth.

- Button: **More FAQs**

### 1.8 Pricing calculator promo (shared block, bookkeeping wording)

Purpose: push to the pricing calculator. The CMS block is the shared "General - Transparent Pricing, Tailored to You" block, but the copy now talks only about bookkeeping.

- H2: **See What Bookkeeping Costs for a Practice Like Yours**
- Body:

> Bookkeeping fees depend on your transaction volume, your number of locations, and how much cleanup your history needs. Use the [link → /pricing-calculator] pricing calculator to build an estimate in a few minutes, then book a Discovery Call to confirm it. Every figure shown is an estimate only.

- Button: **Pricing Calculator** (→ /pricing-calculator)

### 1.9 "More Ways We Can Support Your Practice" (related services, 4 cards)

- H2: **More Ways We Can Support Your Practice**

Card, **Accounting** (→ /services/accounting)

> Comprehensive accounting services including payroll, accounts payable, financial reporting, and ongoing support that keeps your practice operating efficiently.

Card, **Bookkeeping** (→ /services/bookkeeping)

> Full-service bookkeeping with customized financial reporting, timely monthly closes, and organized records that support better decision-making.

Card, **Tax Services** (→ /services/tax-services) — TAX, do not carry over

> Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry.

Card, **Billing Services** (→ /services/billing-services)

> Our revenue cycle management and coding audit services help maximize collections, improve cash flow, and ensure your practice receives the revenue it has earned.

### 1.10 "Remote, Nationwide Assistance" (shared block, AP/payroll wording)

- H2: **Remote, Nationwide Assistance**
- Body:

> Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state.
> Our remote team keeps both on schedule and answers questions quickly.

- Button: **Connect With Us** (opens contact form)

### 1.11 "Smart Reads for ODs" (blog teaser, shared block "Blog (top 3)")

- H2: **Smart Reads for ODs**
- Body:

> Our blog helps you simplify your numbers and grow smarter, one post at a time.

- The post cards did not render in the text crawl. The post pool in the page data (newest first; the block name says top 3 are shown):
  1. What Healthy Expense Ratios Look Like in a Profitable Optometry Practice (`optometry-expense-ratios`, 2026-10-08)
  2. How to Forecast Revenue Accurately in an Eye Care Practice and Plan Growth (`revenue-forecasting-optometry-practice`, 2026-08-31)
  3. How Labor Costs Quietly Drain Profit in Eyecare Practices (and How to Fix It) (`optometry-labor-costs-eyecare-practice-profit`, 2026-07-30)
  4. Why Your Accounts Receivable Is Growing and How to Bring It Under Control (`why-accounts-receivable-is-growing`, 2026-07-02)
  5. How to Improve Cash Flow in Your Eyecare Practice Without Taking on More Patients (`how-to-improve-cash-flow-eyecare-practice`, 2026-06-16)
  6. How to Spot Financial Red Flags in Your Optometry Profit & Loss (`optometry-financial-red-flags-profit-loss`, 2026-04-22)
  7. 5 Time-Saving Bookkeeping Tips for Busy Eye Doctors (`bookkeeping-tips-eye-doctors`, 2026-04-20)
  8. Quarterly Taxes for Optometrists Made Easy (`quarterly-taxes-optometrists`, 2026-03-17) — TAX
  9. Payroll Services for Eyecare Professionals: Key Benefits (`eyecare-payroll-services`, 2026-01-30)
  10. Why More Eyecare Professionals Are Switching to Outsourced Bookkeeping (`eyecare-bookkeeping-outsourcing`, 2026-01-23)
  11. 7 Financial Management KPIs Every Eyecare Business Owner Should Track (`eyecare-financial-kpis`, 2025-12-05)

### 1.12 Final CTA (shared block)

- H2: **See Further. Move Faster. Grow Smarter.**
- Body:

> Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients.

- Button: **Book a Discovery Call**

### 1.13 Hidden copy: JSON-LD structured data (not visible to visitors, but published and different from the page)

Service

- name: `Eyecare and Optometry Practice Consulting`
- serviceType: `Optometry Operational and Profitability Consulting`
- description:

> Data-driven business consulting and strategic advisory services exclusively for independent optometry practices. Led by a practicing OD with over 25 years of experience, we specialize in financial analysis, profitability optimization, operational efficiency audits, and strategic staffing guidance.

- areaServed: `United States`
- audience: `Optometrists, Eye Care Professionals, Private Practice Owners, Startup Optometry Clinics, Multi-Location Eyecare Groups`
- knowsAbout: `Optometry Practice Profitability`, `Optical Inventory Management`, `Eyecare Workflow Efficiency`, `Optometrist Staffing Models`, `Director of Operations Services for Eye Clinics`
- Offer catalog "Optometry Consulting Engagements":
  - **Financial Analysis & Profitability Optimization**: "Deep-dive financial auditing to identify revenue leaks, protect operating margins, and optimize overall practice profitability."
  - **Operations Review & Efficiency Solutions**: "Comprehensive evaluation of scheduling, patient flow, optical dispensary management, and supply chain logistics to slash overhead costs."
  - **Strategic Staffing Guidance**: "Analysis of active staffing models, roles, and scheduling structures to boost team productivity and clinical throughput."
  - **Tailored Consulting & Fractional Leadership**: "Flexible execution ranging from one-time practice health audits to acting as a de facto fractional Director of Operations for ongoing scale."

HowTo "Our Straightforward Practice Consulting Process"

- description: "A fast, result-oriented onboarding process designed to get straight to the profitability point and build a scalable foundation for your eyecare clinic."
- 1 Discovery Call: "An initial consulting alignment call to map your practice dynamics, critical operation pain points, growth targets, and overall financial picture."
- 2 Assessment: "Our specialist team meticulously breaks down your front and back-office metrics, staffing schedules, inventory setups, and bookkeeping systems."
- 3 Recommendations: "Receive a prioritized, actionable roadmap resolving the core bottlenecks damaging your workflow efficiency and financial margins."
- 4 Implementation Support: "We actively help execute the plan, supervise ongoing operational milestones, and modify configurations to unlock lasting performance returns."
- 5 Ongoing Guidance (Optional): "Transition into long-term fractional oversight where we serve as an embedded strategic partner guiding clinic scale and resource optimization."

FAQPage (same six questions, DIFFERENT answers from the visible accordion)

- How quickly will I see improvements? "Operational adjustments—such as optimized patient scheduling, staff role updates, or clear inventory management guidelines—frequently produce measurable efficiency and workflow improvements within the first 30 to 60 days."
- Do you offer consulting services for multi-location practices? "Yes. We design standardized operational workflows, centralized metrics tracking systems, and consolidated procurement strategies optimized specifically for scaling multi-clinic regional footprint chains."
- Do you handle implementation? "Yes. Unlike typical consulting firms that deliver a report and walk away, we provide hands-on implementation support, help train your team, monitor progress, and systematically refine your custom systems to guarantee lasting results."
- What does a practice assessment include? "A full practice assessment covers an in-depth audit of your financial books, optical dispensary performance, scheduling algorithms, labor productivity models, software utilization, and supply chain cost structures."
- Can consulting help increase profitability? "Yes. By identifying hidden cost centers, eliminating workflow bottlenecks, stopping frame inventory shrinkage, and optimizing billing configurations, we successfully expand your operating margins and protect cash flow."
- Do you work with startup optometry practices? "Yes. We help new optometry practice startups establish strong operational frameworks from day one—covering fee schedule engineering, vendor selection, baseline staffing patterns, and cloud accounting architectures."

WebPage

- name: `Eyecare & Optometry Practice Consulting | ForEyes Solutions` (differs from the real `<title>`)
- description: "Transform your optometry clinic into a highly profitable, streamlined operation. Partner with an experienced OD for expert financial analysis, staffing strategy, and workflow execution support."

Breadcrumb: Home > Services > Practice Consulting

---

# PAGE 2: Financial Consulting (child of Practice Consulting)

- **URL:** https://foreyessolutions.com/services/practice-consulting/financial-consulting
- **`<title>`:** `Eyecare Financial Consulting | ForEyes Solutions`
- **Meta description:** `Eyecare financial strategy from a firm founded by a practicing OD. Read your numbers, protect cash flow, and grow profit. Book a Discovery Call today.`
- **og:title / og:description:** same as title / meta description.
- **CMS page title:** "Financial Consulting"
- **JSON-LD present:** none.
- **Navigation:** not linked from the header or footer nav. The Practice Consulting page does not link to it either; it links UP to Practice Consulting.

## 2. Section-by-section structure and verbatim copy

CMS section order:

| # | CMS block type | CMS identifier | Visible heading |
|---|---|---|---|
| 1 | graphicTwoColumnSection | Financial Consulting - Eyecare Financial Consulting | Eyecare Financial Consulting (H1) |
| 2 | altTwoColumnSection | Financial Consulting - Intro | (no heading) |
| 3 | altTwoColumnSection | Financial Consulting - From Numbers to a Plan You Can Use | From Numbers to a Plan You Can Use |
| 4 | twoColumnCardSection | Financial Consulting - What We Handle for Your Practice | What We Handle for Your Practice |
| 5 | itemColumnSection | Financial Consulting - Why Choose Us for Financial Consulting | Why Choose Us for Financial Consulting |
| 6 | processSection | Financial Consulting - Our Straightforward Process | Our Straightforward Process |
| 7 | testimonialSection | Financial Consulting - Proof in Practice | Proof in Practice |
| 8 | faqSection | Financial Consulting - Eyecare Financial Consulting FAQs | Eyecare Financial Consulting FAQs |
| 9 | genericTwoColumnSection | Financial Consulting - Transparent Pricing, Tailored to You | Transparent Pricing, Tailored to You |
| 10 | relatedServicesSection | Financial Consulting - More Ways We Can Support Your Practice | More Ways We Can Support Your Practice |
| 11 | locationSection | Financial Consulting - Remote, Nationwide Assistance | Remote, Nationwide Assistance |
| 12 | blogHubSection | Financial Consulting - Smart Reads for ODs | Smart Reads for ODs |
| 13 | ctaSection | Financial Consulting - See Further. Move Faster. Grow Smarter. | See Further. Move Faster. Grow Smarter. |

This page has its own page-specific versions of the pricing, location, blog and CTA blocks (unlike page 1, which uses the shared "General" blocks).

### 2.1 Hero

- H1: **Eyecare Financial Consulting**
- Subheadline: **Your practice makes money. Do you know where it goes?**
- Image alt: "Optometry practice owner reviewing financial statements with a ForEyes advisor"

### 2.2 Intro (no heading)

Purpose: frames the problem, separates the service from bookkeeping, first CTA.

> You can run a full schedule, cap your frames board, and still end the year unsure whether the practice actually got ahead. That gap between activity and clarity is where most owners get stuck. Financial Consulting closes it.
> This is not more [link → /services/bookkeeping] bookkeeping, and it is not another set of reports to file away. It is a seat at the table with people who read practice financials for a living and who understand eyecare from the inside. We translate your numbers into decisions you can act on: what to charge, what to keep, what to cut, and when to grow.

- Tagline line (its own line under the body): **Made for Practice Owners. Built by One.**
- Button: **Book a Discovery Call**

### 2.3 "From Numbers to a Plan You Can Use"

Purpose: explains the offer and how it differs from Practice Consulting.

- H2: **From Numbers to a Plan You Can Use**

> Most ODs were trained to care for patients, not to interpret a Profit and Loss (P&L) statement between exams. So the financials pile up, the questions grow, and big decisions get made on instinct instead of evidence.
> We change that. ForEyes Financial Consulting gives you a partner who sits in the owner's seat with you, reads the story your numbers are telling, and hands you a clear, prioritized path forward. You keep your focus on the chair. We keep the financial strategy in focus.
> Our [link → /services/practice-consulting] Practice Consulting service looks across the whole practice: operations, staffing, workflow, and financial performance. Financial Consulting goes deeper on the money itself, with dedicated work on cash flow, margins, compensation, valuation, and the forward plan that ties them together.

### 2.4 "What We Handle for Your Practice" (six cards)

- H2: **What We Handle for Your Practice**

Card 1, **Financial Statement Interpretation and KPI Reporting**

> A P&L only helps if you can read it. We sit with you and walk through what each line is really saying, then build a short list of the metrics that actually move your practice: revenue per exam, optical capture rate, cost of goods on the optical side, and provider productivity. You leave every session knowing your numbers, not just owning them.

Card 2, **Cash Flow Planning and Forecasting**

> Profit on paper does not always mean money in the account. We map how cash actually moves through your practice across the year, flag the tight months before they arrive, and build a forecast you can plan against. That means fewer surprises at payroll, smarter timing on big purchases, and a cushion you can count on. When the pressure is coming from slow reimbursements rather than spending, we point you toward [link → /services/billing-services] faster collections as the fix.

Card 3, **Profitability and Margin Analysis**

> Not all revenue is equal. We break down where your true profit comes from, separating optical margins from medical reimbursements and exam revenue, so you can see which parts of the practice carry the business and which quietly drain it. Then we help you protect the strong lines and fix the weak ones.

Card 4, **Owner Compensation and True Take-Home Pay**

> Many owners cannot say, with confidence, what they actually earn. We clarify the difference between [link → /services/accounting] W-2 wages and owner draws so your real take-home pay is unmistakable, then help you structure compensation in a way that supports both your household and the health of the practice.

Card 5, **EBITDA and Valuation Readiness**

> Whether you are years from an exit or simply want to build something worth more, EBITDA is the language of practice value. We calculate it accurately for your practice, show you the levers that raise it, and keep your finances in a shape that stands up to a buyer, a partner, or a lender. For groups, that same work supports [link → /who-we-serve/multi-location-practices] multi-location benchmarking so you can compare sites on equal footing.

Card 6, **Budgeting, Growth Planning, and the Forward Roadmap**

> Guesswork is expensive. We build a working budget around your real numbers and your goals, then turn it into a roadmap: when you can afford the new lane, the second location, the associate hire, or the equipment upgrade. Every major move gets tested against the numbers before you commit. When you are weighing a second location, an associate, or a lane expansion, we model the scenario first so the growth decision is a calculation rather than a leap.

### 2.5 "Why Choose Us for Financial Consulting" (four items)

- H2: **Why Choose Us for Financial Consulting**

Item 1, **Built by an Owner, for Owners**

> ForEyes is founded and led by [link → /about-us/our-team] Wade Weisz, OD, a practicing optometrist with more than 25 years in the owner's seat. When we talk about optical COGS, insurance mix, or the cost of an empty chair, we are speaking from experience, not from a textbook. Specialists, never generalists.

Item 2, **Eyecare Is the Only Thing We Do**

> Our guidance runs on a [link → /services/bookkeeping] Custom Chart of Accounts built specifically for eyecare, which means we can see distinctions a general accountant never will. That specificity is what turns raw data into decisions that fit how an optometry, ophthalmology, or optical practice really operates.

Item 3, **Strategy, Not Just Statements**

> Reports tell you what happened. We tell you what to do next. Every engagement ends with a clear, prioritized set of recommendations and the reasoning behind each one, so you are never left staring at a spreadsheet wondering what it means for you.

Item 4, **Reclaim Your Time and Your Confidence**

> You did not become a doctor to spend Sunday nights buried in financials. We carry the analysis so you can carry the practice, walking into every decision with numbers you trust and a partner who has already done the math.

### 2.6 "Our Straightforward Process" (five steps)

- H2: **Our Straightforward Process** (no intro paragraph on this page)
- Image alt: "Five-step eyecare financial consulting process from Discovery Call to ongoing advisory"

- Step 1, **Discovery Call**

> We start with a low-pressure conversation about your practice, your numbers, and what keeps you up at night. No commitment, just clarity on where you are and where you want to go.

- Step 2, **Financial Deep Dive**

> We review your statements, your Chart of Accounts, and your key metrics to build a true picture of the practice, then identify the handful of issues and opportunities that matter most.

- Step 3, **Strategy and Recommendations**

> You receive a clear, prioritized plan: what to address first, what it should produce, and how we will measure it. Everything is written in plain language and tied to your goals.

- Step 4, **Implementation Support**

> Plans only pay off when they happen. We stay alongside you as changes roll out, adjusting as your practice responds and keeping the strategy on track.

- Step 5, **Ongoing Advisory (Optional)**

> Practices change, and so should the plan. Many owners keep us on as a steady financial partner, meeting on a regular basis to review results, refine the roadmap, and stay ahead of what is next.

### 2.7 "Proof in Practice" (testimonials carousel)

- H2: **Proof in Practice**
- Subheadline:

> Hear the stories behind the numbers, straight from the ODs themselves.

- Same four testimonials as page 1, verbatim identical, in this order: **Cristine Areola, OD** / **Ryan Corte, OD** / **Nona Kalfayan, OD** / **Brandon Luu, OD** (then two looped clones). See 1.6 for the full text. Tri Nguyen, OD is again in the data pool but not rendered.

### 2.8 "Eyecare Financial Consulting FAQs"

- H2: **Eyecare Financial Consulting FAQs**

**Q: How is Financial Consulting different from bookkeeping?**

> Bookkeeping records what happened and keeps your books accurate and current. Financial Consulting takes those accurate books and turns them into strategy: what the numbers mean, what to do about them, and how to plan your next move. The two work best together, and clean books make our consulting sharper.

**Q: Do I need Financial Consulting if I already have an accountant or tax preparer?**

> Often, yes. [link → /services/tax-services] Tax work looks backward to file correctly and minimize liability, and it is essential. This work looks forward, helping you make better operating and growth decisions all year long. We complement your existing support rather than replace it, and we coordinate so nothing falls through the cracks.

**Q: What does a financial deep dive actually include?**

> We review your P&L, Balance Sheet, and Chart of Accounts, calculate your core metrics and EBITDA, examine cash flow patterns, and clarify owner compensation. You come away with a plain-language read on the health of your practice and a prioritized list of where to focus.

**Q: Can this really improve my profitability?**

> We cannot promise a specific number, because every practice is different. What we can do is show you exactly where profit is made and lost, protect your strongest margins, tighten the weak ones, and help you make growth decisions that pencil out before you commit. Better decisions, made consistently, are what move the bottom line.

**Q: Do you work with multi-location groups and startups?**

> Yes. For [link → /who-we-serve/multi-location-practices] multi-location groups, we build comparable benchmarks across sites so you can see which locations lead and which lag. For [link → /who-we-serve/startups] emerging ODs and cold starts, we help lay a financial foundation from day one, including entity setup considerations such as LLC versus S-Corp, so you avoid costly trial and error.

(Two links sit in this answer, to /who-we-serve/multi-location-practices and /who-we-serve/startups; the exact anchor words were not captured, the placement above is inferred.)

**Q: Is your team local or remote?**

> Both, in the best way. ForEyes is based in Tennessee, and we provide Nationwide Remote Assistance built around speed and responsiveness. Wherever your practice is, you get the same specialist team and the same fast turnarounds.

- Button: **More FAQs** (→ /resources/faq)

### 2.9 "Transparent Pricing, Tailored to You"

- H2: **Transparent Pricing, Tailored to You**
- Image alt: "ForEyes Solutions pricing calculator for eyecare practice financial services"

> No mystery invoices and no surprises. Use our [link → /pricing-calculator] interactive Pricing Calculator to see a clear estimate for the support your practice needs. Every figure shown is an estimate only, and we confirm the details with you before anything begins.

- Button: **Pricing Calculator**

### 2.10 "More Ways We Can Support Your Practice" (related services, 5 cards)

- H2: **More Ways We Can Support Your Practice**

Card, **Bookkeeping** (→ /services/bookkeeping)

> Accurate, eyecare-specific books closed by the 10th business day of each month, the foundation every strategy is built on.

Card, **Accounting** (→ /services/accounting)

> Accounts Payable through Bill.com and Payroll through Gusto, handled with certified precision.

Card, **Tax Services** (→ /services/tax-services) — TAX, do not carry over

> Proactive, year-round tax strategy that minimizes liability and ends the tax season scramble, backed by Certified Support.

Card, **Billing and Revenue Cycle Management** (→ /services/billing-services)

> Cleaner claims and faster collections that protect the cash flow your financial plan depends on.

Card, **Practice Consulting** (→ /services/practice-consulting)

> Operations, staffing, and workflow guidance that pairs with your financial strategy to move the whole practice forward.

### 2.11 "Remote, Nationwide Assistance"

- H2: **Remote, Nationwide Assistance**
- Image alt: "ForEyes Solutions provides nationwide remote financial consulting to eyecare practices"

> ForEyes Solutions is a Nashville, TN firm serving eyecare practice owners across the country through Nationwide Remote Assistance. Our remote-first model is built for speed and efficiency, so distance never slows down the guidance you need. Our team is available Monday through Friday, 8:00 AM to 5:00 PM CT.

- Button: **Connect With Us**

### 2.12 "Smart Reads for ODs"

- H2: **Smart Reads for ODs**

> Keep sharpening your financial edge. Our [link → /resources/blog] Smart Reads blog breaks down the concepts that matter most to practice owners, from reading a P&L to understanding EBITDA and owner draws.

- Post pool: same 11 posts as listed in 1.11.

### 2.13 Final CTA

- H2: **See Further. Move Faster. Grow Smarter.**

> Your numbers already know where the opportunity is. Let us help you see it. Book a Discovery Call and get a partner who reads eyecare financials for a living and puts that insight to work for your practice.

- Button: **Book a Discovery Call**

---

# Facts & claims (both pages; each needs confirming before reuse)

People, credentials, history

- Founder/leader: **Wade Weisz, OD**, "a practicing optometrist with more than 25 years in the owner's seat" (P2 visible). P1 JSON-LD: "Led by a practicing OD with over 25 years of experience". P1 visible copy names nobody: "Our team is led by a practicing OD who has sat where you sit".
- "ForEyes is founded and led by Wade Weisz, OD" (P2). Meta description: "a firm founded by a practicing OD".
- Tagline claims: "Made for Practice Owners. Built by One."; "Specialists, never generalists."; "Eyecare Is the Only Thing We Do".
- "certified pros who know optometry" (P1 tax card), "certified precision" (P2 accounting card), "Certified Support" (P2 tax card). No certification is named anywhere on these pages.

Scope / audience

- Serves "independent eyecare practices" / "optometry practices" (P1). P1 JSON-LD says "exclusively for independent optometry practices". P2 says "an optometry, ophthalmology, or optical practice".
- Works with multi-location practices (both pages) and startups / "emerging ODs and cold starts" (both pages).
- Area served: United States, "Nationwide Remote Assistance", "remote-first model".

Service facts: Practice Consulting

- Four components: Financial Analysis & Profitability Optimization; Operations Review & Efficiency Solutions; Strategic Staffing Guidance; Tailored Consulting Engagements.
- Operations review covers "scheduling and patient flow", "optical operations and supply chain management", inventory, systems.
- Engagement formats: "one-time audit" or "ongoing support in the form of a de facto Director of Operations" (JSON-LD: "fractional Director of Operations").
- Includes implementation support ("We help you put that plan into practice, monitor progress, and adjust as needed"). JSON-LD adds "help train your team".
- 5-step process: Discovery Call / Assessment / Recommendations / Implementation Support / Ongoing Guidance (Optional).
- Timeline claim (visible): "most practices see measurable improvements within a few months". Timeline claim (JSON-LD): "within the first 30 to 60 days". These conflict.
- "fast onboarding process".
- Comparative claim: "Unlike other business consulting firms, we don’t simply create a plan and then send you on your way."
- JSON-LD-only claims: "guarantee lasting results", "stopping frame inventory shrinkage", "optimizing billing configurations", "we successfully expand your operating margins", "fee schedule engineering, vendor selection, baseline staffing patterns, and cloud accounting architectures", "consolidated procurement strategies".

Service facts: Financial Consulting

- Six components: Financial Statement Interpretation and KPI Reporting; Cash Flow Planning and Forecasting; Profitability and Margin Analysis; Owner Compensation and True Take-Home Pay; EBITDA and Valuation Readiness; Budgeting, Growth Planning, and the Forward Roadmap.
- Named KPIs: "revenue per exam, optical capture rate, cost of goods on the optical side, and provider productivity".
- Deep dive covers: "P&L, Balance Sheet, and Chart of Accounts", "core metrics and EBITDA", "cash flow patterns", "owner compensation".
- Works from a "Custom Chart of Accounts built specifically for eyecare".
- Scenario modeling for "a second location, an associate, or a lane expansion", equipment upgrades.
- "multi-location benchmarking" / "comparable benchmarks across sites".
- Startup help includes "entity setup considerations such as LLC versus S-Corp".
- 5-step process: Discovery Call / Financial Deep Dive / Strategy and Recommendations / Implementation Support / Ongoing Advisory (Optional). Discovery Call is "low-pressure", "No commitment".
- "Every engagement ends with a clear, prioritized set of recommendations and the reasoning behind each one".
- Explicit non-guarantee: "We cannot promise a specific number, because every practice is different."
- "Many owners keep us on as a steady financial partner, meeting on a regular basis".
- "we coordinate" with the client's existing accountant / tax preparer.

Tools, partners, timelines, prices

- **Bill.com** for Accounts Payable; **Gusto** for Payroll (P2 accounting card; P1 remote block).
- Bookkeeping: books "closed by the 10th business day of each month" (P2 bookkeeping card); "timely monthly closes" (P1).
- Pricing: no prices on either page. Pricing Calculator at /pricing-calculator; "Every figure shown is an estimate only" (both); "we confirm the details with you before anything begins" (P2). P1: bookkeeping fees "depend on your transaction volume, your number of locations, and how much cleanup your history needs".
- No QuickBooks or other software is named on these two pages.

Contact / location

- Phone 844-505-3937. Email hello@foreyessolutions.com.
- Footer address: 2429 Curbow Dr, Murfreesboro, TN 37127.
- P2 body: "a Nashville, TN firm". P2 FAQ: "based in Tennessee".
- Hours: "Monday through Friday, 8:00 AM to 5:00 PM CT" (P2 body); "Mon-Fri at 8AM-5PM CT" (footer).
- © 2026 ForEyes Solutions.

Testimonial facts

- Four displayed reviewers: Ryan Corte, OD; Nona Kalfayan, OD; Brandon Luu, OD; Cristine Areola, OD. Fifth in data pool: Tri Nguyen, OD. All flagged `platform: google`.
- Nona Kalfayan: client "for the past two years". Brandon Luu: "about 2 years". Cristine Areola: "first-time practice owner".

---

# Tax content (must NOT be carried into the new site)

Direct tax-service selling

1. P1 related-services card "Tax Services": "Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry." (links to /services/tax-services)
2. P2 related-services card "Tax Services": "Proactive, year-round tax strategy that minimizes liability and ends the tax season scramble, backed by Certified Support." (links to /services/tax-services)
3. Global nav and footer link "Tax Services" (→ /services/tax-services) on both pages.

Tax mentions inside otherwise reusable copy

4. P2 FAQ question: "Do I need Financial Consulting if I already have an accountant or tax preparer?" and its answer sentence "Tax work looks backward to file correctly and minimize liability, and it is essential." ("Tax work" links to /services/tax-services). After the rebrand this FAQ is actually useful if reworded: ForEyes no longer does tax, so "We complement your existing support rather than replace it, and we coordinate so nothing falls through the cracks." becomes the honest positioning. Remove the link and any implication that ForEyes offers the tax work.
5. P2 FAQ: "including entity setup considerations such as LLC versus S-Corp". Entity selection is tax-advisory territory; drop or hand off to the client's CPA.
6. P2 card "Owner Compensation and True Take-Home Pay": "We clarify the difference between W-2 wages and owner draws ... then help you structure compensation in a way that supports both your household and the health of the practice." Clarifying take-home pay is a bookkeeping/consulting insight; "structure compensation" (W-2 vs draws) shades into tax planning. Keep the clarity half, soften or drop the structuring half, or add "alongside your CPA".
7. Blog pool includes "Quarterly Taxes for Optometrists Made Easy" (`quarterly-taxes-optometrists`); it can surface in the "Smart Reads" teaser.

Adjacent but NOT tax (safe, with notes)

- "Accounting" as a service label (P1 inline link, both related-services cards). Not tax, but "Accounting" is not one of the five new services; its contents (Accounts Payable via Bill.com, Payroll via Gusto, financial reporting) map to the new AP and Payroll pages and to Bookkeeping.
- "certified pros" / "Certified Support" / "certified precision": the certification language is attached to the tax and accounting cards. If it refers to CPAs/EAs it goes with the tax service; do not reuse without knowing what is certified.
- "a general accountant never will" (P2): a comparison, not a tax service. Fine.
- EBITDA / valuation readiness, "stands up to a buyer, a partner, or a lender": financial consulting, not tax.
- Neither page uses the phrase "tax-ready books" or anything equivalent. No bookkeeping-flavoured tax phrasing to preserve here.

---

# Problems

Stray editorial notes / wrong-context copy

1. **Stray editorial note published on P1**, testimonial subheadline: "Keep the Ryan Corte, OD quote first on this page." This is an instruction to an editor, live in the copy. (Recorded as a finding only.)
2. P1 testimonial subheadline first sentence, "Optometrists describe what dependable books feel like.", is bookkeeping copy on a consulting page. The block is the shared "General - Testimonials" block, so the edit was made globally and leaks onto every page that uses it.
3. P1 pricing block is bookkeeping copy on the consulting page: "See What Bookkeeping Costs for a Practice Like Yours" / "Bookkeeping fees depend on...". It is the shared "General - Transparent Pricing, Tailored to You" block overwritten with bookkeeping wording.
4. P1 "Remote, Nationwide Assistance" block is AP/payroll copy on the consulting page: "Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state." Same cause: shared block overwritten.
5. P1 final CTA and blog teaser are the generic shared versions; P2 has tailored versions of the same blocks. The two pages feel like different generations of copy.

Inconsistencies

6. Brand name: `<title>` and meta description on P1 say "For Eyes Solutions"; body copy, P2 title and footer say "ForEyes Solutions"; Cristine Areola's review says "For Eyes"; P2 shortens to "ForEyes".
7. Location: footer says Murfreesboro, TN (2429 Curbow Dr); P2 body says "a Nashville, TN firm"; P2 FAQ says "based in Tennessee".
8. "Is your team local or remote?" answered "Both, in the best way." while the service is described elsewhere as remote-first; "local" only holds for Tennessee practices.
9. Timeline conflict on P1: visible FAQ "within a few months" vs JSON-LD "within the first 30 to 60 days".
10. P1 JSON-LD FAQ answers do not match the visible FAQ answers at all (six of six differ). FAQ structured data is supposed to mirror on-page text. JSON-LD also carries stronger claims than the page: "guarantee lasting results", "we successfully expand your operating margins".
11. P1 JSON-LD WebPage name ("Eyecare & Optometry Practice Consulting | ForEyes Solutions") differs from the real `<title>`. P2 has no JSON-LD at all.
12. Founder naming: P1 never names Wade Weisz ("led by a practicing OD"); P2 names him with "more than 25 years". The 25-year figure is absent from P1's visible copy.
13. Scope: "exclusively for independent optometry practices" (P1 JSON-LD) vs "optometry, ophthalmology, or optical practice" (P2) vs "eyecare" generally.
14. Service naming drift: "Billing Services" (P1, nav) vs "Billing and Revenue Cycle Management" (P2). Related-services sets differ (4 cards on P1, 5 on P2) and the card descriptions for Bookkeeping, Accounting, Tax and Billing are entirely different between the two pages.
15. H1 "Eyecare and Optometry Consulting" vs nav label "Practice Consulting" vs title "Optometry Practice Consulting" vs H2 "Our Practice Consulting Services".
16. Step 5 naming: "Ongoing Guidance (Optional)" (P1) vs "Ongoing Advisory (Optional)" (P2). Steps 2 and 3 also differ ("Assessment"/"Recommendations" vs "Financial Deep Dive"/"Strategy and Recommendations").
17. Header nav lists Payroll under Services; footer nav does not.
18. Hours formats differ: "Mon-Fri at 8AM-5PM CT" (footer, stray "at") vs "Monday through Friday, 8:00 AM to 5:00 PM CT" (P2).
19. Capitalization of invented proper nouns on P2: "Nationwide Remote Assistance", "Custom Chart of Accounts", "Certified Support", "Smart Reads", "Financial Consulting", "Discovery Call". P1 mostly lowercases ("pricing calculator" vs P2 "Pricing Calculator").
20. Headings: "Why Choose Us for Practice Consulting?" has a question mark; "Why Choose Us for Financial Consulting" does not.

Typos / punctuation / odd phrasing

21. En dash used as an unspaced em dash: "increase productivity–all while" (P1), "what matters most–your patients" (P1 CTA), "personal returns–handled" (P1 tax card). Elsewhere proper em dashes are used ("practice—without", "responsibilities—all"), and the Kalfayan review uses a spaced em dash.
22. Apostrophes: P1 uses curly (’); P2 uses straight ('). Mixed within testimonials too.
23. "cap your frames board" (P2 intro): unclear idiom; likely means "fill your frame boards". Rewrite or drop.
24. "gets straight to the profitability point" (P1 process intro): awkward.
25. "Need practice profitability help?" (P1 card 1): keyword-stuffed opener. Same for "As part of our comprehensive business strategy for optometrists" (card 3).
26. Meta description P1 ends "Contact us today for growth help.": weak and awkward.
27. "de facto Director of Operations": "de facto" undersells it; JSON-LD uses the clearer "fractional".
28. P1 JSON-LD is jargon-heavy and reads machine-written: "scaling multi-clinic regional footprint chains", "scheduling algorithms", "modify configurations to unlock lasting performance returns", "cloud accounting architectures", "fee schedule engineering", "consulting alignment call".

Duplication / boilerplate

29. Testimonials are identical on both pages (and site-wide), and the carousel renders slides 1 and 2 twice (loop clones).
30. No testimonial is specifically about consulting. All four displayed quotes praise bookkeeping. Only fragments support consulting: Kalfayan ("bookkeeping or business consulting", "goal setting"), Luu ("elevated his business beyond just bookkeeping"). The undisplayed Tri Nguyen quote ("given suggestions that have saved me a lot of money") is the most consulting-relevant and is not shown.
31. P1 repeats itself: "one-time audit ... or ongoing" appears in both "Tailored Consulting Engagements" and "Tailored Solutions"; "implementation support" is stated in a card, a process step and a FAQ; "revenue is slipping away" appears in a card and a FAQ.
32. P2 card 6 repeats itself within one paragraph: "the new lane, the second location, the associate hire" and then "a second location, an associate, or a lane expansion".
33. P1 and P2 overlap heavily (P1's "Financial Analysis & Profitability Optimization" is a thin version of all of P2). P2 has to explain the difference in a paragraph, which signals the split confuses visitors.

Weak / generic passages

34. P1 intro and services intro are generic consulting language with almost no eyecare specifics: "strategic expertise, operational analysis, and actionable guidance", "By combining industry insight with data-driven strategies, we help create smoother operations, stronger profitability, and a more scalable foundation for long-term success."
35. P1 "Why Choose Us" items "Deep Expertise", "Time Savings", "Tailored Solutions", "Strategic Clarity" are generic labels. P2's equivalents are far stronger.
36. P1 hero has no subheadline or CTA.
37. No proof points on either page: no numbers, case results, client counts or sample deliverables. The only number is "25 years".
38. "Unlike other business consulting firms" (P1) and "Unlike typical consulting firms that deliver a report and walk away" (JSON-LD): unsupported comparative claims.

Technical / accessibility / structure

39. P1 image alts are placeholders ("mobile-image", "desktop-image", "icon", "image", empty). P2 has descriptive alts on main images but empty alts on icons.
40. Mismatched inline links: "accounting responsibilities" → /services/accounting (P1); "W-2 wages and owner draws" → /services/accounting (P2); "Custom Chart of Accounts" → /services/bookkeeping (P2); "faster collections" → /services/billing-services (fine). Inline links use absolute `https://foreyessolutions.com/...` URLs while buttons use relative paths.
41. P2 is orphaned: not in header/footer nav and not linked from P1. P1's own page never mentions that a deeper Financial Consulting page exists.
42. No canonical tag found on either page; og:image URL has a double slash and is the generic default.
43. "Book a Discovery Call" opens the contact form on the "Send a Message" tab, not a booking calendar, despite the label.

---

# Best lines (worth keeping)

1. "Your practice makes money. Do you know where it goes?" (P2 hero)
2. "Made for Practice Owners. Built by One." (P2 tagline)
3. "Reports tell you what happened. We tell you what to do next." (P2)
4. "You keep your focus on the chair. We keep the financial strategy in focus." (P2)
5. "When we talk about optical COGS, insurance mix, or the cost of an empty chair, we are speaking from experience, not from a textbook." (P2)
6. "You did not become a doctor to spend Sunday nights buried in financials. We carry the analysis so you can carry the practice" (P2)
7. "Our team is led by a practicing OD who has sat where you sit and solved the very problems you’re facing today." (P1)
8. "Profit on paper does not always mean money in the account." (P2)
9. "we model the scenario first so the growth decision is a calculation rather than a leap." (P2)
10. "You don’t need a plan six months from now. You need help now." (P1)

Runners-up: "This is hands-on experience, not theory." (P1); "Plans only pay off when they happen." (P2); "Guesswork is expensive." (P2); "A P&L only helps if you can read it." / "You leave every session knowing your numbers, not just owning them." (P2); "That gap between activity and clarity is where most owners get stuck." (P2); "We cannot promise a specific number, because every practice is different." (P2, honest tone); "Yes. We don’t just hand you a report." (P1 FAQ); "Your numbers already know where the opportunity is. Let us help you see it." (P2 CTA); "See Further. Move Faster. Grow Smarter." (shared CTA headline, eyecare pun).

---

# Reuse notes for the new Books & Billing site

Practice Consulting page (minor service, single page)

- Merge both current pages into ONE Practice Consulting page. Take the structure and scope from P1 (operations, staffing, financial performance, engagement formats, 5-step process) and the voice from P2, which is clearly the newer, sharper writing. Do not keep a separate Financial Consulting child page for a minor service; fold its six topics in as a "what we look at" list (KPIs, cash flow, margins, owner take-home, EBITDA/valuation readiness, budgeting and growth scenarios).
- Hero candidates: "Your practice makes money. Do you know where it goes?" as headline or subhead; "Made for Practice Owners. Built by One." as a tagline.
- Scope block: P1's four cards, tightened, with P2's eyecare specifics added (revenue per exam, optical capture rate, optical COGS, provider productivity, new lane / second location / associate hire).
- Engagement formats: "one-time audit" or ongoing "Director of Operations" style support (prefer "fractional" over "de facto").
- Process: one 5-step list. Use P2's step copy (better written) with P1's broader step names: Discovery Call / Assessment / Recommendations / Implementation Support / Ongoing Guidance (Optional).
- FAQs to keep (visible versions, not the JSON-LD versions): how quickly, multi-location, implementation, what an assessment includes, profitability (use P2's "We cannot promise a specific number..." answer), startups, and "How is ... different from bookkeeping?" Generate FAQ schema from the same visible text.
- Reword the accountant/tax-preparer FAQ to say ForEyes does not do tax and works alongside the client's CPA. Drop "LLC versus S-Corp" and soften "structure compensation".
- Because consulting is now a minor service, position it as the layer on top of the flagships: "clean books make our consulting sharper" and "When the pressure is coming from slow reimbursements rather than spending, we point you toward faster collections as the fix." are ready-made bridges to Bookkeeping and Insurance Billing.

Feeds to other new pages

- Bookkeeping (flagship): "Custom Chart of Accounts built specifically for eyecare, which means we can see distinctions a general accountant never will."; "Accurate, eyecare-specific books closed by the 10th business day of each month, the foundation every strategy is built on."; "Full-service bookkeeping with customized financial reporting, timely monthly closes, and organized records that support better decision-making."; the P1 bookkeeping pricing paragraph (transaction volume, number of locations, cleanup) belongs here or on Pricing; the bookkeeping-vs-consulting FAQ; Corte, Luu, Kalfayan and Areola testimonials are all really bookkeeping testimonials.
- Insurance Billing (flagship): "Cleaner claims and faster collections that protect the cash flow your financial plan depends on."; "Our revenue cycle management and coding audit services help maximize collections, improve cash flow, and ensure your practice receives the revenue it has earned."; the cash-flow card's slow-reimbursements line.
- Accounts Payable and Payroll (minor): "Accounts Payable through Bill.com and Payroll through Gusto"; the P1 remote block "Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state. Our remote team keeps both on schedule and answers questions quickly." belongs on those pages, not on consulting.
- About / Home: Wade Weisz, OD, "a practicing optometrist with more than 25 years in the owner's seat"; "Built by an Owner, for Owners"; "Eyecare Is the Only Thing We Do"; "Specialists, never generalists."; the "cost of an empty chair" line; "See Further. Move Faster. Grow Smarter." as a closing-CTA headline.
- Contact / footer / location: settle one location statement (Murfreesboro address vs "Nashville, TN firm" vs "based in Tennessee") and one hours format; "remote-first", "Nationwide" language from P2's location block is reusable once the city is fixed.
- Pricing: "No mystery invoices and no surprises."; "Every figure shown is an estimate only, and we confirm the details with you before anything begins."
- Testimonials: use Tri Nguyen, OD (currently hidden) on the consulting page since it mentions money-saving suggestions and Wade being an optometrist; Kalfayan's second paragraph ("bookkeeping or business consulting") and Luu's "elevated his business beyond just bookkeeping" also fit. Confirm permission and source (all tagged Google reviews).
- Blog teaser: exclude `quarterly-taxes-optometrists` from any "Smart Reads" selection; the expense-ratio, labor-cost, cash-flow, forecasting, KPI and P&L red-flag posts are the natural related reads for consulting.

Do not carry over

- Both Tax Services cards, the nav/footer Tax Services links, the "Tax work" link, "certified pros" / "Certified Support" wording, the "Accounting" service label, the stray editor note, all of the P1 JSON-LD copy (jargon, mismatched answers, "guarantee lasting results", "30 to 60 days"), the "For Eyes Solutions" spelling, and the "Unlike other business consulting firms" comparison unless it can be backed up.
