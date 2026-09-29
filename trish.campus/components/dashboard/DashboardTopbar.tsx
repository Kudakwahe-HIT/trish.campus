import { BellIcon } from "./icons";

export function DashboardTopbar() {
  return (
    <header className="flex items-center justify-end gap-3 border-b border-slate-100 bg-white px-6 py-4">
      <button
        type="button"
        aria-label="Notifications"
        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
      >
        <BellIcon className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2.5 rounded-full border border-slate-100 py-1 pl-1 pr-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hit-navy text-xs font-semibold text-white">
          AO
        </span>
        <span className="text-sm font-medium text-slate-700">Admissions Officer</span>
      </div>
    </header>
  );
}
