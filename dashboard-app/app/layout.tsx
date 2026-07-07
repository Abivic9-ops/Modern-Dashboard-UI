import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mwendwa Dashboard — SaaS Analytics",
    template: "%s — Mwendwa Dashboard",
  },
  description:
    "Production SaaS analytics dashboard built with Next.js, TypeScript, Tailwind CSS, and Recharts. Track sales, orders, revenue, and more.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mwendwa Dashboard",
    description: "SaaS analytics dashboard by Victor Mwendwa",
    type: "website",
    siteName: "Mwendwa Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mwendwa Dashboard",
    description: "SaaS analytics dashboard by Victor Mwendwa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#F5F6FB" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0F1017" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (t !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
