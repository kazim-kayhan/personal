import { mc } from "merge-class";
import type { PropsWithChildren } from "react";

function SectionContent({ children }: PropsWithChildren) {
  return (
    <div
      className={mc(
        "background-grid background-grid--fade-out mt-20 border-t border-divider-light",
        "dark:border-divider-dark",
      )}
    >
      <div className={mc("content-wrapper pb-20")}>{children}</div>
    </div>
  );
}

export default SectionContent;
