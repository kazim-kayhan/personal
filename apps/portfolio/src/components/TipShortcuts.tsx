import { m } from "framer-motion";
import { Fragment } from "react";

import { KeyboardIcon } from "./Icons";
import Kbd from "./Kbd";
import { mc } from "merge-class";

const shortcuts: Array<{
  title: string;
  keys: Array<string>;
}> = [
  {
    title: "Open Quick Access",
    keys: ["Q"],
  },
  {
    title: "Close Quick Access",
    keys: ["Q", "Esc"],
  },
  {
    title: "Toggle Dark Mode",
    keys: ["D"],
  },
  {
    title: "Toggle Focus",
    keys: ["F"],
  },
];

const animation = {
  hide: { x: -24, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.12,
    },
  },
};

function TipShortcuts() {
  return (
    <m.div
      initial="hide"
      animate="show"
      transition={{ delayChildren: 0.7, staggerChildren: 0.14 }}
      className={mc("")}
    >
      <div className={mc("mb-4 flex items-center gap-4 text-xl font-bold")}>
        <KeyboardIcon className={mc("h-8 w-8")} />
        TIP: Shortcuts
      </div>
      <p className={mc("mb-4 text-sm text-slate-700", "dark:text-slate-400")}>
        Navigate the site with ease using keyboard shortcuts.
      </p>
      <div className={mc("flex flex-col text-[13px]")}>
        {shortcuts.map(({ title, keys }) => (
          <m.div
            key={title}
            variants={animation}
            className={mc(
              "flex items-center justify-between border-b border-slate-300 py-2",
              "dark:border-divider-dark",
            )}
          >
            <div className={mc("text-slate-700", "dark:text-slate-400")}>
              {title}
            </div>
            <div className={mc("flex items-center gap-2 text-[12px]")}>
              {keys.map((key, i) => (
                <Fragment key={key}>
                  <Kbd>{key}</Kbd>
                  {i !== keys.length - 1 && <span>or</span>}
                </Fragment>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </m.div>
  );
}

export default TipShortcuts;
