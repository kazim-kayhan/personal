"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";
import { mc } from "merge-class";

interface NavLogoProps {
  href: string;
  title: string;
}

function NavLogo({ href, title }: NavLogoProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={mc("flex h-9 items-center gap-2 rounded-xl px-2")}
      aria-label={title}
    >
      <Logo active={isActive} />
    </Link>
  );
}

export default NavLogo;
