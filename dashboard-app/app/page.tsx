"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Sidebar />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="lg:pl-64">
        <Topbar onMenuClick={() => setDrawerOpen(true)} />
        <main className="min-h-screen p-6 lg:p-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-[28px] font-bold text-text">
                  Hello, Amina {"\u{1F44B}"}
                </h1>
                <p className="mt-1 text-muted">
                  Here&apos;s what&apos;s happening with your store today.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
