# ForEyes Solutions pricing calculator: reverse-engineered logic

Source page: https://foreyessolutions.com/pricing-calculator (driven live on 2026-11-14).

How this was established:

- **Live page, Playwright/Chromium** (1440x1100, deviceScaleFactor 1): every switch toggled, every slider stepped, every radio option clicked, the estimate read back each time. 235 recorded states in `sweep-results.json` (205 of them priced single-control states, machine-checked against the formula), 17 cross-service combinations in `combo-results.json`.
- **Component source** read from the page's JS chunk `/_next/static/chunks/92d23b6c69622b36.js` (excerpt saved as `calculator-source-excerpt.js`). All prices are hardcoded in that chunk; nothing comes from the CMS (Sanity only supplies the heading and sub-heading) and no pricing API is called.
- The formula below reproduces **every** live observation with zero mismatches.

Everything in sections 1-7 is observed fact. Inferences are labelled as such.

---

## 1. Layout and behaviour

Section `data-testid="calculator-section"`, dark navy background, two columns on desktop:

- **Left, white card:** three service blocks, each a heading plus an on/off switch (all off on load), separated by hairlines. Switching a block on reveals its controls underneath. Below the blocks sits a static "Implementation" box.
- **Right, yellow card (sticky):** "Your Estimate", the figure, "Per Month", a "Get Started" button and a disclaimer. On mobile this card is pinned to the bottom of the viewport.

The estimate recalculates instantly on every change. There is no "calculate" button.

Display rules:

- Figure is `"$" + Math.round(total)` with **no thousands separator** (the page shows `$1199`, `$3734`), followed by "Per Month" on its own line.
- With everything off the page shows `$0` / `Per Month`.
- When any custom-quote condition is true (section 4) the figure **and** the "Per Month" line are replaced by the text "Contact us for a Custom Quote".

---

## 2. Services, options, tiers and prices

### 2.1 Block "Bookeeping" [sic, misspelled on the live site]

Switching the block on adds the base tier immediately (shows $399 before anything is touched).

**a) Slider "Annual Revenue"** - min 1,000, max 12,000,000, step 1,000, default 1,000. End labels "$1k" and "$12M+". Thumb bubble shows `$` + value with thousands separators (e.g. "$1,201,000").

| Annual revenue (inclusive upper bound) | Monthly base |
|---|---|
| up to $400,000 | $399 |
| $401,000 - $1,200,000 | $599 |
| $1,201,000 - $2,000,000 | $799 |
| $2,001,000 - $3,000,000 | $999 |
| $3,001,000 - $5,000,000 | $1,199 |
| $5,001,000 - $7,500,000 | $1,399 |
| $7,501,000 - $10,000,000 | $1,599 |
| above $10,000,000 (i.e. $10,001,000 - $12,000,000) | Custom quote |

Boundaries verified live on both sides of every threshold (e.g. 400,000 -> $399, 401,000 -> $599; 10,000,000 -> $1599, 10,001,000 -> custom quote).

**b) Slider "How many locations?"** - min 1, max 10, step 1, default 1. End labels "1" and "10+".

Adds **$150 per additional location**: `(locations - 1) x 150`.

| Locations | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Add-on | $0 | $150 | $300 | $450 | $600 | $750 | $900 | $1,050 | $1,200 | $1,350 |

Note the end label reads "10+" but 10 is still priced ($1,350); there is no custom-quote trigger on this slider.

**c) Checkbox "Do you have a MSO or real estate holding company?"** - default unchecked. **No price effect** (configured value 0; verified live: $399 checked and unchecked). It is only passed along in the lead summary.

**d) Radio group "How many connected accounts (banks, credit cards etc) do you have/use?"** - default "≤8".

| Option | Add-on |
|---|---|
| ≤8 | $0 |
| 9-14 | $50 |
| 15-20 | $100 |
| 21+ | Custom quote |

### 2.2 Block "Outsourced Accounting"

Switching the block on adds **nothing** by itself ($0). It reveals two sliders, each with its **own small switch** next to the label (both off by default), and one checkbox. A slider is disabled (cannot be moved) until its own switch is on, and it only counts toward the estimate while both the block switch and its own switch are on.

**a) "Payroll"** (label + small switch) - slider min 1, max 50, step 1, default 1. End labels "1" and "50+". The unit is not stated anywhere in the UI.

- 1 to 10: **$149** flat
- 11 to 50: **$149 + $19 for each unit above 10**

| Value | 1-10 | 11 | 15 | 20 | 25 | 30 | 40 | 50 |
|---|---|---|---|---|---|---|---|---|
| Monthly | $149 | $168 | $244 | $339 | $434 | $529 | $719 | $909 |

All 50 positions verified live. The end label reads "50+" but 50 is priced ($909); no custom quote.

**b) "Bill Pay?"** (label + small switch) - slider min 1, max 75, step 1, default 1. End labels "1" and "75+". Unit not stated.

- 1 to 10: **$99** flat
- 11 to 75: **$99 + $6 for each unit above 10**

| Value | 1-10 | 11 | 20 | 30 | 40 | 50 | 60 | 75 |
|---|---|---|---|---|---|---|---|---|
| Monthly | $99 | $105 | $159 | $219 | $279 | $339 | $399 | $489 |

All 75 positions verified live. "75+" is priced ($489); no custom quote.

**c) Checkbox "Sales Tax"** - default unchecked. Adds **$100** flat. Counts whenever the block is on, independent of the two small switches.

### 2.3 Block "Tax" (being dropped in the rebrand; recorded for completeness)

Switching the block on adds a **$125 base** immediately. Nine radio groups follow, **none pre-selected**; an unanswered group adds $0.

| # | Question (verbatim) | Options and add-ons |
|---|---|---|
| 1 | What is your filing status? | Single $0 / Head of Household $0 / Married Filing Jointly $0 / Married Filing Separately $25 |
| 2 | Did you make any Independent Contractor Income (1099)? | Me $25 / Spouse $25 / Both $50 / Neither $0 |
| 3 | How many Rental Properties do you own? | 0 $0 / 1 $40 / 2 $60 / 3 $80 / 4+ custom quote |
| 4 | Do you own your home? | Yes $20 / No $0 |
| 5 | How many Forms K-1 do you expect to receive this year? | 0 $0 / 1 $8 / 2-5 $25 / 6-9 $50 / 10+ **$0** (see quirks) |
| 6 | How many states do you anticipate filing in? | 0 $0 / 1 $0 / 2-5 $30 / 6-9 $50 / 10+ custom quote |
| 7 | What is the tax structure of your entity? | S Corporation $32 / C Corporation $32 / Multi-Member LLC $32 / SMLLC/Sole Proprietor $0 / Other $32 |
| 8 | What was your gross revenue last year? | <500K $0 / 500K-1M $25 / 1M-3M $80 / 3M-10M $180 / 10M+ custom quote |
| 9 | How many shareholders/members/partners are there (including you)? | 1 $0 / 2-5 $25 / 6-9 $60 / 10+ custom quote |

Range if priced: $125 minimum, $672 maximum (all highest non-custom options).

---

## 3. Exact formula for the monthly estimate

```
if any custom-quote condition (section 4) -> "Contact us for a Custom Quote"

estimate = round(
    bookkeeping_on  ? revenueTier(revenue) + (locations - 1) * 150 + accountsAddOn : 0
  + outsourced_on   ? (payroll_switch_on  ? (payroll  <= 10 ? 149 : 149 + (payroll  - 10) * 19) : 0)
                    + (billpay_switch_on  ? (billPay  <= 10 ?  99 :  99 + (billPay  - 10) *  6) : 0)
                    + (salesTax ? 100 : 0)
                    : 0
  + tax_on          ? 125 + sum(add-on of each answered tax question) : 0
)
```

- `revenueTier`: 399 / 599 / 799 / 999 / 1199 / 1399 / 1599 for revenue <= 400k / 1.2M / 2M / 3M / 5M / 7.5M / 10M.
- `accountsAddOn`: 0 / 50 / 100 for ≤8 / 9-14 / 15-20.
- Blocks are purely additive. There is **no bundle discount, no minimum, no cross-service multiplier in effect** (see vestigial multiplier in section 6).
- All values are whole dollars, so rounding never changes anything.
- The $500 implementation fee is **not** part of this number.

A runnable reference implementation that matched the live page on all tested states is at
`/tmp/claude-0/-home-user/9c3d5c24-e0be-5c4e-b814-8362260e483c/scratchpad/tools/pc_model.js`.

---

## 4. Dependency rules and custom-quote rules

**Dependencies between services: none are enforced.** Each of the three blocks can be switched on alone; all eight on/off combinations work. The only gating is inside Outsourced Accounting, where each slider needs its own small switch on.

**Custom quote ("Contact us for a Custom Quote")** is shown when any of these is true:

1. Bookkeeping on and Annual Revenue above $10,000,000
2. Connected accounts = "21+"
3. Rental properties = "4+"
4. States filing in = "10+"
5. Gross revenue last year = "10M+"
6. Shareholders/members/partners = "10+"

One custom-quote condition overrides the whole estimate, including other services (verified: bookkeeping + tax with gross revenue 10M+ shows the custom-quote text, not a partial sum).

### Tooltip

Exactly one tooltip string exists in the calculator, attached to all three block switches:

> Accounting services are required to ensure we’re providing comprehensive assistance.

It is **dead code on the live site**: it is wired to appear only on a *disabled* block switch, and no block switch is ever disabled. Hovering each switch live produced no tooltip. It is evidence of an earlier rule (some service used to require the accounting service) that is no longer enforced. No other tooltips, info icons or help text exist.

---

## 5. One-time fees

**Implementation - $500.** Static box under the three blocks, always visible, same amount regardless of selection. It is not added to the monthly figure and not included in the lead summary. Copy (verbatim):

> Implementation
> $500
> Optimizing your unique financial situation requires time, usually 4 to 6 weeks. This one-time implementation investment allows our team to thoroughly onboard your business, evaluate your financials for accuracy and completeness, and set a strong foundation for future planning and advisory based on reliable information. Additional onboarding and clean-up fees may apply for bookkeeping clients based on your start date.

The "additional onboarding and clean-up fees" are mentioned but never quantified anywhere on the site.

---

## 6. Quirks, bugs and vestigial config found (do not carry over blindly)

Observed on the live page:

- **Heading typo:** "Bookeeping". Lead summary also has "holidng".
- **Stale state when a block is switched off.** Answers persist internally. If "21+" accounts (or tax "4+", "10+", "10M+") was selected and the block is then switched **off**, the page still shows "Contact us for a Custom Quote" (verified live for both Bookkeeping and Tax).
- **Sliders visually reset but keep their old value.** After switching a block off and on again the thumbs jump back to the defaults (1,000 / 1) while the estimate still uses the previous values (verified: thumbs showed $1,000 and 1 location while the estimate stayed at $1549 for 2.5M / 4 locations).
- **K-1 "10+" adds $0** and does not trigger a custom quote, unlike every other top option. Almost certainly an oversight.
- **"10+", "50+", "75+" end labels** on the locations, payroll and bill-pay sliders are priced as exactly 10 / 50 / 75; none triggers a custom quote.
- **Slider units are unlabeled.** "Payroll 1-50+" and "Bill Pay? 1-75+" never say what is being counted.
- **Duplicate HTML ids** on radio inputs (`id` = option value, so "0", "1", "2-5", "10+" repeat across groups).
- The calculator logs the full lead summary to the browser console on every change.

Configured in the source but **not rendered and not applied** (so there is no live evidence these are current prices; treat as abandoned drafts):

- Accounting Basis (Cash / Accrual) x Frequency (Monthly / Quarterly / Annual) multipliers: cash-quarterly 0.8, cash-annual 0.6, accrual-monthly 1.5 (2.0 above $60k revenue), accrual-quarterly 1.2 (1.6), accrual-annual 0.9 (1.2). The state is fixed at cash/monthly, so the multiplier is always 1.
- Payroll frequency: Weekly 300 / Biweekly 200 / Monthly 150. Never added.
- Personal tax return slider 1-10 at $50 per additional return. Never rendered.

---

## 7. All copy shown in the calculator (verbatim)

Page hero above the calculator:

- H1: "Pricing Calculator"
- "See what expert support for your eyecare practice looks like. Our pricing calculator gives you a clear, upfront estimate for our accounting and practice solutions so you can plan confidently."
- "Tailor your selections to your practice’s size, needs, and complexity, and see how partnering with ForEyes Solutions can save you time, reduce stress, and help your practice thrive."
- Button: "Book a Discovery Call"

Calculator section:

- H2: "Start Your Estimate"
- "Get a clear, upfront estimate on what partnering with ForEyes Solutions could cost."
- Block headings: "Bookeeping" / "Outsourced Accounting" / "Tax"
- Bookkeeping: "Annual Revenue" ("$1k" ... "$12M+") / "How many locations?" ("1" ... "10+") / "Do you have a MSO or real estate holding company?" / "How many connected accounts (banks, credit cards etc) do you have/use?" with "≤8", "9-14", "15-20", "21+"
- Outsourced Accounting: "Payroll" ("1" ... "50+") / "Bill Pay?" ("1" ... "75+") / "Sales Tax"
- Tax: the nine questions and options exactly as in the table in 2.3
- Implementation box: as in section 5
- Estimate card: "Your Estimate" / "$0" / "Per Month" / button "Get Started" / "Note that the pricing displayed here is an estimate. We'll provide a formal quote during your Discovery Call."
- Custom-quote state: "Contact us for a Custom Quote"

CTA band below: "See Further. Move Faster. Grow Smarter." / "Unlock the clarity and expert, industry-specific support your eyecare practice needs to accelerate growth and focus on what matters most–your patients." / "Book a Discovery Call"

Page meta: title "Estimate Bookkeeping & Accounting Costs | For Eyes Solutions"; description "Use our pricing calculator to estimate the cost of our bookkeeping services, accounting outsourcing, payroll services, and consulting for optometrists." (The description promises consulting pricing; the calculator has none.)

---

## 8. What happens on "Get Started"

Clicking "Get Started" in the estimate card does **not** navigate. The left card (all the controls) is replaced in place by a lead form; the estimate card stays, with the Get Started button hidden. There is no back button, so the selections can no longer be changed without reloading.

Form (`data-testid="calculator-form"`, `<form name="Pricing Form" method="post" action="">`):

- Heading: "Let’s Talk Eyecare"
- Intro: "Have a question or ready to learn how we can help your practice? Send us a message or book a free discovery call today."
- Fields:

| Label | name | type | required |
|---|---|---|---|
| Name | `name` | text | yes (HTML `required`) |
| Phone Number | `phone` | tel | no |
| Email Address | `email` | email | no |
| Message (optional) | `comments` | textarea | no |
| (hidden) | `pricing_calculator_details` | textarea, display:none | - |

- Button: "Submit"

Submission: JavaScript `fetch` **POST to `/__pricing_form.html`** as multipart form data with the keys `form-name` ("Pricing Form"), `name`, `email`, `phone`, `description` (always empty), `answers`, `pricing_calculator_details` (both hold the same summary text), and `comments` when typed. The site is served by Netlify (`x-nf-request-id` response header) and `/__pricing_form.html` is a static hidden form declaring `name`, `email`, `phone`, `answers`, `pricing_calculator_details`; this is the Netlify Forms pattern, so leads land in Netlify's form inbox/notifications. Where Netlify forwards them (email, CRM) is not visible from the outside.

The summary text sent with the lead (captured live, selections: bookkeeping $900k / 2 locations, payroll 14, sales tax):

```
Quote: $1074
Bookeeping: Yes
Annual Revenue: $900,000
Locations: 2
Do you have MSO or real estate holidng company? No
How many connected accounts (banks, credit cards etc) do you have/use? ≤8
Payroll: 14
Billpay: 0
Sales Tax?: Yes
Tax: No
What is your filing status? -
Did you make any Independent Contractor Income (1099)? -
How many Rental Properties do you own?       -
Do you own your home? -
How many Forms K-1 do you expect to receive this year? -
How many states do you anticipate filing in? -
What is the tax structure of your entity? -
What was your gross revenue last year? -
How many shareholders/members/partners are there (including you)? -
```

The `Quote:` line reads "Contact us for a Custom Quote" in the custom-quote state.

Messages:

- Validation: "Please enter either your phone number or email to proceed."
- After success, in-form line: "Thank you for for submission! We will get in touch with you shortly." [sic], then the form is replaced by "We have received your message and will be in touch soon! You may also book a Discovery Call with one of our experts using the calendar below." followed by an embedded booking calendar iframe: `https://link.foreyesbookkeeping.com/widget/booking/Bs6Chzybusu2eycw8H5p` (plus `https://link.foreyesbookkeeping.com/js/form_embed.js`).

Form bugs observed:

- **Email alone is rejected.** The check that is meant to accept "phone or email" only ever passes when a phone number is present. Verified live: name + email -> the validation message, no request sent; adding a phone number -> the POST fires.
- The summary reports the payroll and bill-pay slider values but not whether their small switches were on, so "Payroll: 14" can be sent for a visitor who never enabled payroll.
- (Inference) `comments` and `description` are not declared in the static Netlify form, so the optional message is likely dropped on Netlify's side.

Not verified: the success state and the booking calendar. No test lead was submitted (the POST was intercepted and aborted locally so nothing reached the firm), and `link.foreyesbookkeeping.com` is not reachable from this environment (blocked by the egress proxy), so the calendar's contents and provider could not be inspected.

---

## 9. Verification table (live page vs. formula)

Each row was set up on a freshly loaded page and the estimate read from the yellow card. "BK" = Bookkeeping, "OA" = Outsourced Accounting.

| # | Inputs | Live estimate | Formula | Match |
|---|---|---|---|---|
| 1 | BK: revenue $350,000, 1 location, ≤8 accounts | $399 | 399 | yes |
| 2 | BK: $900,000, 2 locations, 9-14 accounts | $799 | 599+150+50 | yes |
| 3 | BK: $1,500,000, 3 locations, 15-20 accounts | $1199 | 799+300+100 | yes |
| 4 | BK: $4,200,000, 6 locations, 9-14 accounts, MSO checked | $1999 | 1199+750+50 | yes |
| 5 | BK: $10,000,000, 10 locations, 15-20 accounts | $3049 | 1599+1350+100 | yes |
| 6 | BK: $600,000, 1 loc, ≤8 + OA: payroll 8 | $748 | 599+149 | yes |
| 7 | BK: $600,000, 1 loc, ≤8 + OA: payroll 18, bill pay 40, sales tax | $1279 | 599+301+279+100 | yes |
| 8 | BK: $2,400,000, 2 loc, 9-14 + OA: bill pay 25 | $1388 | 999+150+50+189 | yes |
| 9 | OA only: payroll 35, sales tax | $724 | 624+100 | yes |
| 10 | OA only: payroll 10, bill pay 10 | $248 | 149+99 | yes |
| 11 | Tax only: MFJ, Neither, 1 rental, home Yes, 1 K-1, 1 state, S Corp, 500K-1M, 1 shareholder | $250 | 125+0+0+40+20+8+0+32+25+0 | yes |
| 12 | Tax only: MFS, Both, 3 rentals, home Yes, 6-9 K-1, 6-9 states, Other, 3M-10M, 6-9 shareholders | $672 | 125+25+50+80+20+50+50+32+180+60 | yes |
| 13 | BK: $1,100,000, 1 loc, ≤8 + Tax: Single, S Corp, 1M-3M, 2-5 shareholders | $861 | 599+125+32+80+25 | yes |
| 14 | BK: $3,500,000, 5 loc, 15-20 + OA: payroll 45, bill pay 60, sales tax + Tax: MFJ, Me, 2 rentals, home Yes, 2-5 K-1, 2-5 states, Multi-Member LLC, 3M-10M, 2-5 shareholders | $3734 | 1899+1313+522 | yes |
| 15 | BK: $750,000, 2 loc, 9-14 + OA: payroll 14 + Tax: K-1 "10+" only | $1149 | 599+150+50+225+125+0 | yes |
| 16 | BK: $750,000, 2 loc, 9-14 + Tax: gross revenue "10M+" | Contact us for a Custom Quote | custom | yes |
| 17 | BK: $11,500,000 + OA: sales tax | Contact us for a Custom Quote | custom | yes |

Single-control sweeps (all in `sweep-results.json`): 27 revenue points across every tier boundary, locations 1-10, payroll 1-50, bill pay 1-75, every option of every radio group, both checkboxes, and the switch-off/switch-on persistence cases.

---

## For the new site

New service mix: **Bookkeeping** and **Insurance Billing** (flagships); **Accounts Payable**, **Payroll**, **Practice Consulting** (minor). No Tax.

### Parts of the current calculator that carry over

| New service | Current calculator equivalent | What is known |
|---|---|---|
| **Bookkeeping** | "Bookeeping" block | Complete: revenue tiers $399-$1,599, +$150 per additional location, +$0/$50/$100 for connected accounts, custom quote above $10M revenue or 21+ accounts. MSO/real-estate question is informational only. |
| **Payroll** | "Payroll" slider inside "Outsourced Accounting" | $149/month up to 10, +$19 per unit above 10, up to 50 ($909). Unit unlabeled (see unknowns). |
| **Accounts Payable** | "Bill Pay?" slider inside "Outsourced Accounting" | $99/month up to 10, +$6 per unit above 10, up to 75 ($489). Unit unlabeled (see unknowns). |
| One-time fee | "Implementation" box | $500, shown for every selection. |
| Estimate card | "Your Estimate" / "Per Month" / disclaimer / custom-quote fallback | Reusable as is. |
| Lead capture | "Get Started" -> form with a plain-text summary of the selections | Pattern is reusable; needs a new destination and the email-only bug fixed. |

Suggested corrections when rebuilding (all are fixes to observed defects, not new pricing): spell "Bookkeeping"; label the slider units; reset or ignore a block's answers when it is switched off; keep the slider thumb in sync with its value; accept email-only leads; let visitors go back from the form to the calculator.

### Parts to drop

- The whole **Tax** block ($125 base and all nine questions).
- The dead "Accounting services are required..." tooltip, unless a real dependency is wanted.
- The unused draft config (cash/accrual x frequency multipliers, payroll-frequency amounts, personal-tax-return slider). It was never live.

### Needs a decision from the firm (not something to guess)

- **"Sales Tax" add-on ($100/month).** It sits under Outsourced Accounting, not under Tax. Whether sales-tax filing survives a "no tax services" rebrand is a business decision.
- **Whether the "Outsourced Accounting" grouping still exists.** The new mix lists Accounts Payable and Payroll as separate minor services; today they are two sliders inside one block.
- **Whether the $500 implementation fee applies to every service.** Its copy is written around financial onboarding and "planning and advisory"; nothing says whether an insurance-billing-only or payroll-only client pays it.
- **Whether current prices carry over to the new brand at all.** These are the prices on the old site today; nothing in the crawl says the rebrand keeps them.

### Prices that are unknown (the current calculator does not cover them; none are invented here)

- **Insurance Billing** - the second flagship has **no entry in the calculator and no price anywhere on the crawled site**. Unknown: the pricing basis (percentage of collections, per claim, flat monthly, tiered by volume or providers), any minimum, any setup fee, and what inputs a visitor would need to give. The existing billing and accounts-receivable pages point visitors to the pricing calculator, which cannot price either.
- **Practice Consulting** - not in the calculator and no price on the site (hourly, project or retainer all unknown). The page's meta description claims the calculator estimates consulting; it does not.
- **Payroll unit and overage** - what the 1-50 slider counts (employees is the obvious reading, but it is not stated), and the price above 50.
- **Accounts Payable unit and overage** - what the 1-75 slider counts (bills or payees per month; not stated), and the price above 75.
- **Bookkeeping clean-up / catch-up fees** - "Additional onboarding and clean-up fees may apply" is stated with no amounts.
- **Bookkeeping above $10M revenue, above 10 locations, or with 21+ accounts** - custom quote only.
- **Bundle pricing** - no discount exists today for combining services; whether Bookkeeping + Insurance Billing should be discounted is unknown.

Until the firm supplies figures, the honest options for Insurance Billing and Practice Consulting in a rebuilt calculator are to show them as selectable services that route to "Contact us for a Custom Quote" / a discovery call, or to leave them out of the estimate.

---

## Files

All under `/tmp/claude-0/-home-user/9c3d5c24-e0be-5c4e-b814-8362260e483c/scratchpad/pricing/`:

- `sweep-results.json` - every single-control state and the live estimate
- `combo-results.json` - the 17 combinations above with live vs. formula
- `calculator-source-excerpt.js` - the calculator component as shipped (minified)
- `section-initial.html`, `section-all-open.html`, `section-all-open.txt`, `controls-all-open.json` - DOM captures
- `get-started-form.html`, `pricing_form.html` - the lead form and the static Netlify form definition
- Screenshots (1x): `shot-00-initial.png`, `shot-02-all-open-section.png`, `shot-03-bookkeeping-default.png`, `shot-04-bookkeeping-rev-1201000.png`, `shot-05-bookkeeping-custom-quote.png`, `shot-06-outsourced-payroll-25.png`, `shot-07-outsourced-combo.png`, `shot-08-tax-custom-quote.png`, `shot-09-everything-on-combo14.png`, `shot-10-get-started-form.png`, `shot-11-mobile-bookkeeping.png`

Scripts under `/tmp/claude-0/-home-user/9c3d5c24-e0be-5c4e-b814-8362260e483c/scratchpad/tools/`: `pc_lib.js`, `pc_enumerate.js`, `pc_sweep.js`, `pc_combos.js`, `pc_getstarted.js`, `pc_model.js` (reference formula).

Side finding from the crawl (not acted on): the crawled text of 14 pages contains a stray editorial note, "Optometrists describe what dependable books feel like. Keep the Ryan Corte, OD quote first on this page." It is page content, recorded here as a finding only.
