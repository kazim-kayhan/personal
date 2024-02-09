import type { DetailedHTMLProps, HTMLAttributes } from "react";

type TableProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export function Table({ children }: TableProps) {
  return (
    <div className="mdx-table">
      <table>{children}</table>
    </div>
  );
}
