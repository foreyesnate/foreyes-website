import type { ReactNode } from "react";

/**
 * Keeps a hyphenated word ("follow-up", "one-time") on one line. A hyphen is a
 * place the browser may break, and a balanced heading sometimes takes it,
 * leaving "follow-" at the end of one line and "up" at the start of the next.
 */
export function unbroken(text: string): ReactNode {
  return text.split(/(\S+-\S+)/).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
