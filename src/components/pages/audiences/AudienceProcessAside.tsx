import type { AudienceContent } from "@/content/audiences/types";
import { Illustration } from "@/components/ui/Art";
import { cn } from "@/lib/cn";

const panelClass = {
  teal: "bg-teal-100",
  navy: "bg-navy-100",
  yellow: "bg-yellow-100",
} as const;

/**
 * Sits under the heading of "How we work": a small picture of the owner's
 * part in the process, with the reassurance that goes with it. One card, so
 * the sticky column stays short enough for a laptop screen.
 */
export function AudienceProcessAside({
  picture,
  note,
  dark,
}: {
  picture: AudienceContent["process"]["picture"];
  note: string;
  dark: boolean;
}) {
  return (
    <div
      className={cn(
        "grid max-w-md overflow-hidden rounded-[1.75rem] sm:max-w-xl sm:grid-cols-[13rem_minmax(0,1fr)]",
        dark ? "bg-white/[0.07] text-white/85 ring-1 ring-inset ring-white/10" : "bg-white text-ink-700 shadow-soft",
      )}
    >
      <div className={cn("flex items-center justify-center", panelClass[picture.panel], picture.fit === "pad" && "p-5")}>
        <Illustration
          name={picture.name}
          panel="none"
          sizes="(min-width: 640px) 13rem, 92vw"
          className="w-full"
        />
      </div>
      <p className="flex items-center p-6 sm:p-7">{note}</p>
    </div>
  );
}
