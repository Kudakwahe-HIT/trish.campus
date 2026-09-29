"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Application, ApplicationStatus } from "@/lib/dashboard/mock-data";
import { StatusBadge } from "./StatusBadge";
import { ChevronDownIcon, DownloadIcon, SearchIcon, SlidersIcon } from "./icons";

const TABS: { label: string; value: ApplicationStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "New", value: "new" },
  { label: "Under Review", value: "review" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

function exportToCsv(rows: Application[]) {
  const header = ["Application", "Applicant", "Programme", "Submitted", "Status", "Nationality", "Payment", "Documents"];
  const lines = rows.map((row) =>
    [
      row.id,
      row.applicant,
      row.programme,
      row.submitted,
      row.status,
      row.nationality,
      row.paymentStatus,
      row.documentStatus,
    ]
      .map((value) => `"${String(value).replace(/"/g, '""')}"`)
      .join(",")
  );
  const csv = [header.join(","), ...lines].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `applications-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

export function ApplicationsExplorer({ applications }: { applications: Application[] }) {
  const [tab, setTab] = useState<ApplicationStatus | "all">("all");
  const [query, setQuery] = useState("");
  const [programme, setProgramme] = useState("all");
  const [nationality, setNationality] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);

  const programmes = useMemo(
    () => Array.from(new Set(applications.map((a) => a.programme))).sort(),
    [applications]
  );
  const nationalities = useMemo(
    () => Array.from(new Set(applications.map((a) => a.nationality))).sort(),
    [applications]
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setFiltersOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    return applications.filter((app) => {
      if (tab !== "all" && app.status !== tab) return false;
      if (programme !== "all" && app.programme !== programme) return false;
      if (nationality !== "all" && app.nationality !== nationality) return false;
      if (
        trimmedQuery &&
        !app.applicant.toLowerCase().includes(trimmedQuery) &&
        !app.id.toLowerCase().includes(trimmedQuery)
      ) {
        return false;
      }
      return true;
    });
  }, [applications, tab, programme, nationality, query]);

  const activeFilterCount = (programme !== "all" ? 1 : 0) + (nationality !== "all" ? 1 : 0);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Applications</h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search applications..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-hit-navy focus:outline-none focus:ring-2 focus:ring-hit-navy/15"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative" ref={filtersRef}>
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
            >
              <SlidersIcon className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-hit-navy text-[11px] font-semibold text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {filtersOpen && (
              <div className="absolute left-0 z-10 mt-2 w-64 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-slate-100 bg-white p-4 shadow-lg">
                <div>
                  <label className="text-xs font-medium text-slate-500">Programme</label>
                  <select
                    value={programme}
                    onChange={(event) => setProgramme(event.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-900 focus:border-hit-navy focus:outline-none"
                  >
                    <option value="all">All programmes</option>
                    {programmes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-3">
                  <label className="text-xs font-medium text-slate-500">Nationality</label>
                  <select
                    value={nationality}
                    onChange={(event) => setNationality(event.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-900 focus:border-hit-navy focus:outline-none"
                  >
                    <option value="all">All nationalities</option>
                    {nationalities.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setProgramme("all");
                      setNationality("all");
                    }}
                    className="mt-3 text-xs font-medium text-hit-navy hover:text-hit-navy-light"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => exportToCsv(filtered)}
            className="flex items-center gap-2 rounded-xl bg-hit-navy px-3.5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-hit-navy-light"
          >
            <DownloadIcon className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 border-b border-slate-100 pb-3">
        {TABS.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setTab(t.value)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              tab === t.value ? "bg-hit-navy text-white" : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-medium uppercase tracking-wide text-slate-400">
                <th className="px-5 py-3">Application</th>
                <th className="px-5 py-3">Applicant</th>
                <th className="px-5 py-3">Programme</th>
                <th className="px-5 py-3">Submitted</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((app) => (
                <tr key={app.id} className="transition-colors hover:bg-slate-50/70">
                  <td className="whitespace-nowrap px-5 py-3.5 font-medium tabular-nums text-slate-900">
                    {app.id}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-slate-700">{app.applicant}</td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-slate-600">{app.programme}</td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-slate-500">{app.submitted}</td>
                  <td className="whitespace-nowrap px-5 py-3.5">
                    <StatusBadge status={app.status} />
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-sm text-slate-400">
                    No applications match your search and filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          <span>
            Showing {filtered.length} of {applications.length} applications
          </span>
          <span className="flex items-center gap-1">
            Sorted by most recent
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
