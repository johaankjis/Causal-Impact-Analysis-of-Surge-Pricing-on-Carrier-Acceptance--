"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUp } from "lucide-react"

const laneData = [
  {
    lane: "LA → NYC",
    distance: "2,789 mi",
    volume: "12.4K",
    baseAcceptance: "64.2%",
    surgeAcceptance: "69.8%",
    effect: "+5.6pp",
    significance: "High",
    trend: "up",
  },
  {
    lane: "Chicago → Dallas",
    distance: "967 mi",
    volume: "8.7K",
    baseAcceptance: "71.3%",
    surgeAcceptance: "74.1%",
    effect: "+2.8pp",
    significance: "Medium",
    trend: "up",
  },
  {
    lane: "Atlanta → Miami",
    distance: "662 mi",
    volume: "6.2K",
    baseAcceptance: "68.9%",
    surgeAcceptance: "72.5%",
    effect: "+3.6pp",
    significance: "High",
    trend: "up",
  },
  {
    lane: "Seattle → Portland",
    distance: "173 mi",
    volume: "4.1K",
    baseAcceptance: "75.2%",
    surgeAcceptance: "76.8%",
    effect: "+1.6pp",
    significance: "Low",
    trend: "up",
  },
  {
    lane: "Houston → Phoenix",
    distance: "1,158 mi",
    volume: "5.8K",
    baseAcceptance: "66.7%",
    surgeAcceptance: "71.2%",
    effect: "+4.5pp",
    significance: "High",
    trend: "up",
  },
]

export function LaneEffectsTable() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Lane-Level Causal Effects</h3>
        <p className="text-sm text-muted-foreground mt-1">Top performing lanes by treatment effect magnitude</p>
      </div>
      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-foreground font-semibold">Lane</TableHead>
              <TableHead className="text-foreground font-semibold">Distance</TableHead>
              <TableHead className="text-foreground font-semibold">Volume</TableHead>
              <TableHead className="text-foreground font-semibold">Base Rate</TableHead>
              <TableHead className="text-foreground font-semibold">Surge Rate</TableHead>
              <TableHead className="text-foreground font-semibold">Effect</TableHead>
              <TableHead className="text-foreground font-semibold">Significance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {laneData.map((lane, index) => (
              <TableRow key={index} className="hover:bg-muted/30">
                <TableCell className="font-medium text-foreground">{lane.lane}</TableCell>
                <TableCell className="text-muted-foreground">{lane.distance}</TableCell>
                <TableCell className="text-muted-foreground">{lane.volume}</TableCell>
                <TableCell className="text-muted-foreground">{lane.baseAcceptance}</TableCell>
                <TableCell className="text-foreground font-medium">{lane.surgeAcceptance}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-4 w-4 text-chart-3" />
                    <span className="font-semibold text-chart-3">{lane.effect}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      lane.significance === "High"
                        ? "default"
                        : lane.significance === "Medium"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {lane.significance}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
