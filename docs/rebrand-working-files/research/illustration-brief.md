# ForEyes Books & Billing: illustration style brief

## Basis of this brief

gusto.com was observed directly on 2026-11-14 with headless Chromium at 1440px wide, deviceScaleFactor 1. Pages captured: `/`, `/product/payroll`, `/product/benefits`, `/about`, `/resources`, `/partners/accountants`. Viewport tiles, contact sheets and detail crops are in `/tmp/claude-0/-home-user/9c3d5c24-e0be-5c4e-b814-8362260e483c/scratchpad/refs/gusto/` (tiles `home-00.png` ..., `sheets/*.png`, `crops/*.png`, plus `*-probe.json` with computed fonts, radii and background colours).

Limits of the observation:

- One pass per page at 1x. A second pass for 2x detail crops was met by a Cloudflare bot check and was not pursued, so the close-ups in `crops/` are upscaled from the 1x tiles. Line weight and grain are described from those.
- Stills only. Motion notes are inferred from page structure (one `<video>` on payroll and on benefits, animated GIFs of product UI on the accountants page, horizontally scrolling card rows, no Lottie or canvas), not from watching the animations play.
- Hover, mobile and dark states were not checked.

One finding the client should hear early: Gusto's site today is not primarily an illustrated site. After their recent brand refresh (the home page links to a "New brand. Same heart." article), the pages are led by large serif type, documentary photography of real small businesses and simplified product-UI cards. Illustration is a supporting layer: small spot icons, a handful of figure scenes, and tiny inline doodles in headlines. "Similar to gusto.com" is therefore best read as "warm type + photos + UI + a consistent hand-inked illustration accent", not wall-to-wall illustration. That happens to match the client's own request for photoreal scenes alongside illustration.

---

## (a) What Gusto's illustration and page style consists of

### Illustration, three tiers

1. **Spot icons** (about 56 to 72px on screen, in feature cards and "why us" rows). Single objects: winged coin, bank building, stack of bills with coins, banknote, clock, house, shield with cross, handshake, magnifier over a coin, binoculars, headset, clipboard, piggy-style symbols.
   - Outline: near-black, roughly 1.5 to 2px at display size, visibly hand-inked. Slight wobble, slightly uneven joins, rounded ends. Not a geometric vector icon set.
   - Fill: 2 to 3 flat colours plus white per icon (for example orange + yellow, mint + white, red + orchid). Fills are deliberately a little off-register from the line, like a two-colour print.
   - Depth: a shallow three-quarter view gives each object a visible side or thickness, so it reads as a small solid thing rather than a flat glyph.
   - Grounding: a small soft blue ellipse smudge under the object. No cast shadow, no gradient inside the object.

2. **Figure scenes** (the marching band beside the stats block on the home page; the tradesperson with ladder on payroll; the team around a table on resources).
   - Line: the same near-black ink line, a little heavier on outer contours than inner detail, with short crease strokes on sleeves and trousers.
   - People: natural adult proportions, roughly 6.5 to 7.5 heads tall, slightly small heads, long legs, generous shoes. Often in profile or three-quarter, mid-stride or mid-task. Faces are minimal: dot or short-dash eyes, one-line nose, small mouth, a round pink cheek blush. Expressions are calm and pleased, never ecstatic.
   - Hands: simplified but fully articulated, all fingers drawn, actually gripping the object. No mitten hands.
   - Diversity is designed in rather than tokenised: varied skin tones, ages, hair, a headwrap, a wheelchair user, a prosthetic arm, all drawn with the same matter-of-fact line.
   - Clothing is specific and contemporary (beanie, cargo trousers, striped overshirt, hoodie, skate shoes), which is most of what makes the figures feel like real people.
   - Colour: 5 to 7 flat fills per scene, pulled from the brand set (teal, denim blue, coral red, orchid, cream, mustard) plus skin tones. No gradients on the figures.
   - Texture: a fine stipple or risograph-style grain inside the fills and a slightly dry edge to the ink. It is subtle; it reads as "printed", not "distressed".
   - Flatness: no modelling, no light source, no cast shadows. Depth comes only from overlap.
   - Background: either nothing at all (figures stand on the page's off-white, cropped at the knee by the section edge) or one flat pastel panel (orchid, mint) with a barely visible tonal wave in it. No scenery, no floor line.

3. **Hand-and-object metaphors and inline doodles.** A large hand placing a puzzle piece into a shield made of pastel puzzle pieces (benefits). Tiny illustrated objects set inline with headline text, at cap height: a banknote, a flower, a compass, a speech bubble, a coin stack. These are the same ink-and-flat-fill language at emoji scale.

### Colour system

- Page: warm off-white `rgb(253,253,251)`, with `rgb(250,248,247)` alternate bands. Text is a warm near-black `rgb(28,27,26)`, secondary text a warm grey.
- Anchor colour: deep teal `rgb(0,83,92)` for primary buttons, darker `rgb(3,57,61)` for full-width closing bands and testimonial cards.
- Brand heat: coral red logo, and a red-to-pink-to-orchid textured gradient with soft wave shapes, used as the hero field and as a slab behind laptop and UI mockups.
- Pastel support blocks: mint `rgb(198,240,229)`, orchid `rgb(236,164,247)`, periwinkle `rgb(151,163,255)`, salmon pink, pale lilac `rgb(251,224,255)`, pale mint `rgb(233,247,243)`.
- Any single illustration uses a small subset. The page as a whole is multicolour; each picture is disciplined.

### How illustrations sit in the layout

- Spot icon top-left in an outlined card (hairline border, 14px radius, arrow top-right), title and two lines of copy below. Cards run in horizontally scrolling rows that bleed off both edges.
- Spot icon centred on a flat pastel tile (4 across) as the picture half of a link card, on the dark teal closing band.
- Figure scene as a square-ish rounded panel occupying one column, paired with a stats list in the other column.
- Figure scene with no panel directly under a centred headline (resources hero).
- Inline doodles inside headlines. One per headline at most.
- Illustration never competes with a photo in the same block. Each section picks one mode.

### How photography and UI mockups are mixed in

- **Documentary photos** of real owners in real workplaces (workshop, plant nursery, cafe, bike shop). Warm, natural light, slightly desaturated, people mid-task or smiling at camera.
- Full-bleed photo sections with a dark gradient rising from the bottom, white serif headline over it, and a small white info card floating top-right.
- Small photo tiles (8px radius, mixed portrait and landscape) scattered loosely around a very large headline.
- Cut-out people or a hand holding a phone, placed over an angular or blobby gradient shape so the subject breaks the shape's edge.
- **UI**: not raw screenshots. Simplified, redrawn product cards (white, 14 to 16px radius, soft shadow) floating over the gradient field, overlapping the edge of the hero so they bridge into the next section. Laptop mockups sit on a tilted coral slab. Small UI cards are also overlaid on the corner of a photo.
- Reading order of trust: headline, then photo of a real person, then product UI as proof, then illustration as the friendly connective tissue.

### Corner radii, type, buttons

- Radii: 14px on cards and panels, 8px on buttons and photos, 12 to 16px on media, 24px where a whole section rounds into the next, 999px on small eyebrow pills (some with a thin gradient hairline border).
- Type: a soft, slightly condensed serif display face (computed family "Boogy Brut", weight 500) set very large and tight (110 to 120px on the home page, about -2.5% tracking, line height near 1.0); body and UI in a geometric-humanist sans ("Matter", 16/24). Section numbering like "— 01" in small sans. One all-caps gradient sans line ("DO WHAT YOU DO BEST.") as a one-off.
- Buttons: deep teal, 8px radius, medium-weight sans, with a thin multicolour hairline along the bottom edge. Secondary buttons are white or outlined. Text links are underlined with an arrow.

### Motion (inferred, see limits above)

- Hero UI cards appear to drift or stagger in; card rows auto-scroll horizontally; scattered photo tiles appear to move on scroll.
- Product UI is shown as short looping GIFs on the accountants page.
- The payroll and benefits pages each contain one video element; the ladder illustration frame is slightly soft in the capture, consistent with it being a short looping animation rather than a still.
- Nothing suggests bouncy or elastic character animation. Movement is slow and small.

---

## (b) Why it reads as warm and trustworthy rather than childish

- **Adult proportions and adult clothes.** No big heads, no bean bodies, no noodle limbs. The figures could be traced from life.
- **Restraint in faces.** Tiny features and calm expressions. Nobody is grinning at the viewer or throwing confetti.
- **The hand is visible.** Wobbly ink, off-register fills and print grain signal that a person drew it. That is where the warmth comes from, not from cuteness.
- **Competent hands doing real tasks.** People hold instruments, tools and paper correctly. The pictures are about work.
- **A limited palette per image** on a quiet off-white page. The site is colourful in total but each picture is calm.
- **Illustration is rationed.** Because photos of real customers and real product UI carry the proof, illustration only has to set tone. It never has to convince anyone on its own.
- **Serious typography.** A large serif and plain sans body make the page feel editorial; the doodles are a wink inside a grown-up frame.
- **Dark teal as the grounding colour.** Money actions and closing sections are always on the most sober colour in the set.
- **Specificity over metaphor.** A real ladder, a real guitar, a named form. The few metaphors (puzzle shield) are simple and literal.

---

## (c) Translation into an original ForEyes style

### What we take and what we leave

Take: one hand-inked line used everywhere, flat fills with slight misregistration, fine print grain, adult proportions, calm faces, competent hands, one quiet background, rationed use, illustration and photo never fighting in one block.

Leave: Gusto's characters, their pink cheek blush and profile-heavy posing, the blue ground smudge, the coral/orchid/mint palette, the wavy gradient fields, the serif display type, the money icon set as drawn.

What makes ForEyes its own:

- **Line colour is Dark Navy `#110F2B`**, never black. This alone shifts the whole family away from Gusto.
- **Geometric shape language** that follows the Parkinsans wordmark: circles, lens shapes, rounded rectangles, arcs. Objects are built from those and then inked by hand, so they are tidy but not mechanical.
- **The focus rule.** Yellow `#FCBA02` appears once per image, on the one thing the viewer should look at (the paid claim, the reconciled total, the number that matters). Everything else stays navy, teal and stone. It is the eye-brand idea ("we bring your numbers into focus") expressed as a colour rule rather than a mascot.
- **The lens device** (optional, for hero scenes only): a circular lens or trial-lens ring laid over part of the scene; inside the ring the content is crisp and carries the yellow accent, outside it is plain. Use it in at most one image per page.
- **Glasses are normal.** Many of the people wear frames. It suits the audience and gives the cast a family resemblance without a mascot.
- **Faces are front or three-quarter**, no cheek blush, with a small calm smile.
- **Shadow is a single hard-edged shape** in a pale navy tint, offset down-right, instead of a soft smudge.

### Palette for illustration

| Role | Colour |
|---|---|
| Line, darkest fill | Dark Navy `#110F2B` |
| Main fill | Navy `#415D9E` |
| Second fill | Teal `#51A0AD` |
| Background, paper | Stone `#F4F4F8` |
| Paper objects, highlights | White `#FFFFFF` |
| Focus accent, once per image | Yellow `#FCBA02` |
| Derived tints (fills, shadows, panels) | pale navy `#E3E7F0`, pale teal `#DCECEF`, pale yellow `#FEEEC0` |
| Skin | 4 to 5 muted natural tones, the only colours allowed outside the palette |

Colour count per image: spots use line + 2 fills + white (+ yellow if it is the focus). Scenes use line + navy + teal + two tints + white + one yellow accent + skin.

### Reusable style paragraph (prompt text)

Append the subject line from section (d) in front of this paragraph. Use it unchanged for every image.

> Editorial spot illustration in a warm hand-inked style: confident, slightly uneven outlines in Dark Navy #110F2B at one consistent medium weight with rounded caps, never pure black. Flat colour fills only, drawn from Navy #415D9E, Teal #51A0AD, Stone #F4F4F8, white, and pale tints of the navy and teal; Yellow #FCBA02 appears once per image, on the single object that matters. Fills sit slightly off-register from the linework, with a fine dry paper grain inside the fills and no gradients. Shape language is geometric and friendly: circles, lens shapes, rounded rectangles, objects drawn in a shallow three-quarter view so they feel solid. People have natural adult proportions, small heads, relaxed posture, simple faces (dot eyes, one-line nose, small calm smile), varied natural skin tones and ages, clearly drawn five-finger hands, everyday professional clothing with a few crease lines. Flat even light, one hard-edged cast shadow in a pale navy tint, no highlights or glow. One clear subject, centred, generous empty space, on a solid flat Stone #F4F4F8 background with no scenery, border or frame. No text, letters, numbers or logos anywhere.

### Negative list

> photorealism, 3D render, isometric, gradients, glossy highlights, soft drop shadows, glow, pure black outlines, hairline or perfectly uniform vector lines, clip-art, emoji style, cartoon mascot, big heads, chibi, anime, exaggerated expressions, rubbery or oversized limbs, cheek blush, pink, purple, red, orange, green, neon colours, busy background, scenery, floor line, frame, border, text, letters, numerals, logos, watermark, signature, extra fingers, malformed hands

### Production notes

- **Text in images.** Image models garble lettering. Draw forms, ledgers, EOBs and dashboards with ruled lines, blocks and bars instead of words. For the eye chart, ask for "rows of simple dark shapes that get smaller toward the bottom", or generate the blank chart and set real letters over it in SVG.
- **Formats.** Spots and step illustrations 1:1. Section scenes 4:3. Hero scenes 3:2. Generate on Stone so they can sit directly on the page; for panel treatments, generate on Stone and place on a pale teal `#DCECEF` or pale navy `#E3E7F0` rounded panel in CSS, or key out the background.
- **Consistency.** Generate the three hero scenes first, pick the one with the best line, and use it as the style reference image for everything after. Keep one seed family per tier. Reject any image where the line turns black, the yellow appears twice, or a face gains blush or a large grin.
- **Cast.** Describe people by role and a couple of neutral attributes ("an optometrist in her fifties with round glasses and a navy cardigan"), vary age, skin tone and build across the set, and do not reuse one figure as a mascot.
- **Layout pairing on the ForEyes site.** Parkinsans for headings (it replaces Gusto's serif as the personality face) with a plain sans for body. Cards 14 to 16px radius, buttons 8 to 10px, pills fully round. Stone page, white cards, Navy primary buttons, Dark Navy closing band, Teal for secondary emphasis, Yellow only on the one call to action or figure per view that matters most. One mode per block: illustration, photo, or UI mockup.

---

## (d) Subject list (24 illustrations plus one optional)

Each line is the scene description to place in front of the style paragraph.

**Hero scenes (3:2)**

1. An optometrist and a bookkeeper standing either side of a reception counter, looking together at an open ledger; a frames board behind them reduced to a few rows of simple frame shapes; the ledger's bottom line is the yellow object.
2. A tidy desk seen from a slight angle: an open ledger, a neat stack of claim forms, a pair of glasses folded on top, a trial lens resting on the page; the lens rim is yellow.
3. A large trial lens held up by a hand over a messy pile of receipts and forms; through the lens the pile appears as one neat aligned stack with a single yellow tick mark.
4. An exam lane in three simple shapes (exam chair, phoropter arm, wall chart of shrinking shapes) with a bookkeeper's laptop on a side table showing a rising bar chart; the tallest bar is yellow.

**Service spots (1:1)**

5. Bookkeeping: an open ledger with ruled lines and a pencil lying across it; one row highlighted yellow.
6. Insurance billing: a claim form sliding into an envelope marked only with a plain shield shape; the shield is yellow.
7. Claims follow-up: a small stack of claim forms with a clock beside it and one form pulled forward; the pulled form carries a yellow tab.
8. EOB posting: an explanation-of-benefits sheet (ruled blocks, no words) beside a ledger page, joined by a single arrow; the arrowhead is yellow.
9. Bank reconciliation: a bank statement and a ledger page side by side with matching rows linked by short lines; one linked pair is yellow.
10. Bank feeds: a small bank building with three transaction slips flowing in a curve into a laptop; the last slip is yellow.
11. Payroll: a pay envelope with a slip half out, next to a wall calendar with one day circled in yellow.
12. Accounts payable: a lens-lab box and a frame case on a counter with a supplier invoice clipped to the box; the paperclip is yellow.
13. KPI dashboard: a tablet on a small stand showing three bars and a ring chart built from a lens outline; one ring segment is yellow.
14. Tax and year-end: a file box with tabbed folders and a calendar page tucked in front; one tab is yellow.
15. Practice advisory: two chairs angled toward a small table with a tablet showing a line trending up; the last point on the line is yellow.
16. Optical dispensary inventory: a frames board of nine frames in a grid with a clipboard count sheet beside it; one frame is yellow.

**Process steps (1:1, drawn as a matching set of four)**

17. Step 1, connect: a hand plugging a simple cable from a bank building icon into a laptop; the plug is yellow.
18. Step 2, clean up: a hand sorting a fan of loose receipts into a labelled tray (labels are blank blocks); the top receipt is yellow.
19. Step 3, bill and post: a hand placing a claim form onto a neat outgoing stack beside a phoropter silhouette; the form's corner tick is yellow.
20. Step 4, see clearly: a hand holding a pair of glasses up to a monthly report so the chart behind the lenses is crisp; the chart's peak is yellow.

**Reassurance and people (4:3)**

21. Dedicated team: three ForEyes team members at one long desk with laptops and a shared wall chart, one wearing a headset, two wearing glasses; one coffee mug is yellow.
22. Onboarding call: an optometrist at a practice desk on a video call with a bookkeeper shown in the laptop screen, a trial lens set open on the desk; the call's "connected" dot is yellow.

**Empty and system states (1:1, quieter, fewer fills)**

23. Nothing here yet: an empty in-tray with a single trial lens resting inside it; the lens rim is yellow.
24. All caught up: a closed ledger with a pair of folded glasses on top and a small plant beside it; the ribbon bookmark is yellow.
25. Page not found (optional 25th): a pair of glasses lying on a blurred eye chart of soft shapes, with only the area behind one lens sharp; that lens rim is yellow.

---

## (e) Companion photoreal direction

Gusto's photos work because they are warm, specific and unposed. ForEyes should match that warmth but, since these will be generated rather than shot, keep people anonymous: hands, shoulders, backs, silhouettes and soft-focus figures only. That avoids uncanny faces and avoids implying a fake customer.

Shared art direction for every photoreal image:

- **Light:** soft daylight from one side (a large window), gentle shadows, warm-neutral white balance around 5000K, no hard flash, no moody low-key lighting.
- **Lens:** 35mm or 50mm equivalent for scenes, 85 to 100mm for object details; f/2 to f/2.8 so backgrounds and any document text fall out of focus.
- **Palette tie-in:** environments are stone, off-white and pale wood; props carry the brand colours in real materials (a navy linen ledger cover, a teal ceramic mug or frame case, a navy cardigan sleeve) with exactly one yellow object in frame (pencil, sticky flag, mug, frame temple), echoing the illustration focus rule.
- **Grade:** slightly lifted blacks, modest saturation, a touch of film grain so photos sit comfortably beside the grainy illustrations.
- **Never:** identifiable faces, readable patient names or policy numbers, real payer or software logos, stock-photo handshakes, people pointing at screens and laughing.
- **Treatment on page:** 8 to 14px radius; either full-bleed with a Dark Navy gradient from the bottom and a white heading over it, or as a contained tile on Stone. One small white UI card may overlap a corner. Never in the same block as an illustration.

Scenes:

1. **The books.** Top-down three-quarter view of a navy cloth-bound ledger open on a pale oak desk, a fountain pen, a pair of round acetate glasses folded on the page, a yellow pencil. Window light from the left. 50mm, f/2.8. Hero for the bookkeeping page.
2. **Insurance billing desk.** A stack of claim forms and an EOB under a hand holding a pen mid-tick, laptop edge in soft focus behind, teal mug. Text unreadable through depth of field. 85mm, f/2.
3. **The dashboard.** A laptop on a reception counter showing an abstract KPI dashboard in navy, teal and one yellow bar (comped in from the site's own UI mockup rather than generated), with an out-of-focus frames board glowing behind. 35mm, f/2.8. Hero for metrics and reporting.
4. **Exam lane, quiet.** An empty exam chair and phoropter in a clean lane with daylight from a side window, a tablet on the side counter showing a simple chart. No people. 35mm, f/4. Establishes that ForEyes knows the clinical setting.
5. **Trial lenses and receipts.** Macro of an open trial lens case with a short curl of card-terminal receipts lying across it; one lens rim catches a warm highlight. 100mm macro, f/4. Good as a texture tile or section divider.
6. **Optical dispensary at opening time.** A wall of frames in soft morning light, a staff member seen from behind adjusting a display, a tablet with an inventory grid on the counter in the foreground. 35mm, f/2.8.
7. **Month-end close.** Over-the-shoulder view of a bookkeeper at a two-monitor desk (shoulder and hands only), screens showing blurred reconciliation tables, a yellow sticky flag on a printed bank statement. 50mm, f/2.
8. **Handing it over.** Two pairs of hands across a reception counter: one passing a slim folder, the other holding a pair of glasses by the temple. Navy sleeve, teal folder. 85mm, f/2. For the "how we work with you" or contact section.

---

## (f) Motion ideas

Principle, taken from what Gusto's pages imply: small, slow, one moving thing per picture. Loops of 4 to 8 seconds with a rest in them, ease-in-out, no bounce. Everything stops for `prefers-reduced-motion`. Best built as layered SVG or Lottie from the approved stills (separate the moving element as its own layer when generating), or as short muted looping video for the hero.

| Illustration | What moves |
|---|---|
| 3. Hero lens over the receipt pile | The lens drifts a few pixels left and right; the area inside it resolves from loose to aligned as it passes; the yellow tick draws on once per loop. The signature animation for the site. |
| 2. Hero desk | The trial lens rocks very slightly and a soft refracted highlight slides across the ledger page. Almost still. |
| 10. Bank feeds | Transaction slips travel along the curve into the laptop one after another; the last one turns yellow as it lands. |
| 9. Bank reconciliation | Link lines draw between matching rows in sequence; the final pair pulses yellow once. |
| 8. EOB posting | The arrow draws from the EOB to the ledger; a ledger row fills in. |
| 13. KPI dashboard | Bars rise to height on scroll-in; the ring segment sweeps to its end and turns yellow. Play once, then hold. |
| 7. Claims follow-up | The clock hand ticks; the pulled-forward form slides out a little and settles. |
| 17 to 20. Process steps | One action each as the step scrolls into view: plug seats, receipt drops into the tray, form lands on the stack, glasses lift and the chart sharpens. Play once in sequence; do not loop. |
| 21. Dedicated team | Idle loop: one person types, steam rises from the yellow mug, a chart line on the wall extends by one segment. |
| 23. Empty state | The trial lens rocks gently to rest every few seconds. |
| 24. All caught up | The plant leaf sways; the ribbon bookmark settles. Plays once on arrival. |
| 25. Page not found | The sharp area behind the lens drifts slowly across the blurred chart, as if looking for the page. |

Leave static: the service spots not listed above (5, 6, 11, 12, 14, 15, 16), hero 1 and hero 4, and all photoreal scenes (at most a slow 2 to 3% scale-in on scroll). In card grids, a hover state can nudge only the yellow element by 2 to 3px, which reinforces the focus rule without animating the whole icon.
