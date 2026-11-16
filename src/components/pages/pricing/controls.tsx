"use client";

import { useId, useRef, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

// Form controls for the pricing calculator, shared with the billing
// calculator. Every one is a native element (button, range, radio, checkbox)
// dressed in the brand, so keyboards and screen readers get the behaviour they
// already know.

/** A real on/off switch. The word in the track means colour is never the only signal. */
export function Switch({
  checked,
  onChange,
  labelledBy,
  controls,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  /** id of the element that names what this switches. */
  labelledBy: string;
  /** id of the panel this reveals. */
  controls?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      aria-controls={controls}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-10 w-[4.75rem] shrink-0 items-center rounded-full border-2 transition-colors duration-300 before:absolute before:-inset-2 before:content-['']",
        checked ? "border-navy bg-navy" : "border-ink/25 bg-white hover:border-ink/50",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute font-display text-[0.6875rem] font-bold uppercase tracking-[0.08em] transition-opacity duration-200",
          checked ? "left-3 text-white" : "right-2.5 text-ink-500",
        )}
      >
        {checked ? "On" : "Off"}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-1 grid h-7 w-7 place-items-center rounded-full transition-[transform,background-color] duration-300 ease-(--ease-settle)",
          checked ? "translate-x-9 bg-yellow text-ink" : "translate-x-0 bg-ink-400 text-white",
        )}
      >
        {checked ? <Icon name="check" size={15} strokeWidth={3} /> : null}
      </span>
    </button>
  );
}

/** Small pill that states a price effect, e.g. "+$150/mo". */
export function PriceTag({
  children,
  tone = "navy",
  className,
}: {
  children: ReactNode;
  tone?: "navy" | "teal" | "yellow" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "tabular inline-flex h-8 shrink-0 items-center whitespace-nowrap rounded-full px-3 font-display text-[0.8125rem] font-semibold",
        // On the narrowest phones a long tag ("Medical 8%, vision 5% of net
        // receipts") wraps inside its pill instead of widening the page.
        "max-[359px]:h-auto max-[359px]:min-h-8 max-[359px]:shrink max-[359px]:whitespace-normal max-[359px]:py-1 max-[359px]:leading-tight",
        tone === "navy" && "bg-navy-50 text-navy-700",
        tone === "teal" && "bg-teal-100 text-teal-800",
        tone === "yellow" && "bg-yellow-100 text-ink",
        tone === "muted" && "bg-stone-200 text-ink-500",
        className,
      )}
    >
      {children}
    </span>
  );
}

const THUMB = "2rem";

// Native range input, restyled. The input itself is transparent and sits on
// top of a drawn track, which keeps a 44px touch target around a slim rail.
const rangeClass = cn(
  "absolute inset-0 h-11 w-full cursor-pointer appearance-none bg-transparent",
  "[&::-webkit-slider-runnable-track]:h-11 [&::-webkit-slider-runnable-track]:bg-transparent",
  "[&::-webkit-slider-thumb]:mt-1.5 [&::-webkit-slider-thumb]:box-border [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-navy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_4px_12px_-2px_rgb(17_15_43/0.4)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200",
  "hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-115 active:[&::-webkit-slider-thumb]:bg-yellow",
  "[&::-moz-range-track]:h-11 [&::-moz-range-track]:bg-transparent",
  "[&::-moz-range-thumb]:box-border [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-solid [&::-moz-range-thumb]:border-navy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-[0_4px_12px_-2px_rgb(17_15_43/0.4)]",
  "active:[&::-moz-range-thumb]:bg-yellow",
);

/** Where a value sits along the rail, allowing for the thumb's own width. */
function railPosition(fraction: number) {
  return `calc(${fraction} * (100% - ${THUMB}) + ${THUMB} / 2)`;
}

/**
 * The slider itself: a drawn rail with the native range input laid over it.
 * Used by <RangeField>, and on its own where a slider sits under another
 * control (the billing calculator pairs it with a typed dollar amount).
 */
export function RangeTrack({
  id,
  min,
  max,
  step = 1,
  value,
  onChange,
  valueText,
  describedBy,
  label,
  ticks = false,
}: {
  id?: string;
  min: number;
  max: number;
  step?: number;
  /** Shown position. Values outside min..max rest at the nearest end. */
  value: number;
  onChange: (next: number) => void;
  /** The value as read out by a screen reader. */
  valueText: string;
  describedBy?: string;
  /** Accessible name, when no <label> points at `id`. */
  label?: string;
  /** Draw a dot at every stop (for short scales). */
  ticks?: boolean;
}) {
  const shown = Math.min(max, Math.max(min, value));
  const fraction = max === min ? 0 : (shown - min) / (max - min);
  const stops = Math.round((max - min) / step);
  return (
    <div className="relative h-11 min-w-0 flex-1">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2 overflow-hidden rounded-full bg-stone-300"
      >
        <div className="h-full rounded-full bg-navy" style={{ width: railPosition(fraction) }} />
      </div>
      {ticks
        ? Array.from({ length: stops + 1 }, (_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={cn(
                "absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
                i / stops <= fraction ? "bg-white/70" : "bg-ink/30",
              )}
              style={{ left: railPosition(i / stops) }}
            />
          ))
        : null}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={shown}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
        aria-valuetext={valueText}
        aria-describedby={describedBy}
        className={rangeClass}
      />
    </div>
  );
}

const stepButton =
  "grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink/15 bg-white text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-ink/15";

/**
 * A labelled slider: native `<input type="range">` with a visible value,
 * min and max labels, `aria-valuetext`, and optional minus / plus buttons
 * for fine steps on a phone.
 */
export function RangeField({
  label,
  hint,
  min,
  max,
  step = 1,
  value,
  onChange,
  display,
  valueText,
  minLabel,
  maxLabel,
  effect,
  ticks = false,
  stepper = false,
  stepperNoun = "value",
  footnote,
}: {
  label: string;
  hint?: ReactNode;
  min: number;
  max: number;
  /** Distance between stops. The slider and the stepper buttons both use it. */
  step?: number;
  value: number;
  onChange: (next: number) => void;
  /** The value as shown beside the label, e.g. "3 locations". */
  display: ReactNode;
  /** The value as read out by a screen reader. */
  valueText: string;
  minLabel: string;
  maxLabel: string;
  /** Price effect of the current value. */
  effect?: ReactNode;
  /** Draw a dot at every stop (for short scales). */
  ticks?: boolean;
  stepper?: boolean;
  /** Used in the stepper buttons' accessible names: "Decrease locations". */
  stepperNoun?: string;
  footnote?: ReactNode;
}) {
  const id = useId();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
        <div className="min-w-0">
          <label htmlFor={id} className="block font-display text-[1.0625rem] font-semibold tracking-[-0.01em]">
            {label}
          </label>
          {hint ? (
            <p id={`${id}-hint`} className="mt-1 max-w-md text-[0.9375rem] leading-snug text-ink-500">
              {hint}
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-2.5">
          {/* <output> is a live region by default, so a screen reader would
              read every step twice: once from the slider, once from here. */}
          <output
            htmlFor={id}
            aria-live="off"
            className="tabular font-display text-[1.375rem] font-bold leading-none tracking-[-0.02em]"
          >
            {display}
          </output>
          {effect}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        {stepper ? (
          <button
            type="button"
            className={stepButton}
            onClick={() => onChange(Math.max(min, value - step))}
            disabled={value <= min}
            aria-label={`Decrease ${stepperNoun}`}
          >
            <Icon name="minus" size={18} strokeWidth={2.6} />
          </button>
        ) : null}
        <RangeTrack
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          valueText={valueText}
          describedBy={hint ? `${id}-hint` : undefined}
          ticks={ticks}
        />
        {stepper ? (
          <button
            type="button"
            className={stepButton}
            onClick={() => onChange(Math.min(max, value + step))}
            disabled={value >= max}
            aria-label={`Increase ${stepperNoun}`}
          >
            <Icon name="plus" size={18} strokeWidth={2.6} />
          </button>
        ) : null}
      </div>

      <RangeEnds minLabel={minLabel} maxLabel={maxLabel} inset={stepper} />
      {footnote ? <p className="mt-2 text-[0.875rem] text-ink-500">{footnote}</p> : null}
    </div>
  );
}

/** The two small labels under a slider's ends. */
export function RangeEnds({ minLabel, maxLabel, inset = false }: { minLabel: string; maxLabel: string; inset?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "tabular mt-1 flex justify-between font-display text-[0.8125rem] font-semibold text-ink-500",
        inset && "px-14",
      )}
    >
      <span>{minLabel}</span>
      <span>{maxLabel}</span>
    </div>
  );
}

/**
 * The bordered "$ 12,000 a month" box. A text input with a numeric keypad
 * (not `type="number"`, so the value can carry thousands separators and never
 * changes on scroll). Empty means "not entered".
 */
export function MoneyInput({
  id,
  value,
  onChange,
  max,
  suffix,
  describedBy,
  className,
}: {
  id: string;
  value: number | null;
  onChange: (next: number | null) => void;
  max: number;
  /** Unit shown after the field. */
  suffix?: string;
  describedBy?: string;
  className?: string;
}) {
  // Whole dollars only. Set once a decimal point is typed or pasted, so the
  // cents that follow are dropped instead of being read as more dollars
  // ("61,234.56" is $61,234, not $6,123,456).
  const pastPoint = useRef(false);
  const shown = value === null ? "" : value.toLocaleString("en-US");
  return (
    <div
      className={cn(
        "flex h-14 w-full max-w-[17rem] items-center rounded-2xl border-2 border-stone-300 bg-white transition-[border-color,box-shadow] hover:border-ink/40 focus-within:border-navy focus-within:ring-4 focus-within:ring-navy/15 focus-within:hover:border-navy",
        className,
      )}
    >
      <span aria-hidden="true" className="pl-4 font-display text-[1.25rem] font-bold text-ink-500">
        $
      </span>
      <input
        id={id}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="0"
        value={shown}
        onChange={(event) => {
          const raw = event.target.value;
          const point = raw.indexOf(".");
          if (point >= 0) pastPoint.current = true;
          // A digit added after the point is a cent: leave the amount alone.
          else if (pastPoint.current && raw.length > shown.length && raw.startsWith(shown)) return;
          else pastPoint.current = false;
          const digits = (point >= 0 ? raw.slice(0, point) : raw).replace(/\D/g, "");
          onChange(digits ? Math.min(max, Number(digits)) : null);
        }}
        onBlur={() => {
          pastPoint.current = false;
        }}
        aria-describedby={describedBy}
        className="tabular h-full min-w-0 flex-1 rounded-2xl bg-transparent pl-1.5 pr-2 font-display text-[1.25rem] font-bold tracking-[-0.01em] text-ink placeholder:font-semibold placeholder:text-ink-400 focus:outline-none"
      />
      {suffix ? (
        <span aria-hidden="true" className="shrink-0 pr-4 text-[0.875rem] text-ink-500">
          {suffix}
        </span>
      ) : null}
    </div>
  );
}

/** A dollar amount typed by the visitor: a label, a hint and a <MoneyInput>. */
export function MoneyField({
  label,
  hint,
  value,
  onChange,
  max,
  effect,
  suffix = "a month",
}: {
  label: string;
  hint?: ReactNode;
  value: number | null;
  onChange: (next: number | null) => void;
  max: number;
  /** Price effect of the current value. */
  effect?: ReactNode;
  /** Unit shown after the field. */
  suffix?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block font-display text-[1.0625rem] font-semibold tracking-[-0.01em]">
        {label}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 max-w-md text-[0.9375rem] leading-snug text-ink-500">
          {hint}
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2.5">
        <MoneyInput
          id={id}
          value={value}
          onChange={onChange}
          max={max}
          suffix={suffix}
          describedBy={hint ? `${id}-hint` : undefined}
        />
        {effect}
      </div>
    </div>
  );
}

export type Choice<T extends string> = { value: T; label: string; note?: string };

/** A radio group drawn as pills. Real radios underneath: arrow keys work. */
export function ChoiceGroup<T extends string>({
  legend,
  hint,
  options,
  value,
  onChange,
}: {
  legend: string;
  hint?: ReactNode;
  options: Choice<T>[];
  value: T;
  onChange: (next: T) => void;
}) {
  const name = useId();
  return (
    <fieldset className="min-w-0">
      <legend className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em]">{legend}</legend>
      {hint ? <p className="mt-1 max-w-md text-[0.9375rem] leading-snug text-ink-500">{hint}</p> : null}
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <label key={option.value} className="relative cursor-pointer">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  "flex min-h-12 items-center gap-2 rounded-full border-2 py-2 pl-3 pr-4 font-display text-[0.9375rem] font-semibold transition-colors duration-200 peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-[3px] peer-focus-visible:outline-ink",
                  selected
                    ? "border-navy bg-navy text-white"
                    : "border-stone-300 bg-white text-ink hover:border-ink/50",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2",
                    selected ? "border-yellow bg-yellow text-ink" : "border-ink/25",
                  )}
                >
                  {selected ? <Icon name="check" size={12} strokeWidth={3.4} /> : null}
                </span>
                {option.label}
                {option.note ? (
                  <span className={cn("tabular font-sans text-[0.8125rem] font-medium", selected ? "text-white/80" : "text-ink-500")}>
                    {option.note}
                  </span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/** A checkbox row with a hint and an optional price tag. */
export function CheckRow({
  label,
  hint,
  checked,
  onChange,
  tag,
}: {
  label: string;
  hint?: ReactNode;
  checked: boolean;
  onChange: (next: boolean) => void;
  tag?: ReactNode;
}) {
  const id = useId();
  return (
    <div
      className={cn(
        "relative flex items-start gap-3.5 rounded-2xl border-2 p-4 transition-colors duration-200",
        checked ? "border-navy bg-navy-50/60" : "border-stone-300 bg-white hover:border-ink/40",
      )}
    >
      <span className="relative mt-0.5 grid h-6 w-6 shrink-0 place-items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className="peer absolute inset-0 h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-ink/30 bg-white transition-colors checked:border-navy checked:bg-navy"
        />
        <Icon
          name="check"
          size={16}
          strokeWidth={3.2}
          className="pointer-events-none relative text-white opacity-0 transition-opacity peer-checked:opacity-100"
        />
      </span>
      <div className="min-w-0 flex-1">
        {/* The label stretches over the whole row, so anywhere on it toggles. */}
        <label
          htmlFor={id}
          className="block cursor-pointer font-display font-semibold leading-snug tracking-[-0.01em] after:absolute after:inset-0 after:content-['']"
        >
          {label}
        </label>
        {hint ? (
          <p id={`${id}-hint`} className="mt-1 text-[0.9375rem] leading-snug text-ink-500">
            {hint}
          </p>
        ) : null}
      </div>
      {tag}
    </div>
  );
}
