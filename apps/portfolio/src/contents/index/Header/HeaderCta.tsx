"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { cn } from "@repo/ui/lib/utils";
import { DocumentIcon } from "../../../components/Icons";

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderCtaProps {
  isFree?: boolean;
  isFreeAnimationDuration?: number;
}

function ButtonContactMe() {
  return (
    <Link
      href="/work/contact"
      className={cn(
        "button animate-bounce button--solid min-w-[128px]",
        "md:button--big",
      )}
    >
      Get in Touch
    </Link>
  );
}

function ButtonResume() {
  return (
    <a
      href="/kazimkayhan.pdf"
      target="_blank"
      rel="noreferrer nofollow"
      className={cn("button button--ghost px-2", "md:button--big md:px-2")}
    >
      <DocumentIcon className={cn("h-5 w-5")} />
      RESUME
    </a>
  );
}

function AvailableForHire() {
  return (
    <div
      className={cn(
        "button button--ghost text-accent-500 pointer-events-none gap-2.5 px-2.5",
        "md:button--big md:px-2.5",
        "dark:text-accent-400",
      )}
    >
      <span className={cn("relative flex h-2 w-2")}>
        <span
          className={cn(
            "bg-accent-600 absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75",
            "dark:bg-accent-300",
          )}
        />
        <span
          className={cn(
            "bg-accent-500 relative inline-flex h-2 w-2 rounded-full",
            "dark:bg-accent-400",
          )}
        />
      </span>
      AVAILABLE FOR HIRE
    </div>
  );
}

function HeaderCta({
  isFree = true,
  isFreeAnimationDuration = 4,
}: HeaderCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

  return (
    <m.div className={cn("flex gap-2")} initial="hide" animate="show">
      <m.div
        className={cn("relative z-20")}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <ButtonContactMe />
      </m.div>
      {isFree ? (
        <m.div
          variants={animation}
          transition={{ delay: 2.8 }}
          className={cn("relative z-10")}
        >
          <m.div
            variants={isFreeVariants}
            transition={{ delay: isFreeAnimationDuration + 1.5, duration: 0.4 }}
          >
            <AvailableForHire />
          </m.div>
          <m.div
            className={cn("absolute top-0 left-0")}
            initial={{ x: -48, opacity: 0, pointerEvents: "none" }}
            animate={{ x: 0, opacity: 1, pointerEvents: "auto" }}
            transition={{ delay: isFreeAnimationDuration + 1.6, duration: 0.4 }}
          >
            <ButtonResume />
          </m.div>
        </m.div>
      ) : (
        <m.div variants={animation} transition={{ delay: 0.5 }}>
          <ButtonResume />
        </m.div>
      )}
    </m.div>
  );
}

export default HeaderCta;
