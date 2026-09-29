import { ApplicationsExplorer } from "@/components/dashboard/ApplicationsExplorer";
import { APPLICATIONS } from "@/lib/dashboard/mock-data";

export default function ApplicationsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <ApplicationsExplorer applications={APPLICATIONS} />
    </div>
  );
}
