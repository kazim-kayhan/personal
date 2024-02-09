import { cn } from "@repo/ui/lib/utils";
import type { PropsWithChildren } from "react";

function SectionContent({ children }: PropsWithChildren) {
  return (
    <div
      className={cn(
        "background-grid background-grid--fade-out mt-20 border-t border-divider-light",
        "dark:border-divider-dark",
      )}
    >
      <div className={cn("content-wrapper pb-20")}>{children}</div>
    </div>
  );
}

export default SectionContent;
