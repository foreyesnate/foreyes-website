import localFont from "next/font/local";

// Parkinsans is the typeface in the ForEyes Books & Billing logo, so headings
// share the wordmark's voice. Figtree carries body copy: friendly and
// geometric like Parkinsans, but calmer over long paragraphs.
// Both are self-hosted variable fonts (no third-party font requests).
export const parkinsans = localFont({
  src: "../fonts/parkinsans-latin-wght-normal.woff2",
  variable: "--font-parkinsans",
  weight: "300 800",
  display: "swap",
});

export const figtree = localFont({
  src: [
    {
      path: "../fonts/figtree-latin-wght-normal.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../fonts/figtree-latin-wght-italic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-figtree",
  display: "swap",
});
