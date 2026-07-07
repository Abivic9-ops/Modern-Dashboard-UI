# Mwendwa Dashboard — SaaS Analytics

A production-quality SaaS analytics dashboard built with **Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Recharts, Lucide, and Radix UI**.

> Built by [Victor Mwendwa](https://github.com/anomalyco) — Product Owner, Full-Stack Developer & System Architect.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (class-based dark mode) |
| Charts | Recharts |
| Icons | Lucide React |
| Dropdowns | Radix UI Dropdown Menu |
| Font | Poppins (via `next/font`) |

## Features

- **Fixed sidebar** with icon+label navigation and active-state accent bar
- **Responsive top bar** with search, notifications badge, dark mode toggle, and avatar dropdown
- **4 stat cards** with one featured violet card, delta chips, and icon wells
- **Revenue bar chart** (monthly, KES '000) and **sales-by-category donut** (4 segments)
- **Recent orders table** — sortable, paginated, with status pills (Paid/Pending/Failed)
- **Mobile hamburger drawer** with focus trap, scroll lock, and ESC-to-close
- **Dark mode** via Tailwind class strategy, persisted to localStorage, no flash
- **WCAG AA** contrast, visible focus-visible rings, semantic HTML landmarks
- **Responsive** at 1440 / 1024 / 768 / 375 px

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
app/
  layout.tsx          Fonts, theme init script, metadata
  page.tsx            Dashboard page composition
  globals.css         Token variables, base styles, dark mode
components/
  layout/             Sidebar, Topbar, MobileDrawer, ThemeToggle
  dashboard/          StatCard, RevenueChart, CategoryDonut, OrdersTable, StatusPill
lib/
  cn.ts               clsx + tailwind-merge helper
  data.ts             Sample data (stats, revenue, categories, orders)
  nav.ts              Sidebar navigation config
```

## Screenshots

> _Light & dark mode screenshots to be added after deployment._

## Live Demo

> _Vercel deployment link to be added._

## License

MIT
