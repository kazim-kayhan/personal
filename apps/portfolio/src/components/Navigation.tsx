"use client";

import { GitHubIcon, TwitterIcon } from "./Icons";
import NavIcon from "./navigations/NavIcon";
import NavIconQuickAccess from "./navigations/NavIconQuickAccess";
import NavLink from "./navigations/NavLink";
import NavLinkDropdown from "./navigations/NavLinkDropdown";
import NavLinkExpanded from "./navigations/NavLinkExpanded";
import NavLogo from "./navigations/NavLogo";

import { cn } from "@repo/ui/lib/utils";
import useOnScroll from "../hooks/useOnScroll";

const workLinks = [
  { title: "Skills & Tools", href: "/work/skills-and-tools" },
  { title: "Experience", href: "/work/experience" },
  { title: "Contact", href: "/work/contact" },
];

function Navbar() {
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={cn("fixed top-0 right-0 left-0 z-[1000]", "fm:absolute")}
    >
      <div
        className={cn(
          "fixed inset-0 h-16",
          [
            isScrolled === true && [
              "border-divider-light border-b bg-white/70 backdrop-blur",
              "dark:border-divider-dark dark:bg-slate-900/80",
            ],
          ],
          "fm:hidden",
        )}
      />
      <div className={cn("h-2", [isScrolled === true && ["-mt-2"]])} />
      <div className={cn("content-wrapper-max")}>
        <div
          className={cn(
            "relative z-50 flex h-16 items-center justify-between px-2 text-sm",
            "md:px-4",
          )}
        >
          <nav className={cn("flex", "md:gap-2")} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={cn("flex items-center", "md:gap-1")}>
              <li>
                <NavLink title="Projects" href="/projects" />
              </li>
              <li>
                <NavLink title="Blog" href="/blog" />
              </li>
              <li>
                <NavLink title="T.I.L" href="/today-i-learned" />
              </li>
              <li className={cn("lg:hidden")} data-accent="blue">
                <NavLinkDropdown title="Work" items={workLinks} />
              </li>
              <li className={cn("hidden lg:block")} data-accent="blue">
                <NavLinkExpanded title="Work" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className={cn("flex items-center")}>
            <li className={cn("hidden", "sm:block")}>
              <NavIcon
                href="https://twitter.com/topfront"
                icon={<TwitterIcon className={cn("h-5 w-5")} />}
                title="Twitter"
              />
            </li>
            <li className={cn("hidden", "sm:block")}>
              <NavIcon
                href="https://github.com/topfront"
                icon={<GitHubIcon className={cn("h-5 w-5")} />}
                title="GitHub"
              />
            </li>
            <li className={cn("hidden", "sm:block")}>
              <div
                className={cn(
                  "ml-2 mr-4 h-3 w-[1px] bg-slate-200",
                  "dark:bg-slate-700",
                )}
              />
            </li>
            <li className={cn("mr-2")}>
              <NavIconQuickAccess />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
