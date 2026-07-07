"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 mix-blend-difference md:px-8">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6">
        <Link
          href="/"
          className="font-sans text-2xl font-semibold tracking-normal text-white md:text-3xl"
          aria-label="PLOTO home"
        >
          PLOTO
        </Link>
        <nav className="hidden items-center gap-7 text-xs font-medium uppercase text-white md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-opacity hover:opacity-100",
                pathname === item.href ? "opacity-100" : "opacity-68"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="border-b border-white pb-0.5 text-xs font-medium uppercase text-white"
        >
          Start
        </Link>
      </div>
    </header>
  );
}
