"use client";

import { useId, type ReactNode } from "react";
import { MoneyInput, RangeEnds, RangeTrack } from "@/components/pages/pricing/controls";
import { formatMoney } from "@/lib/pricing";
import type { MoneyRule } from "@/lib/billing-calculator";

/**
 * A dollar amount the visitor can type or drag: the pricing calculator's
 * money box with its slider underneath. Typing may go past the slider's ends
 * (up to `rule.typedMax`); the slider then simply rests at that end.
 */
export function MoneyRangeField({
  label,
  hint,
  noun,
  rule,
  value,
  onChange,
  suffix,
  footnote,
}: {
  label: string;
  hint?: ReactNode;
  /** Short name for the slider's accessible name, e.g. "monthly insurance collections". */
  noun: string;
  rule: MoneyRule;
  value: number;
  onChange: (next: number) => void;
  /** Unit shown inside the box, e.g. "a month". */
  suffix?: string;
  footnote?: ReactNode;
}) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div>
      <label htmlFor={id} className="block font-display text-[1.0625rem] font-semibold leading-snug tracking-[-0.01em]">
        {label}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 max-w-md text-[0.9375rem] leading-snug text-ink-500">
          {hint}
        </p>
      ) : null}
      <MoneyInput
        id={id}
        // An empty box and a zero are the same amount here.
        value={value === 0 ? null : value}
        onChange={(next) => onChange(next ?? 0)}
        max={rule.typedMax}
        suffix={suffix}
        describedBy={hintId}
        className="mt-3"
      />
      <div className="mt-1.5 flex items-center">
        <RangeTrack
          min={rule.min}
          max={rule.max}
          step={rule.step}
          value={value}
          onChange={onChange}
          label={`Slider for ${noun}`}
          valueText={suffix ? `${formatMoney(value)} ${suffix}` : formatMoney(value)}
          describedBy={hintId}
        />
      </div>
      <RangeEnds minLabel={formatMoney(rule.min)} maxLabel={formatMoney(rule.max)} />
      {footnote ? <p className="mt-2 text-[0.875rem] text-ink-500">{footnote}</p> : null}
    </div>
  );
}
