"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type FormName = "Contact" | "Pricing Form" | "Billing Calculator";

type Status = "idle" | "sending" | "sent" | "error";

// Declared once, outside the component: React only calls a ref again when it
// is a new function, so this runs when the confirmation appears and not on
// every later re-render.
const focusOnMount = (node: HTMLDivElement | null) => {
  node?.focus();
};

/**
 * The site's one lead form. It posts to Netlify Forms (see
 * public/__forms.html, which registers the fields), the same service the
 * current site uses, so leads keep arriving where they do today.
 *
 * - `formName` picks which Netlify form receives the submission.
 * - `details` is sent along silently (each calculator passes its summary
 *   here), in the field named by `detailsField`.
 * - `interestOptions` adds a "What can we help with?" select.
 * - `success` replaces the default thank-you (e.g. to show the scheduler).
 */
export function LeadForm({
  formName = "Contact",
  details,
  detailsField = "pricing_calculator_details",
  interestOptions,
  submitLabel = "Send Message",
  success,
  tone = "light",
  className,
}: {
  formName?: FormName;
  details?: string;
  /** Field name for `details`. Must match the form's entry in public/__forms.html. */
  detailsField?: "pricing_calculator_details" | "billing_calculator_details";
  interestOptions?: string[];
  submitLabel?: string;
  success?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  // True while the error is "no way to reach you", so both fields are marked.
  const [needContact, setNeedContact] = useState(false);
  const dark = tone === "dark";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!email && !phone) {
      setNeedContact(true);
      setError("Please enter a phone number or an email address so we can reach you.");
      form.querySelector<HTMLInputElement>('[name="email"]')?.focus();
      return;
    }
    setNeedContact(false);
    setError(null);
    setStatus("sending");

    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));
    body.set("form-name", formName);
    body.set("page", window.location.pathname);
    if (details) body.set(detailsField, details);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      // Netlify answers the POST in production. A local dev server has no
      // form handler, so treat local runs as sent to let the flow be previewed.
      if (!response.ok && process.env.NODE_ENV === "production") {
        throw new Error(`Form responded ${response.status}`);
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        `That didn’t go through. Please try again, or call ${site.phone.display}.`,
      );
    }
  }

  const field = cn(
    "h-14 w-full rounded-2xl border-2 px-4 text-[1.0625rem] transition-colors placeholder:text-ink-400 focus:outline-none",
    dark
      ? "border-white/15 bg-white/10 text-white placeholder:text-white/45 focus:border-yellow"
      : "border-stone-300 bg-white text-ink focus:border-navy",
  );
  const label = cn("mb-2 block font-display text-sm font-semibold", dark ? "text-white/85" : "text-ink");

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            role="status"
            // The form (and the button that had focus) is gone, so focus moves
            // to the confirmation: it is read out, and Tab carries on from here.
            tabIndex={-1}
            ref={focusOnMount}
            className="focus:outline-none"
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {success ?? (
              <div className={cn("rounded-[1.75rem] p-8 text-center", dark ? "bg-white/10" : "bg-teal-100")}>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-yellow text-ink">
                  <Icon name="check" size={28} strokeWidth={2.6} />
                </span>
                <p className="text-heading mt-5">Got it. Thank you.</p>
                <p className={cn("mt-3", dark ? "text-white/80" : "text-ink-700")}>
                  We have your message and will be in touch soon.
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            name={formName}
            method="post"
            onSubmit={onSubmit}
            noValidate={false}
            exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
            transition={{ duration: 0.3 }}
            className="grid gap-5"
          >
            {/* Honeypot: hidden from people, tempting to bots. */}
            <p className="hidden" aria-hidden="true">
              <label>
                Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor={`${id}-name`} className={label}>
                  Name
                </label>
                <input id={`${id}-name`} name="name" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor={`${id}-practice`} className={label}>
                  Practice name <span className="font-normal opacity-60">(optional)</span>
                </label>
                <input id={`${id}-practice`} name="practice" autoComplete="organization" className={field} />
              </div>
              <div>
                <label htmlFor={`${id}-email`} className={label}>
                  Email address
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  aria-describedby={needContact ? `${id}-error` : `${id}-hint`}
                  aria-invalid={needContact || undefined}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor={`${id}-phone`} className={label}>
                  Phone number
                </label>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  aria-describedby={needContact ? `${id}-error` : `${id}-hint`}
                  aria-invalid={needContact || undefined}
                  className={field}
                />
              </div>
            </div>
            {/* The "how do we reach you" error sits right under the two fields it
                is about, where focus has just been sent, so it is on screen on
                a phone too. */}
            {needContact && error ? (
              <p id={`${id}-error`} role="alert" className={cn("-mt-1 rounded-2xl px-4 py-3 font-medium", dark ? "bg-white text-ink" : "bg-yellow-100 text-ink")}>
                {error}
              </p>
            ) : (
              <p id={`${id}-hint`} className={cn("-mt-2 text-sm", dark ? "text-white/60" : "text-ink-500")}>
                An email address or a phone number is enough. Either works.
              </p>
            )}
            {interestOptions?.length ? (
              <div>
                <label htmlFor={`${id}-interest`} className={label}>
                  What can we help with?
                </label>
                <div className="relative">
                  <select id={`${id}-interest`} name="interest" defaultValue="" className={cn(field, "appearance-none pr-12")}>
                    <option value="">Choose one (optional)</option>
                    {interestOptions.map((option) => (
                      <option key={option} value={option} className="text-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                  <Icon name="chevronDown" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-60" />
                </div>
              </div>
            ) : null}
            <div>
              <label htmlFor={`${id}-message`} className={label}>
                Message <span className="font-normal opacity-60">(optional)</span>
              </label>
              <textarea id={`${id}-message`} name="message" rows={4} className={cn(field, "h-auto py-3.5 leading-relaxed")} />
            </div>
            {error && !needContact ? (
              <p role="alert" className={cn("rounded-2xl px-4 py-3 font-medium", dark ? "bg-white text-ink" : "bg-yellow-100 text-ink")}>
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group/btn inline-flex h-14 items-center justify-center gap-2 rounded-full bg-yellow px-8 font-display text-[1.0625rem] font-semibold text-ink transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-yellow-200 disabled:cursor-wait disabled:opacity-70 sm:w-fit"
            >
              {status === "sending" ? "Sending…" : submitLabel}
              <Icon name="arrowRight" size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
