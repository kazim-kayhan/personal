import { cn } from "@repo/ui/lib/utils";
import type { PropsWithChildren } from "react";

function WithTableOfContentsMock({ children = null }: PropsWithChildren) {
  return (
    <div className={cn("content-wrapper")}>
      <div className={cn("flex flex-row-reverse gap-8", "xl:gap-24")}>
        <div className={cn("-mt-48 hidden", "lg:block")}>
          {/* mock table of contents width */}
          <div className={cn("w-64", "xl:w-[272px]")} />
        </div>
        <div className={cn("min-w-0 flex-1")}>{children}</div>
        <div className={cn("hidden", " lg:block")} />
      </div>
    </div>
  );
}

export default WithTableOfContentsMock;
