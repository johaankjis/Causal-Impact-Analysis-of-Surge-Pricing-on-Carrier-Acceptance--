"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Week 1", treatment: 68.2, control: 65.5 },
  { date: "Week 2", treatment: 67.8, control: 65.3 },
  { date: "Week 3", treatment: 68.5, control: 65.7 },
  { date: "Week 4", treatment: 68.9, control: 65.4 },
  { date: "Week 5", treatment: 72.3, control: 65.8 },
  { date: "Week 6", treatment: 73.1, control: 66.1 },
  { date: "Week 7", treatment: 72.8, control: 65.9 },
  { date: "Week 8", treatment: 73.5, control: 66.3 },
  { date: "Week 9", treatment: 74.2, control: 66.5 },
  { date: "Week 10", treatment: 73.9, control: 66.2 },
]

export function AcceptanceChart() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Carrier Acceptance Rate Over Time</h3>
        <p className="text-sm text-muted-foreground mt-1">Treatment vs Control Group Comparison</p>
      </div>
      <ChartContainer
        config={{
          treatment: {
            label: "Treatment (Surge)",
            color: "hsl(var(--chart-1))",
          },
          control: {
            label: "Control (No Surge)",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
            <Line
              type="monotone"
              dataKey="treatment"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-1))" }}
            />
            <Line
              type="monotone"
              dataKey="control"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  )
}
