import { m } from "framer-motion";
import Link from "next/link";

import useContentActivity from "../hooks/useContentActivity";

import { relativeTime } from "../helpers/date";

import type { TContentActivity, TContentActivityReaction } from "../types";
import { mc } from "merge-class";

interface ActivityItemProps {
  data: TContentActivity;
}

function ActivityItem({
  data: { activityType, type, contentTitle, contentType, ...rest },
}: ActivityItemProps) {
  if (activityType === "REACTION") {
    const { count } = rest as Pick<TContentActivityReaction, "count">;

    let reactionType = "";
    switch (type) {
      case "AMAZED":
        reactionType = "😲";
        break;
      case "CLAPPING":
        reactionType = "👏";
        break;
      case "THINKING":
        reactionType = "🧐";
        break;
      default:
        break;
    }

    return (
      <div className={mc("flex flex-wrap items-baseline gap-x-1")}>
        <span>the</span>
        <span
          className={mc(
            "text-accent-600 font-semibold",
            "dark:text-accent-400",
          )}
        >
          {contentTitle}
        </span>
        <span className={mc("lowercase")}>
          {contentType.replace("POST", "BLOG POST")}
        </span>
        <span>got new</span>
        {count !== 1 && (
          <span
            className={mc(
              "border-divider-dark rounded-md border bg-slate-200 px-1 font-mono text-xs font-bold",
              "dark:border-divider-light dark:bg-slate-800",
            )}
          >
            x{count}
          </span>
        )}
        <span>{reactionType}</span>
      </div>
    );
  }

  return (
    <div className={mc("flex flex-wrap items-baseline gap-x-1")}>
      <span>the</span>
      <span
        className={mc("text-accent-600 font-semibold", "dark:text-accent-400")}
      >
        {contentTitle}
      </span>
      <span className={mc("lowercase")}>
        {contentType.replace("POST", "BLOG POST")}
      </span>
      <span>was shared</span>
      {type === "TWITTER" && <span>to Twitter!</span>}
    </div>
  );
}

const animation = {
  hide: { y: -48, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.12,
    },
  },
};

interface ActivityProps {
  onItemClick?: () => void;
}

function Activity({ onItemClick = () => {} }: ActivityProps) {
  const { data, isLoading } = useContentActivity();

  const renderData = () => {
    if (isLoading) {
      return (
        <m.div
          className={mc("text-sm text-slate-700", "dark:text-slate-400")}
          variants={animation}
        >
          retrieving data..
        </m.div>
      );
    }

    if (Array.isArray(data) && data.length === 0) {
      return (
        <m.div
          className={mc("text-sm text-slate-700", "dark:text-slate-400")}
          variants={animation}
        >
          nothing new at the moment.
        </m.div>
      );
    }

    if (!Array.isArray(data)) {
      return (
        <m.div
          className={mc("text-sm text-slate-700", "dark:text-slate-400")}
          variants={animation}
        >
          an internal error occurred.
        </m.div>
      );
    }

    return data.map((activity) => {
      const { createdAt, contentType, slug } = activity;

      const link = contentType === "POST" ? `/blog/${slug}` : `/docs/${slug}`;

      return (
        <m.div key={createdAt} variants={animation}>
          <Link
            href={link}
            onClick={() => {
              onItemClick();
            }}
            className={mc(
              "border-divider-light block rounded-xl border bg-white/60 p-4 text-[13px] backdrop-blur",
              "dark:border-divider-dark dark:bg-slate-900/60",
            )}
          >
            <div
              className={mc(
                "mb-1 flex justify-between text-xs text-slate-600",
                "dark:text-slate-400",
              )}
            >
              <span>{activity.activityType}</span>
              <span>{relativeTime(activity.createdAt)}</span>
            </div>
            <ActivityItem data={activity} />
          </Link>
        </m.div>
      );
    });
  };

  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{
        delayChildren: 0.12,
        staggerChildren: 0.06,
      }}
      className={mc("flex flex-1 flex-col gap-2")}
    >
      <m.div variants={animation} className={mc("px-2 text-xl font-bold")}>
        Recent Activities
      </m.div>
      <div
        className={mc(
          "scrollbar-hide flex flex-1 basis-0 flex-col gap-2 overflow-y-auto p-2 pb-4",
          "sm:pb-8",
        )}
      >
        {renderData()}
      </div>
    </m.div>
  );
}

export default Activity;
