import { cn } from "@/lib/cn";

const statusStyles: Record<string, string> = {
  Paid: "bg-mint/10 text-mint",
  Pending: "bg-amber/10 text-amber",
  Failed: "bg-coral/10 text-coral",
};

interface StatusPillProps {
  status: "Paid" | "Pending" | "Failed";
}

export function StatusPill({ status }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status]
      )}
    >
      {status}
    </span>
  );
}
