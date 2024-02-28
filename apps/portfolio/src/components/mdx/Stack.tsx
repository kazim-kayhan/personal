import { mc } from "merge-class";
import type { PropsWithChildren } from "react";

interface StackProps {
  spacing: number;
}

export function VStack({
  spacing,
  children = null,
}: PropsWithChildren<StackProps>) {
  return (
    <div className={mc("flex flex-col flex-wrap")} style={{ gap: spacing }}>
      {children}
    </div>
  );
}

export function HStack({
  spacing,
  children = null,
}: PropsWithChildren<StackProps>) {
  return (
    <div className={mc("flex flex-row flex-wrap")} style={{ gap: spacing }}>
      {children}
    </div>
  );
}
