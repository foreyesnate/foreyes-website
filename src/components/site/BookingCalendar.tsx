import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * The Discovery Call scheduler. This is the same booking widget the current
 * site shows, embedded as-is. If the widget cannot load (a blocked third
 * party, for example) the phone and email fallback beneath it still works.
 */
export function BookingCalendar({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[1.75rem] bg-white", className)}>
      <iframe
        src={site.bookingWidgetUrl}
        title="Book a Discovery Call"
        loading="lazy"
        className="block min-h-[44rem] w-full border-0"
      />
      <p className="border-t border-stone-200 px-6 py-4 text-sm text-ink-500">
        Calendar not loading? Call{" "}
        <a href={site.phone.href} className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4">
          {site.phone.display}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-ink underline decoration-yellow decoration-2 underline-offset-4">
          {site.email}
        </a>
        .
      </p>
    </div>
  );
}
