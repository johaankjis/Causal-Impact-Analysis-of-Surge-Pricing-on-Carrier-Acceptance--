"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Week 1", actual: 68.2, counterfactual: 68.2, upper: 68.2, lower: 68.2 },
  { date: "Week 2", actual: 67.8, counterfactual: 67.8, upper: 67.8, lower: 67.8 },
  { date: "Week 3", actual: 68.5, counterfactual: 68.5, upper: 68.5, lower: 68.5 },
  { date: "Week 4", actual: 68.9, counterfactual: 68.9, upper: 68.9, lower: 68.9 },
  { date: "Week 5", actual: 72.3, counterfactual: 66.1, upper: 67.2, lower: 65.0 },
  { date: "Week 6", actual: 73.1, counterfactual: 66.3, upper: 67.5, lower: 65.1 },
  { date: "Week 7", actual: 72.8, counterfactual: 66.2, upper: 67.4, lower: 65.0 },
  { date: "Week 8", actual: 73.5, counterfactual: 66.5, upper: 67.8, lower: 65.2 },
  { date: "Week 9", actual: 74.2, counterfactual: 66.7, upper: 68.0, lower: 65.4 },
  { date: "Week 10", actual: 73.9, counterfactual: 66.4, upper: 67.7, lower: 65.1 },
]

export function CounterfactualChart() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Counterfactual Analysis</h3>
        <p className="text-sm text-muted-foreground mt-1">Actual vs Predicted (Without Surge) with 95% CI</p>
      </div>
      <ChartContainer
        config={{
          actual: {
            label: "Actual (With Surge)",
            color: "hsl(var(--chart-1))",
          },
          counterfactual: {
            label: "Counterfactual (No Surge)",
            color: "hsl(var(--chart-2))",
          },
          confidence: {
            label: "95% Confidence Interval",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              domain={[60, 80]}
              label={{
                value: "Acceptance Rate (%)",
                angle: -90,
                position: "insideLeft",
                style: { fill: "hsl(var(--muted-foreground))" },
              }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <ReferenceLine
              x="Week 4"
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="3 3"
              label={{ value: "Surge Introduced", position: "top" }}
            />
            <Area type="monotone" dataKey="upper" stroke="none" fill="url(#confidenceGradient)" fillOpacity={1} />
            <Area type="monotone" dataKey="lower" stroke="none" fill="hsl(var(--background))" fillOpacity={1} />
            <Area
              type="monotone"
              dataKey="counterfactual"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              fill="none"
              strokeDasharray="5 5"
            />
            <Area type="monotone" dataKey="actual" stroke="hsl(var(--chart-1))" strokeWidth={2} fill="none" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  )
}
