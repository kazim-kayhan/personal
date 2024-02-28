import { mc } from "merge-class";
import type { PropsWithChildren } from "react";

interface InlineHighlightProps {
  color?: "accent" | "blue" | "violet";
}

export function InlineHighlight({
  color = "accent",
  children = null,
}: PropsWithChildren<InlineHighlightProps>) {
  return (
    <span
      className={mc("mdx-inline-highlight", [
        color === "blue" && "blue",
        color === "violet" && "violet",
      ])}
    >
      {children}
    </span>
  );
}

export default InlineHighlight;
