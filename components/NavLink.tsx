import Link from "next/link";
import { ReactNode } from "react";

type NavProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
};

export function NavLink({ href, children }: NavProps) {
  return (
    <Link
      href={href}
      className="
        text-background text-lg relative
        after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
        after:bg-(--lavander)
        hover:after:w-full after:transition-all
      "
    >
      {children}
    </Link>
  );
}

export function MobileNavLink({ href, children, onClick }: NavProps) {
  return (
    <Link href={href} onClick={onClick} className="font-medium">
      {children}
    </Link>
  );
}
