"use client";

import { useState, useMemo } from "react";
import { orders, type Order } from "@/lib/data";
import { StatusPill } from "./StatusPill";
import { ChevronUp, ChevronDown, ChevronsUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type SortKey = "id" | "customer" | "date" | "amount" | "status";

const ROWS_PER_PAGE = 4;

function getSortValue(order: Order, key: SortKey): string | number {
  switch (key) {
    case "amount":
      return parseFloat(order.amount.replace(/[^0-9.]/g, ""));
    case "id":
      return parseInt(order.id.replace("#ORD-", ""));
    default:
      return order[key as keyof Order].toLowerCase();
  }
}

export function OrdersTable() {
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(0);

  const sorted = useMemo(() => {
    const copy = [...orders];
    copy.sort((a, b) => {
      const av = getSortValue(a, sortKey);
      const bv = getSortValue(b, sortKey);
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [sortKey, sortDir]);

  const totalPages = Math.ceil(sorted.length / ROWS_PER_PAGE);
  const paged = sorted.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function SortIcon({ column }: { column: SortKey }) {
    if (sortKey !== column) return <ChevronsUpDown className="h-3.5 w-3.5 text-faint" />;
    return sortDir === "asc" ? (
      <ChevronUp className="h-3.5 w-3.5 text-brand" />
    ) : (
      <ChevronDown className="h-3.5 w-3.5 text-brand" />
    );
  }

  return (
    <div className="rounded-2xl bg-surface p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-lg font-semibold text-text">Recent Orders</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th
                scope="col"
                className="cursor-pointer select-none pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted"
                onClick={() => toggleSort("id")}
              >
                <div className="flex items-center gap-1">
                  Order
                  <SortIcon column="id" />
                </div>
              </th>
              <th
                scope="col"
                className="cursor-pointer select-none pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted"
                onClick={() => toggleSort("customer")}
              >
                <div className="flex items-center gap-1">
                  Customer
                  <SortIcon column="customer" />
                </div>
              </th>
              <th
                scope="col"
                className="cursor-pointer select-none pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted"
                onClick={() => toggleSort("date")}
              >
                <div className="flex items-center gap-1">
                  Date
                  <SortIcon column="date" />
                </div>
              </th>
              <th
                scope="col"
                className="cursor-pointer select-none pb-3 pr-4 text-xs font-medium uppercase tracking-wider text-muted"
                onClick={() => toggleSort("amount")}
              >
                <div className="flex items-center gap-1">
                  Amount
                  <SortIcon column="amount" />
                </div>
              </th>
              <th
                scope="col"
                className="cursor-pointer select-none pb-3 text-xs font-medium uppercase tracking-wider text-muted"
                onClick={() => toggleSort("status")}
              >
                <div className="flex items-center gap-1">
                  Status
                  <SortIcon column="status" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {paged.map((order) => (
              <tr key={order.id} className="border-b border-border last:border-0">
                <td className="py-3.5 pr-4 font-medium text-text">{order.id}</td>
                <td className="py-3.5 pr-4 text-muted">{order.customer}</td>
                <td className="py-3.5 pr-4 text-muted">{order.date}</td>
                <td className="py-3.5 pr-4 font-medium text-text">{order.amount}</td>
                <td className="py-3.5">
                  <StatusPill status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <p className="text-xs text-muted">
            Page {page + 1} of {totalPages}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous page"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-text disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                  i === page
                    ? "bg-brand text-white"
                    : "text-muted hover:bg-surface-2 hover:text-text"
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-text disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
