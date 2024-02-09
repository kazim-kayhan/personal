"use client";

import { cn } from "@repo/ui/lib/utils";
import { m, useAnimationControls } from "framer-motion";
import Image from "next/image";

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  const controls = useAnimationControls();

  return (
    <div>
      <m.div
        className={cn(
          "mb-1 flex items-center gap-1 text-2xl text-slate-600",
          "md:mb-0 md:gap-2 md:text-4xl",
          "dark:text-slate-400",
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        hi!
        <m.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: "right center",
          }}
          animate={controls}
          transition={{
            type: "spring",
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7,
          }}
        >
          <Image
            className={cn("w-7 md:w-10")}
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0,
              });
            }}
            priority
          />
        </m.div>
      </m.div>
      <span className={cn("text-slate-700", "dark:text-slate-300")}>
        <m.span
          className={cn(
            "mb-4 block text-[2.5rem] font-[1000] leading-none",
            "md:mb-6 md:text-7xl",
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{" "}
          <strong className={cn("text-accent-600", "dark:text-accent-500")}>
            Top
          </strong>{" "}
          Front.dev,{" "}
        </m.span>
        <m.h1
          className={cn(
            "block text-base text-slate-600",
            "md:text-xl",
            "dark:text-slate-400",
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <span className={cn("lowercase")}>A</span>{" "}
          <strong
            className={cn(
              "font-bold lowercase text-slate-700",
              "dark:text-slate-300",
            )}
          >
            Front-End Developer
          </strong>{" "}
          who loves intuitive,{" "}
          <span className={cn("block")}>clean and modern UI design.</span>
        </m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;