import Image from "next/image";
import type { ReactNode } from "react";
import {
  illustrations,
  photos,
  type ArtAsset,
  type IllustrationName,
  type PhotoName,
} from "@/content/art";
import { cn } from "@/lib/cn";

type Panel = "teal" | "navy" | "yellow" | "white" | "stone" | "ink" | "none";

const panels: Record<Panel, string> = {
  teal: "bg-teal-100",
  navy: "bg-navy-100",
  yellow: "bg-yellow-100",
  white: "bg-white",
  stone: "bg-stone",
  ink: "bg-ink",
  none: "",
};

/**
 * An illustration from the picture library (src/content/art.ts), on a soft
 * tinted panel. The drawings are transparent cut-outs, so any panel works;
 * avoid `ink` unless the drawing is mostly light.
 *
 * `children` are layered over the panel: use it to float a small UI card or
 * badge on a corner.
 */
export function Illustration({
  name,
  panel = "teal",
  alt,
  float = false,
  priority = false,
  className,
  imageClassName,
  // The drawing sits inside the panel's padding, so it is narrower than its
  // column: about 31rem beside text on a desktop, 78% of a phone's width.
  sizes = "(min-width: 1024px) 31rem, (min-width: 640px) 70vw, 78vw",
  children,
}: {
  name: IllustrationName;
  panel?: Panel;
  /** Override the catalogue description, or pass "" if decorative here. */
  alt?: string;
  /** Slow bobbing loop. At most one floating picture per view. */
  float?: boolean;
  /** Set for a picture visible without scrolling: loads eagerly, high priority. */
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  children?: ReactNode;
}) {
  const asset: ArtAsset = illustrations[name];
  return (
    <div
      className={cn(
        "relative",
        panel !== "none" && "overflow-hidden rounded-[2.5rem] p-6 sm:p-10",
        panels[panel],
        className,
      )}
    >
      {panel !== "none" ? (
        <div
          aria-hidden="true"
          className={cn(
            "bg-dots absolute inset-0 [mask-image:radial-gradient(closest-side,transparent_45%,black)]",
            panel === "ink" ? "text-white/10" : "text-ink/[0.07]",
          )}
        />
      ) : null}
      <Image
        src={asset.src}
        width={asset.width}
        height={asset.height}
        alt={alt ?? asset.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
        className={cn("relative h-auto w-full", float && "animate-float-slow", imageClassName)}
      />
      {children}
    </div>
  );
}

/** A photo from the picture library, cropped to a rounded frame. */
export function Photo({
  name,
  alt,
  ratio = "3/2",
  priority = false,
  className,
  sizes = "(min-width: 1024px) 40rem, 100vw",
  children,
}: {
  name: PhotoName;
  alt?: string;
  /** CSS aspect-ratio for the frame, e.g. "3/2", "16/9", "4/5". */
  ratio?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  children?: ReactNode;
}) {
  const asset: ArtAsset = photos[name];
  return (
    <div
      className={cn("relative overflow-hidden rounded-[2.5rem] shadow-lift", className)}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={asset.src}
        alt={alt ?? asset.alt}
        fill
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
        className="object-cover"
      />
      {children}
    </div>
  );
}
