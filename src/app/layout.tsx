import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "@/components/Toaster";
import { AppNav } from "@/components/AppNav";
import { MobileShell } from "@/components/MobileShell";
import { GlobalAlertBanner } from "@/components/GlobalAlertBanner";
import { DegradedModeBanner } from "@/components/DegradedModeBanner";
import { readTheme } from "@/lib/theme/server";
import { isMobileLayout } from "@/lib/device";
import { ThemeColors } from "@/lib/theme";
import "./globals.css";

// NB: force-dynamic removed — set per-route where needed
export const metadata: Metadata = {
  title: "OpenClaw Studio",
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

function colorsToCSSVars(colors: ThemeColors): string {
  const lines: string[] = [];
  const camel2kebab = (s: string) =>
    s.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
  for (const [key, value] of Object.entries(colors)) {
    lines.push(`  --${camel2kebab(key)}: ${value};`);
  }
  return lines.join("\n");
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, messages, theme, mobile] = await Promise.all([
    getLocale(),
    getMessages(),
    readTheme(),
    isMobileLayout(),
  ]);

  const themeCSS = `
:root {
${colorsToCSSVars(theme.colors.light)}
  --radius: ${theme.spacing.radius};
  --radius-small: ${theme.spacing.radiusSmall};
  --nav-width: ${theme.spacing.navWidth};
}
.dark {
${colorsToCSSVars(theme.colors.dark)}
}`.trim();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
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
        <NextIntlClientProvider messages={messages} locale={locale}>
          {mobile ? (
            <MobileShell>
              <DegradedModeBanner />
              {children}
            </MobileShell>
          ) : (
            <div className="flex h-screen w-full overflow-hidden">
              <AppNav />
              <div className="min-w-0 flex-1 overflow-hidden flex flex-col">
                <GlobalAlertBanner />
                <DegradedModeBanner />
                <div className="flex-1 overflow-hidden">{children}</div>
              </div>
            </div>
          )}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
