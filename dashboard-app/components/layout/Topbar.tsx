"use client";

import { useState } from "react";
import { Menu, Search, Bell } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/cn";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const [notifCount] = useState(3);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-bg/80 px-6 backdrop-blur lg:px-8">
      {/* ── Left section ── */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-surface-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <span className="font-heading text-lg font-bold text-text">Dashboard</span>
      </div>

      {/* ── Right section ── */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search input — hidden on smallest screens */}
        <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
          <input
            type="search"
            placeholder="Search orders, customers\u2026"
            className="h-10 w-44 rounded-xl border border-border bg-surface pl-9 pr-3 text-sm text-text placeholder:text-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand lg:w-64"
          />
        </div>

        {/* Notification bell */}
        <button
          type="button"
          aria-label={notifCount > 0 ? `${notifCount} unread notifications` : "No notifications"}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-surface-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Bell className="h-5 w-5" />
          {notifCount > 0 && (
            <span
              aria-hidden="true"
              className="absolute right-2 top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-coral px-1 text-[10px] font-bold leading-none text-white"
            >
              {notifCount}
            </span>
          )}
        </button>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Avatar dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              type="button"
              aria-label="User menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              AN
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              className="z-50 min-w-[180px] rounded-xl border border-border bg-surface p-1.5 shadow-md"
            >
              <DropdownMenu.Item className="flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm text-text outline-none data-[highlighted]:bg-surface-2">
                Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm text-text outline-none data-[highlighted]:bg-surface-2">
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 h-px bg-border" />
              <DropdownMenu.Item className="flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm text-coral outline-none data-[highlighted]:bg-surface-2">
                Sign out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
