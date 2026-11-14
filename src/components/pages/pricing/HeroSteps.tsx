import { heroSteps } from "@/content/pricing";
import { Icon } from "@/components/ui/Icon";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/** The hero's small visual: how the calculator works, in three steps. */
export function HeroSteps() {
  return (
    // Desktop only: on a phone the calculator itself should come first.
    <div className="relative ml-auto hidden max-w-md lg:block">
      <div
        aria-hidden="true"
        className="bg-dots absolute -right-6 -top-8 h-40 w-56 text-navy/20 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div className="relative rounded-[2.5rem] bg-white p-6 shadow-float sm:p-8">
        <p className="eyebrow text-teal-700">How it works</p>
        <Stagger as="ol" stagger={0.14} className="mt-6 grid gap-6">
          {heroSteps.map((step, i) => {
            const last = i === heroSteps.length - 1;
            return (
              <StaggerItem as="li" key={step.title} className="relative flex gap-4">
                {/* The line that joins each step to the next. */}
                {last ? null : (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-6 left-[1.3125rem] top-11 border-l-2 border-dashed border-stone-300"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={cn(
                    "tabular grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-lg font-bold ring-4 ring-white",
                    last ? "bg-yellow text-ink" : "bg-navy text-white",
                  )}
                >
                  {last ? <Icon name="phone" size={19} strokeWidth={2.2} /> : i + 1}
                </span>
                <span className="pt-0.5">
                  <span className="block font-display text-[1.125rem] font-semibold leading-snug tracking-[-0.015em]">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-[0.9375rem] leading-snug text-ink-500">{step.body}</span>
                </span>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </div>
  );
}
