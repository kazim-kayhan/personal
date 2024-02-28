import { mc } from "merge-class";
import Link from "next/link";

import type { ReactNode } from "react";

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
};

function NavLink({ title, href, icon = null }: NavLinkProps) {
  return (
    <Link href={href} className={mc("nav-link")}>
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
