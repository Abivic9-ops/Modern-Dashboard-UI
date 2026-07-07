"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { categoryData } from "@/lib/data";

export function CategoryDonut() {
  const total = categoryData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="rounded-2xl bg-surface p-5 shadow-sm">
      <h2 className="mb-6 font-heading text-lg font-semibold text-text">
        Sales by Category
      </h2>
      <div className="relative flex items-center justify-center">
        <div className="h-[200px] w-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <span className="font-heading text-lg font-bold text-text">KES 1.24M</span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {categoryData.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted">{item.name}</span>
            </div>
            <span className="font-medium text-text">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
