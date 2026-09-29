"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileTextIcon, GridIcon } from "./icons";

const MOBILE_NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: GridIcon },
  { label: "Applications", href: "/dashboard/applications", icon: FileTextIcon },
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 border-b border-slate-100 bg-white px-4 py-2 lg:hidden">
      {MOBILE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive ? "bg-hit-navy text-white" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
