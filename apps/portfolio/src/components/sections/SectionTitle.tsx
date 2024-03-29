import Link from "next/link";

import { ChevronRightIcon } from "../Icons";

import type { ReactNode } from "react";
import { mc } from "merge-class";

interface SectionTitleProps {
  as?: "h2" | "h3";
  title: string;
  caption: string;
  description: string | ReactNode;
  button?: {
    title: string;
    href: string;
  } | null;
}

function SectionTitle({
  as = "h2",
  title,
  caption,
  description,
  button = null,
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className={mc("content-wrapper", "z-10")}>
      <Heading
        className={mc(
          "text-accent-600 mb-2 block font-black",
          "lg:mb-4",
          "dark:text-accent-400",
        )}
      >
        {caption}
      </Heading>
      <p
        className={mc(
          "mb-4 text-3xl font-black text-slate-700",
          "lg:text-4xl",
          "dark:text-slate-200 flex z-[9999]",
        )}
      >
        {title}
      </p>
      <p className={mc("max-w-lg text-slate-600", "dark:text-slate-400")}>
        {description}
      </p>
      {button && (
        <div className={mc("mt-4", "md:mt-6")}>
          <Link href={button.href} className={mc("button button--soft")}>
            {button.title}
            <ChevronRightIcon className="mt-0.5 h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
