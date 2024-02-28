import Link from "next/link";

import { ExternalLink, GitHubIcon, TwitterIcon } from "./Icons";

import dayjs from "../utils/dayjs";
import { mc } from "merge-class";

function LastUpdate() {
  return (
    <a
      href="https://github.com/kazim-kayhan/portfolio"
      target="_blank"
      rel="noreferrer nofollow"
      className={mc("hover:underline")}
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
      <span className={mc("footer-link footer-link--soon")}>
        {title}
        <span className={mc("footer-link__label")}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={mc("footer-link")}>
        {title}
        {label && <span className={mc("footer-link__label")}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={mc("footer-link")}
    >
      {title}
      <ExternalLink className={mc("h-3.5 w-3.5")} />
      {label && <span className={mc("footer-link__label")}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={mc("flex-1")}>
      <div
        className={mc(
          "mb-2 px-2 text-[13px] text-slate-600",
          "dark:text-slate-400",
        )}
      >
        {title}
      </div>
      <ul className={mc("flex flex-col")}>
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
    <div className={mc("max-w-[348px]")}>
      <div
        className={mc("mb-3 text-[13px] text-slate-600", "dark:text-slate-400")}
      >
        About Me
      </div>
      <p className={mc("mb-4 font-normal leading-relaxed")}>
        I&apos;m Kazim, a <strong>front-end developer</strong> who loves
        intuitive, clean and modern UI design.
      </p>
      <ul className={mc("-ml-2 flex gap-1")}>
        <li>
          <a
            href="https://twitter.com/topfront"
            target="_blank"
            rel="noreferrer nofollow"
            className={mc("flex h-9 w-9 items-center justify-center")}
            aria-label="My Twitter profile"
            title="My Twitter profile"
          >
            <TwitterIcon className={mc("h-6 w-6")} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/topfront"
            target="_blank"
            rel="noreferrer nofollow"
            className={mc("flex h-9 w-9 items-center justify-center")}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={mc("h-5 w-5")} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={mc(
        "background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900",
        "dark:border-divider-dark dark:text-slate-200",
      )}
    >
      <div className={mc("content-wrapper")}>
        <div className={mc("py-10 font-semibold")}>
          <div className={mc("flex flex-col-reverse gap-16", "lg:flex-row")}>
            <div className={mc("flex-1")}>
              <FooterDescription />
            </div>
            <div
              className={mc(
                "-mx-2 flex flex-1 flex-col gap-8",
                "sm:flex-row sm:gap-16 lg:mx-0",
              )}
            >
              <div className={mc("flex", "sm:gap-16")}>
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
              <div className={mc("flex", "sm:gap-16")}>
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
          className={mc(
            "border-divider-light flex justify-between border-t py-6 text-xs",
            "dark:border-divider-dark",
          )}
        >
          <div className={mc("font-semibold")}>
            &copy; {dayjs().format("YYYY")}, Kazim Kayhan
          </div>
          <div className={mc("text-slate-500", "dark:text-slate-400")}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
