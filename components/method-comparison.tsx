import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function MethodComparison() {
  const methods = [
    {
      name: "Difference-in-Differences (DiD)",
      ate: "+3.5pp",
      ci: "[2.8, 4.2]",
      pValue: "< 0.001",
      robustness: "High",
      status: "Primary",
    },
    {
      name: "Propensity Score Matching (PSM)",
      ate: "+3.3pp",
      ci: "[2.6, 4.0]",
      pValue: "< 0.001",
      robustness: "High",
      status: "Validation",
    },
  ]

  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Methodology Comparison</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Cross-validation of causal estimates using multiple methods
        </p>
      </div>
      <div className="space-y-4">
        {methods.map((method, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border"
          >
            <div className="flex items-center gap-4">
              <CheckCircle2 className="h-5 w-5 text-chart-3" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-foreground">{method.name}</p>
                  <Badge variant={method.status === "Primary" ? "default" : "secondary"} className="text-xs">
                    {method.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">Robustness: {method.robustness}</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">ATE</p>
                <p className="text-lg font-semibold text-foreground">{method.ate}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">95% CI</p>
                <p className="text-sm font-mono text-foreground">{method.ci}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">p-value</p>
                <p className="text-sm font-mono text-foreground">{method.pValue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
