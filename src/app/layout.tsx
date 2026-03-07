import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "@/components/Toaster";
import { AppNav } from "@/components/AppNav";
import { SectionErrorBoundary } from "@/components/SectionErrorBoundary";
import { NotificationProvider } from "@/features/notifications/notificationStore";
import { ToastContainer } from "@/features/notifications/ToastContainer";
import { CommandPaletteProvider } from "@/features/command-palette/CommandPaletteProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OpenClaw Studio V2",
  description: "Focused operator studio for the OpenClaw gateway.",
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "OpenClaw Studio",
  },
};

const display = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t?t==='dark':m;document.documentElement.classList.toggle('dark',d);}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <NotificationProvider>
              <div className="flex h-screen w-full overflow-hidden">
                <AppNav />
                <main className="min-w-0 flex-1 overflow-auto bg-background">
                  <SectionErrorBoundary sectionName="main">
                    {children}
                  </SectionErrorBoundary>
                </main>
              </div>
              <CommandPaletteProvider />
              <ToastContainer />
            </NotificationProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
