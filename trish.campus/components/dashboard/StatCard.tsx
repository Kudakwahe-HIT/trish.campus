import type { ReactNode } from "react";
import { TrendUpIcon } from "./icons";

type StatCardProps = {
  label: string;
  value: string;
  suffix?: string;
  deltaPct?: number;
  icon: ReactNode;
  tint: "navy" | "amber" | "blue" | "emerald";
};

const TINTS: Record<StatCardProps["tint"], { bg: string; badge: string }> = {
  navy: { bg: "bg-hit-navy/[0.06]", badge: "bg-hit-navy text-white" },
  amber: { bg: "bg-amber-50", badge: "bg-amber-500 text-white" },
  blue: { bg: "bg-blue-50", badge: "bg-blue-500 text-white" },
  emerald: { bg: "bg-emerald-50", badge: "bg-emerald-500 text-white" },
};

export function StatCard({ label, value, suffix, deltaPct, icon, tint }: StatCardProps) {
  const colors = TINTS[tint];

  return (
    <div className={`relative overflow-hidden rounded-2xl ${colors.bg} p-5`}>
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className="mt-3 text-[1.75rem] font-semibold leading-none tracking-tight text-slate-900">
        {value}
        {suffix && <span className="ml-1.5 text-sm font-medium text-slate-500">{suffix}</span>}
      </p>
      {typeof deltaPct === "number" && (
        <p className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <TrendUpIcon className="h-3.5 w-3.5" />+{deltaPct}%
        </p>
      )}
      <span
        className={`absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-xl ${colors.badge}`}
      >
        <span className={`h-[18px] w-[18px] [&>svg]:h-full [&>svg]:w-full`}>{icon}</span>
      </span>
    </div>
  );
}
