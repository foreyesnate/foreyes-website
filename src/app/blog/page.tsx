import { permanentRedirect } from "next/navigation";
import { blogCopy } from "@/components/pages/blog/content";

// Posts live at /blog/<slug>; the list of them lives under Resources.
// Anyone who trims a post URL back to /blog lands on the index.
export default function BlogRootPage() {
  permanentRedirect(blogCopy.indexHref);
}
