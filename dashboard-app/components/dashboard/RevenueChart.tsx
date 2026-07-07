"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";
import { revenueData } from "@/lib/data";
import { useTheme } from "next/navigation";

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-2 shadow-md">
      <p className="text-xs text-muted">{label}</p>
      <p className="text-sm font-semibold text-text">{`KES ${payload[0].value}k`}</p>
    </div>
  );
}

export function RevenueChart() {
  return (
    <div className="rounded-2xl bg-surface p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-heading text-lg font-semibold text-text">Revenue</h2>
          <p className="text-sm text-muted">Monthly revenue in KES &apos;000</p>
        </div>
      </div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} barSize={20} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--text-muted)", fontSize: 12 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--text-muted)", fontSize: 12 }}
              dx={-4}
              tickFormatter={(v) => `${v}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--brand-soft)" }} />
            <Bar dataKey="revenue" fill="var(--brand)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
