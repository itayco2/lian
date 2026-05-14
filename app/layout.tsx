import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const display = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lian Gardens — גננות מקצועית במודיעין | עיצוב, הקמה ותחזוקה",
  description:
    "Lian Gardens — גננות מקצועית במודיעין והאזור. תחזוקת גינות, עיצוב והקמה, גיזום עצים ושתילה. ייעוץ אישי ועבודה מדויקת.",
  metadataBase: new URL("https://liangardens.vercel.app"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Lian Gardens — גננות מקצועית",
    description: "גינות שמתוכננות לחיות איתך",
    locale: "he_IL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body className="grain bg-cream text-espresso antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
