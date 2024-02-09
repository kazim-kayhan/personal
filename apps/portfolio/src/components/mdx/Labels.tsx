import { cn } from "@repo/ui/lib/utils";
import type { PropsWithChildren, ReactElement } from "react";

interface LabelProps {
  indicator: number;
}

export function Label({
  indicator,
  children = null,
}: PropsWithChildren<LabelProps>) {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <span className={cn("label")}>
      {children}
      <span
        className={cn("label__indicator")}
        style={{ width: `${percentage}%` }}
      />
    </span>
  );
}

interface LabelsProps {
  title: string;
  children: ReactElement<LabelProps> | ReactElement<LabelProps>[];
}

function Labels({ title, children }: LabelsProps) {
  return (
    <div
      className={cn("flex flex-col items-start gap-2", "sm:flex-row sm:gap-6")}
    >
      <div className={cn("w-48", "sm:gap-4 sm:text-right")}>
        <strong className={cn("text-sm")}>{title}</strong>
      </div>
      <div className={cn("flex flex-1 flex-wrap gap-2")}>{children}</div>
    </div>
  );
}

export default Labels;
