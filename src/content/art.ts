// The site's picture library. Illustrations and photos were generated for
// ForEyes Books & Billing (Higgsfield) in one consistent style: hand-inked
// dark-navy line, flat brand-colour fills, and yellow used once per picture
// on the thing that matters. Illustrations are transparent cut-outs, so they
// can sit on any brand tint. No picture shows a real client or team member.
//
// Add a picture: drop the file in public/art/..., then add an entry here.

export type ArtAsset = { src: string; width: number; height: number; alt: string };

export const illustrations = {
  "counter-ledger": { src: "/art/illustrations/counter-ledger.webp", width: 1400, height: 1082, alt: "An optometrist and a bookkeeper lean over an open ledger on a reception counter, a frames board on the wall behind them." },
  "tidy-desk": { src: "/art/illustrations/tidy-desk.webp", width: 1400, height: 1013, alt: "A tidy desk with an open ledger, a stack of ledgers, folded glasses, a mug, and a tablet showing a rising bar chart." },
  "lens-over-claims": { src: "/art/illustrations/lens-over-claims.webp", width: 1400, height: 1045, alt: "A hand holds a lens over a messy pile of claim forms; through the lens the pile is one neat stack with a check mark." },
  "spot-bookkeeping": { src: "/art/illustrations/spot-bookkeeping.webp", width: 1400, height: 1194, alt: "An open ledger with one row highlighted, a pencil, and a pair of round glasses." },
  "spot-billing": { src: "/art/illustrations/spot-billing.webp", width: 1400, height: 1679, alt: "A claim form sliding into an envelope marked with a shield, beside a pair of glasses." },
  "spot-accounts-payable": { src: "/art/illustrations/spot-accounts-payable.webp", width: 1400, height: 1260, alt: "A lens-lab shipping box with a supplier invoice clipped to it, and a frame case." },
  "spot-payroll": { src: "/art/illustrations/spot-payroll.webp", width: 1400, height: 1119, alt: "A pay slip in an envelope beside a calendar with one day circled." },
  "spot-consulting": { src: "/art/illustrations/spot-consulting.webp", width: 1400, height: 826, alt: "Two armchairs angled toward a small table holding a tablet with a chart trending up." },
  "spot-dashboard": { src: "/art/illustrations/spot-dashboard.webp", width: 1400, height: 1147, alt: "A tablet showing three bars and a ring chart, with a pair of glasses in front." },
  "spot-reconcile": { src: "/art/illustrations/spot-reconcile.webp", width: 1400, height: 1113, alt: "A bank statement and a ledger page side by side, with one matching row highlighted on both." },
  "spot-follow-up": { src: "/art/illustrations/spot-follow-up.webp", width: 1400, height: 992, alt: "A stack of claim forms beside a desk clock, one form pulled forward with a tab on it." },
  "optometrist-exam-lane": { src: "/art/illustrations/optometrist-exam-lane.webp", width: 1400, height: 1097, alt: "An optometrist stands with arms crossed beside an exam chair and phoropter, a tablet with a bar chart on a side table." },
  "startup-frames-board": { src: "/art/illustrations/startup-frames-board.webp", width: 1400, height: 1121, alt: "A new practice owner on a step stool hangs frames on a board, with moving boxes and a laptop checklist nearby." },
  "multi-location": { src: "/art/illustrations/multi-location.webp", width: 1400, height: 1034, alt: "Three practice storefronts connected by lines to one open ledger." },
  "team-desk": { src: "/art/illustrations/team-desk.webp", width: 1400, height: 848, alt: "Three team members work at laptops along one desk, a chart and a calendar on the wall behind them." },
  "discovery-call": { src: "/art/illustrations/discovery-call.webp", width: 1400, height: 1095, alt: "An optometrist at his desk waves to a bookkeeper on a laptop video call, a trial lens case open beside him." },
  "handshake": { src: "/art/illustrations/handshake.webp", width: 1400, height: 1066, alt: "An optometrist and a bookkeeper shake hands across a reception counter." },
  "heading-home": { src: "/art/illustrations/heading-home.webp", width: 1400, height: 1306, alt: "An optometrist walks out of her practice at the end of the day, a tidy desk and closed ledger visible through the window." },
  "all-caught-up": { src: "/art/illustrations/all-caught-up.webp", width: 1400, height: 1307, alt: "A closed ledger with folded glasses on top and a small plant beside it." },
  "step-connect": { src: "/art/illustrations/step-connect.webp", width: 1400, height: 1400, alt: "A hand plugs a cable from a bank into a laptop." },
  "step-cleanup": { src: "/art/illustrations/step-cleanup.webp", width: 1400, height: 1400, alt: "A hand sorts loose receipts into a divided tray." },
  "step-bill": { src: "/art/illustrations/step-bill.webp", width: 1400, height: 1400, alt: "A hand places a checked claim form onto a neat outgoing stack beside a phoropter." },
  "step-see-clearly": { src: "/art/illustrations/step-see-clearly.webp", width: 1400, height: 1400, alt: "A hand holds glasses up to a monthly report so the chart behind the lenses is sharp." },
} as const satisfies Record<string, ArtAsset>;

export const photos = {
  "books": { src: "/art/photos/books.webp", width: 2000, height: 1328, alt: "A cloth-bound ledger open on an oak desk with a fountain pen, round glasses, and a yellow pencil." },
  "billing-desk": { src: "/art/photos/billing-desk.webp", width: 2000, height: 1328, alt: "A hand ticks off a stack of claim forms at a desk, a phoropter out of focus behind." },
  "dispensary": { src: "/art/photos/dispensary.webp", width: 2000, height: 1131, alt: "An optical dispensary in morning light: a wall of frames, a staff member adjusting a display, a tablet on the counter." },
  "exam-lane": { src: "/art/photos/exam-lane.webp", width: 2000, height: 1328, alt: "A quiet exam lane with a chair, phoropter, and slit lamp, and a tablet showing a chart on the counter." },
  "month-end": { src: "/art/photos/month-end.webp", width: 2000, height: 1328, alt: "A bookkeeper at a two-monitor desk reviewing tables and a bar chart, a flagged bank statement beside the keyboard." },
  "trial-lenses": { src: "/art/photos/trial-lenses.webp", width: 2000, height: 1328, alt: "An open case of trial lenses with a curl of receipt paper lying across them." },
} as const satisfies Record<string, ArtAsset>;

export type IllustrationName = keyof typeof illustrations;
export type PhotoName = keyof typeof photos;

// Short silent loops made from the photos above. Each has a poster frame that
// is shown before playback and to visitors who prefer reduced motion.
export const videos = {
  dispensary: {
    src: "/art/video/dispensary.mp4",
    // 720px-wide encode (about 0.5 MB instead of 1.1 MB) played on phones,
    // where the clip sits under a dark scrim and is at most 430px wide.
    small: "/art/video/dispensary-720.mp4",
    poster: "/art/video/dispensary-poster.jpg",
    width: 1280,
    height: 724,
    alt: "An optical dispensary in morning light: a staff member adjusts frames on a wall display.",
  },
  books: {
    src: "/art/video/books.mp4",
    poster: "/art/video/books-poster.jpg",
    width: 1280,
    height: 850,
    alt: "Window light drifts across an open ledger with a fountain pen, glasses, and a pencil.",
  },
  "billing-desk": {
    src: "/art/video/billing-desk.mp4",
    poster: "/art/video/billing-desk-poster.jpg",
    width: 1280,
    height: 850,
    alt: "A hand works down a stack of claim forms, ticking each line.",
  },
} as const;

export type VideoName = keyof typeof videos;
