"use client";

import { Menu } from "@headlessui/react";
import { m } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";

import { ChevronRightIcon } from "../Icons";

import { cn } from "@repo/ui/lib/utils";
import type { HTMLAttributes, Ref } from "react";
import type { UrlObject } from "url";

const animation = {
  hide: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

type LinkRefProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string | UrlObject;
};

const LinkRef = forwardRef(
  ({ href, children, ...rest }: LinkRefProps, ref: Ref<HTMLAnchorElement>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  ),
);

LinkRef.displayName = "LinkRef";

type NavLink = {
  href: string;
  title: string;
};

interface NavLinkDropdownProps {
  title: string;
  items: Array<NavLink>;
}

function NavLinkDropdown({ title, items }: NavLinkDropdownProps) {
  return (
    <div className="relative">
      <Menu>
        {({ open }: { open: boolean }) => (
          <>
            <Menu.Button className={cn("nav-link nav-link--label ml-2")}>
              {title}
              <ChevronRightIcon
                className={cn("h-3 w-3 rotate-90", [open && "-rotate-90"])}
              />
            </Menu.Button>
            {open && (
              <Menu.Items
                static
                as={m.div}
                variants={animation}
                initial="hide"
                animate="show"
                className={cn(
                  "border-divider-light absolute top-11 flex w-40 flex-col rounded-2xl border bg-white/70 p-2 backdrop-blur",
                  "dark:border-divider-dark dark:bg-slate-900/80",
                )}
              >
                {items.map((item) => (
                  <Menu.Item key={item.href}>
                    {({ active }: { active: boolean }) => (
                      <LinkRef
                        href={item.href}
                        className={cn("nav-link h-8 text-xs", [
                          active && "nav-link--focus",
                        ])}
                      >
                        {item.title}
                      </LinkRef>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}

export default NavLinkDropdown;
