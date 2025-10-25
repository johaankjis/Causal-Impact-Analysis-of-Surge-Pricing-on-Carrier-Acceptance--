import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsOverview } from "@/components/metrics-overview"
import { AcceptanceChart } from "@/components/acceptance-chart"
import { CounterfactualChart } from "@/components/counterfactual-chart"
import { LaneEffectsTable } from "@/components/lane-effects-table"
import { MethodComparison } from "@/components/method-comparison"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MetricsOverview />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AcceptanceChart />
          <CounterfactualChart />
        </div>
        <MethodComparison />
        <LaneEffectsTable />
      </main>
    </div>
  )
}
