"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { CategoryDonut } from "@/components/dashboard/CategoryDonut";
import { OrdersTable } from "@/components/dashboard/OrdersTable";
import { statCards } from "@/lib/data";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Sidebar />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="lg:pl-64">
        <Topbar onMenuClick={() => setDrawerOpen(true)} />
        <main className="min-h-screen p-6 lg:p-8">
          <div className="mx-auto max-w-[1400px] space-y-6 lg:space-y-8">
            {/* Greeting */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="font-heading text-[28px] font-bold text-text">
                  Hello, Amina<span aria-hidden="true">👋</span>
                </h1>
                <p className="mt-1 text-muted">
                  Here&apos;s what&apos;s happening with your store today.
                </p>
              </div>
              <span className="mt-2 text-sm text-muted sm:mt-0">
                01 Jul &mdash; 07 Jul 2026
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {statCards.map((card, i) => (
                <StatCard key={card.label} card={card} index={i} />
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <div>
                <CategoryDonut />
              </div>
            </div>

            {/* Orders table */}
            <OrdersTable />
          </div>
        </main>
      </div>
    </>
  );
}
