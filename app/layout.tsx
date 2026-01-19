import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
  // PWA manifest
  manifest: "/manifest.json",
  // iOS Safari PWA support
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Next.js Supabase",
  },
  // App icons
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  // Format detection to prevent auto-linking
  formatDetection: {
    telephone: false,
  },
};

// Viewport configuration for iOS Safari
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // iOS Safari: Cover entire screen including notch area
  viewportFit: "cover",
  // Theme color for browser UI
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Note: Dynamic locale detection in root layout is not possible in Next.js 16
  // due to static generation requirements. The locale is properly set in
  // [locale]/layout.tsx for all locale-prefixed routes.
  // See Issue #5 in AUDIT_REPORT.md for details.
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* iOS Safari: Prevent zoom on double-tap */}
        <meta name="touch-action" content="manipulation" />
        {/* iOS Safari: App capable */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${geistSans.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
