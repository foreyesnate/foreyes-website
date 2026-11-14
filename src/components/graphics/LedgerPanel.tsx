import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

// Sample figures for an imaginary practice. They illustrate the kind of
// report a client receives; they are not ForEyes results.
const rows = [
  { messy: "Deposit 10/03", clean: "Exam revenue", amount: "48,210", share: 0.86 },
  { messy: "Uncategorized income", clean: "Optical sales", amount: "61,940", share: 1 },
  { messy: "VSP ???", clean: "Contact lenses", amount: "17,325", share: 0.42 },
  { messy: "Ask my accountant", clean: "Optical cost of goods", amount: "(29,480)", share: 0.58, cost: true },
  { messy: "Misc. expense", clean: "Payroll", amount: "(38,115)", share: 0.7, cost: true },
] as const;

const claims = [
  { messy: "Claim #4471", clean: "Paid and posted", tone: "good" },
  { messy: "Denied CO-16", clean: "Appeal filed", tone: "work" },
  { messy: "No response 64d", clean: "Followed up today", tone: "work" },
] as const;

/**
 * A miniature of what a practice's month looks like before and after ForEyes:
 * `before` is how the raw bank feed and claim list read, `after` is the same
 * month once it has been categorized, reconciled and worked.
 */
export function LedgerPanel({ state }: { state: "before" | "after" }) {
  const after = state === "after";
  return (
    <div className="grid gap-4 p-1 sm:grid-cols-[1.25fr_1fr] sm:gap-5">
      <div className="rounded-[1.75rem] bg-white p-5 shadow-soft sm:p-6">
        <div className="flex items-center justify-between">
          <p className="font-display text-[0.95rem] font-semibold">
            {after ? "October profit & loss" : "October bank feed"}
          </p>
          <span
            className={cn(
              "rounded-full px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em]",
              after ? "bg-teal-100 text-teal-800" : "bg-stone-200 text-ink-500",
            )}
          >
            {after ? "Reviewed" : "142 to sort"}
          </span>
        </div>
        <ul className="mt-5 grid gap-3.5">
          {rows.map((row) => (
            <li key={row.clean}>
              <div className="flex items-baseline justify-between gap-3 text-[0.9rem]">
                <span className={cn("truncate", after ? "text-ink" : "text-ink-500")}>
                  {after ? row.clean : row.messy}
                </span>
                <span className="tabular font-display font-semibold">
                  ${row.amount}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-stone-200">
                <div
                  className={cn(
                    "h-full rounded-full",
                    !after && "bg-stone-400",
                    after && ("cost" in row ? "bg-navy-300" : "bg-teal"),
                  )}
                  style={{ width: `${row.share * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-stone px-4 py-3">
          <span className="text-[0.9rem] text-ink-500">
            {after ? "Net income" : "Net income?"}
          </span>
          <span className="tabular font-display text-lg font-bold">
            {after ? "$59,880" : "$ — "}
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-5">
        <div className={cn("rounded-[1.75rem] p-5 shadow-soft sm:p-6", after ? "bg-navy text-white" : "bg-white")}>
          <p className="font-display text-[0.95rem] font-semibold">
            {after ? "Insurance claims" : "Open claims"}
          </p>
          <ul className="mt-4 grid gap-2.5">
            {claims.map((claim) => (
              <li
                key={claim.messy}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[0.85rem]",
                  after ? "bg-white/10" : "bg-stone",
                )}
              >
                <span
                  className={cn(
                    "grid h-5 w-5 shrink-0 place-items-center rounded-full",
                    !after && "bg-stone-300 text-ink-500",
                    after && claim.tone === "good" && "bg-yellow text-ink",
                    after && claim.tone === "work" && "bg-teal text-ink",
                  )}
                >
                  <Icon name={after ? "check" : "minus"} size={12} strokeWidth={3} />
                </span>
                <span className="truncate">{after ? claim.clean : claim.messy}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn("rounded-[1.75rem] p-5 shadow-soft sm:p-6", after ? "bg-yellow" : "bg-white")}>
          <p className="font-display text-[0.8rem] font-semibold uppercase tracking-[0.1em] opacity-70">
            {after ? "Books closed" : "Last closed month"}
          </p>
          <p className="mt-1.5 font-display text-[1.6rem] font-bold leading-none tracking-[-0.03em]">
            {after ? "Business day 8" : "July?"}
          </p>
        </div>
      </div>
    </div>
  );
}
