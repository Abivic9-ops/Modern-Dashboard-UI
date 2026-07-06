import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface NavGroup {
  items: NavItem[];
}

export const primaryNav: NavGroup = {
  items: [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    { label: "Orders", href: "/orders", icon: ShoppingBag },
    { label: "Customers", href: "/customers", icon: Users },
    { label: "Products", href: "/products", icon: Package },
    { label: "Analytics", href: "/analytics", icon: BarChart3 },
    { label: "Messages", href: "/messages", icon: MessageSquare },
  ],
};

export const secondaryNav: NavGroup = {
  items: [
    { label: "Settings", href: "/settings", icon: Settings },
    { label: "Help", href: "/help", icon: HelpCircle },
  ],
};
