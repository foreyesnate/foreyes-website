"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { videos, type VideoName } from "@/content/art";
import { cn } from "@/lib/cn";

/**
 * A silent, looping clip from the picture library. It plays only while it is
 * on screen, never autoplays for visitors who prefer reduced motion (they get
 * the poster frame), and always offers a pause button.
 *
 * The poster is an ordinary lazy image under the (transparent until it plays)
 * video rather than the video's `poster` attribute: a `poster` downloads with
 * the page however far down the clip sits, and cannot be resized per screen.
 *
 * `children` are layered on top (headline, gradient, floating card).
 */
export function LoopVideo({
  name,
  ratio,
  className,
  children,
  rounded = true,
  sizes = "(min-width: 1024px) 37rem, 100vw",
}: {
  name: VideoName;
  /** CSS aspect-ratio, e.g. "16/9". Defaults to the clip's own. */
  ratio?: string;
  className?: string;
  children?: ReactNode;
  rounded?: boolean;
  /** How wide the clip is shown, for picking the poster file. */
  sizes?: string;
}) {
  const clip = videos[name];
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAllowed(!reduce);
    if (reduce) return;
    // Phones get the lighter encode where the clip has one. Nothing has been
    // fetched yet (preload="none"), so this only changes what play() loads.
    const small = "small" in clip ? clip.small : undefined;
    if (small && window.matchMedia("(max-width: 640px)").matches) video.src = small;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [clip]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => undefined);
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <div
      className={cn("relative isolate overflow-hidden bg-ink", rounded && "rounded-[2.5rem]", className)}
      style={{ aspectRatio: ratio ?? `${clip.width}/${clip.height}` }}
    >
      <Image src={clip.poster} alt="" fill sizes={sizes} className="object-cover" />
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        aria-label={clip.alt}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      {children}
      {allowed ? (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause background video" : "Play background video"}
          // Over a photo no single ring colour is safe, so focus turns the button
          // solid and puts the yellow ring on a dark band of its own.
          className="absolute bottom-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-ink/55 text-white backdrop-blur transition-colors hover:bg-ink focus-visible:bg-ink focus-visible:ring-[7px] focus-visible:ring-ink"
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <rect x="2" y="1" width="3.5" height="12" rx="1" fill="currentColor" />
              <rect x="8.5" y="1" width="3.5" height="12" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M3 1.5v11l9-5.5-9-5.5Z" fill="currentColor" />
            </svg>
          )}
        </button>
      ) : null}
    </div>
  );
}
