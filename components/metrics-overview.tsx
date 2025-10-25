import { Card } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

export function MetricsOverview() {
  const metrics = [
    {
      label: "Average Treatment Effect (ATE)",
      value: "+3.5pp",
      change: "+12.3%",
      trend: "up",
      description: "Causal impact on acceptance rate",
    },
    {
      label: "Confidence Interval",
      value: "[2.8, 4.2]",
      change: "95% CI",
      trend: "neutral",
      description: "Statistical significance confirmed",
    },
    {
      label: "Treatment Group Size",
      value: "847K",
      change: "42.4% of total",
      trend: "neutral",
      description: "Shipments with surge pricing",
    },
    {
      label: "Control Group Size",
      value: "1.15M",
      change: "57.6% of total",
      trend: "neutral",
      description: "Shipments without surge pricing",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-4 bg-card border-border">
          <div className="flex items-start justify-between mb-2">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            {metric.trend === "up" && <ArrowUp className="h-4 w-4 text-chart-3" />}
            {metric.trend === "down" && <ArrowDown className="h-4 w-4 text-destructive" />}
          </div>
          <p className="text-2xl font-semibold text-foreground mb-1">{metric.value}</p>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-medium ${
                metric.trend === "up"
                  ? "text-chart-3"
                  : metric.trend === "down"
                    ? "text-destructive"
                    : "text-muted-foreground"
              }`}
            >
              {metric.change}
            </span>
            <span className="text-xs text-muted-foreground">{metric.description}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}
