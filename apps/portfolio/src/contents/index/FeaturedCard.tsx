import { cn } from "@repo/ui/lib/utils";
import type { ReactElement } from "react";

interface FeaturedCardProps {
  icon: ReactElement;
  title: string;
  desc: string;
}

function FeaturedCard({ icon, title, desc }: FeaturedCardProps) {
  return (
    <div
      className={cn(
        "border-divider-light relative z-10 flex-1 rounded-2xl border bg-white",
        "dark:border-divider-dark dark:bg-slate-900",
      )}
    >
      <div
        className={cn(
          "border-divider-light absolute inset-x-0 inset-y-8 z-[-1] border-t",
          "dark:border-divider-dark",
        )}
      />
      <div
        className={cn(
          "border-divider-light absolute inset-y-0 inset-x-8 z-[-1] border-l",
          "dark:border-divider-dark",
        )}
      />
      <div className={cn("-mt-0.5")}>
        <div
          className={cn(
            "mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-100",
            "dark:bg-slate-800",
          )}
        >
          <div className={cn("-m-2")}>{icon}</div>
          <div
            className={cn(
              "truncate py-2 pr-4 text-sm font-bold text-slate-700",
              "dark:text-slate-300",
            )}
          >
            {title}
          </div>
        </div>
      </div>
      <div
        className={cn(
          "p-4 pl-12 text-sm text-slate-600",
          "dark:text-slate-400",
        )}
      >
        {desc}
      </div>
    </div>
  );
}

export default FeaturedCard;
