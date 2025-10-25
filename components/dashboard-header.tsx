"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Causal Impact Analysis</h1>
            <p className="text-sm text-muted-foreground mt-1">Surge Pricing Effect on Carrier Acceptance Rates</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Select defaultValue="all-regions">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-regions">All Regions</SelectItem>
              <SelectItem value="northeast">Northeast</SelectItem>
              <SelectItem value="southeast">Southeast</SelectItem>
              <SelectItem value="midwest">Midwest</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-carriers">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Carrier Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-carriers">All Carriers</SelectItem>
              <SelectItem value="small-fleet">Small Fleet (&lt;10)</SelectItem>
              <SelectItem value="medium-fleet">Medium Fleet (10-50)</SelectItem>
              <SelectItem value="large-fleet">Large Fleet (50+)</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-equipment">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Equipment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-equipment">All Equipment</SelectItem>
              <SelectItem value="dry-van">Dry Van</SelectItem>
              <SelectItem value="reefer">Reefer</SelectItem>
              <SelectItem value="flatbed">Flatbed</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="last-30-days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-7-days">Last 7 Days</SelectItem>
              <SelectItem value="last-30-days">Last 30 Days</SelectItem>
              <SelectItem value="last-90-days">Last 90 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}
