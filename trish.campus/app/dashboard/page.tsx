import { ActivityBreakdown } from "@/components/dashboard/ActivityBreakdown";
import { ApplicationsChart } from "@/components/dashboard/ApplicationsChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { CreditCardIcon, FileTextIcon, FolderIcon, ClockIcon } from "@/components/dashboard/icons";
import {
  APPLICATION_ACTIVITY,
  APPLICATIONS_OVER_TIME,
  OVERVIEW_STATS,
} from "@/lib/dashboard/mock-data";

export default function DashboardOverviewPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Good morning, Admissions Team.
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here&apos;s what&apos;s happening with applications today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Applications"
          value={OVERVIEW_STATS.applications.value.toLocaleString()}
          deltaPct={OVERVIEW_STATS.applications.deltaPct}
          icon={<FileTextIcon />}
          tint="navy"
        />
        <StatCard
          label="Under review"
          value={OVERVIEW_STATS.underReview.value.toLocaleString()}
          icon={<ClockIcon />}
          tint="amber"
        />
        <StatCard
          label="Documents"
          value={OVERVIEW_STATS.documentsPending.value.toLocaleString()}
          suffix="pending"
          icon={<FolderIcon />}
          tint="blue"
        />
        <StatCard
          label="Payments"
          value={OVERVIEW_STATS.payments.value.toLocaleString()}
          deltaPct={OVERVIEW_STATS.payments.deltaPct}
          icon={<CreditCardIcon />}
          tint="emerald"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ActivityBreakdown items={APPLICATION_ACTIVITY} />
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 lg:col-span-3">
          <h3 className="text-base font-semibold text-slate-900">Applications over time</h3>
          <p className="mt-1 text-sm text-slate-500">New applications received per month</p>
          <div className="mt-6">
            <ApplicationsChart data={APPLICATIONS_OVER_TIME} />
          </div>
        </div>
      </div>
    </div>
  );
}
