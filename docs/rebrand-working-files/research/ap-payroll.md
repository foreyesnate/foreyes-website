# Content inventory: Accounts Payable + Payroll service pages

Source: crawl of foreyessolutions.com (current "ForEyes Solutions" site).
Pages covered:

1. `/services/accounting/accounts-payable` (becomes a MINOR service with its own page on the new Books & Billing site)
2. `/services/payroll` (becomes a MINOR service with its own page on the new Books & Billing site)

How this was built: both plain-text crawl files were read in full, then cross-checked against the raw HTML (`__NEXT_DATA__` CMS payload and, on Payroll, the JSON-LD block). The FAQ answers are collapsed accordions, so they are missing from the `.txt` files; they were recovered from the raw HTML and are reproduced verbatim below. All copy is verbatim, including the source's punctuation (the AP page mostly uses straight apostrophes and em dashes; the Payroll page mostly uses curly apostrophes and en dashes). Anything in *italics* or under "Note" is my annotation, not site copy.

Global boilerplate (noted once, ignore elsewhere):

- Header nav: Services (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services, Payroll) / Who We Serve (Optometrists, Multi Location Practices, Startups) / Pricing Calculator / About (Our Team) / Resources (Blog, FAQs). Button: "Get Started". Phone: 844-505-3937. Accounts Payable is NOT in the nav (it is only reachable through the Accounting page).
- Contact drawer: tabs "Book a Call" / "Send a Message"; heading "Let’s Talk Eyecare"; text "Have a question or ready to learn how we can help your practice?"
- Footer: Services list (Bookkeeping, Accounting, Tax Services, Practice Consulting, Billing Services; Payroll is missing from the footer list), Who We Serve, "Get To Know Us" (About, Team), Resources (Pricing Calculator, Blog, FAQs). Contact: "2429 Curbow Dr Murfreesboro, TN 37127", 844-505-3937, hello@foreyessolutions.com, "Hours: Mon-Fri at 8AM-5PM CT". "© 2026 ForEyes Solutions", Privacy Policy, "Powered by" (Wise Digital Partners / Nest).

Both pages use the same 12-block template in the same order (hero, intro, service cards, differentiators, process, testimonials, FAQs, pricing teaser, cross-sell, remote block, blog teaser, closing CTA). Blocks 6, 10, 11 and 12 are shared "General" CMS blocks and are word-for-word identical on both pages.

---

# PAGE 1: Accounts Payable

- **URL:** https://foreyessolutions.com/services/accounting/accounts-payable
- **`<title>`:** `Accounts Payable Services for Optometry Practices ` (trailing space; no brand suffix)
- **Meta description:** Simplify vendor payments with AP services for optometry practices. Improve cash flow visibility and streamline bill management. Book a call.
- **og:title / og:description:** same as title / meta description. og:image: `https://foreyessolutions.com//images/open-graph/default.jpg` (double slash). og:url: `https://foreyessolutions.com//services/accounting/accounts-payable` (double slash).
- **Robots:** index,follow. No canonical tag found in the HTML.
- **JSON-LD:** none on this page (the Payroll page has a full schema block; this one has nothing).

## 1.1 Section structure (in order)

| # | Section heading | What it does |
|---|---|---|
| 1 | H1 "Accounts Payable Services for Optometry Practices" | Hero: headline, one paragraph, CTA "Book a Discovery Call", photo. |
| 2 | "Efficient. Organized. Stress-Free." | Intro / value proposition. CTA "Book a Discovery Call". |
| 3 | "Comprehensive Accounts Payable Services" | What is included: intro paragraph + 4 feature cards with icons. |
| 4 | "Why ForEyes Solutions for Accounts Payable?" | Differentiators: intro + 3 cards with icons. |
| 5 | "Our Accounts Payable Process" | 5 numbered process steps with illustrations. |
| 6 | "Proof in Practice" | Testimonial carousel (4 reviews, shared global block). Contains a stray editorial note. |
| 7 | "Accounts Payable FAQs" | 4 accordion FAQs + "More FAQs" link to /resources/faq. |
| 8 | "Transparent Pricing, Tailored to You" | Pricing teaser, links to /pricing-calculator. |
| 9 | "More Ways We Can Support Your Practice" | Cross-sell: 4 service cards (Bookkeeping, Tax Services, Practice Consulting, Billing Services). |
| 10 | "Remote, Nationwide Assistance" | Shared remote/nationwide block. CTA "Connect With Us". |
| 11 | "Smart Reads for ODs" | Blog teaser (heading + one line; no post cards came through in the crawl). |
| 12 | "See Further. Move Faster. Grow Smarter." | Closing CTA. "Book a Discovery Call". |

## 1.2 Verbatim copy

### Section 1: Hero

**H1:** Accounts Payable Services for Optometry Practices

**Body:** Managing vendor invoices, payment approvals, and due dates can quickly become a time-consuming distraction from patient care. At ForEyes Solutions, we provide specialized accounts payable services for independent optometry practices in Nashville, TN, and nationwide. Through streamlined workflows and Bill.com-powered solutions, we help eyecare professionals stay organized, maintain vendor relationships, and gain better visibility into cash flow—all while reducing administrative burden.

**Button:** Book a Discovery Call

*Image: one photo, same file for mobile and desktop, alt text is the placeholder "mobile-image" / "desktop-image" (`17d8a70389304236fc97e6537cb5ca4309e8ec43-8192x4320.jpg`).*

### Section 2: Intro

**H2:** Efficient. Organized. Stress-Free.

**Body:** ForEyes Solutions delivers accounts payable services specifically designed for optometrists and eyecare practices. By combining industry-specific accounting expertise with proven AP technology, we help practice owners simplify payment management, improve financial visibility, and ensure bills are processed accurately and on time.

*Note: "accounting" in "industry-specific accounting expertise" links to /services/accounting.*

**Button:** Book a Discovery Call

### Section 3: What is included

**H2:** Comprehensive Accounts Payable Services

**Intro:** Our accounts payable services do more than pay bills. We create efficient systems that improve financial control, reduce manual work, and help your practice stay on top of vendor obligations. From invoice management to payment scheduling and approval workflows, we provide the support needed to keep your operations running smoothly.

**Card 1 (H3): Invoice Management & Processing**
We handle invoice collection, organization, and entry through Bill.com, ensuring bills are properly recorded, categorized, and ready for review. This eliminates paperwork bottlenecks and reduces the risk of missed or duplicate payments.

**Card 2 (H3): Payment Scheduling & Vendor Management**
Maintaining strong vendor relationships starts with timely payments. We help coordinate payment schedules, manage vendor records, and ensure invoices are processed according to approved timelines while supporting healthy cash flow management.

**Card 3 (H3): Approval Workflow Management**
Gain full visibility without getting buried in administrative tasks. Our streamlined approval process allows you to review and approve bills efficiently while maintaining complete control over outgoing payments.

**Card 4 (H3): Cash Flow Visibility & Reporting**
Accounts payable directly impacts your practice's financial health. We provide clear reporting and visibility into upcoming obligations, helping you make informed decisions and avoid unexpected cash flow challenges.

### Section 4: Differentiators

**H2:** Why ForEyes Solutions for Accounts Payable?

**Intro:** You didn't become an optometrist to spend your day managing invoices, chasing approvals, or tracking payment due dates. Our team provides specialized accounts payable support that simplifies operations and gives you confidence that your vendor payments are being handled accurately.

**Card 1 (H3): Eyecare Industry Expertise**
We understand the operational and financial needs of optometry practices, from managing optical inventory vendors to coordinating payments for equipment suppliers, laboratories, and service providers.

**Card 2 (H3): Bill.com Certified Support**
As certified Bill.com professionals, we know how to leverage the platform's capabilities to create efficient workflows, improve transparency, and reduce administrative workload.

**Card 3 (H3): Integrated Accounting Support**
Because accounts payable impacts bookkeeping, accounting, and financial reporting, our integrated approach helps ensure cleaner records, more accurate financials, and better business visibility.

*Note: "bookkeeping" links to /services/bookkeeping.*

### Section 5: Process

**H2:** Our Accounts Payable Process

1. **Discovery Call** - We learn about your optometry practice, current AP process, vendor relationships, and operational challenges to identify opportunities for improvement.
2. **Onboarding** - Meet your dedicated specialist, complete a streamlined intake process, and gain access to your secure client portal and Bill.com workflow.
3. **AP Setup & System Configuration** - Our team establishes your accounts payable process, organizes vendor records, configures approval workflows, and ensures your systems are optimized for efficiency.
4. **Ongoing Invoice & Payment Management** - We manage invoice processing, payment scheduling, vendor communication support, and approval workflows while keeping you informed and in control.
5. **Continuous Monitoring & Support** - As your practice grows, we continue refining workflows and providing ongoing support to ensure your accounts payable process remains efficient and scalable.

### Section 6: Testimonials (shared global block)

**H2:** Proof in Practice

**Sub-text (verbatim, includes a stray editorial note):** Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page.

Rendered carousel order: Ryan Corte, Nona Kalfayan, Brandon Luu, Cristine Areola (then the loop repeats). Four pagination dots, labelled 1 to 4. No star ratings, dates, practice names or locations are shown.

**Ryan Corte, OD**
Wade and his team do an outstanding job providing accurate, timely, and reliable bookkeeping services. They’re responsive, detail-oriented, and take the time to explain financials in a way that’s easy to understand. Working with them has given me greater peace of mind and confidence in the financial side of my business. I highly recommend Wade and his team to any business owner looking for a trustworthy and professional bookkeeping partner.

**Nona Kalfayan, OD**
I've been working with Wade and his team at ForEyes Solutions for the past two years, and the experience has been nothing short of excellent. From onboarding to goal setting and ongoing support, they've made a huge impact on my business by taking bookkeeping and organization off my plate so I can focus on growth. They truly understand the industry and provide value whether you're just starting out or already established and looking to improve your systems. What sets them apart is their communication — fast, reliable, and always helpful. You never feel left in the dark and are always supported.
If you're looking for bookkeeping or business consulting, I highly recommend ForEyes Solutions. They're professional, knowledgeable, and genuinely committed to your success. They are absolutely the real deal!

**Brandon Luu, OD**
Wade and his team have been rock solid. It's been about 2 years, and they've done an excellent job keeping my books in order. They are always available if I have any questions. Recently, Wade has really elevated his business beyond just bookkeeping. I am excited to be along for the ride. Extremely satisfied client and would definitely recommend his services to other practice owners.

**Cristine Areola, OD**
For Eyes has been a great resource for my business as a first-time practice owner. I am very thankful for their expertise and their attentiveness to the small financial details. I don't know what I would do without them!

*Note: the CMS payload for this page also carries four more testimonials that are NOT rendered in this section (they belong to the site-wide testimonial pool). Recorded here because they are reusable:*

- **Tri Nguyen, OD** - Wade being an optometrist helps me out tremendously because he knows the industry. Wade has become a great asset and friend. He has kept my books up to date and given suggestions that have saved me a lot of money.
- **Kyle Wilson, OD** - Super happy to have ForEyes doing the nitty gritty on my financials. They do it so much better than I used to and it's taken a ton off my plate.
- **Annie Miller, OD** - As my practice grows, I don't even know what I would do without you guys. Seriously. How do people make financial decisions like this without being up to date on their books constantly?! I know I don't have time for it or to remember how to do it right.
- **Stephen McCollough, OD** - This time last year I was drowning in financials and had a lot of trouble keeping up with everything. And then my third kiddo was born lol. This year has been a cinch. Thanks to you and your team! Looking forward to continued growth with you guys :)

### Section 7: FAQs

**H2:** Accounts Payable FAQs

**Q: What is included in your accounts payable services?**
A: Our AP services include invoice management, bill entry, vendor management, payment scheduling, approval workflows, and ongoing support through Bill.com to keep your payment process organized and efficient.

**Q: Why should optometry practices outsource accounts payable?**
A: Outsourcing AP reduces administrative workload, improves payment accuracy, helps prevent missed deadlines, and gives practice owners more time to focus on patient care and business growth.

**Q: Do I still control which bills get paid?**
A: Absolutely. You maintain full approval authority. Our team manages the process and prepares payments, but you retain visibility and control over payment approvals.

**Q: Do you work with practices outside Tennessee?**
A: Yes. ForEyes Solutions works remotely with optometry and eyecare practices nationwide using secure cloud-based systems and ongoing virtual support.

**Link:** More FAQs (to /resources/faq)

### Section 8: Pricing teaser

**H2:** Transparent Pricing, Tailored to You

**Body:** Not every optometry practice needs the same level of accounts payable and accounting support. That's why we've built a simple, interactive pricing calculator to give you a clear picture of what your services will cost, based on practice size, service level, and add-ons. No hidden fees, no surprise invoices—just custom pricing that matches your workflow.

**Link/button:** Pricing Calculator (to /pricing-calculator)

*No prices, price ranges or plan names appear anywhere on this page.*

### Section 9: Cross-sell

**H2:** More Ways We Can Support Your Practice

- **Bookkeeping** - Full-service bookkeeping with customized financial reporting, timely monthly closes, and organized records that support better decision-making.
- **Tax Services** - Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry. *(TAX CONTENT, do not carry over)*
- **Practice Consulting** - Increase profitability and improve operational performance with expert consulting focused on staffing, workflows, systems, and optical business performance.
- **Billing Services** - Our revenue cycle management and coding audit services help maximize collections, improve cash flow, and ensure your practice receives the revenue it has earned.

*Note: this block's CMS identifier is "Accounting - More Ways We Can Support Your Practice", i.e. it is the Accounting page's block reused. It does not offer Payroll, the closest sibling service.*

### Section 10: Remote block (shared global block)

**H2:** Remote, Nationwide Assistance

**Body:** Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state.
Our remote team keeps both on schedule and answers questions quickly.

**Button:** Connect With Us

*Image: map-style graphic (`629dab9592403fbb5b8964f63965987ca27753d3-1504x839.png`).*

### Section 11: Blog teaser (shared global block)

**H2:** Smart Reads for ODs

**Body:** Our blog helps you simplify your numbers and grow smarter, one post at a time.

*No post cards rendered in the crawled HTML (the block is named "General - Blog (top 3)" in the CMS and is filled client-side). The page payload carries the blog list; the first three are "What Healthy Expense Ratios Look Like in a Profitable Optometry Practice", "How to Forecast Revenue Accurately in an Eye Care Practice and Plan Growth", "How Labor Costs Quietly Drain Profit in Eyecare Practices (and How to Fix It)". The list also includes "Payroll Services for Eyecare Professionals: Key Benefits" (/blog/eyecare-payroll-services) and "Quarterly Taxes for Optometrists Made Easy" (tax content).*

### Section 12: Closing CTA (shared global block)

**H2:** See Further. Move Faster. Grow Smarter.

**Body:** Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients.

**Button:** Book a Discovery Call

## 1.3 Facts & claims (Accounts Payable page)

Tools and partners
- AP runs on **Bill.com** ("Bill.com-powered solutions"; "invoice collection, organization, and entry through Bill.com"; "ongoing support through Bill.com"; client gets access to a "Bill.com workflow"). *Check: the vendor now brands itself "BILL"; confirm the name and logo the firm is allowed to use.*
- **Certification claim:** "Bill.com Certified Support" / "As certified Bill.com professionals". *Needs confirmation that the certification is current and who holds it.*
- The shared remote block also names **Gusto** (payroll) on this AP page.
- No mention of QuickBooks, Xero, Ramp, Melio or any other tool on this page.

Scope of the AP service (what the firm says it does)
- Invoice collection, organization and entry; bills "properly recorded, categorized, and ready for review".
- Payment scheduling; coordinating payment schedules; invoices "processed according to approved timelines".
- Vendor record management; "vendor communication support".
- Approval workflows configured for the client; the client reviews and approves bills.
- Reporting and "visibility into upcoming obligations".
- FAQ list of inclusions: "invoice management, bill entry, vendor management, payment scheduling, approval workflows, and ongoing support through Bill.com".

Control and guarantees
- "You maintain full approval authority. Our team manages the process and prepares payments, but you retain visibility and control over payment approvals."
- "maintaining complete control over outgoing payments".
- Claims of outcome (not guarantees): "reduces the risk of missed or duplicate payments"; "bills are processed accurately and on time"; "helps prevent missed deadlines".
- No formal guarantee, SLA, turnaround time or payment-run frequency is stated.

Audience and geography
- "independent optometry practices in Nashville, TN, and nationwide".
- "works remotely with optometry and eyecare practices nationwide using secure cloud-based systems and ongoing virtual support".
- Vendor types named: "optical inventory vendors", "equipment suppliers, laboratories, and service providers".
- Footer address is Murfreesboro, TN (2429 Curbow Dr, 37127), not Nashville.

People, roles, process
- "your dedicated specialist" (onboarding step).
- "secure client portal" (onboarding step).
- 5-step process: Discovery Call, Onboarding, AP Setup & System Configuration, Ongoing Invoice & Payment Management, Continuous Monitoring & Support.
- "Wade" is named in three of the four testimonials (the founder; surname and title do not appear on this page).
- Testimonial facts: Nona Kalfayan "for the past two years"; Brandon Luu "about 2 years"; Cristine Areola "first-time practice owner". All four reviewers are "OD".

Pricing
- "simple, interactive pricing calculator"; price "based on practice size, service level, and add-ons"; "No hidden fees, no surprise invoices". No figures.

Contact (global)
- Phone 844-505-3937; hello@foreyessolutions.com; Hours "Mon-Fri at 8AM-5PM CT".

## 1.4 Tax content (Accounts Payable page)

Must NOT be carried into the new site:
- Cross-sell card (Section 9): "**Tax Services** - Get tax planning, strategy, and filing for both business and personal returns–handled by certified pros who know optometry." Links to /services/tax-services.
- Global nav and footer both list "Tax Services" (/services/tax-services).
- Page payload (not rendered here) lists the service pages "Tax Services", "Tax Planning" (/services/tax-services/tax-planning) and "Tax Advisory for Optometry Practices" (/services/tax-services/tax-advisory), and the blog post "Quarterly Taxes for Optometrists Made Easy".

Not tax services (safe, with care):
- The AP body copy itself contains no tax language at all. Nothing about 1099 vendor tracking, sales/use tax, or "tax-ready" records appears on this page.

Related rebrand flag (not tax, but same clean-up): "Accounting" is used as a service name here ("industry-specific accounting expertise" linked to /services/accounting, "Integrated Accounting Support", "accounts payable and accounting support"). The new site has no "Accounting" service, so these need rewording toward Bookkeeping.

## 1.5 Problems (Accounts Payable page)

1. **Stray editorial note published as copy:** "Keep the Ryan Corte, OD quote first on this page." sits in the visible testimonial sub-text. It is an instruction to an editor, not copy. Remove.
2. **Testimonial sub-text is off-topic:** "Optometrists describe what dependable books feel like." is about bookkeeping; this is the AP page.
3. **No AP-specific proof:** all four testimonials talk about bookkeeping ("bookkeeping services", "keeping my books in order"); none mentions bills, vendors, Bill.com or accounts payable.
4. **Brand spelling:** Cristine Areola's quote says "For Eyes" (two words); everywhere else it is "ForEyes" / "ForEyes Solutions". (It is a customer quote, so decide whether to leave as written.)
5. **Location inconsistency:** copy says "Nashville, TN, and nationwide"; the footer address is Murfreesboro, TN.
6. **`<title>` issues:** trailing space, no brand suffix, identical to the H1. og:url and og:image contain a double slash. No canonical tag. No JSON-LD at all (Payroll has it).
7. **Placeholder alt text:** images carry alt values such as "mobile-image", "desktop-image", "icon", "image", "Edge Decorator", or empty. Nothing descriptive.
8. **URL / IA:** AP is nested under /services/accounting/ and is absent from the main nav and footer; on the new site it is a top-level minor service.
9. **Cross-sell mismatch:** the block is borrowed from the Accounting page; it sells Tax Services (being dropped) and omits Payroll.
10. **Remote block is two-service copy on a one-service page:** "Bill.com and Gusto ... keeps both on schedule" talks about paychecks and pay runs on the AP page.
11. **Dash inconsistency:** em dashes in the hero and pricing teaser ("cash flow—all", "invoices—just") but en dashes used as dashes in the cross-sell and closing CTA ("returns–handled", "most–your patients"). Straight apostrophes in page copy, curly ones in the Ryan Corte quote and the contact drawer.
12. **Generic / weak passages:** "Efficient. Organized. Stress-Free." (same three-word pattern as Payroll's "Accurate. Compliant. Stress-Free"); "leverage the platform's capabilities to create efficient workflows, improve transparency, and reduce administrative workload"; "ensures your systems are optimized for efficiency"; "remains efficient and scalable"; "keep your operations running smoothly". Heavy repetition of "streamlined", "efficient", "visibility", "workflows".
13. **Duplicated ideas:** approval control is stated four times (card 3, process step 4, FAQ 3, hero); "improve financial visibility" / "better visibility into cash flow" / "Cash Flow Visibility" / "better business visibility" repeat across sections 1 to 4.
14. **Thin on specifics:** no payment-run cadence, no turnaround time, no description of how invoices get to the firm (email forwarding, upload, inbox), no payment methods (ACH, check, card), no mention of how AP syncs to the books. A minor-service page still needs two or three concrete details.
15. **Blog teaser renders empty** in the static HTML (heading and one line, no cards).
16. **Vague role naming:** "your dedicated specialist" here; Payroll step 4 says "Your account manager".

## 1.6 Best lines (Accounts Payable page)

1. "You didn't become an optometrist to spend your day managing invoices, chasing approvals, or tracking payment due dates."
2. "Our accounts payable services do more than pay bills."
3. "Absolutely. You maintain full approval authority. Our team manages the process and prepares payments, but you retain visibility and control over payment approvals."
4. "Maintaining strong vendor relationships starts with timely payments."
5. "This eliminates paperwork bottlenecks and reduces the risk of missed or duplicate payments."
6. "We understand the operational and financial needs of optometry practices, from managing optical inventory vendors to coordinating payments for equipment suppliers, laboratories, and service providers."
7. "We provide clear reporting and visibility into upcoming obligations, helping you make informed decisions and avoid unexpected cash flow challenges."
8. "Gain full visibility without getting buried in administrative tasks."
9. "Payments and paychecks do not wait on geography." (shared block)
10. "No hidden fees, no surprise invoices—just custom pricing that matches your workflow." (shared pattern)

---

# PAGE 2: Payroll

- **URL:** https://foreyessolutions.com/services/payroll
- **`<title>`:** `Payroll Services for Optometry Practices ` (trailing space; no brand suffix). The CMS internal page title is "Payroll Services".
- **Meta description:** Streamline payroll for your optometry practice with accurate, compliant services. Book a discovery call today and focus on patient care, not paperwork.
- **og:title / og:description:** same as title / meta description. og:image: `https://foreyessolutions.com//images/open-graph/default.jpg` (double slash). og:url: `https://foreyessolutions.com//services/payroll` (double slash).
- **Robots:** index,follow. No canonical tag found in the HTML.
- **JSON-LD WebPage name (differs from `<title>`):** Payroll Services for Optometry Practices | ForEyes Solutions
- **JSON-LD WebPage description (differs from meta):** Simplify your eyecare clinic's payroll. Discover Gusto-certified optometry payroll management, automated tax filing, and error-free compliance support designed for private practices.
- **Breadcrumb (schema only):** Home > Services > Payroll

## 2.1 Section structure (in order)

| # | Section heading | What it does |
|---|---|---|
| 1 | H1 "Payroll Services for Optometry Practices" | Hero: headline, one paragraph, CTA "Book a Discovery Call", illustration. |
| 2 | "Accurate. Compliant. Stress-Free" | Intro / value proposition (one long paragraph). CTA "Book a Discovery Call". |
| 3 | "Comprehensive Payroll Management" | What is included: intro + 2 cards, each holding 2 sub-items. The two card headings are wrong (see Problems). No icons. |
| 4 | "Why ForEyes Solutions for Payroll?" | Differentiators: intro + 3 cards with icons. |
| 5 | "Our Payroll Process" | 5 numbered process steps with illustrations. |
| 6 | "Proof in Practice" | Testimonial carousel (same shared block as AP, same stray editorial note). |
| 7 | "Payroll FAQs" | 6 accordion FAQs + "More FAQs" link. |
| 8 | "Transparent Pricing, Tailored to You" | Pricing teaser, links to /pricing-calculator. |
| 9 | "More Ways We Can Support Your Practice" | Cross-sell: 4 cards (Bookkeeping, Accounting, Practice Consulting, Billing Services). |
| 10 | "Remote, Nationwide Assistance" | Shared remote/nationwide block. CTA "Connect With Us". |
| 11 | "Smart Reads for ODs" | Blog teaser (heading + one line). |
| 12 | "See Further. Move Faster. Grow Smarter." | Closing CTA. "Book a Discovery Call". |

## 2.2 Verbatim copy

### Section 1: Hero

**H1:** Payroll Services for Optometry Practices

**Body:** Managing payroll for your eyecare practice doesn’t have to be complicated. At ForEyes Solutions, we provide specialized payroll services for independent optometry practices in Nashville, TN, and nationwide. From employee setup to paycheck distribution and tax filings, we handle the process so you can focus on patient care—not paperwork.

*Note: the words "tax filings" are a hyperlink to /services/tax-services (the Tax Services page). See Tax content.*

**Button:** Book a Discovery Call

*Image: illustration, same file for mobile and desktop (`7a39be8d9e9a6dca2332d5326f4c2e60225820c7-1296x1056.png`), placeholder alt text.*

### Section 2: Intro

**H2:** Accurate. Compliant. Stress-Free

**Body:** ForEyes Solutions delivers specialized payroll services designed specifically for independent eyecare practices. Combining advanced payroll platform expertise with hands-on support from certified specialists, we ensure your employees are paid accurately, on time, and in full compliance with federal and state payroll regulations. From payroll processing and tax withholdings to direct deposit, payroll tax filings, and employee record management, we handle every detail with precision. Our streamlined payroll solutions reduce administrative burden, minimize costly errors, and give you more time to focus on providing exceptional patient care while keeping your practice running smoothly.

**Button:** Book a Discovery Call

### Section 3: What is included

**H2:** Comprehensive Payroll Management

**Intro:** Our payroll services cover every aspect of employee pay, compliance, and reporting, so you can focus on running your practice while we handle the numbers. From staff setup to tax filings, we ensure accuracy, timeliness, and peace of mind.

*As published, this section has two cards whose H3 headings are "Accounts Payable (AP)" and "Payroll". Both are leftovers from the Accounting page template; all four items underneath are payroll items, and their real sub-headings are rendered as plain paragraph text. Verbatim, as published:*

**Card 1, H3 as published: "Accounts Payable (AP)"** *(wrong heading)*

Payroll Setup & Employee Management
Our team ensures your staff is properly set up, including pay schedules, benefits, and employment records. Smooth onboarding, centralized management of employee data, and ongoing updates keep your payroll accurate and stress-free.

Paycheck Processing & Direct Deposits
We run payroll efficiently and accurately using Gusto, a trusted payroll platform. Employees are paid on time, service levels can be flexible to match your preference, and compliance with tax rules is fully maintained.

**Card 2, H3 as published: "Payroll"**

Payroll Tax Filing & Reporting
Payroll tax compliance is handled completely for you. Federal, state, and local payroll taxes are calculated automatically, forms like W-2s and 1099s are filed on time, and year-end reports provide clean, ready-to-use financial data.

Employee Benefits & Deductions Management
We manage employee benefits, deductions, and adjustments, ensuring all contributions, healthcare, and retirement plans are processed correctly. Updates are handled automatically, keeping your practice compliant and your employees satisfied.

*The four intended feature names are therefore: "Payroll Setup & Employee Management", "Paycheck Processing & Direct Deposits", "Payroll Tax Filing & Reporting", "Employee Benefits & Deductions Management".*

### Section 4: Differentiators

**H2:** Why ForEyes Solutions for Payroll?

**Intro:** We know you didn’t become an eyecare professional to chase payroll or troubleshoot software. Our team delivers reliable, platform-certified, and stress-free payroll services that free up your time and ensure your practice runs smoothly.

**Card 1 (H3): Eyecare-Focused**
We understand the unique challenges of optometry practices, from staff scheduling to multi-location payroll.

**Card 2 (H3): Platform-Certified Experts**
Our team is certified in Gusto, ensuring your payroll runs efficiently and accurately.

**Card 3 (H3): Hands-Off Convenience**
Whether you prefer reviewing timecards or complete automation, we make payroll simple and worry-free.

### Section 5: Process

**H2:** Our Payroll Process

1. **Discovery Call** - We learn about your practice, current payroll systems, and goals, then recommend a tailored approach.
2. **Onboarding** - Meet your dedicated specialist, complete an intake form, and get a tour of your secure client portal.
3. **Cleanup** - If needed, we organize past payroll records and employee data to ensure a clean start.
4. **Ongoing Monthly Service** - Your account manager runs payroll, manages employee changes, and handles tax filings each cycle.
5. **Annual Payroll Review** - Wrap up the year with a strategic review to ensure payroll continues to align with your practice’s goals.

### Section 6: Testimonials (shared global block)

Identical to the AP page, word for word: H2 "Proof in Practice"; sub-text "Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page." (same stray editorial note); the same four quotes in the same order (Ryan Corte, OD; Nona Kalfayan, OD; Brandon Luu, OD; Cristine Areola, OD). See Section 6 of Page 1 for the full verbatim quotes. The same four unrendered extras (Tri Nguyen, Kyle Wilson, Annie Miller, Stephen McCollough) are in this page's payload too.

### Section 7: FAQs

**H2:** Payroll FAQs

**Q: What would you need from me to change my payroll over to ForEyes Solutions?**
A: We’ll need basic employee information, past payroll records, and bank account details to get started. Once you provide these, our team will handle the setup, transfers, and platform configuration so the transition is smooth and accurate.

**Q: What would you need from me on an ongoing basis?**
A: You’ll provide updated timecards, employee changes, or approvals if you prefer to review them. Everything else—paycheck processing, tax filings, and reporting—is managed by our team to keep your payroll running smoothly.

**Q: Can’t I handle AP and payroll in-house?**
A: Yes, you can, but it takes time and comes with risk. Outsourcing to ForEyes Solutions ensures accuracy, compliance with tax laws, and frees up your time so you can focus on patient care instead of chasing invoices or troubleshooting payroll software.

**Q: Do you handle payroll tax filings?**
A: Yes. ForEyes Solutions manages payroll tax compliance as part of its payroll services. Federal, state, and local payroll taxes are calculated, required forms are filed on time, and year-end reporting is provided to help keep your practice organized and compliant.

**Q: Can you manage employee benefits and deductions?**
A: Yes. Our payroll services include managing employee benefits, deductions, and payroll adjustments. This helps ensure contributions for items such as healthcare and retirement plans are processed accurately and reflected correctly in payroll records.

**Q: Do you provide virtual payroll services?**
A: Yes. ForEyes Solutions works remotely with optometry practices nationwide. Through secure cloud-based systems and ongoing support, practices can access professional payroll management services regardless of their location.

**Link:** More FAQs (to /resources/faq)

### Section 8: Pricing teaser

**H2:** Transparent Pricing, Tailored to You

**Body:** Not every optometry practice needs the same level of payroll and accounting support. That's why we've built a simple, interactive pricing calculator to give you a clear picture of what your services will cost, based on practice size, service level, and add-ons. No hidden fees, no surprise invoices–just custom pricing that matches your workflow.

**Link/button:** Pricing Calculator (to /pricing-calculator)

*No prices, price ranges or plan names appear anywhere on this page.*

### Section 9: Cross-sell

**H2:** More Ways We Can Support Your Practice

- **Bookkeeping** - Full-service bookkeeping with customized financial reporting, timely monthly closes, and organized records that support better decision-making.
- **Accounting** - Comprehensive accounting services including payroll, accounts payable, financial reporting, and ongoing support that keeps your practice operating efficiently.
- **Practice Consulting** - Increase profitability and improve operational performance with expert consulting focused on staffing, workflows, systems, and optical business performance.
- **Billing Services** - Our revenue cycle management and coding audit services help maximize collections, improve cash flow, and ensure your practice receives the revenue it has earned.

### Sections 10 to 12 (shared global blocks, identical to the AP page)

- **Remote, Nationwide Assistance** - "Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state." / "Our remote team keeps both on schedule and answers questions quickly." Button: Connect With Us.
- **Smart Reads for ODs** - "Our blog helps you simplify your numbers and grow smarter, one post at a time." (no cards rendered).
- **See Further. Move Faster. Grow Smarter.** - "Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients." Button: Book a Discovery Call.

## 2.3 Hidden schema copy (JSON-LD) that differs from the visible page

The Payroll page ships a JSON-LD graph (Service, HowTo, FAQPage, WebSite, WebPage, BreadcrumbList) whose wording does not match the visible copy. It reads as machine-written and is much more jargon-heavy. Reproduced verbatim because search engines see it; I would not reuse any of it.

**Service**
- name: Payroll Services for Optometry Practices
- serviceType: Specialized Eyecare Payroll and Compliance Management
- description: Comprehensive, platform-certified payroll administration solutions built specifically for independent optometry practices in Nashville, TN, and nationwide. Powered by Gusto-certified specialists handling employee onboarding, direct deposits, automated federal/state/local tax filings, W-2/1099 generation, and employee benefits deductions management.
- provider: ForEyes Solutions (ProfessionalService), https://foreyessolutions.com
- areaServed: United States; Nashville
- audience: Optometrists, Eye Care Practice Owners, Multi-Location Eyecare Groups, Eyecare Startups
- knowsAbout: Optometry Staff Payroll Management; Gusto Certified Payroll Workflows; Payroll Tax Compliance for Eye Clinics; Medical Practice Employee Benefits Deductions; Multi-Location Practice Payroll Consolidation
- image.url is set to the page URL itself (`https://foreyessolutions.com/services/payroll`), which is not an image.

**Offer catalog "Optometry Payroll Core Deliverables"**
- Payroll Setup & Employee Management - Structured setup of clinic staff profiles including custom pay schedules, benefit tier linkings, and ongoing employment record updates.
- Paycheck Processing & Direct Deposits - Accurate, timely wage distribution processing executed via Gusto, tailored dynamically to your preferred level of administrative control.
- Payroll Tax Filing & Reporting - Automated calculation and payment of federal, state, and local employer taxes coupled with punctual year-end W-2 and 1099 reporting.
- Employee Benefits & Deductions Management - Accurate calculation and processing of staff benefits adjustments, health plans, and medical clinic retirement matching structures.

**HowTo "Our Specialized Payroll Process"**
- description: Our systematic process removes the technical friction of migrating your staff data and compliance histories into an accurate, fully managed payroll routine.
- 1 Discovery Call - We audit your active clinical setup, review current software bottlenecks, and structure a custom, automated platform approach.
- 2 Onboarding - Connect with your assigned deployment manager, complete our intake documentation checklist, and secure your encrypted workspace panel portal links.
- 3 Cleanup - Our technical team reviews and organizes legacy worker history accounts, aligning employee data and legacy tax entries for a clean launch.
- 4 Ongoing Monthly Service - Your dedicated manager processes payroll, monitors changes in employee data points, handles dynamic hour adjustments, and files compliance taxes every cycle.
- 5 Annual Payroll Review - We close out the operational year with a comprehensive verification sweep, keeping your team structures fully optimized for your upcoming growth targets.

**FAQPage (same six questions, different answers from the visible page)**
- What would you need from me to change my payroll over to ForEyes Solutions? - We handle the entire structural transition. Our team collects your baseline clinic entity parameters, historical employee records, active compensation rates, and year-to-date filing figures to integrate everything into our secure platform.
- What would you need from me on an ongoing basis? - Very little. Depending on your choice of service model automation, you can choose to quickly audit timecard submissions each pay window or transition to fully hands-off payroll automation managed by our team.
- Can't I handle AP and payroll in-house? - While possible, internal processing burns through massive operational hours and elevates compliance error risks. Shifting management to platform-certified specialists secures compliance and allows you to prioritize clinical patient workflows.
- Do you handle payroll tax filings? - Yes. Every component of federal, state, and localized regional payroll tax reporting, automatic calculations, and recurring standard form allocations is completely executed by our team.
- Can you manage employee benefits and deductions? - Yes. We track and calculate ongoing payroll additions and deductions, securing accurate processing paths across your healthcare configurations and retirement account plans.
- Do you provide virtual payroll services? - Yes. Operating as a modern, nationwide remote advisory firm, we combine high-security cloud software networks to deploy seamless payroll results to independent eyecare clinics across all regions.

## 2.4 Facts & claims (Payroll page)

Tools and partners
- Payroll runs on **Gusto** ("We run payroll efficiently and accurately using Gusto, a trusted payroll platform").
- **Certification claim:** "Our team is certified in Gusto"; "Platform-Certified Experts"; "platform-certified"; "certified specialists". Schema says "Gusto-certified specialists". *Needs confirmation of the exact Gusto credential and who holds it.*
- The shared remote block also names **Bill.com** (AP) on this Payroll page.
- No other payroll platform (ADP, Paychex, QuickBooks Payroll) is mentioned; no time-clock or scheduling tool is named.

Scope of the payroll service
- Employee setup: "pay schedules, benefits, and employment records"; "centralized management of employee data, and ongoing updates".
- Payroll processing, tax withholdings, direct deposit, payroll tax filings, employee record management.
- "Federal, state, and local payroll taxes are calculated automatically, forms like W-2s and 1099s are filed on time, and year-end reports provide clean, ready-to-use financial data."
- Benefits and deductions: "all contributions, healthcare, and retirement plans are processed correctly".
- "in full compliance with federal and state payroll regulations" (intro says federal and state; the feature card and FAQ say federal, state, and local).
- Multi-location payroll is claimed as understood ("from staff scheduling to multi-location payroll").
- Two service levels implied: client reviews timecards / approves, or "complete automation" ("service levels can be flexible to match your preference"; "Whether you prefer reviewing timecards or complete automation").

What the client provides
- To switch: "basic employee information, past payroll records, and bank account details".
- Ongoing: "updated timecards, employee changes, or approvals if you prefer to review them".

Outcome claims (not formal guarantees)
- "we ensure your employees are paid accurately, on time, and in full compliance"; "Employees are paid on time"; "forms ... are filed on time"; "Payroll tax compliance is handled completely for you"; "compliance with tax rules is fully maintained"; "Outsourcing to ForEyes Solutions ensures accuracy, compliance with tax laws". These are strong absolute statements with no stated guarantee or remedy behind them.
- No pay-frequency options, cut-off times, turnaround, or error policy are stated.

Process, people, cadence
- 5 steps: Discovery Call, Onboarding, Cleanup ("If needed"), Ongoing Monthly Service, Annual Payroll Review.
- "your dedicated specialist" (step 2) and "Your account manager" (step 4).
- "secure client portal" with "a tour" during onboarding; "an intake form".
- "handles tax filings each cycle"; year-end "strategic review".

Audience and geography
- "independent optometry practices in Nashville, TN, and nationwide"; "works remotely with optometry practices nationwide"; "regardless of their location".
- Schema audience: "Optometrists, Eye Care Practice Owners, Multi-Location Eyecare Groups, Eyecare Startups".
- Footer address is Murfreesboro, TN.

Pricing
- Same calculator teaser as AP: price "based on practice size, service level, and add-ons"; "No hidden fees, no surprise invoices". No figures.

Testimonials
- Same four as AP (Ryan Corte, OD; Nona Kalfayan, OD; Brandon Luu, OD; Cristine Areola, OD); "Wade" named as the founder.

## 2.5 Tax content (Payroll page)

Must NOT be carried into the new site (sells or points to the Tax Services line):
- **Hero link:** in "From employee setup to paycheck distribution and tax filings", the words "tax filings" link to /services/tax-services. The sentence is about payroll tax filings, but the link sends readers to the tax-preparation service. Drop the link; reword to "payroll tax filings".
- Global nav and footer both list "Tax Services".
- Page payload (not rendered here) lists the "Tax Services", "Tax Planning" and "Tax Advisory for Optometry Practices" service pages and the blog post "Quarterly Taxes for Optometrists Made Easy".
- (The Payroll cross-sell does NOT include a Tax Services card, unlike the AP page.)

Payroll tax handling, which is a payroll function and NOT a tax-preparation service. It can stay, but every instance should say "payroll tax" explicitly so nobody reads it as the firm doing tax returns:
- Hero: "tax filings" (unqualified).
- Intro: "tax withholdings"; "payroll tax filings"; "in full compliance with federal and state payroll regulations".
- Section 3 intro: "From staff setup to tax filings" (unqualified).
- Card item: "compliance with tax rules is fully maintained" (unqualified, and an absolute claim).
- Card item: "Payroll Tax Filing & Reporting ... Payroll tax compliance is handled completely for you. Federal, state, and local payroll taxes are calculated automatically, forms like W-2s and 1099s are filed on time, and year-end reports provide clean, ready-to-use financial data."
- Process step 4: "handles tax filings each cycle" (unqualified).
- FAQ 2: "paycheck processing, tax filings, and reporting" (unqualified).
- FAQ 3: "compliance with tax laws" (unqualified).
- FAQ 4: "Do you handle payroll tax filings?" and its answer.
- Schema: "automated federal/state/local tax filings, W-2/1099 generation"; "Payroll Tax Compliance for Eye Clinics"; "files compliance taxes every cycle"; "automated tax filing".

Borderline, needs an owner decision:
- "forms like W-2s and 1099s are filed on time": W-2s are plainly payroll. 1099s are contractor information returns; confirm the rebranded firm still files them (through Gusto) before repeating the claim.
- "year-end reports provide clean, ready-to-use financial data" is a bookkeeping-style benefit, not a tax service. Safe. The phrase "tax-ready" does not appear on either page.

## 2.6 Problems (Payroll page)

1. **Wrong card headings (the most visible error):** Section 3's two H3s read "Accounts Payable (AP)" and "Payroll", copied from the Accounting page. The "Accounts Payable (AP)" card contains only payroll content. The four real sub-headings are rendered as body text, and the cards have no icons.
2. **Stray editorial note published as copy:** "Keep the Ryan Corte, OD quote first on this page." in the testimonial sub-text. Remove.
3. **Testimonial sub-text and quotes are off-topic:** "what dependable books feel like" and four bookkeeping reviews; no payroll-specific proof.
4. **AP leftovers on the Payroll page:** FAQ "Can’t I handle AP and payroll in-house?" and its answer ("chasing invoices") come from the combined Accounting page; the remote block talks about Bill.com approvals.
5. **Misleading link:** "tax filings" in the hero links to Tax Services (see Tax content).
6. **Hidden schema contradicts the visible copy:** JSON-LD FAQ answers and process steps are entirely different text, in a jargon-heavy register ("encrypted workspace panel portal links", "baseline clinic entity parameters", "medical clinic retirement matching structures", "localized regional payroll tax reporting"). It also claims "retirement matching" and "error-free compliance", which the visible page does not. Schema image URL is the page URL.
7. **Cadence wording:** step 4 is titled "Ongoing Monthly Service" but its text says "each cycle"; payroll normally runs more often than monthly.
8. **Role naming inconsistent:** "dedicated specialist" (step 2), "account manager" (step 4), "certified specialists" (intro); schema adds "assigned deployment manager" and "dedicated manager".
9. **Scope inconsistency:** intro says "federal and state payroll regulations"; card and FAQ say "Federal, state, and local".
10. **Absolute compliance claims:** "handled completely for you", "fully maintained", "ensures accuracy, compliance with tax laws", "every detail with precision". Risky wording for a firm that is stepping away from tax work; soften.
11. **Punctuation:** H2 "Accurate. Compliant. Stress-Free" has no final period (AP's "Efficient. Organized. Stress-Free." does). Mixed dashes: em dash in the hero and FAQ 2 ("care—not paperwork", "else—paycheck"), en dash in the pricing teaser and closing CTA ("invoices–just", "most–your patients"). Curly apostrophes in most body copy but straight ones in the pricing teaser and three of the testimonials. An empty paragraph sits at the end of card 1 and empty heading fragments sit in two FAQ items (CMS debris).
12. **Brand spelling:** "For Eyes" in the Cristine Areola quote vs "ForEyes" elsewhere.
13. **Location inconsistency:** "Nashville, TN" in copy and schema; Murfreesboro, TN in the footer.
14. **`<title>` issues:** trailing space, no brand suffix (the schema WebPage name has "| ForEyes Solutions"); CMS title "Payroll Services" differs from the `<title>`; meta description differs from the schema description; og:url and og:image have a double slash; no canonical tag.
15. **"Accounting" as a service:** the pricing teaser says "payroll and accounting support" and the cross-sell has an "Accounting" card ("Comprehensive accounting services including payroll, accounts payable ...") that describes this very page's service as part of something else. Neither fits the new five-service line-up.
16. **Footer omits Payroll** although the header nav lists it.
17. **Weak or generic passages:** the Section 2 paragraph is one 90-word block of stock phrases ("advanced payroll platform expertise", "streamlined payroll solutions", "handle every detail with precision", "exceptional patient care while keeping your practice running smoothly"); "Gusto, a trusted payroll platform"; "service levels can be flexible to match your preference" (awkward); "Updates are handled automatically" (unclear what updates); "keeping your practice compliant and your employees satisfied"; the three differentiator cards are one sentence each and say little. "Stress-free" appears three times in the page's own copy; "worry-free" once.
18. **Placeholder alt text** on every image ("mobile-image", "desktop-image", "icon", "image", empty).
19. **Blog teaser renders empty** in the static HTML.
20. **Duplicate boilerplate across the two pages:** hero sentence pattern ("At ForEyes Solutions, we provide specialized ___ services for independent optometry practices in Nashville, TN, and nationwide"), differentiator opener ("You didn't become an optometrist to ..." / "We know you didn’t become an eyecare professional to ..."), pricing teaser (identical except one word), cross-sell descriptions, and sections 6, 10, 11, 12 are the same on both.

## 2.7 Best lines (Payroll page)

1. "We know you didn’t become an eyecare professional to chase payroll or troubleshoot software."
2. "Managing payroll for your eyecare practice doesn’t have to be complicated."
3. "From employee setup to paycheck distribution and tax filings, we handle the process so you can focus on patient care—not paperwork." (say "payroll tax filings" and drop the link)
4. "Whether you prefer reviewing timecards or complete automation, we make payroll simple and worry-free."
5. "You’ll provide updated timecards, employee changes, or approvals if you prefer to review them. Everything else—paycheck processing, tax filings, and reporting—is managed by our team to keep your payroll running smoothly." (say "payroll tax filings")
6. "We’ll need basic employee information, past payroll records, and bank account details to get started. Once you provide these, our team will handle the setup, transfers, and platform configuration so the transition is smooth and accurate."
7. "If needed, we organize past payroll records and employee data to ensure a clean start."
8. "Yes, you can, but it takes time and comes with risk." (the honest opening of the in-house FAQ)
9. "We understand the unique challenges of optometry practices, from staff scheduling to multi-location payroll."
10. "Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state." (shared block; the one line on either page that covers both minor services well)

---

# Reuse notes for the new Books & Billing site

**New Accounts Payable page (minor service)**
- Hero: reuse the H1 idea and the first hero sentence ("Managing vendor invoices, payment approvals, and due dates can quickly become a time-consuming distraction from patient care."). Cut "in Nashville, TN" or reconcile with the Murfreesboro address.
- What is included: the four feature cards (Invoice Management & Processing; Payment Scheduling & Vendor Management; Approval Workflow Management; Cash Flow Visibility & Reporting) are clean and can be reused nearly as is. A minor page could show them as a short list rather than four full cards.
- Lead differentiator: "You maintain full approval authority" (FAQ 3) is the strongest reassurance on the page and belongs near the top, not hidden in an accordion.
- Eyecare specificity: keep the vendor list ("optical inventory vendors ... equipment suppliers, laboratories, and service providers"). It is the only eyecare-specific sentence on the page.
- Process: the five steps can shrink to three (set up Bill.com and approvals; we process and schedule; you approve). Steps 1 and 2 duplicate the firm-wide onboarding and belong on a shared "how it works" block.
- FAQs: all four answers are short and reusable; "Do you work with practices outside Tennessee?" belongs in the site-wide FAQ rather than on this page.
- Rename "Integrated Accounting Support" to tie AP to the Bookkeeping flagship ("Because accounts payable impacts bookkeeping ... cleaner records, more accurate financials").
- Confirm before publishing: Bill.com certification, and whether to write "Bill.com" or "BILL".

**New Payroll page (minor service)**
- Hero: reuse "Managing payroll for your eyecare practice doesn’t have to be complicated." and the differentiator opener ("... chase payroll or troubleshoot software").
- What is included: rebuild as four correctly labelled items: Payroll Setup & Employee Management; Paycheck Processing & Direct Deposits; Payroll Tax Filing & Reporting; Employee Benefits & Deductions Management. Body text for each is reusable after softening the absolutes.
- Two ways to work: "reviewing timecards or complete automation" is a real choice the page only hints at; make it explicit.
- Switching: the two "What would you need from me ..." FAQ answers are the most practical copy on the page; use them as a "what we need from you" block.
- Process: keep "Cleanup" (if needed) and the year-end review; rename "Ongoing Monthly Service" to match the actual pay cadence.
- Tax wording: always "payroll tax filings", never bare "tax filings"; no link to any tax page; confirm the 1099 claim; drop "compliance with tax laws" style guarantees.
- Confirm before publishing: Gusto certification wording.
- Ignore the JSON-LD copy entirely; write fresh schema from the new visible copy.

**Shared / other new pages**
- Home and Services hub (minor-service cards): the cross-sell one-liners are a starting point, but neither page has a ready one-line description of AP or Payroll on their own (the only one is the "Accounting" card that bundles both). Draft from: AP "do more than pay bills ... stay on top of vendor obligations"; Payroll "employees are paid accurately, on time".
- Bookkeeping flagship page: "Full-service bookkeeping with customized financial reporting, timely monthly closes, and organized records that support better decision-making."
- Insurance Billing flagship page: "Our revenue cycle management and coding audit services help maximize collections, improve cash flow, and ensure your practice receives the revenue it has earned."
- Practice Consulting minor page: "Increase profitability and improve operational performance with expert consulting focused on staffing, workflows, systems, and optical business performance."
- Remote / nationwide block (About, Contact or footer band): "Payments and paychecks do not wait on geography. Bill.com and Gusto run in the cloud, so your approvals and pay runs work the same from any state." This works best on a page that covers both minor services, not on each one separately.
- Pricing page: "No hidden fees, no surprise invoices" and "based on practice size, service level, and add-ons". Replace "accounting support" with the new service names.
- Testimonials: none of the eight available quotes mentions AP or payroll. Use them on Bookkeeping and Home; for these two minor pages either go without a testimonial block or request new quotes. Kyle Wilson's "taken a ton off my plate" and Stephen McCollough's "drowning in financials ... This year has been a cinch" are the most general and would fit a minor page if one is needed. Do not publish the "Keep the Ryan Corte, OD quote first on this page." note.
- Site-wide FAQ: "Do you work with practices outside Tennessee?" and "Do you provide virtual payroll services?" are the same answer; merge into one remote-work FAQ.
- Drop entirely: the Tax Services cross-sell card, every Tax Services nav/footer link, the hero link from Payroll to /services/tax-services, "Accounting" as a named service, and the blog post "Quarterly Taxes for Optometrists Made Easy" from any related-reading list.
- Redirects to plan: /services/accounting/accounts-payable and /services/payroll both need to map to the new minor-service URLs.
