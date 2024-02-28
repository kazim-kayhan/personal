"use client";

import { m } from "framer-motion";
import Link from "next/link";

import { mc } from "merge-class";
import { formatDateRelative, formatLang } from "../../../helpers/post";
import { TPostFrontMatter } from "../../../types";
import CountUp from "../../CountUp";
import { ChevronRightIcon, InsightIcon, PinIcon } from "../../Icons";

type PostPreviewProps = TPostFrontMatter & {
  slug: string;
  views: number;
  shares: number;
  pinned?: boolean;
};

function PostPreview({
  title,
  description,
  date,
  slug,
  lang,
  views,
  shares,
  pinned = false,
}: PostPreviewProps) {
  return (
    <article lang={lang}>
      <Link
        key={slug}
        href={`blog/${slug}`}
        className={mc(
          "group relative mb-6 block overflow-hidden bg-gradient-to-t",
          "sm:mb-0 sm:rounded-2xl",
          pinned
            ? [
                "border-divider-light",
                "sm:border sm:p-4 md:mt-6 md:p-6",
                "dark:border-divider-dark",
              ]
            : ["sm:p-4 md:p-6"],
        )}
      >
        {/* shine effect */}
        {pinned && (
          <m.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 1, 0, 0] }}
            transition={{
              delay: 1.4,
              duration: 1.84,
              ease: [0.85, 0, 0.15, 1],
            }}
            className="absolute -inset-x-64 inset-y-0 z-[-1]"
          >
            <div
              className={mc(
                "absolute inset-y-0 w-10 -rotate-45 scale-[4] bg-black opacity-[0.08]",
                "dark:bg-white dark:opacity-[0.14]",
              )}
            />
          </m.div>
        )}
        {pinned && (
          <div
            className={mc(
              "relative mb-4 flex items-center gap-2 font-semibold text-slate-500",
              "sm:text-slate-500",
              "dark:sm:text-accent-400 dark:text-slate-400",
            )}
          >
            <PinIcon className={mc("h-5 w-5")} />
            Pinned Post
          </div>
        )}
        <div
          className={mc(
            "text-slate mb-2 flex flex-col gap-2 text-xs text-slate-500",
            "dark:text-slate-400 md:mb-1",
          )}
        >
          <div className={mc("flex gap-1")}>
            <time dateTime={date} className={mc("first-letter:uppercase")}>
              {formatDateRelative(date)}
            </time>
            <span>&middot;</span>
            <span>{formatLang(lang)}</span>
          </div>
        </div>
        <div className={mc("mb-2")}>
          <h2
            className={mc(
              "text-xl font-extrabold text-slate-700",
              "md:text-2xl",
              "dark:text-slate-300",
            )}
          >
            {title}
          </h2>
        </div>
        <p
          className={mc(
            "mb-3 block leading-relaxed text-slate-600",
            "dark:text-slate-400",
          )}
        >
          {description}
        </p>
        <div
          className={mc(
            "flex items-center gap-2 text-xs text-slate-600",
            "dark:text-slate-400",
            pinned ? ["mb-4", "sm:mb-1"] : "mb-4",
          )}
        >
          <InsightIcon className={mc("-mt-0.5 h-4 w-4")} />
          <span className={mc("flex gap-1.5")}>
            <span
              className={mc("flex items-center gap-1.5")}
              title="Number of view(s)"
            >
              <CountUp from={0} to={views} /> Views
            </span>
            <span>&middot;</span>
            <span
              className={mc("flex items-center gap-1.5")}
              title="Number of share(s)"
            >
              <CountUp from={0} to={shares} /> Shares
            </span>
          </span>
        </div>
        <div
          className={mc(
            "text-accent-600 items-center gap-1 text-sm font-semibold",
            "dark:text-accent-400",
            pinned ? ["flex", "sm:hidden"] : "flex",
          )}
        >
          read more{" "}
          <ChevronRightIcon className="group-hover:animate-bounce-x mt-1 h-3 w-3 transition" />
        </div>
      </Link>
    </article>
  );
}

export default PostPreview;
