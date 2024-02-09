import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";

import type { ReactNode } from "react";

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
};

function NavLink({ title, href, icon = null }: NavLinkProps) {
  return (
    <Link href={href} className={cn("nav-link")}>
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
