import React from "react";

import { ChevronRightIcon } from "../Icons";
import NavLink from "./NavLink";

import { cn } from "@repo/ui/lib/utils";
import type { NavLinkProps } from "./NavLink";

interface NavLinkExpandedProps {
  title: string;
  items: Array<NavLinkProps>;
}

function NavLinkExpanded({ title, items }: NavLinkExpandedProps) {
  return (
    <div className={cn("flex")}>
      <div
        className={cn("nav-link nav-link--label pointer-events-none ml-2 mr-2")}
      >
        {title}
        <ChevronRightIcon className={cn("h-3 w-3")} />
      </div>
      <ul className={cn("flex items-center")}>
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <NavLink title={item.title} href={item.href} />
            </li>
            {idx !== items.length - 1 && (
              <li>
                <div className="nav-link__separator">&middot;</div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default NavLinkExpanded;
