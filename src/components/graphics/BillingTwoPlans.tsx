import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type Lane = { plan: string; items: string[]; rules: string };

const laneStyle = [
  { card: "bg-teal-50 ring-teal-200", dot: "bg-teal", rules: "text-teal-800 border-teal-200" },
  { card: "bg-navy-50 ring-navy-100", dot: "bg-navy", rules: "text-navy-700 border-navy-100" },
];

/**
 * Why eyecare billing is its own job: one patient visit that splits into a
 * vision plan claim and a medical insurance claim, each with its own rules.
 * An explanatory diagram, not data.
 */
export function BillingTwoPlans({
  title,
  visit,
  lanes,
  footer,
  className,
}: {
  title: string;
  visit: string;
  lanes: Lane[];
  footer: string;
  className?: string;
}) {
  return (
    <figure className={cn("rounded-[2.5rem] bg-white p-5 text-ink shadow-lift sm:p-8", className)}>
      <figcaption className="flex items-center justify-between gap-3">
        <span className="font-display text-lg font-semibold tracking-[-0.015em]">{title}</span>
        <span className="shrink-0 rounded-full bg-stone-200 px-2.5 py-1 font-display text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink-500">
          Example
        </span>
      </figcaption>

      <div className="mt-7 flex justify-center">
        <p className="inline-flex items-center gap-2.5 rounded-full bg-ink py-2.5 pl-3 pr-5 font-display text-[0.9rem] font-semibold text-white">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
            <Icon name="eye" size={16} />
          </span>
          {visit}
        </p>
      </div>

      {/* The fork: one visit, two claims. */}
      <div aria-hidden="true" className="mx-auto h-5 w-0.5 bg-stone-300" />
      <div aria-hidden="true" className="mx-[25%] h-5 rounded-t-2xl border-x-2 border-t-2 border-stone-300" />

      <ul className="grid grid-cols-2 gap-2.5 sm:gap-4">
        {lanes.map((lane, index) => {
          const style = laneStyle[index % laneStyle.length];
          return (
            <li key={lane.plan} className={cn("flex flex-col rounded-[1.5rem] p-3 ring-1 ring-inset sm:p-5", style.card)}>
              <p className="flex items-center gap-2 font-display text-[0.95rem] font-semibold leading-tight sm:text-[1.0625rem]">
                <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", style.dot)} />
                {lane.plan}
              </p>
              <ul className="mt-3.5 grid gap-1.5">
                {lane.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-white px-2.5 py-2 text-[0.82rem] leading-snug shadow-soft sm:px-3.5 sm:text-[0.9rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-3.5">
                <p className={cn("border-t pt-3 text-[0.78rem] font-medium leading-snug sm:text-[0.85rem]", style.rules)}>
                  {lane.rules}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 flex items-start gap-3 rounded-2xl bg-stone px-4 py-3.5 text-[0.95rem] text-ink-700">
        <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-yellow ring-[3px] ring-yellow/30" />
        {footer}
      </p>
    </figure>
  );
}
