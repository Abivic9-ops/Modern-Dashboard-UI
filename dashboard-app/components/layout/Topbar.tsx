"use client";

import { Menu } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-bg/80 px-6 backdrop-blur lg:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-surface-2 hover:text-text lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <span className="font-heading text-lg font-bold text-text">Dashboard</span>
      </div>
    </header>
  );
}
