# Mwendwa Dashboard  SaaS Analytics

A production quality SaaS analytics dashboard built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Recharts, Lucide, and Radix UI.

Built by Abivic9-Ops. Find the project repository at [github.com/Abivic9-ops/Modern-Dashboard-UI](https://github.com/Abivic9-ops/Modern-Dashboard-UI).

---

## Stack

| Layer       | Technology                   |
|-------------|------------------------------|
| Framework   | Next.js 16 (App Router)      |
| Language    | TypeScript                   |
| Styling     | Tailwind CSS v4 (class based dark mode) |
| Charts      | Recharts                     |
| Icons       | Lucide React                 |
| Dropdowns   | Radix UI Dropdown Menu       |
| Font        | Poppins (via next/font)      |

---

## Features

**Fixed Sidebar.** Persistent navigation on the left side with icon and label pairs. The active page shows a violet accent bar and a tinted background. All links are keyboard focusable. A collapse button at the bottom toggles the sidebar between a full width state with visible labels and a compact icon only state, giving more room for the main content area.

**Responsive Top Bar.** Sticky header containing a hamburger menu (mobile only), page title, search input, notification bell with badge count, dark mode toggle, and a user avatar with dropdown.

**Avatar Dropdown.** Clicking the avatar opens a menu showing the user profile card (name and email) plus three actions: Profile, Settings, and Sign out. Each action has a corresponding icon. The menu closes on Escape key press or outside click.

**Stat Cards.** Four metric cards arranged in a responsive grid. The first card uses the violet brand color as its background to create visual hierarchy. Each card includes a label, a large formatted value, an icon in a tinted well, and a delta chip indicating the change from the prior month.

**Revenue Chart.** A bar chart displaying monthly revenue in KES thousands across all twelve months. Uses violet bars with rounded tops and a custom tooltip on hover. Colors adapt automatically to the active theme.

**Category Donut.** A donut chart showing sales distribution across four categories: Electronics, Fashion, Home and Living, and Beauty. Displays the total value of KES 1.24M in the center with a color coded legend below.

**Orders Table.** A semantic HTML table listing recent orders. Each row shows the order ID, customer name, date, amount, and a color coded status pill. Columns are sortable by clicking the header. Pagination divides results across pages.

**Dark Mode.** A sun and moon toggle switches between light and dark themes. The preference is saved to localStorage and restored on the next visit. An inline script applies the saved theme before the first paint, so the correct theme appears immediately without visual disruption.

**Mobile Drawer.** On smaller screens, the sidebar becomes a slide in drawer with a dimmed overlay. Focus is trapped inside while open, body scroll is locked, and the drawer closes on Escape key press, overlay click, or navigation selection.

**Accessibility.** The interface targets WCAG AA contrast ratios across both themes. Every interactive element shows a visible focus ring. The sidebar, dropdown menu, and drawer support full keyboard navigation.

**Responsive Layout.** The dashboard adapts across four viewport tiers using Tailwind breakpoints. The sidebar collapses into a slide in drawer on smaller screens. Stat cards reflow from one column on phones to four columns on large desktops. Charts stack vertically on tablets and sit side by side on larger screens. The data table scrolls horizontally on narrow screens to keep all columns accessible. Spacing, font sizes, and component widths scale proportionally across every tier.

---

## Getting Started

```bash
npm install
npm run dev
```

Open https://modern-ui-dashboard-design.vercel.app/ in your browser.

---

## Build for Production

```bash
npm run build
```

The output is a static export or server rendered application depending on your deployment target.

---

## Project Structure

```
app/
  layout.tsx          Global layout, fonts, metadata, theme initialization
  page.tsx            Dashboard page assembly
  globals.css         CSS custom properties and base styles for both themes

components/
  layout/
    Sidebar.tsx       Fixed desktop navigation sidebar
    Topbar.tsx        Sticky header bar with search, notifications, avatar
    MobileDrawer.tsx  Off canvas slide in drawer for mobile
    ThemeToggle.tsx   Sun and moon dark mode toggle
    Avatar.tsx        Image based user avatar component

  dashboard/
    StatCard.tsx      Individual metric card with value and delta
    RevenueChart.tsx  Monthly revenue bar chart
    CategoryDonut.tsx Sales distribution donut chart
    OrdersTable.tsx   Sortable and paginated orders table
    StatusPill.tsx    Color coded status badge

lib/
    cn.ts             Utility combining clsx and tailwind merge
    data.ts           Sample data for stats, revenue, categories, and orders
    nav.ts            Sidebar navigation item configuration

public/
    avatar.png        Custom illustrated profile avatar
    favicon.svg       Brand favicon
```

---

## Key Components in Detail

### Sidebar

The sidebar renders two navigation groups from the nav configuration. The primary group contains Dashboard, Orders, Customers, Products, Analytics, and Messages. The secondary group contains Settings and Help. Each item uses a Lucide icon and a text label. The active item has a 3 pixel wide violet accent bar on its left edge, a violet tinted background, and violet text color. All items display a focus visible ring when navigated with a keyboard.

The sidebar is collapsible on desktop screens. A button at the bottom of the sidebar toggles between expanded and collapsed states. When expanded, the sidebar shows the brand name, navigation labels, and a collapse button with text. When collapsed, the sidebar narrows to 64 pixels showing only the brand icon and navigation icons. Text labels and the collapse button label hide with a smooth opacity transition. The main content area shifts to fill the reclaimed space. The collapsed state persists within the current session.

### Topbar

The top bar spans the full width of the main content area. On the left side it shows a hamburger button (visible only below the large breakpoint) and the page title. On the right side it groups four controls. A search input with a magnifier icon appears on screens wider than the small breakpoint. A notification bell button shows a coral badge with a count when there are unread items. A theme toggle switches between light and dark mode. An avatar button opens a dropdown menu with a profile card, three action items, and their icons.

### Avatar Dropdown

The dropdown uses Radix UI for accessible behavior. It opens on click of the avatar button. The content includes a profile header showing a smaller version of the avatar alongside the user name and email. Below a divider, three menu items each display an icon and a label: Profile (User icon), Settings (Settings icon), and Sign out (LogOut icon in coral color). The dropdown closes when the user presses Escape, clicks outside, or selects an item. Arrow keys navigate between items.

### Mobile Drawer

Below the large breakpoint, the sidebar is replaced by a drawer component. A hamburger button in the top bar opens it. The drawer slides in from the left edge. Behind it, a semi transparent overlay covers the rest of the page. Clicking the overlay or pressing Escape closes the drawer. While open, focus is trapped inside the drawer and body scrolling is disabled. The drawer also closes automatically when the user clicks a navigation link.

### Stat Cards

Four cards are displayed in a grid that adjusts from one column on small screens to four columns on extra large screens. Each card has a fixed height with consistent padding. The card label appears in muted text at the top left. An icon sits in a tinted circular well at the top right. The metric value uses a larger and bolder font size below the label. A delta chip at the bottom shows the percentage change. An upward trending arrow and green text indicate a positive change. A downward trending arrow and coral text indicate a negative change. The first card is featured with a violet background and white text for visual emphasis.

### Revenue Chart

The chart renders twelve months of data as vertical bars. Each bar has a 6 pixel rounded top corner. The fill color uses the violet brand variable, which changes automatically in dark mode. Horizontal grid lines appear behind the bars with a dashed style. The X axis shows abbreviated month labels. The Y axis shows values with a "k" suffix for thousands. When the user hovers over a bar, a tooltip appears with the exact month name and value.

### Category Donut

The donut chart displays four segments with a 4 pixel gap between them. Each segment uses a distinct color mapped to the design tokens: Electronics in violet, Fashion in mint, Home and Living in amber, and Beauty in coral. The center of the donut shows the combined total of KES 1.24M. Below the chart, a legend lists each category name with a matching color dot and its percentage value.

### Orders Table

The table presents six orders paginated across two pages with four rows per page. The header row is uppercase with muted text. Each column header is clickable for sorting. An arrow icon in the header indicates the current sort direction. The body rows have hairline dividers between them. Each order row shows the order ID in medium weight text, the customer name and date in muted text, the amount in medium weight text, and a status pill. The pagination controls at the bottom show the current page number and buttons for previous and next.

### Status Pill

Three status values map to three color schemes. Paid uses a mint green background with mint text. Pending uses an amber background with amber text. Failed uses a coral background with coral text. Each pill has full rounded corners, compact horizontal padding, and a small font size.

---

## Responsive Breakpoints

The dashboard uses Tailwind's default breakpoint system. Each tier adjusts the layout to match the available screen width.

### Extra Small (below 640 pixels)

The single column layout for mobile phones. The sidebar is hidden and replaced by a hamburger button in the top bar. Clicking the button opens a slide in drawer with the full navigation. Stat cards stack in a single column. The greeting section stacks vertically with the date below the title. Charts stack one above the other. The orders table becomes horizontally scrollable inside its container so no column is hidden. The search input is hidden to save space. Icons in the top bar use tighter spacing.

### Small to Medium (640 to 1023 pixels)

The search input appears in the top bar. Stat cards expand to a two column grid. The greeting text and date align side by side in a row. Top bar icons use wider spacing.

### Large (1024 to 1279 pixels)

The sidebar becomes visible on the left side of the screen. The main content area shifts right with a 256 pixel offset to accommodate the sidebar. A collapse button at the bottom of the sidebar lets you switch to a compact icon only state, reducing the offset to 64 pixels and giving more space to the main content. Side padding in the main area increases. The search input widens for easier use. The charts section switches to a three column grid with the revenue chart spanning two columns and the category donut in the remaining column.

### Extra Large (1280 pixels and above)

Stat cards expand to a four column grid for maximum data density. All content is capped at a maximum width of 1400 pixels to prevent excessive stretching on ultra wide monitors.

### Layout Behavior Summary

| Viewport Width | Sidebar | Stat Cards | Charts | Search |
|---|---|---|---|---|---|
| Below 640px | Hidden, hamburger replaces it | 1 column | Stacked vertically | Hidden |
| 640 to 1023px | Hidden, hamburger replaces it | 2 columns | Stacked vertically | Visible |
| 1024 to 1279px | Full or collapsed, collapsible toggle at bottom | 2 columns | 2 thirds and 1 third grid | Wider input |
| 1280px and above | Full or collapsed, collapsible toggle at bottom | 4 columns | 2 thirds and 1 third grid | Wider input |

---

## Dark Mode Implementation

The application uses Tailwind's class based dark mode strategy. The dark class on the HTML element triggers all theme variables to switch to their dark values. The theme toggle button reads the current state and writes the new preference to localStorage. A small inline script in the document head reads localStorage before the page renders, preventing any flash of the wrong theme. All components including charts use CSS custom properties for colors, so they adapt correctly without additional logic.

---

## Design Tokens

The palette is defined as CSS custom properties on the root element. Light theme values use a soft lavender grey background with white surfaces and the violet brand color. Dark theme values use a deep neutral background with slightly lighter elevated surfaces and a lightened violet for contrast. Supporting colors include mint for positive indicators, coral for negative indicators or badges, amber for pending states, and sky for informational elements. Border radius values are 12 pixels for inputs and 16 pixels for cards. Shadow tokens follow a three tier system for resting cards, elevated elements, and modals.

---

## Accessibility Notes

Color contrast exceeds WCAG AA minimums in both themes. The violet brand color on the featured card has sufficient contrast against white text, and the lightened dark mode variant maintains readability on dark surfaces. Focus indicators use a 2 pixel violet ring with a 2 pixel offset from the element. The reduced motion media query disables transitions and animations for users who prefer less motion.

---

## Browser Support

The application targets modern browsers that support CSS custom properties, CSS Grid, and the latest JavaScript features. This includes recent versions of Chrome, Firefox, Safari, and Edge.

---

## Deploy on Vercel

The easiest way to deploy this application is through Vercel, the platform built by the creators of Next.js.

```bash
npm install -g vercel
vercel
```

Follow the prompts to link your GitHub repository and deploy. The application is automatically optimized for production with server side rendering and static generation.

---

## License

MIT
