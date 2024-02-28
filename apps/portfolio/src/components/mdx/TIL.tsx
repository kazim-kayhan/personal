import { mc } from "merge-class";
import { CheckCircleIcon, XCircleIcon } from "../../components/Icons";

import { formatDate } from "../../helpers/post";

import type { PropsWithChildren, ReactElement } from "react";

export function Do({ children = null }: PropsWithChildren) {
  return (
    <div className={mc("mdx-do", "md:min-w-0 md:flex-1")}>
      <div
        className={mc(
          "relative flex items-start gap-2 pb-2 text-sm font-semibold text-slate-700",
          "dark:text-slate-300",
        )}
      >
        <div className={mc("")}>
          <CheckCircleIcon
            className={mc("h-5 w-5 text-green-600", "dark:text-green-300")}
          />
          <div
            className={mc(
              "absolute left-2.5 h-full w-[1px] bg-green-400 opacity-50",
              "dark:bg-green-900",
            )}
          />
        </div>
        Do
      </div>
      <div className={mc("")}>{children}</div>
    </div>
  );
}

export function Dont({ children = null }: PropsWithChildren) {
  return (
    <div className={mc("mdx-dont", "md:min-w-0 md:flex-1")}>
      <div
        className={mc(
          "relative flex items-start gap-2 pb-2 text-sm font-semibold text-slate-700",
          "dark:text-slate-300",
        )}
      >
        <div className={mc("")}>
          <XCircleIcon
            className={mc("h-5 w-5 text-red-600", "dark:text-red-300")}
          />
          <div
            className={mc(
              "absolute left-2.5 h-full w-[1px] bg-red-400 opacity-50",
              "dark:bg-red-900",
            )}
          />
        </div>
        Don&apos;t
      </div>
      <div className={mc("")}>{children}</div>
    </div>
  );
}

export function DnD({ children = null }: PropsWithChildren) {
  return (
    <div
      className={mc(
        "border-divider-light mdx-dnd flex flex-col gap-6 rounded-xl",
        "lg:flex-row",
        "dark:border-divider-dark",
      )}
    >
      {children}
    </div>
  );
}

export function ItemTags({ children = null }: PropsWithChildren) {
  return <div className={mc("-mt-1 mb-4 flex gap-2")}>{children}</div>;
}

export function ItemTag({ children = null }: PropsWithChildren) {
  return (
    <div
      className={mc(
        "bg-accent-600/[0.08] text-accent-600 inline-flex h-6 items-center gap-1 rounded-full px-2 text-[13px] font-medium",
        "dark:text-accent-400 dark:dark:bg-accent-400/10 dark:font-normal",
      )}
    >
      #{children}
    </div>
  );
}

export function Item({ children = null }: PropsWithChildren) {
  return (
    <article className={mc("", "md:pb-16")}>
      <div
        className={mc(
          "pointer-events-none sticky top-[86px] -ml-8 pb-12",
          "md:-ml-12 lg:-ml-24",
          "fm:relative fm:top-0",
        )}
      >
        <div
          className={mc(
            "absolute -ml-0.5 mt-2.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-white",
            "md:-ml-3 md:mt-2 md:h-5 md:w-5",
            "dark:border-slate-300 dark:bg-slate-900",
          )}
        />
        <div
          className={mc(
            "absolute z-[-1] mt-4 -ml-2 w-8 border border-slate-700",
            "md:-ml-4 md:w-10 lg:w-12",
            "dark:border-slate-300",
          )}
        />
      </div>
      <div className={mc("-mt-12")}>{children}</div>
    </article>
  );
}

interface ItemsProps {
  date: string;
  children?: ReactElement<typeof Item> | ReactElement<typeof Item>[];
}

export function Items({ date, children }: PropsWithChildren<ItemsProps>) {
  return (
    <div className={mc("flex flex-row gap-6", "md:gap-12 lg:gap-24")}>
      <div className={mc("hidden", "md:block md:pb-24")}>
        <div
          className={mc(
            "mt-4 pt-1.5 md:sticky md:top-[86px]",
            "fm:relative fm:top-0",
          )}
        >
          <div
            className={mc(
              "font-mono font-bold text-slate-700",
              "md:text-right",
              "dark:text-slate-300",
            )}
          >
            <time className={mc("md:block lg:hidden")} dateTime={date}>
              {date}
            </time>
            <time className={mc("md:hidden lg:block")} dateTime={date}>
              {formatDate(date)}
            </time>
          </div>
        </div>
      </div>
      <div
        className={mc(
          "border-divider-light items-stretch border",
          "dark:border-divider-dark",
        )}
      />
      <div
        className={mc(
          "flex min-w-0 flex-1 flex-col gap-16 py-8",
          "md:gap-0 md:py-4",
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default {
  Items,
  Item,
  ItemTags,
  ItemTag,
  DnD,
  Do,
  Dont,
};
