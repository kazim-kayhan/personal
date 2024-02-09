import { cn } from "@repo/ui/lib/utils";
import type { PropsWithChildren } from "react";

interface StackProps {
  spacing: number;
}

export function VStack({
  spacing,
  children = null,
}: PropsWithChildren<StackProps>) {
  return (
    <div className={cn("flex flex-col flex-wrap")} style={{ gap: spacing }}>
      {children}
    </div>
  );
}

export function HStack({
  spacing,
  children = null,
}: PropsWithChildren<StackProps>) {
  return (
    <div className={cn("flex flex-row flex-wrap")} style={{ gap: spacing }}>
      {children}
    </div>
  );
}
