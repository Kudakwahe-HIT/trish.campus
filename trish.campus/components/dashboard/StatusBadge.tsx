import type { ApplicationStatus } from "@/lib/dashboard/mock-data";
import { DotIcon } from "./icons";

const STATUS_STYLES: Record<ApplicationStatus, { label: string; className: string; dot: string }> = {
  new: {
    label: "New",
    className: "bg-slate-100 text-slate-600",
    dot: "text-slate-500",
  },
  review: {
    label: "Under Review",
    className: "bg-amber-50 text-amber-700",
    dot: "text-amber-500",
  },
  approved: {
    label: "Approved",
    className: "bg-emerald-50 text-emerald-700",
    dot: "text-emerald-500",
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-50 text-red-700",
    dot: "text-red-500",
  },
};

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  const style = STATUS_STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${style.className}`}
    >
      <DotIcon className={`h-1.5 w-1.5 ${style.dot}`} />
      {style.label}
    </span>
  );
}
