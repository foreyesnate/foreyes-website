import Image from "next/image";
import { initialsOf, type TeamMember } from "@/content/team";
import { cn } from "@/lib/cn";

type Shape = "arch" | "circle" | "soft";

const shapes: Record<Shape, string> = {
  // An arch: half a lens on top, a soft card below. Percentages (for a 4:5
  // box) because oversized pixel radii would shrink the bottom corners too.
  arch: "[border-radius:50%_50%_2rem_2rem/40%_40%_2rem_2rem]",
  circle: "rounded-full",
  soft: "rounded-[2rem]",
};

/**
 * A team member's headshot cropped to one of the site's soft shapes. People
 * without a photo get their initials on teal, so the grid never shows a
 * placeholder silhouette.
 */
export function TeamPortrait({
  member,
  shape = "arch",
  sizes = "(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw",
  className,
  preload = false,
  decorative = false,
  zoomOnHover = false,
}: {
  member: TeamMember;
  shape?: Shape;
  sizes?: string;
  /** Set the aspect ratio and width here. */
  className?: string;
  preload?: boolean;
  /** Use when the name is printed right beside the photo. */
  decorative?: boolean;
  /** Scales the photo when an ancestor with `group` is hovered. */
  zoomOnHover?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-teal-100", shapes[shape], className)}>
      {member.photo ? (
        <Image
          src={member.photo.src}
          alt={decorative ? "" : `${member.name}, ${member.title}`}
          width={member.photo.width}
          height={member.photo.height}
          sizes={sizes}
          preload={preload}
          className={cn(
            "h-full w-full object-cover",
            zoomOnHover &&
              "transition-transform duration-700 ease-(--ease-focus) group-hover:scale-[1.045]",
          )}
          style={{ objectPosition: member.photo.position ?? "50% 20%" }}
        />
      ) : (
        <div
          role={decorative ? undefined : "img"}
          aria-label={decorative ? undefined : `${member.name}, ${member.title}`}
          aria-hidden={decorative ? true : undefined}
          className="grid h-full w-full place-items-center"
        >
          <span className="bg-dots absolute inset-0 text-ink/[0.07]" />
          <span className="relative grid aspect-square w-[46%] place-items-center rounded-full bg-teal font-display font-bold tracking-[-0.03em] text-ink [container-type:inline-size]">
            <span className="text-[36cqw] leading-none">{initialsOf(member.name)}</span>
          </span>
        </div>
      )}
    </div>
  );
}
