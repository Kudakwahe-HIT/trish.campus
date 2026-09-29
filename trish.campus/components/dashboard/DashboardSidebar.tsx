"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChartIcon,
  BookIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  GridIcon,
  SettingsIcon,
  UsersIcon,
} from "./icons";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: GridIcon },
  { label: "Applications", href: "/dashboard/applications", icon: FileTextIcon },
  { label: "Applicants", icon: UsersIcon },
  { label: "Documents", icon: FolderIcon },
  { label: "Payments", icon: CreditCardIcon },
  { label: "Programmes", icon: BookIcon },
  { label: "Reports", icon: BarChartIcon },
  { label: "Settings", icon: SettingsIcon },
] as const;

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-100 bg-white px-4 py-6 lg:flex">
      <div className="flex items-center gap-2.5 px-2">
        <Image src="/logo-hit.png" alt="TRISH" width={32} height={32} className="h-8 w-8 object-contain" />
        <div>
          <p className="text-sm font-semibold leading-tight text-slate-900">TRISH</p>
          <p className="text-xs leading-tight text-slate-500">Admissions Console</p>
        </div>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = "href" in item && pathname === item.href;

          if (!("href" in item)) {
            return (
              <span
                key={item.label}
                className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300"
                title="Coming soon"
              >
                <Icon className="h-[18px] w-[18px]" />
                {item.label}
              </span>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-hit-navy text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
