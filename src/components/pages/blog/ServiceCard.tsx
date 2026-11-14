import type { PostService } from "@/lib/blog";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { servicePitches } from "./content";

/**
 * The "talk to us" card inside an article. It names the service closest to
 * what the post is about and offers the Discovery Call. It sits outside the
 * prose wrapper so long-form link and list styles do not reach it.
 */
export function ServiceCard({ service, className }: { service: PostService; className?: string }) {
  const pitch = servicePitches[service];
  const labelId = `service-card-${service}`;
  return (
    <aside
      aria-labelledby={labelId}
      className={cn(
        "relative isolate overflow-hidden rounded-[1.75rem] bg-ink p-7 text-white shadow-lift sm:rounded-[2.5rem] sm:p-10",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgb(65_93_158/0.7),transparent)]" />
        <div className="bg-dots absolute bottom-0 right-0 h-40 w-64 text-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>

      <p className="eyebrow inline-flex items-center gap-3 text-teal-200">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-yellow text-ink">
          <Icon name={pitch.icon} size={22} />
        </span>
        {pitch.label} from ForEyes
      </p>
      <p id={labelId} className="mt-6 max-w-[22ch] font-display text-[clamp(1.5rem,1.25rem+1.1vw,2rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-balance">
        {pitch.title}
      </p>
      <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-white/75">{pitch.body}</p>

      <ul className="mt-6 grid gap-2.5">
        {pitch.points.map((point) => (
          <li key={point} className="flex items-start gap-3 text-[1rem] text-white/90">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal text-ink">
              <Icon name="check" size={13} strokeWidth={3} />
            </span>
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href={site.bookingHref}>Book a Discovery Call</Button>
        <Button href={pitch.href} variant="light" arrow>
          {pitch.cta}
        </Button>
      </div>
    </aside>
  );
}
