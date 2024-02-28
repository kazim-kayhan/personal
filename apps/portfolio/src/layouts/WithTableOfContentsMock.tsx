import { mc } from "merge-class";
import type { PropsWithChildren } from "react";

function WithTableOfContentsMock({ children = null }: PropsWithChildren) {
  return (
    <div className={mc("content-wrapper")}>
      <div className={mc("flex flex-row-reverse gap-8", "xl:gap-24")}>
        <div className={mc("-mt-48 hidden", "lg:block")}>
          {/* mock table of contents width */}
          <div className={mc("w-64", "xl:w-[272px]")} />
        </div>
        <div className={mc("min-w-0 flex-1")}>{children}</div>
        <div className={mc("hidden", " lg:block")} />
      </div>
    </div>
  );
}

export default WithTableOfContentsMock;
