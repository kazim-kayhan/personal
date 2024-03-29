"use client";

import { m } from "framer-motion";

import {
  FigmaIcon,
  FramerMotionIcon,
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from "../../../components/Icons";
import { mc } from "merge-class";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div>
      <m.p
        className={mc("mb-2.5 text-sm text-slate-600", "dark:text-slate-400")}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        current favorite tech stack/tools:
      </m.p>
      <m.ul
        className={mc(
          "flex items-center gap-3.5 text-slate-500",
          "dark:text-slate-500",
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.li variants={animation}>
          <div className={mc("transition duration-200 hover:text-[#3178C6]")}>
            <TypeScriptIcon className={mc("h-6 w-6")} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={mc("transition duration-200 hover:text-[#61DAFB]")}>
            <ReactIcon className={mc("h-6 w-6")} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={mc("transition duration-200 hover:text-[#06B6D4]")}>
            <TailwindCssIcon className={mc("h-6 w-6")} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={mc("transition duration-200 hover:text-[#0055FF]")}>
            <FramerMotionIcon className={mc("h-6 w-6")} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div
            className={mc(
              "transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]",
            )}
          >
            <NextJsIcon className={mc("h-6 w-6")} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={mc("h-3 w-[1px] bg-slate-300 dark:bg-slate-700")} />
        </m.li>
        <m.li variants={animation}>
          <div className={mc("transition duration-200 hover:text-[#007ACC]")}>
            <VSCodeIcon className={mc("h-6 w-6")} />
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={mc("transition duration-200 hover:text-[#F24E1E]")}>
            <FigmaIcon className={mc("h-6 w-6")} />
          </div>
        </m.li>
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
