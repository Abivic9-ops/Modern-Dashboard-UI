"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { cn } from "@/lib/cn";
import { primaryNav, secondaryNav } from "@/lib/nav";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-border bg-surface transition-all duration-200 lg:flex",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex h-16 items-center border-b border-border",
          collapsed ? "justify-center px-0" : "gap-2.5 px-6"
        )}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
          M
        </div>
        <span
          className={cn(
            "font-heading text-lg font-bold text-text transition-opacity duration-200",
            collapsed ? "w-0 overflow-hidden opacity-0" : "opacity-100"
          )}
        >
          Mwendwa
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className={cn("space-y-1", collapsed ? "flex flex-col items-center px-0" : "px-3")}>
          {primaryNav.items.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                  collapsed
                    ? "justify-center px-0 py-2.5"
                    : "gap-3 px-3 py-2.5",
                  isActive
                    ? "bg-brand-soft text-brand"
                    : "text-muted hover:bg-surface-2 hover:text-text"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-brand" />
                )}
                <item.icon className="h-5 w-5 shrink-0" />
                <span
                  className={cn(
                    "transition-opacity duration-200",
                    collapsed ? "w-0 overflow-hidden opacity-0" : "opacity-100"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className={cn("my-4 h-px bg-border", collapsed ? "mx-3" : "mx-6")} />

        <div className={cn("space-y-1", collapsed ? "flex flex-col items-center px-0" : "px-3")}>
          {secondaryNav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                collapsed
                  ? "justify-center px-0 py-2.5"
                  : "gap-3 px-3 py-2.5",
                "text-muted hover:bg-surface-2 hover:text-text"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span
                className={cn(
                  "transition-opacity duration-200",
                  collapsed ? "w-0 overflow-hidden opacity-0" : "opacity-100"
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Collapse toggle */}
      <div className={cn("border-t border-border py-3", collapsed ? "flex justify-center px-0" : "px-4")}>
        <button
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={cn(
            "flex items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
            collapsed ? "justify-center p-2" : "gap-2 px-3 py-2 w-full"
          )}
        >
          {collapsed ? (
            <PanelLeftOpen className="h-5 w-5 shrink-0" />
          ) : (
            <>
              <PanelLeftClose className="h-5 w-5 shrink-0" />
              <span className="text-sm font-medium">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
