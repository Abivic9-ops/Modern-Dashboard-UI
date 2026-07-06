export interface StatCard {
  label: string;
  value: string;
  delta: string;
  deltaType: "positive" | "negative";
  featured?: boolean;
}

export const statCards: StatCard[] = [
  {
    label: "Total Sales",
    value: "KES 99,560",
    delta: "+12.4%",
    deltaType: "positive",
    featured: true,
  },
  {
    label: "Sales Orders",
    value: "1,240",
    delta: "+8.2%",
    deltaType: "positive",
  },
  {
    label: "New Customers",
    value: "356",
    delta: "+5.1%",
    deltaType: "positive",
  },
  {
    label: "Net Income",
    value: "KES 60,450",
    delta: "−2.3%",
    deltaType: "negative",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 42 },
  { month: "Feb", revenue: 55 },
  { month: "Mar", revenue: 48 },
  { month: "Apr", revenue: 61 },
  { month: "May", revenue: 58 },
  { month: "Jun", revenue: 72 },
  { month: "Jul", revenue: 69 },
  { month: "Aug", revenue: 80 },
  { month: "Sep", revenue: 76 },
  { month: "Oct", revenue: 88 },
  { month: "Nov", revenue: 84 },
  { month: "Dec", revenue: 96 },
];

export const categoryData = [
  { name: "Electronics", value: 38, color: "var(--brand)" },
  { name: "Fashion", value: 24, color: "var(--mint)" },
  { name: "Home & Living", value: 20, color: "var(--amber)" },
  { name: "Beauty", value: 18, color: "var(--coral)" },
];

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
}

export const orders: Order[] = [
  { id: "#ORD-1042", customer: "Amina Njoroge", date: "04 Jul 2026", amount: "KES 4,500", status: "Paid" },
  { id: "#ORD-1041", customer: "Brian Otieno", date: "04 Jul 2026", amount: "KES 2,300", status: "Pending" },
  { id: "#ORD-1040", customer: "Chebet Korir", date: "03 Jul 2026", amount: "KES 7,800", status: "Paid" },
  { id: "#ORD-1039", customer: "David Mwangi", date: "03 Jul 2026", amount: "KES 1,200", status: "Failed" },
  { id: "#ORD-1038", customer: "Faith Wanjiru", date: "02 Jul 2026", amount: "KES 9,050", status: "Paid" },
  { id: "#ORD-1037", customer: "Grace Achieng", date: "02 Jul 2026", amount: "KES 3,400", status: "Pending" },
];
