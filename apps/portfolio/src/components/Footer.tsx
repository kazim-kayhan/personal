import Link from "next/link";

import { ExternalLink, GitHubIcon, TwitterIcon } from "./Icons";

import { cn } from "@repo/ui/lib/utils";
import dayjs from "../utils/dayjs";

function LastUpdate() {
  return (
    <a
      href="https://github.com/kazim-kayhan/portfolio"
      target="_blank"
      rel="noreferrer nofollow"
      className={cn("hover:underline")}
    >
      <span>see the recent update on GitHub</span>
    </a>
  );
}

interface FooterLinkProps {
  title: string;
  href: string;
  label?: "new" | "soon";
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === "soon") {
    return (
      <span className={cn("footer-link footer-link--soon")}>
        {title}
        <span className={cn("footer-link__label")}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={cn("footer-link")}>
        {title}
        {label && <span className={cn("footer-link__label")}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={cn("footer-link")}
    >
      {title}
      <ExternalLink className={cn("h-3.5 w-3.5")} />
      {label && <span className={cn("footer-link__label")}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={cn("flex-1")}>
      <div
        className={cn(
          "mb-2 px-2 text-[13px] text-slate-600",
          "dark:text-slate-400",
        )}
      >
        {title}
      </div>
      <ul className={cn("flex flex-col")}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={cn("max-w-[348px]")}>
      <div
        className={cn("mb-3 text-[13px] text-slate-600", "dark:text-slate-400")}
      >
        About Me
      </div>
      <p className={cn("mb-4 font-normal leading-relaxed")}>
        I&apos;m Kazim, a <strong>front-end developer</strong> who loves
        intuitive, clean and modern UI design.
      </p>
      <ul className={cn("-ml-2 flex gap-1")}>
        <li>
          <a
            href="https://twitter.com/topfront"
            target="_blank"
            rel="noreferrer nofollow"
            className={cn("flex h-9 w-9 items-center justify-center")}
            aria-label="My Twitter profile"
            title="My Twitter profile"
          >
            <TwitterIcon className={cn("h-6 w-6")} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/topfront"
            target="_blank"
            rel="noreferrer nofollow"
            className={cn("flex h-9 w-9 items-center justify-center")}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={cn("h-5 w-5")} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={cn(
        "background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900",
        "dark:border-divider-dark dark:text-slate-200",
      )}
    >
      <div className={cn("content-wrapper")}>
        <div className={cn("py-10 font-semibold")}>
          <div className={cn("flex flex-col-reverse gap-16", "lg:flex-row")}>
            <div className={cn("flex-1")}>
              <FooterDescription />
            </div>
            <div
              className={cn(
                "-mx-2 flex flex-1 flex-col gap-8",
                "sm:flex-row sm:gap-16 lg:mx-0",
              )}
            >
              <div className={cn("flex", "sm:gap-16")}>
                <FooterGroup
                  title="Work"
                  links={[
                    { title: "Contact", href: "/work/contact" },
                    { title: "Experience", href: "/work/experience" },
                    {
                      title: "Skills and Tools",
                      href: "/work/skills-and-tools",
                    },
                  ]}
                />
                <FooterGroup
                  title="Learn"
                  links={[
                    {
                      title: "Docs",
                      href: "/docs",
                    },
                    {
                      title: "Personal Blog",
                      href: "/blog",
                    },
                    {
                      title: "T.I.L",
                      href: "/today-i-learned",
                      label: "new",
                    },
                  ]}
                />
              </div>
              <div className={cn("flex", "sm:gap-16")}>
                <FooterGroup
                  title="This Site"
                  links={[
                    {
                      title: "Source Code",
                      href: "https://github.com/kazim-kayhan/portfolio",
                      isInternal: false,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "border-divider-light flex justify-between border-t py-6 text-xs",
            "dark:border-divider-dark",
          )}
        >
          <div className={cn("font-semibold")}>
            &copy; {dayjs().format("YYYY")}, Kazim Kayhan
          </div>
          <div className={cn("text-slate-500", "dark:text-slate-400")}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
