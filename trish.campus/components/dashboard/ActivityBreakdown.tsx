import type { APPLICATION_ACTIVITY } from "@/lib/dashboard/mock-data";

type ActivityItem = (typeof APPLICATION_ACTIVITY)[number];

const TONE_BAR: Record<ActivityItem["tone"], string> = {
  neutral: "bg-slate-400",
  warning: "bg-amber-500",
  info: "bg-blue-500",
  good: "bg-emerald-500",
  critical: "bg-red-500",
};

export function ActivityBreakdown({ items }: { items: ActivityItem[] }) {
  const max = Math.max(...items.map((item) => item.value));

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6">
      <h3 className="text-base font-semibold text-slate-900">Applications</h3>
      <div className="mt-1 border-b border-slate-100 pb-5" />
      <ul className="space-y-4 pt-1">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-4">
            <span className="w-36 shrink-0 text-sm text-slate-600">{item.label}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <span
                className={`block h-full rounded-full ${TONE_BAR[item.tone]}`}
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </span>
            <span className="w-14 shrink-0 text-right text-sm font-semibold tabular-nums text-slate-900">
              {item.value.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
