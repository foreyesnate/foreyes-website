"use client";

import Script from "next/script";
import { useEffect } from "react";
import { site } from "@/content/site";

// The chat bubble sits in the bottom-right corner, which is also where the two
// calculators pin their result bar on phones (src/components/ui/PinnedBar.tsx).
// These rules let the page lift or hide the bubble through two CSS variables
// (set in globals.css) so it never covers the bar's button. If the vendor renames its classes the rules
// simply stop applying and the bubble returns to its default corner.
const OFFSET_RULES = `
:host([data-active="false"]) .lc_text-widget,
:host([data-active="false"]) .lc_text-widget--bubble {
  bottom: var(--chat-lift, 20px) !important;
  visibility: var(--chat-visibility, visible);
  transition: bottom 0.3s ease;
}
@media (prefers-reduced-motion: reduce) {
  .lc_text-widget, .lc_text-widget--bubble { transition: none; }
}`;

function applyOffsetRules(): boolean {
  const root = document.querySelector("chat-widget")?.shadowRoot;
  if (!root) return false;
  if (!root.querySelector("style[data-foreyes]")) {
    const style = document.createElement("style");
    style.setAttribute("data-foreyes", "");
    style.textContent = OFFSET_RULES;
    root.appendChild(style);
  }
  return true;
}

/** The LeadConnector chat bubble, loaded once the page is idle. */
export function ChatWidget() {
  useEffect(() => {
    if (applyOffsetRules()) return;
    // The widget adds itself to the page some time after its loader runs.
    const observer = new MutationObserver(() => {
      if (applyOffsetRules()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={site.chatWidgetId}
      strategy="lazyOnload"
    />
  );
}
