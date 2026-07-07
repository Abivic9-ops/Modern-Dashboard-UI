"use client";

import { cn } from "@/lib/cn";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { StatCard as StatCardData } from "@/lib/data";
import { ShoppingCart } from "lucide-react";

const icons = [
  ShoppingCart,
  TrendingUp,
  TrendingUp,
  TrendingDown,
];

interface StatCardProps {
  card: StatCardData;
  index: number;
}

export function StatCard({ card, index }: StatCardProps) {
  const Icon = icons[index % icons.length];
  const isPositive = card.deltaType === "positive";

  return (
    <div
      className={cn(
        "relative flex flex-col gap-3 rounded-2xl p-5 shadow-sm transition-shadow duration-200 hover:shadow-md",
        card.featured
          ? "bg-brand text-white"
          : "bg-surface text-text"
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-sm font-medium",
            card.featured ? "text-white/80" : "text-muted"
          )}
        >
          {card.label}
        </span>
        <div
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-xl",
            card.featured
              ? "bg-white/15"
              : "bg-brand-soft"
          )}
        >
          <Icon
            className={cn(
              "h-4.5 w-4.5",
              card.featured ? "text-white" : "text-brand"
            )}
          />
        </div>
      </div>

      <span className="font-heading text-[28px] font-bold leading-tight tracking-tight">
        {card.value}
      </span>

      <div className="flex items-center gap-1.5">
        {isPositive ? (
          <TrendingUp
            className={cn(
              "h-4 w-4",
              card.featured ? "text-white" : "text-mint"
            )}
          />
        ) : (
          <TrendingDown
            className={cn(
              "h-4 w-4",
              card.featured ? "text-white" : "text-coral"
            )}
          />
        )}
        <span
          className={cn(
            "text-sm font-medium",
            card.featured
              ? "text-white"
              : isPositive
              ? "text-mint"
              : "text-coral"
          )}
        >
          {card.delta}
        </span>
        <span
          className={cn(
            "text-xs",
            card.featured ? "text-white/70" : "text-faint"
          )}
        >
          vs last month
        </span>
      </div>
    </div>
  );
}
